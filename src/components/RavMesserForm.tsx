import { Card } from '@/components/ui/card';

const RavMesserForm = () => {
  // Using iframe to properly isolate and load the רב מסר form script
  // We also pass the landing page ?ref=... parameter into a hidden field named "ref" in the RavMesser form
  const iframeContent = `
    <!DOCTYPE html>
    <html dir="rtl" lang="he">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: system-ui, -apple-system, sans-serif;
            background: transparent;
            overflow-x: hidden;
          }
          * {
            box-sizing: border-box;
          }
          #debug-info {
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 10000;
            max-width: 300px;
            display: none;
          }
          #debug-info.show {
            display: block;
          }
        </style>
      </head>
      <body>
        <!-- Debug info box -->
        <div id="debug-info"></div>

        <!-- 1) Read ?ref=... from the parent page URL (landing page) -->
        <script>
          (function() {
            var debugLog = [];
            var debugDiv = document.getElementById('debug-info');

            function log(msg) {
              debugLog.push(msg);
              console.log('[RavMesser Debug]', msg);
              if (debugDiv) {
                debugDiv.innerHTML = debugLog.join('<br>');
                debugDiv.classList.add('show');
              }
            }

            try {
              var ref = "";
              log('Starting ref capture...');

              // Try to get ref from parent window
              if (window.parent && window.parent.location && window.parent.location.search) {
                var params = new URLSearchParams(window.parent.location.search);
                ref = params.get("ref") || "";
                log('Ref from parent: ' + (ref || 'NOT FOUND'));
              } else {
                log('Cannot access parent window location');
              }

              // Fallback: try current window
              if (!ref && window.location.search) {
                var params = new URLSearchParams(window.location.search);
                ref = params.get("ref") || "";
                log('Ref from current window: ' + (ref || 'NOT FOUND'));
              }

              // Store in multiple places
              window.__landingRef = ref;
              window.CAPTURED_REF = ref;

              if (ref) {
                log('✓ Successfully captured ref: ' + ref);
              } else {
                log('✗ No ref parameter found in URL');
              }
            } catch (e) {
              log('Error: ' + e.message);
              console.error("Error reading ref from parent URL", e);
            }
          })();
        </script>

        <!-- 2) Load the RavMesser form -->
        <script type='text/javascript' src='//form.ravpage.co.il/f6afed54a89cd04e997bad91b0dcab9369368C39' charset='UTF-8'></script>

        <!-- 3) After the form is injected, put ref into the form field -->
        <script>
          (function() {
            var ref = window.__landingRef || window.CAPTURED_REF;

            var debugDiv = document.getElementById('debug-info');
            function log(msg) {
              console.log('[RavMesser Field]', msg);
              if (debugDiv) {
                debugDiv.innerHTML += '<br>' + msg;
              }
            }

            if (!ref) {
              log('No ref to inject, skipping field population');
              return;
            }

            log('Starting field search for ref: ' + ref);

            var attempts = 0;
            var maxAttempts = 100; // ~20 seconds at 200ms
            var foundField = false;

            var timer = setInterval(function() {
              attempts++;

              // Try multiple selectors to find the ref field
              var selectors = [
                "input[name='ref']",
                "input[name='Ref']",
                "input[name='REF']",
                "input[id='ref']",
                "input[id='Ref']",
                "textarea[name='ref']",
                "input[data-name='ref']",
                "input[placeholder*='ref']",
                "input[placeholder*='Ref']",
                "input[placeholder*='מקור']"
              ];

              for (var i = 0; i < selectors.length; i++) {
                var input = document.querySelector(selectors[i]);
                if (input) {
                  input.value = ref;
                  foundField = true;
                  log('✓ Found field with selector: ' + selectors[i]);
                  log('✓ Set ref value: ' + ref);
                  clearInterval(timer);

                  // Hide debug after 5 seconds of success
                  setTimeout(function() {
                    if (debugDiv) debugDiv.style.display = 'none';
                  }, 5000);
                  return;
                }
              }

              // Log progress every 10 attempts
              if (attempts % 10 === 0) {
                log('Attempt ' + attempts + '/' + maxAttempts + ' - field not found yet');

                // Log all input fields found
                var allInputs = document.querySelectorAll('input, textarea');
                if (allInputs.length > 0) {
                  log('Found ' + allInputs.length + ' form fields total');
                  for (var j = 0; j < Math.min(5, allInputs.length); j++) {
                    var inp = allInputs[j];
                    log('Field ' + j + ': name=' + (inp.name || 'none') + ', id=' + (inp.id || 'none') + ', type=' + (inp.type || 'none'));
                  }
                }
              }

              if (attempts >= maxAttempts) {
                clearInterval(timer);
                log('✗ Failed to find ref field after ' + maxAttempts + ' attempts');
                log('Please ensure you have a field named "ref" in your RavMesser form');
              }
            }, 200);
          })();
        </script>

        <!-- 4) Use MutationObserver to watch for form changes -->
        <script>
          (function() {
            var ref = window.__landingRef || window.CAPTURED_REF;
            if (!ref) return;

            // Watch for DOM changes
            var observer = new MutationObserver(function(mutations) {
              var input = document.querySelector("input[name='ref']");
              if (input && !input.value) {
                input.value = ref;
                console.log('[RavMesser MutationObserver] Set ref field via mutation observer');
              }
            });

            observer.observe(document.body, {
              childList: true,
              subtree: true
            });
          })();
        </script>
      </body>
    </html>
  `;

  return (
    <Card className="w-full max-w-2xl mx-auto p-8 bg-warm-light/50 border-warm-default">
      <iframe
        srcDoc={iframeContent}
        title="רב מסר - טופס הרשמה"
        className="w-full border-0 rounded-lg"
        style={{
          minHeight: '600px',
          maxWidth: '100%',
          overflow: 'hidden'
        }}
        frameBorder="0"
        scrolling="auto"
      />
    </Card>
  );
};

export default RavMesserForm;
