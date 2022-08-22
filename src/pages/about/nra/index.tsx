import React from 'react';
import VacantPositions from "@site/src/pages/about/nra/VacantPositions";
import Info from "@site/src/pages/about/nra/Info";
import FundingOpportunity from "@site/src/pages/about/nra/FundingOpportunity";
import Banner from "@site/src/pages/about/nra/Banner";
import {Stack, useMediaQuery, ChakraProvider} from "@chakra-ui/react";
import Banner2 from "@site/src/pages/about/nra/Banner2";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../../chakra";

export default function NRA(): JSX.Element {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NRA | NEST Protocol</title>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "56px"}>
        <Banner/>
        <Banner2/>
        <Info/>
        <FundingOpportunity/>
        <VacantPositions/>
        <TheFooter/>
      </Stack>
    </ChakraProvider>
  );
}
