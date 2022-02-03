import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import SocialMedia from './SocialMedia'
// const { site } = useStaticQuery(graphql`
// query {
//   site {
//     siteMetadata {
//       year
//     }
//   }
// }
// `)
// and {site.siteMetadata.year}

const Footer = year => (
  <footer>
    <SocialMedia />
    <p className="text-center p-5 page-footer font-small blue">
      Copyright {new Date().getFullYear()} `
    </p>
  </footer>
)

export default Footer
