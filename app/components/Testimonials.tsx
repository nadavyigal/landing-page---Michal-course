"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "לא האמנתי כמה הקורס הזה יכול לשנות את הזוגיות שלנו. הוויכוחים שלנו ירדו ב-80%, ואנחנו מצליחים להבין אחד את השנייה בצורה שלא הייתה לנו קודם!",
    name: "רוני ואייל",
    designation: "משתתפי הקורס",
    image: "/placeholder-user.jpg"
  },
  {
    quote: "הקורס של מיכל הוא מתנה לכל זוג. הכלים שהיא נותנת הם פרקטיים, נגישים, והכי חשוב – עובדים!",
    name: "יעל וגדי",
    designation: "משתתפי הקורס",
    image: "/placeholder-user.jpg"
  },
  {
    quote: "אחרי כמעט גירושין, מיכל עזרה לנו למצוא מחדש את החיבור בינינו. הקורס שלה נתן לנו תקווה ואת הכלים להתמודד עם משברים בצורה בריאה.",
    name: "טל ואבי",
    designation: "משתתפי הקורס",
    image: "/placeholder-user.jpg"
  }
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-[#f3e8d8]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[#d4a373]/20 text-[#d4a373] rounded-full text-sm font-medium mb-3">
            עדויות
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            מה אומרים המשתתפים?
          </h2>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-opacity duration-500 absolute inset-0 p-8 md:p-12 flex flex-col ${
                  index === active ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="flex-grow">
                  <div className="relative mb-8">
                    <span className="text-[#d4a373] text-6xl absolute top-0 right-0 opacity-20">"</span>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10 pr-8 text-right">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-6">
                  <div className="mr-4 text-right">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.designation}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#d4a373]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#d4a373] hover:text-white transition duration-300"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === active ? "bg-[#d4a373]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#d4a373] hover:text-white transition duration-300"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

