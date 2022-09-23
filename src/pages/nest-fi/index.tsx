import React from 'react';
import {
  ChakraProvider, Text, Stack, Link, Button, Heading, HStack, chakra, Box, Center,
} from "@chakra-ui/react";
import Head from "@docusaurus/Head";
import theme from "../../chakra"

export default function NestFi(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST Protocol | The stochastic computer based on PVM</title>
      </Head>
      <Stack h={'100%'} w={'100vw'} align={"center"}>
        <Stack w={'100%'} maxW={'1920px'} h={'100%'} bg={'gray.200'} spacing={0}>
          <Stack px={'45px'} h={'88px'} direction={"row"} justifyContent={"space-between"} align={"center"}>
            <Link href={'/'}>
              <chakra.img
                src={"/img/logo.svg"}
                alt="nest"
                h={'20px'}
              />
            </Link>
            <Stack direction={"row"} align={"center"} spacing={'24px'} fontWeight={'500'} fontSize={'15px'}>
              <Link href={'/nest-fi'} color={'#EAAA00'}>NEST Fi</Link>
              <Link href={'/developers'}>Developers</Link>
              <Link href={'/docs/Building-On-NEST/Contracts/'}>Doc</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/about'}>About</Link>
              <Button>
                App
              </Button>
            </Stack>
          </Stack>
          <Stack pt={'157px'} pb={'134px'}>
            <Stack spacing={'40px'} align={"center"}>
              <Heading fontSize={'50px'} textAlign={"center"}>NEST FI<br/>the decentralized<br/>financial market<br/>based
                on OMM</Heading>
              <Text textAlign={"center"} fontWeight={'600'} fontSize={'21px'}>NEST FI (NEST Financial Market) provides
                futures<br/>and options with infinite liquidity now.</Text>
            </Stack>
          </Stack>
          <Stack bg={'rgba(255,255,255, 0.8)'} align={"center"} textAlign={"center"} py={'92px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>What is OMM?</Heading>
            <Text>image</Text>
            <Text fontSize={'25px'} fontWeight={'bold'}>From P2P to OMM, a new settlement paradigm</Text>
            <Text fontWeight={600} fontSize={'15px'}>OMM(Omnipotent Market Maker) is a new trading and settlement
              paradigm:<br/>everyone trades and settles stochastic assets with NEST system rather than
              individuals.</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>First constraint</Text>
            <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>c(X) ≥ E(X)<br/>The production cost of
              stochastic asset is not less than<br/>the expected value of this stochastic asset.</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>Second constraint</Text>
            <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>E(X) ≥ E(F(X))<br/>The expected value of the
              programmed stochastic<br/>asset will be not higher than its cost.</Text>
          </Stack>
          <Stack align={"center"} py={'136px'} spacing={'57px'}>
            <Heading fontSize={'50px'}>What does OMM solve?</Heading>
            <HStack spacing={'44px'}>
              <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Text fontSize={'18px'} fontWeight={'bold'}>Valid Settlement</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>ETH cannot make valid<br/>settlement for all
                  transactions;<br/>however, OMM can settle all<br/>transactions.</Text>
              </Stack>
              <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Text fontSize={'18px'} fontWeight={'bold'}>Market Clearing</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>OMM can structure atomic<br/>liquidation, which means that
                  all<br/>excess return can be cleared.</Text>
              </Stack>
              <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Text fontSize={'18px'} fontWeight={'bold'}>Infinite Liquidity</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>The liquidity will not be limited<br/>by the LP’s pool size,
                  theoretically<br/>OMM can provide infinite liquidity</Text>
              </Stack>
            </HStack>
          </Stack>
          <Stack align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'}>Dapps in NEST FI</Heading>
            <HStack w={'full'}>
              <Stack w={'50%'} align={"center"} justify={"center"}>
                <Text>image</Text>
              </Stack>
              <Stack w={'50%'} px={'135px'} py={'155px'} bg={'white'} borderRadius={'20px'}>
                <Text fontSize={'25px'} fontWeight={600}>NEST FI - Futures</Text>
                <Text fontSize={'15px'} fontWeight={600}>Trade BTC/USDT and ETH/USDT futures directly<br/>from your
                  wallet without trading fee.</Text>
                <Box pt={'25px'}>
                  <Button w={'160px'}>
                    Buy futures
                  </Button>
                </Box>
              </Stack>
            </HStack>
            <HStack w={'full'} pt={'40px'}>
              <Stack w={'50%'} px={'135px'} py={'155px'} bg={'white'} borderRadius={'20px'}>
                <Text fontSize={'25px'} fontWeight={600}>NEST FI - Futures</Text>
                <Text fontSize={'15px'} fontWeight={600}>Trade BTC/USDT and ETH/USDT futures directly<br/>from your
                  wallet without trading fee.</Text>
                <Box pt={'25px'}>
                  <Button w={'160px'}>
                    Buy futures
                  </Button>
                </Box>
              </Stack>
              <Stack w={'50%'} align={"center"} justify={"center"}>
                <Text>image</Text>
              </Stack>
            </HStack>
          </Stack>
          <Stack h={'138px'}/>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}