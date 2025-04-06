export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          💫 מה אומרים המשתתפים? 💫
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="instagram-card p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden instagram-gradient p-[2px] ml-3">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-[1px]">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="רוני ואייל"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold">רוני ואייל</h3>
                <p className="text-gray-500 text-sm">משתתפי הקורס</p>
              </div>
            </div>
            <p className="text-gray-600">
              "לא האמנתי כמה הקורס הזה יכול לשנות את הזוגיות שלנו. הוויכוחים שלנו ירדו ב-80%, ואנחנו מצליחים להבין אחד את השנייה בצורה שלא הייתה לנו קודם! תודה מיכל! 🙏"
            </p>
          </div>
          <div className="instagram-card p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden instagram-gradient p-[2px] ml-3">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-[1px]">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="יעל וגדי"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold">יעל וגדי</h3>
                <p className="text-gray-500 text-sm">משתתפי הקורס</p>
              </div>
            </div>
            <p className="text-gray-600">
              "הקורס של מיכל הוא מתנה לכל זוג. הכלים שהיא נותנת הם פרקטיים, נגישים, והכי חשוב – עובדים! ❤️"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

