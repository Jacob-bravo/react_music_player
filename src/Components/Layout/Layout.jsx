import React from 'react'
import css from "./Layout.module.css"
import Navbar from '../Navbar/Navbar'
import SideNav from '../SideNavbar/SideNav'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <div className={css.container}>
            <div className={css.column}>
                <Navbar />
                <div className={css.row}>
                    <SideNav />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
