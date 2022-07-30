import { createGlobalStyle } from 'styled-components'
import bgImage from '../images/Wallpaper2.jpg'
import CalculatorFont from '../fonts/calculatorFont.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CalculatorFont';
    src: url(${CalculatorFont});
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    min-width: 100vw;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background-image: url(${bgImage});
    background-position: center;
    background-repeat: no-repeat;
  }
`