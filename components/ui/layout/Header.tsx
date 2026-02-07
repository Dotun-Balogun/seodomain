import React from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '../sheet'


const Header = () => {
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Service', href: '/service' }
  ]
  return (
    <header className='w-full bg-amber-300'>
      <nav className='flex w-full max-w-7xl mx-auto px-4  items-center justify-between'>
        <div className='text-xl font-bold'>MyApp</div>
        <ul className='hidden lg:flex space-x-4'>
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className='text-gray-700 hover:text-gray-900'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>



        <Sheet >
        <SheetTrigger className='text-lg font-bold'>Menu</SheetTrigger>
        <SheetContent className=' px-4 py-6'>
        <ul className=' flex flex-col space-y-2'>
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className='text-gray-700 hover:text-gray-900'>
                {link.name}
              </Link>
            </li>
          ))} 
        </ul>
      </SheetContent>
      </Sheet>
      </nav>   

      
    </header>
  )
}

export default Header