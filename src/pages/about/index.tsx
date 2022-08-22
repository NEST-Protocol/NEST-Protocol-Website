import {Stack, useMediaQuery, ChakraProvider} from "@chakra-ui/react";
import React from "react";
import Banner from "@site/src/pages/about/Banner";
import Who from "@site/src/pages/about/Who";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../chakra";

const About = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>About | NEST Protocol</title>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "56px"}>
        <Banner/>
        <Who/>
        <TheFooter/>
      </Stack>
    </ChakraProvider>
  )
}

export default About;