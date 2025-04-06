"use client";

import { useState } from 'react';

export function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "איך הקורס מתנהל?",
      answer: "הקורס הוא דיגיטלי לחלוטין. תוכלו לצפות בשיעורים בזמנכם הפנוי, מכל מכשיר שתרצו."
    },
    {
      question: "האם בן/בת הזוג חייבים להצטרף לקורס?",
      answer: "לא! מספיק שאחד מכם יעשה את השינוי כדי לראות תוצאות מדהימות בזוגיות שלכם."
    },
    {
      question: "האם יש תמיכה במהלך הקורס?",
      answer: "בהחלט. יש לכם גישה לקבוצת תמיכה פרטית בפייסבוק שבה תוכלו לשאול שאלות, לשתף חוויות, ולקבל ליווי אישי."
    },
    {
      question: "כמה זמן יש לי גישה לחומרי הקורס?",
      answer: "תקבלו גישה לכל תכני הקורס למשך שנה שלמה, עם אפשרות לחדש את הגישה בהמשך."
    },
    {
      question: "מה אם הקורס לא מתאים לי?",
      answer: "אנחנו מציעים הבטחת החזר כספי מלא תוך 30 יום אם מסיבה כלשהי אתם מרגישים שהקורס לא מתאים לכם."
    }
  ];
  
  const toggleItem = (index: number): void => {
    setOpenItem(openItem === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-24 px-6 bg-[#f9f5f0]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#d4a373]/20 text-[#d4a373] rounded-full text-sm font-medium mb-3">
            שאלות נפוצות
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            כל מה שרציתם לדעת
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            מענה לשאלות הנפוצות ביותר אודות הקורס
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full p-6 text-right focus:outline-none"
              >
                <h3 className="text-xl font-bold text-gray-800">{item.question}</h3>
                <svg
                  className={`w-6 h-6 text-[#d4a373] transform transition-transform duration-300 ${openItem === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="p-6 pt-0 text-gray-600 text-right">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            עדיין יש לך שאלות? אנחנו כאן בשבילך
          </p>
          <a 
            href="mailto:contact@example.com" 
            className="inline-flex items-center text-[#d4a373] hover:text-[#c4946a] font-medium transition-colors"
          >
            צור קשר איתנו
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

