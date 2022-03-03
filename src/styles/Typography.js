import { createGlobalStyle } from 'styled-components'
import fontMontserrat from '../assets/fonts/Montserrat-VariableFont_wght.ttf'
import fontMontserratBackup from '../assets/fonts/Montserrat-VariableFont_wght.woff'
/*
// incorporate typographyfont swap so you have a fall back 
// fluid type : an expression of how big the font is rather than strict
// Fluid-type
// By adding font-display: swap; to the @font-face declaration, we tell the browser to show the fallback font until the Google Font is available.
*/

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src:local('Montserrat'),
        url(${fontMontserrat}) format('truetype'),
        url(${fontMontserratBackup}) format('woff'),
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap') format('woff2');
    font-display: swap;
  }


  html {
    font-family: 'Montserrat', Fallback, sans-serif;

  }

  h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
  }
  `
export default Typography
