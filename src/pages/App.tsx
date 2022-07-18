import * as React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Root from './root'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Ecosystem from './Ecosystem'
import Community from './Community'
import Learn from './Learn'
import Developers from "./Developers";

export const App = () => {
  return (
    <>
      <Header />
      <Stack spacing={['56px', '80px']}>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path={'ecosystem'} element={<Ecosystem />} />
          <Route path={'developers'} element={<Developers />} />
          <Route path={'developers/*'} element={<Developers />} />
          <Route path={'community'} element={<Community />} />
          <Route path={'learn'} element={<Learn />} />
          <Route
            path="*"
            element={
              <Text p={2}>
                <p>There's nothing here!</p>
              </Text>
            }
          />
        </Routes>
        <Footer />
      </Stack>
    </>
  )
}
