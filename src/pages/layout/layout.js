import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Layout() {
  return (
    <body className="layout">
        <Header />
            <Outlet />
        <Footer />
    </body>
  )
}

export default Layout;