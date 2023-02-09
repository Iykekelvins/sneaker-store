import React from 'react';
import { useState } from 'react';
import Submenu from './Submenu';
import { navLinks } from '../../utilities/navLinks';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [value, setValue] = useState<number>(0);
  const [showMenu, setShowMenu] = useState(new Array(5).fill(false));

  const handleMenu = (position: any) => {
    const updatedMenu = showMenu.map((item, index) =>
      index === position ? !item : item
    );
    setShowMenu(updatedMenu);
  };

  return (
    <nav>
      <>
      <AnimatePresence>
        { 
        !showMenu[value] &&
         <motion.ul className='nav-links'
          initial={{
            opacity: 0.5,
          }}
          transition={{ type: "tween", duration: 1 }}
          animate={{ opacity: 1 }}
          exit={{
          opacity: 0,
          }}
      >
          { navLinks.map((link, index)=> 
          <li
          key={link.name}
          onClick={()=>{
            setValue(index);
            handleMenu(index);
          }}
          >{link.name}
          </li>  
          ) }
        </motion.ul>
            }
        </AnimatePresence>
        <AnimatePresence>
        {
          showMenu[value] &&
          <motion.div
          initial={{
          opacity: 0.5,
          position:"absolute",          
        }}
         transition={{ type: "tween", duration: 1 }}
         animate={{ opacity: 1 }}
         exit={{
           opacity: 0.5,
           position:"absolute",
          }}
         >
          <Submenu 
            value={value}
            handleMenu={handleMenu}
            />
         </motion.div>
        }
        </AnimatePresence>
      </>
       <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.9999 20.9999L16.6499 16.6499" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </button>

       <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </button>
        
       <button className="menu">
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 1H11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 13H23" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </button>

    </nav>
  )
}

export default Navbar