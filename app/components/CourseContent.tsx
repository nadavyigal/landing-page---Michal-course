export function CourseContent() {
  return (
    <section id="course-content" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          ✨ מה תלמדו בקורס? ✨
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
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
          ].map((item, index) => (
            <div key={index} className="instagram-card p-6">
              <div className="text-4xl mb-4 text-center">{item.emoji}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.content}</p>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mt-16 mb-6 text-center">למי הקורס מתאים?</h3>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-[#d4a373] ml-4">•</span>
            לזוגות בתחילת הדרך שרוצים לבנות בסיס חזק ובריא.
          </li>
          <li className="flex items-start">
            <span className="text-[#d4a373] ml-4">•</span>
            לזוגות ותיקים שמרגישים שהשיחות ביניהם לא מתקדמות לשום מקום.
          </li>
          <li className="flex items-start">
            <span className="text-[#d4a373] ml-4">•</span>
            לאנשים שרוצים לקחת אחריות על החלק שלהם בזוגיות ולשפר את הקשר.
          </li>
          <li className="flex items-start">
            <span className="text-[#d4a373] ml-4">•</span>
            לאלה שמחפשים כלים פרקטיים ונגישים לניהול שיחה זוגית בצורה אחרת.
          </li>
        </ul>
        
        <h3 className="text-2xl font-bold mt-16 mb-6 text-center">מה הקורס כולל?</h3>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-[#d4a373] ml-4">•</span>
            15 שיעורים קצרים וממוקדים שמחולקים לחמישה מודולים.
          </li>
          <li className="flex items-start">
            <span className="text-[#d4a373] ml-4">•</span>
            תרגולים פרקטיים לעבודה יומיומית.
          </li>
          <li className="flex items-start">
            <span className="text-[#d4a373] ml-4">•</span>
            גישה לתכנים מכל מקום ובכל זמן – בפורמט נוח לצפייה במחשב או בטלפון.
          </li>
          <li className="flex items-start">
            <span className="text-[#d4a373] ml-4">•</span>
            חוברות עבודה להורדה – שיעזרו לכם להטמיע את הכלים הנלמדים.
          </li>
        </ul>
      </div>
    </section>
  )
}

