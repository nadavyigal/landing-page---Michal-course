export function CourseDescription() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#d4a373]/20 text-[#d4a373] rounded-full text-sm font-medium mb-3">
            הקורס שלנו
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            תקשורת זוגית מחברת: יצירת מערכת יחסים אוהבת וחזקה
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            קורס מקיף שיעניק לכם את הכלים לשינוי הזוגיות שלכם לטובה
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-[#f9f5f0] rounded-2xl shadow-lg p-8 transform md:rotate-1 relative">
            <div className="absolute -top-3 -right-3 bg-[#d4a373] text-white text-xl h-12 w-12 rounded-full flex items-center justify-center shadow-md">❓</div>
            <h3 className="text-2xl font-bold mb-6 border-b border-[#d4a373]/30 pb-4">האם גם אתם מרגישים ככה?</h3>
            <ul className="space-y-5 text-right">
              <li className="flex items-start justify-end bg-white p-4 rounded-lg shadow-sm">
                <span className="text-[#d4a373] ml-4 text-xl shrink-0">❓</span>
                <p className="leading-relaxed">הרגשתם פעם חוסר הבנה או הקשבה במערכת היחסים שלכם?</p>
              </li>
              <li className="flex items-start justify-end bg-white p-4 rounded-lg shadow-sm">
                <span className="text-[#d4a373] ml-4 text-xl shrink-0">❓</span>
                <p className="leading-relaxed">האם אותם ויכוחים חוזרים על עצמם שוב ושוב?</p>
              </li>
              <li className="flex items-start justify-end bg-white p-4 rounded-lg shadow-sm">
                <span className="text-[#d4a373] ml-4 text-xl shrink-0">❓</span>
                <p className="leading-relaxed">האם אתם משתוקקים לקשר עמוק יותר, אבל מרגישים אבודים?</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#f3e8d8] rounded-2xl shadow-lg p-8 transform md:-rotate-1 relative z-10">
            <div className="absolute -top-3 -right-3 bg-[#d4a373] text-white text-xl h-12 w-12 rounded-full flex items-center justify-center shadow-md">✨</div>
            <h3 className="text-2xl font-bold mb-6 border-b border-[#d4a373]/30 pb-4">בקורס המקוון תגלו</h3>
            <ul className="space-y-5 text-right">
              <li className="flex items-start justify-end bg-white p-4 rounded-lg shadow-sm">
                <span className="text-[#d4a373] ml-4 text-xl shrink-0">✨</span>
                <p className="leading-relaxed">טכניקות מוכחות לתקשורת יעילה המבוססות על שיטת סאטיר</p>
              </li>
              <li className="flex items-start justify-end bg-white p-4 rounded-lg shadow-sm">
                <span className="text-[#d4a373] ml-4 text-xl shrink-0">✨</span>
                <p className="leading-relaxed">כיצד לזהות ולרפא פצעי ילדות שמשפיעים על הזוגיות שלכם</p>
              </li>
              <li className="flex items-start justify-end bg-white p-4 rounded-lg shadow-sm">
                <span className="text-[#d4a373] ml-4 text-xl shrink-0">✨</span>
                <p className="leading-relaxed">כלים מעשיים להתמודדות עם קונפליקטים בצורה בריאה</p>
              </li>
              <li className="flex items-start justify-end bg-white p-4 rounded-lg shadow-sm">
                <span className="text-[#d4a373] ml-4 text-xl shrink-0">✨</span>
                <p className="leading-relaxed">דרכים לטפח אינטימיות ולבנות קשר חזק יותר</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <svg className="w-24 h-24 text-[#d4a373]/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-10 relative z-10">
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              "קורס מדהים! הכלים שלמדנו שינו לחלוטין את הדרך בה אנחנו מתקשרים. הריבים התחלפו בשיחות עמוקות ומקרבות. מומלץ בחום לכל זוג!"
            </p>
            <div>
              <p className="font-bold text-[#d4a373]">רונית ואבי</p>
              <p className="text-gray-500 text-sm">משתתפים בקורס</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href="#pricing" 
            className="inline-flex items-center justify-center bg-[#d4a373] hover:bg-[#c4946a] text-white font-bold py-4 px-8 rounded-lg transition duration-300"
          >
            <span>רוצים להצטרף לקורס?</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

