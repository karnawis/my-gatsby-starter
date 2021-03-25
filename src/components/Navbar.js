import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

function Navbar() {
    const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata{
            description 
            title
          }
      }
    }
  `)

    console.log('Data', data)

   const { title, description } = data.site.siteMetadata
    return (
        <nav>
            <h1>{ title }</h1>
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/about">About</Link> 
                <Link to="/projects">Projects to portfolio</Link>
            </div>
           
        </nav>
    )
}

export default Navbar