export function AboutMichal() {
  return (
    <section id="about" className="py-24 px-6 bg-[#f3e8d8] relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#d4a373]/20 text-[#d4a373] rounded-full text-sm font-medium mb-3">
            אודות
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            מיכל סלונים - מאמנת זוגית מוסמכת
          </h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-56 h-56 md:w-64 md:h-64 shrink-0 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d4a373] to-[#e9c46a] opacity-70 blur-md transform -rotate-6"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d4a373] to-[#e9c46a] opacity-50 blur-sm transform rotate-3"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/michal-profile.jpg"
                  alt="מיכל סלונים"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center md:text-right space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#333333]">היי, אני מיכל!</h3>
                <div className="w-16 h-1 bg-[#d4a373] rounded my-4 mx-auto md:mr-0 md:ml-auto"></div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                כמאמנת זוגית מוסמכת עם שנים של ניסיון, אני מקדישה את עצמי לעזור לזוגות למצוא את הדרך חזרה זה לזו. אני מאמינה שכל זוג יכול ליצור מערכת יחסים מאושרת ובריאה עם הכלים הנכונים והכוונה הנכונה.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                הגישה שלי משלבת את שיטת סאטיר המוכחת עם ניסיון מעשי בעבודה עם מאות זוגות, מה שמאפשר לי להציע פתרונות מעשיים ואפקטיביים לאתגרי התקשורת הנפוצים ביותר.
              </p>
              
              <div className="flex justify-center md:justify-end pt-4">
                <div className="flex space-x-4 space-x-reverse">
                  <span className="px-4 py-2 bg-[#d4a373]/10 text-[#d4a373] rounded-full text-sm font-medium">
                    מאמנת מוסמכת
                  </span>
                  <span className="px-4 py-2 bg-[#d4a373]/10 text-[#d4a373] rounded-full text-sm font-medium">
                    שיטת סאטיר
                  </span>
                  <span className="px-4 py-2 bg-[#d4a373]/10 text-[#d4a373] rounded-full text-sm font-medium">
                    ניסיון רב
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
    </section>
  )
}

