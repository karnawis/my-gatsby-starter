import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.nav`
  ul {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    list-style: none;
    margin-top: 20px;
    text-align: center;
  }
  li {
    order: 1;
  }
  a {
    font-size: 2rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
    /* &[aria-current='page'] {
      color: var(--red);
    } */
  }
`

function Navigation() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects to portfolio</Link>
        </li>
        <li>
          <Link to="https://medium.com/@surakarnawi">Blog</Link>
        </li>
      </ul>
    </NavStyles>
  )
}

export default Navigation
