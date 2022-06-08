import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SocialLinks from './SocialLinks';

type LayoutProps = {
    children: any
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <main>
        <Head>
            <title>Luxury Sneaker Store | Adkoy</title>
            <meta name="description" content="Online shoe store" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <div className="layout">
        <>
            <Sidebar/>
        </>
            <div className="container">
            {children}
            </div>
        <>
            <SocialLinks/>
        </>
        </div>
    </main>
  )
}

export default Layout