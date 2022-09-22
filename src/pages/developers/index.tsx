import React from 'react';
import {
  ChakraProvider, Text, Stack, Link, Button, Heading, HStack, chakra, Box,
} from "@chakra-ui/react";
import Head from "@docusaurus/Head";
import theme from "../../chakra"

export default function Home(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST Protocol | The stochastic computer based on PVM</title>
      </Head>
      <Stack h={'100%'} w={'100vw'} align={"center"}>
        <Stack w={'100%'} maxW={'1920px'} h={'100%'} bg={'gray.200'} spacing={0}>
          <Stack px={'45px'} py={'34px'} direction={"row"} justifyContent={"space-between"}>
            <Link href={'/'}>
              <chakra.img
                src={"/img/logo.svg"}
                alt=""
                h={'20px'}
              />
            </Link>
            <Stack direction={"row"} align={"center"} spacing={'22px'} fontWeight={'500'} fontSize={'15px'}>
              <Link href={'/nest-fi'}>NEST Fi</Link>
              <Link href={'/developers'} color={'#EAAA00'}>Developers</Link>
              <Link href={'/'}>Doc</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/about'}>About</Link>
              <Button>
                App
              </Button>
            </Stack>
          </Stack>
          <Stack pt={'164px'} pb={'202px'}>
            <Stack spacing={'40px'} align={"center"}>
              <Heading fontSize={'50px'} textAlign={"center"}>Another Revolution in Blockchain</Heading>
              <Text textAlign={"center"} fontWeight={'600'} fontSize={'21px'}>NEST ecosystem is a paradigm revolution to the traditional<br/>market mechanism, providing the blockchain world with a<br/>whole new range of development tools and creative new assets.</Text>
              <Box>
                <Button>
                  Developer Doc
                </Button>
              </Box>
            </Stack>
          </Stack>
          <Stack bg={'rgba(255, 255, 255, 0.8)'} direction={"row"} spacing={0}>
            <Text w={'50%'}>image</Text>
            <Stack w={'50%'} py={'216px'} px={'120px'} spacing={'21px'}>
              <Text fontSize={'25px'} fontWeight={600}>NEST PVM</Text>
              <Text fontSize={'15px'} fontWeight={600}>NEST Probability Virtual Machine (PVM) is a virtual<br/>machine-like structure based on the basic function<br/>library. Developers can develop various exciting<br/>applications based on the function library, similar<br/>to Ethereum virtual machine (EVM) programming.</Text>
              <Link color={'#00A0E9'} fontSize={'15px'} fontWeight={600}>PVM Mechanism</Link>
            </Stack>
          </Stack>
          <Stack h={'138px'}/>
          <HStack bg={'rgba(255, 255, 255, 0.8)'}>
            <Stack w={'50%'} py={'216px'} px={'120px'}>
              <Text fontSize={'25px'} fontWeight={600}>NEST Oracle</Text>
              <Text fontSize={'15px'} fontWeight={600}>NEST oracle is the only truly decentralized oracle<br/>on the market today.</Text>
              <HStack spacing={'68px'}>
                <Link color={'#00A0E9'} fontSize={'15px'} fontWeight={600}>How to Mining</Link>
                <Link color={'#00A0E9'} fontSize={'15px'} fontWeight={600}>How to Call Price</Link>
              </HStack>
            </Stack>
            <Text w={'50%'}>image</Text>
          </HStack>
          <Stack h={'138px'}/>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}