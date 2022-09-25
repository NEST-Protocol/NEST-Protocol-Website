import React from 'react';
import {
  ChakraProvider, Text, Stack, Link, Button, Heading, HStack, chakra, Box, Spacer,
} from "@chakra-ui/react";
import theme from "../../chakra"
import Head from "@docusaurus/Head";

export default function NestFi(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      <Stack h={'100%'} w={'100vw'} align={"center"}>
        <Stack w={'100%'} maxW={'1920px'} h={'100%'} bgPosition={"center"} bgSize={'cover'} bgImage={'image/NEST_Fi/NESTFi_bg.jpg'} spacing={0}>
          <Stack px={'45px'} h={'88px'} direction={"row"} justifyContent={"space-between"} align={"center"}>
            <Link href={'/'}>
              <chakra.img
                src={"/img/logo.svg"}
                alt="nest"
                h={'20px'}
              />
            </Link>
            <Stack direction={"row"} align={"center"} spacing={'24px'} fontWeight={'500'} fontSize={'15px'}>
              <Link href={'/nest-fi'} color={'#EAAA00'} fontWeight={'700'}>NEST Fi</Link>
              <Link href={'/developers'}>Developers</Link>
              <Link href={'/docs/Building-On-NEST/Contracts/'}>Doc</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/about'}>About</Link>
              <Button onClick={() => {
                window.open('https://finance.nestprotocol.org/', '_blank')
              }}>
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
            <chakra.img src={'/image/NEST_Fi/02-icon-01.png'} alt={''} py={'20px'}/>
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
                <Stack align={"center"} h={'120px'} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/02-icon-02.png'} alt={''} h={'98px'}/>
                </Stack>
                <Text fontSize={'18px'} fontWeight={'bold'}>Valid Settlement</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>ETH cannot make valid<br/>settlement for all
                  transactions;<br/>however, OMM can settle all<br/>transactions.</Text>
              </Stack>
              <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Stack align={"center"} h={'120px'} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/02-icon-03.png'} alt={''} h={'88px'} w={'88px'}/>
                </Stack>
                <Text fontSize={'18px'} fontWeight={'bold'}>Market Clearing</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>OMM can structure atomic<br/>liquidation, which means that
                  all<br/>excess return can be cleared.</Text>
              </Stack>
              <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Stack align={"center"} h={'120px'} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/02-icon-04.png'} alt={''} h={'87px'} w={'94px'}/>
                </Stack>
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
                <chakra.img src={'image/NEST_Fi/iphone_1.webp'} h={'400px'}/>
              </Stack>
              <Stack w={'50%'} px={'135px'} py={'155px'} bg={'white'} borderRadius={'20px'}>
                <Text fontSize={'25px'} fontWeight={600}>NEST FI - Futures</Text>
                <Text fontSize={'15px'} fontWeight={600}>Trade BTC/USDT and ETH/USDT futures directly<br/>from your
                  wallet without trading fee.</Text>
                <Box pt={'25px'}>
                  <Button w={'160px'} onClick={() => {
                    window.open('https://finance.nestprotocol.org/#/futures', '_blank')
                  }}>
                    Buy futures
                  </Button>
                </Box>
              </Stack>
            </HStack>
            <HStack w={'full'} pt={'40px'}>
              <Stack w={'50%'} px={'135px'} py={'155px'} bg={'white'} borderRadius={'20px'}>
                <Text fontSize={'25px'} fontWeight={600}>NEST FI - Options</Text>
                <Text fontSize={'15px'} fontWeight={600}>Buy options with flexible choices on exercise date,<br/>direction and strike price, and no commission.</Text>
                <Box pt={'25px'}>
                  <Button w={'160px'} onClick={() => {
                    window.open('https://finance.nestprotocol.org/#/options', '_blank')
                  }}>
                    Buy Options
                  </Button>
                </Box>
              </Stack>
              <Stack w={'50%'} align={"center"} justify={"center"}>
                <chakra.img src={'image/NEST_Fi/iphone_2.webp'} h={'400px'}/>
              </Stack>
            </HStack>
          </Stack>
          <Stack h={'138px'}/>
          <HStack py={'88px'} px={'45px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"} align={"start"}>
            <Stack spacing={'40px'} align={"start"}>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch App</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Buy futures, options and win NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/blogs'}>NEST Blog</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Latest blogs from NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/nra'}>NEST Research Academy</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know about NRA</Text>
              </Stack>
            </Stack>
            <Stack spacing={'40px'}>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/docs/Building-On-NEST/Contracts/'}>Developer Docs</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know how to develop on NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs'}>FAQs</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Frequently asked questions</Text>
              </Stack>
              <HStack spacing={'24px'}>
                <Link href={'https://github.com/NEST-Protocol'} isExternal>
                  <chakra.img src={'image/Footer/github_icon.svg'} h={'44px'} w={'44px'}/>
                </Link>
                <Link href={'https://twitter.com/nest_protocol/'} isExternal>
                  <chakra.img src={'image/Footer/twitter_icon.svg'} h={'44px'} w={'44px'}/>
                </Link>
                <Link href={'https://t.me/nest_chat/'} isExternal>
                  <chakra.img src={'image/Footer/telegram_icon.svg'} h={'44px'} w={'44px'}/>
                </Link>
                <Link href={'https://nest-protocol-82041.medium.com/'} isExternal>
                  <chakra.img src={'image/Footer/medium_icon.svg'} h={'44px'} w={'44px'}/>
                </Link>
                <Link href={'https://discord.gg/nestprotocol'} isExternal>
                  <chakra.img src={'image/Footer/discord_icon.svg'} h={'44px'} w={'44px'}/>
                </Link>
                <Link href={'mailto:hello@nestprotocol.org'} isExternal>
                  <chakra.img src={'image/Footer/email_icon.svg'} h={'44px'} w={'44px'}/>
                </Link>
              </HStack>
            </Stack>
            <Stack spacing={'40px'} w={'420px'} h={'281px'}>
              <Stack spacing={'10px'}>
                <Text fontSize={'15px'} fontWeight={'bold'} px={'16px'}>Market price</Text>
                <chakra.div
                  id="crypto-widget-CoinList"
                  data-transparent="true"
                  data-design="classic"
                  data-coin-ids="2204"
                  w={'100%'}
                ></chakra.div>
              </Stack>
              <Spacer/>
              <HStack spacing={'22px'}>
                <Spacer/>
                <Text fontSize={'14px'} fontWeight={'bold'} color={'#434344'}>@2022 NEST</Text>
              </HStack>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}