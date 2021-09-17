import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';


function Navigation() {
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

   const { title, description } = data.site.siteMetadata
    return (
        <Navbar sticky="top" id="navbar"className="navbar" collapseOnSelect bg="light" expand="sm">
          <Container>
              <Navbar.Brand href="#home">{title}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigation

/*
<nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
          <div class="navbar-header">
              <Link to="/"><h1>{ title }</h1></Link>
          </div>
          
            <div className="links nav navbar-nav">
                <Link to="/">Home</Link> 
                <Link to="/about">About</Link> 
                <Link to="/projects">Projects to portfolio</Link>
                <Link to="#contact">Contact</Link>
                <Link to="https://medium.com/@surakarnawi">Blog</Link>
            </div>
            <h2>{ description }</h2>
          </div>
        </nav>

*/