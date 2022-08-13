import {Stack, useMediaQuery, ChakraProvider} from '@chakra-ui/react'
import * as React from 'react'
import Banner from "./Banner";
import Apps from "@site/src/pages/nest-fi/Apps";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../chakra";

const NESTFi = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST Fi | NEST Protocol</title>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "30px"}>
        <Banner/>
        <Apps/>
        {/*<Data/>*/}
        <TheFooter/>
      </Stack>
    </ChakraProvider>
  )
}

export default NESTFi
