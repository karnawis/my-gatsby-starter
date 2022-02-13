import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
