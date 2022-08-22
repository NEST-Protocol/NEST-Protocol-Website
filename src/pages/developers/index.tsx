import {Stack, useMediaQuery, ChakraProvider} from "@chakra-ui/react";
import React from "react";
import Banner from "@site/src/pages/developers/Banner";
import Apps from "@site/src/pages/developers/Apps";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../chakra";

const Developer = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Developers | NEST Protocol</title>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "56px"}>
        <Banner/>
        <Apps/>
        <TheFooter/>
      </Stack>
    </ChakraProvider>
  );
}

export default Developer
