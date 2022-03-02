import { createGlobalStyle } from 'styled-components'
import fontMontserrat from '../assets/fonts/Montserrat-VariableFont_wght.ttf'
import fontMontserratBackup from '../assets/fonts/Montserrat-VariableFont_wght.woff'
import fontMontserratBold from '../assets/fonts/Montserrat-ExtraBold.ttf'
import fontMontserratBoldBackup from '../assets/fonts/Montserrat-ExtraBold.woff'
/*
// incorporate typography font swap so you have a fall back 
// fluid type : an expression of how big the font is rather than strict
// Fluid-type
*/

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${fontMontserrat}) format('truetype'),
         url(${fontMontserratBackup}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat-Bold';
    src:url(${fontMontserratBold}) format('truetype'),
        url(${fontMontserratBoldBackup}) format('woff');
  }

  html {
    font-family: 'Montserrat', sans-serif;

  }

  h1, h2, h3, h4, h5, h6 {
      font-family:  'Montserrat-Bold'
  }
  `
export default Typography
