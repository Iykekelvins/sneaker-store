import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SocialLinks from './SocialLinks';

type LayoutProps = {
    children: any
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <main>
        <Navbar/>
        <div className="layout">
        <>
            <Sidebar/>
        </>
            {children}
        <>
            <SocialLinks/>
        </>
        </div>
    </main>
  )
}

export default Layout