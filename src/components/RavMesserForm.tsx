import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const RavMesserForm = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//form.ravpage.co.il/6f1e8f6eab96d5f5bb85f4653ebfb4566910A42A';
    script.charset = 'UTF-8';
    script.async = true;

    // Handle script load success
    script.onload = () => {
      setIsLoading(false);
      setHasError(false);
    };

    // Handle script load error
    script.onerror = () => {
      setIsLoading(false);
      setHasError(true);
      console.error('Failed to load רב מסר form script');
    };

    // Append script to container
    if (formContainerRef.current) {
      formContainerRef.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (formContainerRef.current && script.parentNode) {
        formContainerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto p-8 bg-warm-light/50 border-warm-default">
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-warm-dark" />
          <p className="text-warm-darker text-sm">טוען טופס הרשמה...</p>
        </div>
      )}

      {hasError && (
        <div className="text-center py-12 space-y-4">
          <p className="text-warm-darker font-medium">
            אופס! נתקלנו בבעיה בטעינת הטופס
          </p>
          <p className="text-warm-default text-sm">
            אנא נסה לרענן את הדף או צור קשר ישירות במייל
          </p>
        </div>
      )}

      <div
        ref={formContainerRef}
        className="w-full"
        style={{ minHeight: isLoading ? '0' : 'auto' }}
      />
    </Card>
  );
};

export default RavMesserForm;
