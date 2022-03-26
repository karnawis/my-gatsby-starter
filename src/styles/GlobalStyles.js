import { createGlobalStyle } from 'styled-components'
// import bg from ''
// import bg from '../assets/images/pattern.svg'
import bg from '../assets/images/groovepaper.png'

/*
  check out chris Choir - font-type fluid using clamp
*/

const GlobalStyles = createGlobalStyle`
:root {
    --red: #ff5252;
    --white: #fff;
    --salmon: #ff7878;
    --black: #000;
}

html {
  background-image: url(${bg});  
  background-size: 450px;
  background-attachment: fixed;
  color: --black;
  font-size: 10px;
  scrollbar-width: thin;
  scrollbar-color: var(--red) var(--white);
}

button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  body {
    background-image: url(${bg});
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }
  a {
    color: inherit;
  }
  footer {
    
    svg {
      font-size: inherit;
      width: 20px;
    }
  }

  .page-footer {
    text-align: center;
  }
`

export default GlobalStyles

/*
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Montserrat";
  color: white;
}
html, body {
  min-height: 100%;
}
body {
  background: radial-gradient(at top left, rgb(0, 0, 0) 0%, rgb(70, 68, 70) 100%);
  background-repeat: no-repeat;
}
p {
  margin: 16px auto;
  line-height: 1.5em;
}
*/

/* layout & nav */

/*
.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}
nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px auto;
}
nav .links {
  display: inline-block;
  text-align: right;
}
nav a {
  display: inline-block;
  margin-left: 20px;
  font-weight: 400;
  padding-bottom: 8px;
  border-bottom: 3px solid transparent;
}
nav a:hover {
  border-color: white;
}
footer p{
  text-align: center;
  color: #bbb;
  margin: 40px auto;
} */
