"use client";

import { useState } from 'react';

export function CourseContent() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: 0, label: 'תוכן הקורס' },
    { id: 1, label: 'למי זה מתאים' },
    { id: 2, label: 'מה כלול' }
  ];
  
  const courseFeatures = [
    {
      emoji: "🎯",
      title: "זיהוי דפוסים",
      content: "לזהות את דפוסי הילדות שמנהלים את הזוגיות שלכם ולרפא אותם בעצמכם"
    },
    {
      emoji: "🤝",
      title: "כלים מעשיים",
      content: "כלים פרקטיים לתקשורת זוגית מקרבת – הקשבה, שיקוף, ושיחה נכונה"
    },
    {
      emoji: "💝",
      title: "שיפור השיחות",
      content: "לשפר את איכות השיחות שלכם – להימנע מהסלמה וליצור חיבור אמיתי"
    },
    {
      emoji: "🗣️",
      title: "הבנת תקשורת",
      content: "להבין את סגנונות התקשורת השונים ולהתמודד איתם בצורה מכבדת"
    }
  ];

  const forWhomItems = [
    'לזוגות בתחילת הדרך שרוצים לבנות בסיס חזק ובריא.',
    'לזוגות ותיקים שמרגישים שהשיחות ביניהם לא מתקדמות לשום מקום.',
    'לאנשים שרוצים לקחת אחריות על החלק שלהם בזוגיות ולשפר את הקשר.',
    'לאלה שמחפשים כלים פרקטיים ונגישים לניהול שיחה זוגית בצורה אחרת.'
  ];

  const courseIncludes = [
    '15 שיעורים קצרים וממוקדים שמחולקים לחמישה מודולים.',
    'תרגולים פרקטיים לעבודה יומיומית.',
    'גישה לתכנים מכל מקום ובכל זמן – בפורמט נוח לצפייה במחשב או בטלפון.',
    'חוברות עבודה להורדה – שיעזרו לכם להטמיע את הכלים הנלמדים.'
  ];
  
  return (
    <section id="course-content" className="py-24 px-6 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-[#f3e8d8]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#d4a373]/20 text-[#d4a373] rounded-full text-sm font-medium mb-3">
            תוכן הקורס
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            ✨ מה תלמדו בקורס? ✨
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            קורס מקיף ומעשי לשיפור התקשורת הזוגית שלכם
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white shadow-md text-[#d4a373]' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="transition-all duration-300">
          {/* Course Content Tab */}
          <div className={`${activeTab === 0 ? 'block' : 'hidden'}`}>
            <div className="grid gap-8 md:grid-cols-2">
              {courseFeatures.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
                >
                  <div className="bg-[#f3e8d8] text-4xl w-16 h-16 flex items-center justify-center rounded-2xl mb-6 mx-auto">
                    {item.emoji}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.content}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="bg-[#f3e8d8]/30 border-l-4 border-[#d4a373] pl-8 pr-6 py-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-4">מודולים בקורס</h3>
                <ol className="space-y-5">
                  <li className="flex">
                    <span className="bg-[#d4a373] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold ml-4 shrink-0">1</span>
                    <div>
                      <h4 className="font-bold">יסודות התקשורת הזוגית</h4>
                      <p className="text-gray-600">הבנת השפעת דפוסי הילדות על התקשורת הזוגית</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-[#d4a373] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold ml-4 shrink-0">2</span>
                    <div>
                      <h4 className="font-bold">כלים להקשבה פעילה</h4>
                      <p className="text-gray-600">טכניקות מעשיות להקשבה אמפתית ושיקוף רגשות</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-[#d4a373] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold ml-4 shrink-0">3</span>
                    <div>
                      <h4 className="font-bold">ניהול קונפליקטים</h4>
                      <p className="text-gray-600">כיצד להתמודד עם חילוקי דעות בצורה בונה ומקרבת</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* For Whom Tab */}
          <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">למי הקורס מתאים?</h3>
              <div className="space-y-6">
                {forWhomItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start justify-end bg-[#f9f5f0] p-4 rounded-lg"
                  >
                    <p className="text-lg text-right">{item}</p>
                    <div className="bg-[#d4a373] rounded-full p-1 text-white ml-4 mt-1 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-[#d4a373]/10 rounded-lg border border-[#d4a373]/20">
                <p className="text-center text-gray-700">
                  <span className="block font-bold mb-2">חשוב לדעת:</span>
                  אין צורך שבן/בת הזוג ישתתפו בקורס יחד איתכם.
                  מספיק שאחד מכם ילמד וייישם את הכלים כדי לראות שיפור בתקשורת ובמערכת היחסים.
                </p>
              </div>
            </div>
          </div>
          
          {/* What's Included Tab */}
          <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-8 text-center border-b border-gray-100 pb-4">מה הקורס כולל?</h3>
                <ul className="space-y-6">
                  {courseIncludes.map((item, index) => (
                    <li key={index} className="flex items-start justify-end">
                      <p className="text-lg pt-1 text-right">{item}</p>
                      <div className="bg-[#d4a373]/20 rounded-full p-2 ml-4 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4a373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-[#f3e8d8] rounded-2xl p-8 relative">
                  <div className="absolute -top-6 -right-6 bg-[#d4a373] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">+</div>
                  <h3 className="text-xl font-bold mb-6">בונוסים מיוחדים</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-end">
                      <span>קבוצת תמיכה בפייסבוק</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4a373] ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-end">
                      <span>כלי עבודה להורדה</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4a373] ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-end">
                      <span>מדריך לניהול משברים בזוגיות</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4a373] ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#pricing" 
            className="inline-flex items-center justify-center bg-[#d4a373] hover:bg-[#c4946a] text-white font-bold py-4 px-8 rounded-lg transition duration-300"
          >
            <span>להרשמה לקורס</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[#f3e8d8]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
    </section>
  )
}

