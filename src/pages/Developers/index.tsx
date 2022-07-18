import {Stack} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import Docs from "./Docs";
import * as React from "react";

const Developers = () => {
  return (
    <Stack pt={'82px'}>
      <Routes>
        <Route path={'/'} element={<Docs />} />
        <Route path={'docs'} element={<Docs />} />
      </Routes>
    </Stack>
  )
}

export default Developers