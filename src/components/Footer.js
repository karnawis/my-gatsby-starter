import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = year => (
  <footer>
    <SocialMedia />
    <p className="text-center p-5 page-footer font-small blue">
      © 2014– {new Date().getFullYear()} / Copyright Sura Karnawi. All rights
      reserved.
    </p>
    <p>
      This site is built with Gatsby/React and hosted on Netlify. The source
      code is hosted on Github.
    </p>
  </footer>
)

export default Footer
