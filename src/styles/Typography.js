import { createGlobalStyle } from 'styled-components'
import fontMontserrat from '../assets/fonts/Montserrat-VariableFont_wght.ttf'
import fontMontserratBackup from '../assets/fonts/Montserrat-VariableFont_wght.woff'
/*
//font swap so you have a fall back 
// fluid type : an expression of how big the font is rather than strict
// Fluid-type
*/

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${fontMontserrat}), url(${fontMontserratBackup});
  }
  html {
    font-family: 'Montserrat', sans-serif;

  }
  `
export default Typography
