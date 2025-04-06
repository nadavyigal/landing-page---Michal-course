export function Hero() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-32 bg-[#f3e8d8]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex mb-2">
              <span className="px-3 py-1 text-sm rounded-full bg-[#d4a373]/20 text-[#d4a373] font-medium">
                מיכל סלונים - מאמנת זוגית
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-right">
              הזוגיות תקועה? גלו מחדש את האהבה דרך כוחה של התקשורת
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-right">
              למדו כלים מעשיים להבנת בן/בת הזוג, פתרון קונפליקטים ובניית קשר עמוק יותר, עם מיכל סלונים
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/michal-hero.jpg"
                alt="מיכל סלונים - מאמנת זוגית"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-right">
                  צאו מהתקיעות! הורידו את המדריך החינמי שלכם
                </h2>
                <p className="text-xl font-bold text-[#d4a373] mb-4 text-right">
                  "5 טעויות בתקשורת זוגית שחבלות על מערכת היחסים (וכיצד לתקן אותן!)"
                </p>
                <p className="text-lg mb-6 text-gray-600 text-right">
                  די לוויכוחים החוזרים ונשנים! התחילו לבנות את האהבה שמגיעה לכם!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg mb-4 text-right">במדריך תלמדו:</h3>
                  <ul className="space-y-3 text-right">
                    <li className="flex items-start justify-end">
                      <span>כיצד לזהות דפוסי תקשורת שיוצרים ריחוק</span>
                      <span className="ml-2 text-[#d4a373] text-xl">✦</span>
                    </li>
                    <li className="flex items-start justify-end">
                      <span>הסוד להקשבה בונה שמטפחת אינטימיות</span>
                      <span className="ml-2 text-[#d4a373] text-xl">✦</span>
                    </li>
                    <li className="flex items-start justify-end">
                      <span>צעדים פשוטים להבעת צרכים ללא האשמה או ביקורת</span>
                      <span className="ml-2 text-[#d4a373] text-xl">✦</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="השם שלך"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-right focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                      required
                    />
                    <input
                      type="email"
                      placeholder="האימייל שלך"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-right focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#d4a373] hover:bg-[#c4946a] text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                    >
                      <span>אני רוצה את המדריך!</span>
                      <span className="text-xl">🎁</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

