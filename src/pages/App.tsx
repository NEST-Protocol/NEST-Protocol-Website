import * as React from 'react'
import {Stack, Text} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import Root from "./root";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const App = () => {
  return (
    <Stack spacing={'80px'}>
      <Header />
      <Routes>
        <Route path="/" element={<Root />}/>
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
  )
}
