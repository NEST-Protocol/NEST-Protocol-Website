import {Stack, Text} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import Docs from "./Docs";
import * as React from "react";

const Developers = () => {
  return (
    <Stack pt={'90px'}>
      <Text>Developers Menu</Text>
      <Routes>
        <Route path={'docs'} element={<Docs />} />
      </Routes>
    </Stack>
  )
}

export default Developers