import React from 'react'

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
      <nav className='w-full max-w-7xl mx-auto px-4 flex items-center justify-between'>
        <div className='text-xl font-bold'>MyApp</div>
        <ul className='flex space-x-4'>
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className='text-gray-700 hover:text-gray-900'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>    
    </header>
  )
}

export default Header