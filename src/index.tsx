import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Global, css } from '@emotion/react'
// import './utils/rem'

import reportWebVitals from './reportWebVitals'

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-transform: uppercase;
    background: #000;
  }

  /* .swiper-container {
    width: 100%;
    height: 100vh;
  } */

  /* .swiper-slide {
    height: 100vh; //这里是终点
    width: 100vw;
    position: relative;
    overflow: hidden;
  } */
`

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
