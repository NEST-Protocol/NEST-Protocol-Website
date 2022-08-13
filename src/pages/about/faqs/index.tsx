import {Stack, ChakraProvider} from "@chakra-ui/react";
import React from "react";
import Banner from "@site/src/pages/about/faqs/Banner";
import Content from "@site/src/pages/about/faqs/Content";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../../chakra";

const Faqs = () => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>FAQs | NEST Protocol</title>
      </Head>
      <Stack spacing={'24px'}>
        <Banner/>
        <Content/>
        <TheFooter/>
      </Stack>
    </ChakraProvider>
  )
}

export default Faqs;