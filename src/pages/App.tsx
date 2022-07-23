import * as React from 'react'
import {Spacer, Stack, Text} from '@chakra-ui/react'
import {Route, Routes} from 'react-router-dom'
import Root from './root'
import Footer from '../components/Footer'
import Ecosystem from './Ecosystem'
import Community from './Community'
import Developers from './Developers'
import Header from "../components/Header";
import AboutNEST from "./AboutNEST";
import Research from "./Research";

export const App = () => {
  return (
    <Stack spacing={0} minH={'100vh'}>
      <Header />
      <Stack spacing={['56px', '80px']} pb={['56px', '80px']}>
        <Routes>
          <Route path="/" element={<Root/>}/>
          <Route path={'ecosystem'} element={<Ecosystem/>}/>
          <Route path={'docs'} element={<Developers/>}/>
          <Route path={'docs/*'} element={<Developers/>}/>
          <Route path={'community'} element={<Community/>}/>
          <Route path={'about'} element={<AboutNEST/>}/>
          <Route path={'research'} element={<Research/>}/>
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