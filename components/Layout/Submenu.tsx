import React from 'react';
import { navLinks } from '../../utilities/navLinks';
import Link from "next/link";

type MenuProps = {
    value: number
    handleMenu: (e: any) => void
}

const Submenu:React.FC<MenuProps> = ({value, handleMenu}) => {
  return (
    <ul className='nav-links sub-menu'>
        <li
        onClick={() => handleMenu(value)}
        >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5837 13H5.41699" stroke="black" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.0003 20.5834L5.41699 13.0001L13.0003 5.41675" stroke="black" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </li>
      {
        navLinks[value].routes.map((link)=> 
       <Link
       key={link.name}
       href={link.url}
       >
         <li
        key={link.name}
        >{link.name}
        </li> 
       </Link> 
        ) 
      }
    </ul>
  )
}

export default Submenu