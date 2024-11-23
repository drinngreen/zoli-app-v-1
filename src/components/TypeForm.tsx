import React from 'react';

export default function TypeForm() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div data-tf-live="01JDCTYB7SSW0JBQJ470DZMX17"></div>
      </div>
    </section>
  );
}