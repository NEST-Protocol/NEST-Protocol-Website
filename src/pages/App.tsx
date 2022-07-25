import * as React from 'react'
import {Spacer, Stack, Text} from '@chakra-ui/react'
import {Route, Routes} from 'react-router-dom'
import Root from './Root/index'
import Footer from '../components/Footer'
import NESTFi from './NESTFi'
import News from './News'
import Developers from './Developers'
import Header from "../components/Header";
import Research from "./Research";

export const App = () => {
  return (
    <Stack spacing={0} minH={'100vh'}>
      <Header />
      <Stack spacing={['56px', '80px']} pb={['56px', '80px']}>
        <Routes>
          <Route path="/" element={<Root/>}/>
          <Route path={'nest-fi'} element={<NESTFi/>}/>
          <Route path={'docs'} element={<Developers/>}/>
          <Route path={'docs/*'} element={<Developers/>}/>
          <Route path={'news'} element={<News/>}/>
          <Route path={'nest-research-academy'} element={<Research/>}/>
          <Route
            path="*"
            element={
              <Text p={2}>
                <p>There's nothing here!</p>
              </Text>
            }
          />
        </Routes>
      </Stack>
      <Spacer/>
      <Footer/>
    </Stack>
  )
}

export default App