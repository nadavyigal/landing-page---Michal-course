import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">אל תחכו שהזוגיות תסתדר מעצמה – התחילו לשנות אותה היום!</h2>
        <div className="flex justify-center space-x-6 space-x-reverse mb-8">
          <Link href="#" className="underline hover:text-[#d4a373]">להורדת המדריך החינמי</Link>
          <Link href="#pricing" className="underline hover:text-[#d4a373]">להרשמה לקורס</Link>
        </div>
        <p>&copy; 2023 מיכל סלונים. כל הזכויות שמורות.</p>
      </div>
    </footer>
  )
}

