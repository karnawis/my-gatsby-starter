import React from 'react'
import 'normalize.css'
import Typography from '../styles/Typography'
import Header from './Header'
import Footer from './Footer'
import GlobalStyles from '../styles/GlobalStyles'

function Layout({ children }) {
  return (
    <div className="layout">
      <GlobalStyles />
      <Typography />
      <Header />
      {children}
      <Footer />
      <div>
        <button type="submit">Test</button>
      </div>
    </div>
  )
}

export default Layout
