import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = year => (
  <footer>
    <SocialMedia />
    <p className="text-center p-5 page-footer font-small blue">
      Copyright {new Date().getFullYear()}
    </p>
  </footer>
)

export default Footer
