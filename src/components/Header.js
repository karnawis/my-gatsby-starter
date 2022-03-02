import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Navigation from './Navigation'
import SEO from './SEO'

export default function Header() {
  return (
    <header>
      <SEO title="gatsby starter" />
      <Navigation />
      <Jumbotron>
        <img
          alt="abstract art"
          src="/abstract-art-red-green-painting.jpeg"
          width="100%"
        />
        <h1>This is header of the page</h1>
      </Jumbotron>
    </header>
  )
}

/*
    <Jumbotron>
        <Grid>
            <h1>Welcome to React</h1>
            <p>
            <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
            </Button>
            </p>
        </Grid>
    </Jumbotron>
*/
