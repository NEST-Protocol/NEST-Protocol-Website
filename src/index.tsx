import {ChakraProvider} from '@chakra-ui/react'
import theme from './theme'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {App} from './pages/App'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'
import 'focus-visible/dist/focus-visible'
import {HashRouter} from 'react-router-dom'
import AlertFromFORT from "./components/AlertFromFORT";
import {RecoilRoot} from "recoil";
import AlertNESTandFORT from "./components/AlertNESTandFORT";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider theme={theme}>
        <RecoilRoot>
          <AlertFromFORT />
          <AlertNESTandFORT />
          <App/>
        </RecoilRoot>
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
