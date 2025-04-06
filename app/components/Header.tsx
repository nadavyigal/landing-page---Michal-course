import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white py-4 px-6 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">מיכל סלונים</Link>
        <ul className="flex space-x-6 space-x-reverse">
          <li><Link href="#course-content" className="text-gray-600 hover:text-gray-800">תוכן הקורס</Link></li>
          <li><Link href="#testimonials" className="text-gray-600 hover:text-gray-800">המלצות</Link></li>
          <li><Link href="#pricing" className="text-gray-600 hover:text-gray-800">מחיר</Link></li>
          <li><Link href="#faq" className="text-gray-600 hover:text-gray-800">שאלות נפוצות</Link></li>
        </ul>
      </nav>
    </header>
  )
}

