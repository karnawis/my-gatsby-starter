import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Header from './Header'

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <div className="content">
                { children }
            </div>
            <footer>Copyright 2021 @sura.me</footer>
        </div>
    )
}

export default Layout