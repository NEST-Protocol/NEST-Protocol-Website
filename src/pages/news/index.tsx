import React from 'react';
import LatestNews from "@site/src/pages/news/LatestNews";
import Banner from "@site/src/pages/news/Banner";
import {Stack, useMediaQuery, ChakraProvider} from "@chakra-ui/react";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../chakra";

export default function News(): JSX.Element {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>News | NEST Protocol</title>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "40px"}>
        <Banner/>
        <LatestNews/>
        <TheFooter/>
      </Stack>
    </ChakraProvider>
  );
}
