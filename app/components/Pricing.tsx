export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[#d4a373]/20 text-[#d4a373] rounded-full text-sm font-medium mb-3">
            תמחור
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            לשנות את מערכת היחסים שלכם עוד היום!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            השקעה קטנה בהווה שתשנה את העתיד של הזוגיות שלכם לנצח
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#f3e8d8] transition-all duration-300 max-w-md mx-auto w-full">
            <div className="p-8">
              <div className="flex flex-col items-center mb-6 relative">
                <div className="bg-[#f9f5f0] rounded-full p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4a373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-1 text-center">קורס תקשורת זוגית</h3>
                <p className="text-gray-600 text-center text-lg">הדרך לזוגיות טובה יותר</p>
              </div>

              <div className="mb-8 text-center">
                <div className="flex items-baseline justify-center">
                  <span className="text-gray-700 text-2xl mr-1">₪</span>
                  <span className="text-6xl font-bold">300</span>
                </div>
                <p className="text-gray-600 mt-2">תשלום חד פעמי</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start justify-end">
                  <span className="text-right">גישה לכל שיעורי הקורס</span>
                  <span className="text-[#d4a373] ml-3 shrink-0">✓</span>
                </div>
                <div className="flex items-start justify-end">
                  <span className="text-right">תרגילים פרקטיים לזוגיות טובה יותר</span>
                  <span className="text-[#d4a373] ml-3 shrink-0">✓</span>
                </div>
                <div className="flex items-start justify-end">
                  <span className="text-right">פורום תמיכה של כל משתתפי הקורס</span>
                  <span className="text-[#d4a373] ml-3 shrink-0">✓</span>
                </div>
              </div>

              <div className="p-4 bg-[#fdf5e6] rounded-lg mb-8 border border-[#f5e8c7]">
                <div className="flex items-center justify-end mb-2">
                  <span className="font-bold">הבטחה שלנו אליכם</span>
                  <span className="text-xl ml-2">🤝</span>
                </div>
                <p className="text-right">אם לא תהיו מרוצים מהקורס תוך 30 יום, תקבלו החזר כספי מלא - ללא שאלות!</p>
              </div>

              <button className="w-full bg-[#d4a373] hover:bg-[#c4946a] text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                <span>להרשמה לקורס</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

