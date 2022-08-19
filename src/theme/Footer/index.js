import React from 'react';
import TheFooter from "@site/src/components/TheFooter";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../../chakra";

const Footer = () => {
  return (
      <ChakraProvider theme={theme}>
        <TheFooter/>
      </ChakraProvider>
  )
}

export default React.memo(Footer);
