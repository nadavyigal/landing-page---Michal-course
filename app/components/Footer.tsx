import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="text-right">
            <h3 className="text-xl font-bold mb-6 border-r-4 border-[#d4a373] pr-4">מיכל סלונים</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              מומחית לתקשורת זוגית ומנחת סדנאות זוגיות.
              מלווה זוגות בדרך לתקשורת טובה יותר ומערכת יחסים מספקת.
            </p>
            <div className="flex space-x-4 space-x-reverse justify-end">
              <Link href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#d4a373] transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.4 5.6c-1-.4-2-.7-3.1-.8-.1.3-.2.6-.3.8-.3.7-.6 1.3-.8 1.9-2.3-.2-4.6-.2-6.9 0-.2-.6-.5-1.2-.8-1.9-.1-.2-.2-.6-.3-.8-1.1.1-2.1.4-3.1.8C1.3 9.1.7 12.5 1 15.8c1.3.9 2.5 1.6 3.8 2 .3-.4.6-.9.8-1.4.-.3-.2-.6-.4-.8-.5.1-.1.2-.1.3-.2 2.3 1.1 4.8 1.1 7.2 0 .1.1.2.1.3.2-.3.2-.5.4-.8.5.2.5.5 1 .8 1.4 1.3-.4 2.5-1.1 3.8-2 .4-3.8-.7-7.1-2.4-10.2zM8.7 13.6c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5c.7 0 1.3.7 1.3 1.5s-.6 1.5-1.3 1.5zm4.6 0c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5c.7 0 1.3.7 1.3 1.5 0 .8-.6 1.5-1.3 1.5z" />
                </svg>
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#d4a373] transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.7C0 22.8 1.2 24 2.7 24h18.7c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.1 20.4H3.6V9h3.6v11.4zm-1.8-13c-1.2 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1 1.2 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1zm15.1 13h-3.6v-5.6c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.1z" />
                </svg>
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#d4a373] transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.5 5.8c-.8.4-1.7.6-2.6.7.9-.6 1.6-1.5 2-2.5-.9.5-1.8.9-2.9 1.1-.8-.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 .4 0 .7.1 1-3.8-.2-7.1-2-9.3-4.7-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.6v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.2 3.1 4.1 3.1-1.5 1.2-3.4 1.9-5.5 1.9-.4 0-.7 0-1.1-.1 2 1.3 4.3 2 6.8 2 8.1 0 12.6-6.7 12.6-12.6v-.6c.9-.6 1.6-1.4 2.2-2.3" />
                </svg>
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#d4a373] transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1.1.4 2.2 0 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3 0-1.6.1-4.9.1-3.2 0-3.6 0-4.9-.1-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2 0-1.3-.1-1.6-.1-4.8s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4h4.9m0-2.2c-3.3 0-3.7 0-5 .1-1.3.1-2.2.3-3 .6-.8.3-1.5.7-2.1 1.4-.7.7-1 1.4-1.4 2.1-.3.8-.5 1.7-.5 3-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.3.3 2.2.6 3 .3.8.8 1.5 1.4 2.1.7.7 1.3 1.1 2.1 1.4.8.3 1.7.5 3 .6 1.3 0 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.1-1.4.7-.7 1-1.3 1.4-2.1.3-.8.5-1.7.6-3 0-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.1-.7-.7-1.3-1.1-2.1-1.4-.8-.3-1.7-.5-3-.6-1.3-.1-1.7-.1-5-.1" />
                  <path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2m0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4" />
                  <circle cx="18.4" cy="5.6" r="1.4" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-xl font-bold mb-6 border-r-4 border-[#d4a373] pr-4">קישורים מהירים</h3>
            <div className="grid grid-cols-1 gap-4">
              <Link href="#" className="block hover:text-[#d4a373] transition duration-300 flex items-center justify-end">
                <span>להורדת המדריך החינמי</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
              <Link href="#pricing" className="block hover:text-[#d4a373] transition duration-300 flex items-center justify-end">
                <span>להרשמה לקורס</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link href="#about" className="block hover:text-[#d4a373] transition duration-300 flex items-center justify-end">
                <span>אודות</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <Link href="#testimonials" className="block hover:text-[#d4a373] transition duration-300 flex items-center justify-end">
                <span>המלצות</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; 2023 מיכל סלונים. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}

