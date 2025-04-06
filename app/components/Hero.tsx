export function Hero() {
  return (
    <section className="py-12 px-6 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            הזוגיות תקועה? גלו מחדש את האהבה דרך כוחה של התקשורת
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            למדו כלים מעשיים להבנת בן/בת הזוג, פתרון קונפליקטים ובניית קשר עמוק יותר, עם מיכל סלונים
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative w-full max-w-2xl mx-auto mb-16">
          <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-xl">
            <img
              src="/michal-hero.jpg"
              alt="מיכל סלונים - מאמנת זוגית"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="instagram-card p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              צאו מהתקיעות! הורידו את המדריך החינמי שלכם
            </h2>
            <p className="text-xl font-bold text-[#d4a373] mb-6">
              "5 טעויות בתקשורת זוגית שחבלות על מערכת היחסים (וכיצד לתקן אותן!)"
            </p>
            <p className="text-lg mb-6">
              די לוויכוחים החוזרים ונשנים! התחילו לבנות את האהבה שמגיעה לכם!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">במדריך תלמדו:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#d4a373] ml-2">✦</span>
                  כיצד לזהות דפוסי תקשורת שיוצרים ריחוק
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a373] ml-2">✦</span>
                  הסוד להקשבה בונה שמטפחת אינטימיות
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a373] ml-2">✦</span>
                  צעדים פשוטים להבעת צרכים ללא האשמה או ביקורת
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="השם שלך"
                  className="w-full px-4 py-3 rounded-lg border text-right"
                  required
                />
                <input
                  type="email"
                  placeholder="האימייל שלך"
                  className="w-full px-4 py-3 rounded-lg border text-right"
                  required
                />
                <button
                  type="submit"
                  className="w-full instagram-gradient text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300"
                >
                  אני רוצה את המדריך! 🎁
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

