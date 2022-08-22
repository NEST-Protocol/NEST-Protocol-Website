import React from 'react';
import Banner from "@site/src/pages/home/Banner";
import NestFi from "@site/src/pages/home/NESTFi";
import Developers from "@site/src/pages/home/Developers";
import News from "@site/src/pages/home/News";
import Research from "@site/src/pages/home/Research";
import Partners from "@site/src/pages/home/Partners";
import {Stack, useMediaQuery, ChakraProvider} from "@chakra-ui/react";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../chakra"


export default function Home(): JSX.Element {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST Protocol | The stochastic computer based on PVM</title>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "56px"}>
        <Banner/>
        <NestFi/>
        <Developers/>
        <News/>
        <Research/>
        <Partners/>
        <TheFooter/>
      </Stack>
    </ChakraProvider>
  );
}
