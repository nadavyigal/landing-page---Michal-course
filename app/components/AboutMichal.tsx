export function AboutMichal() {
  return (
    <section className="py-16 px-6 bg-[#f3e8d8]">
      <div className="max-w-4xl mx-auto">
        <div className="instagram-card p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden instagram-gradient p-[3px] shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                <img
                  src="/michal-profile.jpg"
                  alt="מיכל סלונים"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h2 className="text-2xl font-bold mb-4">היי, אני מיכל!</h2>
              <p className="text-lg mb-4">
                כמאמנת זוגית מוסמכת עם שנים של ניסיון, אני מקדישה את עצמי לעזור לזוגות למצוא את הדרך חזרה זה לזו. אני מאמינה שכל זוג יכול ליצור מערכת יחסים מאושרת ובריאה עם הכלים הנכונים והכוונה הנכונה.
              </p>
              <p className="text-lg">
                הגישה שלי משלבת את שיטת סאטיר המוכחת עם ניסיון מעשי בעבודה עם מאות זוגות, מה שמאפשר לי להציע פתרונות מעשיים ואפקטיביים לאתגרי התקשורת הנפוצים ביותר.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

