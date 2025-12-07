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
        </style>
      </head>
      <body>
        <!-- 1) Read ?ref=... from the parent page URL (landing page) -->
        <script>
          (function() {
            try {
              var ref = "";
              if (window.parent && window.parent.location && window.parent.location.search) {
                var params = new URLSearchParams(window.parent.location.search);
                ref = params.get("ref") || "";
              }
              window.__landingRef = ref;
            } catch (e) {
              console.error("Error reading ref from parent URL", e);
            }
          })();
        </script>

        <!-- 2) Load the RavMesser form -->
        <script type="text/javascript" src="//form.ravpage.co.il/6f1e8f6eab96d5f5bb85f4653ebfb4566910A42A" charset="UTF-8"></script>

        <!-- 3) After the form is injected, put ref into the form field named "ref" -->
        <script>
          (function() {
            var ref = window.__landingRef;
            if (!ref) return;

            var attempts = 0;
            var maxAttempts = 50; // ~10 seconds at 200ms

            var timer = setInterval(function() {
              attempts++;

              // IMPORTANT: this assumes you created a field in RavMesser with name="ref"
              var input = document.querySelector("input[name='ref']");

              if (input) {
                input.value = ref;
                clearInterval(timer);
              }

              if (attempts >= maxAttempts) {
                clearInterval(timer);
              }
            }, 200);
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
