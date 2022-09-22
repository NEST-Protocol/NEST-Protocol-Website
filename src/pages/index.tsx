import React from 'react';
import {
  ChakraProvider, Text, Stack, Link, Button, Heading, HStack, chakra,
} from "@chakra-ui/react";
import Head from "@docusaurus/Head";
import theme from "../chakra"

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
              <Link href={'/developers'}>Developers</Link>
              <Link href={'/'}>Doc</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/about'}>About</Link>
              <Button>
                App
              </Button>
            </Stack>
          </Stack>
          <Stack py={'216px'}>
            <Stack spacing={'40px'}>
              <Heading fontSize={'50px'} textAlign={"center"}>NEST PROTOCOL<br/>THE MOST
                IMPORTANT<br/>INFRASTRUCTURE<br/>AFTER ETH</Heading>
              <Text textAlign={"center"} fontWeight={'600'} fontSize={'21px'}>NEST Protocol is the stochastic computer
                based on PVM,<br/>enables the generation and programming of stochastic assets.</Text>
            </Stack>
          </Stack>
          <Stack px={'160px'}>
            <Stack bg={'rgba(255, 255, 255, 0.7)'} py={'92px'} w={'full'} align={"center"} borderRadius={'20px'}>
              <Heading fontSize={'50px'} textAlign={"center"}>What is stochastic assets?</Heading>
              <Text py={'50px'}>image</Text>
              <Text fontSize={'25px'} fontWeight={"bold"} textAlign={"center"}>Why do blockchain need stochastic
                assets?</Text>
              <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>Almost all financial applications can be
                thought of as the<br/>acquisition of stochastic assets with varying risk-return structures.<br/>Stochastic
                assets are a more natural way for building on-chain finance, <br/>such as decentralized
                derivatives.</Text>
            </Stack>
          </Stack>
          <Stack align={"center"}>
            <Heading pt={'138px'} fontSize={'50px'} textAlign={"center"} pb={'57px'}>How does NEST Protocol work?</Heading>
            <Stack bg={'rgba(255, 255, 255, 0.7)'} align={"center"} py={'130px'} spacing={'18px'} w={'full'}>
              <Text>image</Text>
              <Text fontSize={'25px'} textAlign={"center"} fontWeight={'bold'}>PVM</Text>
              <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>PVM (Probabilistic Virtual Machine) is a
                class of<br/>virtual machine structures based on a library of basic<br/>functions that allow a developer
                to assemble as many<br/>applications as he wants - similar to EVM programming</Text>
              <Text textAlign={"center"} color={'#7D7D7D'} fontWeight={'600'} fontSize={'15px'}>PVM enables the
                generation and programming of<br/>stochastic assets, which is widely used in DeFi, GameFi,<br/>NFT,
                etc. <Link color={'#00A0E9'}>learn more about PVM</Link></Text>
            </Stack>
          </Stack>
          <Stack py={'138px'} spacing={'48px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>Development path</Heading>
            <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"}>The NEST community always insists<br/>on
              decentralization and innovation</Text>
          </Stack>
          <Stack bg={'rgba(255, 255, 255, 0.7)'} py={'90px'}>
            <Stack spacing={'48px'}>
              <Heading fontSize={'50px'} textAlign={"center"}>More</Heading>
              <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"}>Over 1 MILLION community members, Join
                us</Text>
            </Stack>
            <HStack justify={"center"} alignItems={"start"} spacing={'120px'}>
              <Stack>
                <Link>@NEST_Protocol</Link>
                <Link>@NESTDAOSupport</Link>
              </Stack>
              <Stack>
                <Link>@NEST_Community</Link>
                <Link>@nest_chat</Link>
              </Stack>
              <Stack>
                <Link>For developers</Link>
              </Stack>
            </HStack>
            <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"}>Listed on more than 15 exchanges</Text>
          </Stack>
          <Stack py={'138px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>Blogs</Heading>
          </Stack>
          <Stack bg={"red.200"}>
            <Heading fontSize={'50px'} textAlign={"center"}>Integrations & Partners</Heading>

          </Stack>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}