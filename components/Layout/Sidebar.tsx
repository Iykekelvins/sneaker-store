import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const links = [
    {
      name:"HOME",
      url:"/",
    },
    {
      name:"OUR PRODUCTS",
      url:"/",
    },
    {
      name:"CONTACT US",
      url:"/",
    },
  ]
  return (
    <aside className='sidebar'>
      <ul>
        {
          links.map(link =>
          <Link key={link.name} href={link.url}>
            <li>{link.name}</li>
          </Link>  
          )
        }
      </ul>
      <button>
      <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 2.66699L4.5 8.00033V26.667C4.5 27.3742 4.78095 28.0525 5.28105 28.5526C5.78115 29.0527 6.45942 29.3337 7.16667 29.3337H25.8333C26.5406 29.3337 27.2189 29.0527 27.719 28.5526C28.219 28.0525 28.5 27.3742 28.5 26.667V8.00033L24.5 2.66699H8.5Z" stroke="black" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.5 8H28.5" stroke="black" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21.8332 13.333C21.8332 14.7475 21.2713 16.1041 20.2711 17.1042C19.2709 18.1044 17.9143 18.6663 16.4998 18.6663C15.0853 18.6663 13.7288 18.1044 12.7286 17.1042C11.7284 16.1041 11.1665 14.7475 11.1665 13.333" stroke="black" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </button>
    </aside>
  )
}

export default Sidebar