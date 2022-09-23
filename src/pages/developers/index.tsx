import React from 'react';
import {
  ChakraProvider, Text, Stack, Link, Button, Heading, HStack, chakra, Box, Spacer,
} from "@chakra-ui/react";
import theme from "../../chakra"

export default function Home(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Stack h={'100%'} w={'100vw'} align={"center"}>
        <Stack w={'100%'} maxW={'1920px'} h={'100%'} bgImage={'image/Developer/Developer_bg.jpg'} spacing={0}>
          <Stack px={'45px'} h={'88px'} direction={"row"} justifyContent={"space-between"} align={"center"}>
            <Link href={'/'}>
              <chakra.img
                src={"/img/logo.svg"}
                alt="nest"
                h={'20px'}
              />
            </Link>
            <Stack direction={"row"} align={"center"} spacing={'24px'} fontWeight={'500'} fontSize={'15px'}>
              <Link href={'/nest-fi'}>NEST Fi</Link>
              <Link href={'/developers'} color={'#EAAA00'} fontWeight={'700'}>Developers</Link>
              <Link href={'/docs/Building-On-NEST/Contracts/'}>Doc</Link>
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
            <chakra.img src={'image/Developer/Flowchart_1.svg'} w={'50%'} />
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