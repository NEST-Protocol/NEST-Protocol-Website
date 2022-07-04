import {ChakraProvider, Text} from '@chakra-ui/react'
import theme from './theme'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {App} from './pages/App'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'
import 'focus-visible/dist/focus-visible'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route
            path="*"
            element={
              <Text p={2}>
                <p>There's nothing here!</p>
              </Text>
            }
          />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
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
