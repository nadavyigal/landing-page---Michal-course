import { Card } from '@/components/ui/card';

const RavMesserForm = () => {
  // Using iframe to properly isolate and load the רב מסר form script
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
        <script type='text/javascript' src='//form.ravpage.co.il/6f1e8f6eab96d5f5bb85f4653ebfb4566910A42A' charset='UTF-8'></script>
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
