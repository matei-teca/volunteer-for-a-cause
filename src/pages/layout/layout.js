import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Layout() {
  return (
    <div>
        <Header />
            <Outlet />
        <Footer />
    </div>
  )
}

export default Layout;