import React from 'react';
import {
  ChakraProvider, Text, Stack, Link, Button, Heading, HStack, chakra, Spacer,
} from "@chakra-ui/react";
import theme from "../../../chakra"
import {ChevronRightIcon} from "@chakra-ui/icons";
import Head from "@docusaurus/Head";

export default function NRA(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      <Stack h={'100%'} w={'100vw'} align={"center"}>
        <Stack w={'100%'} maxW={'1920px'} h={'100%'} bgImage={'/image/About/About_bg_nra.jpg'} bgPosition={"center"} spacing={0}>
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
              <Link href={'/developers'}>Developers</Link>
              <Link href={'/docs/Building-On-NEST/Contracts/'}>Doc</Link>
              <Link href={'/blogs'}>Blog</Link>
              <Link href={'/about'} color={'#EAAA00'}>About</Link>
              <Button>
                App
              </Button>
            </Stack>
          </Stack>
          <Stack align={"center"} spacing={'48px'} pb={'210px'}>
            <HStack color={'#00A0E9'} fontSize={'15px'} fontWeight={'600'} w={'full'} px={'45px'}>
              <Link>About</Link>
              <ChevronRightIcon/>
              <Link>NRA</Link>
            </HStack>
            <Heading pt={'48px'} fontSize={'50px'}>NEST Research Academy (NRA)</Heading>
            <Text textAlign={"center"} fontSize={'18px'} fontWeight={'bold'}>NEST Research Academy (NRA), initialized by
              the NEST protocol,<br/>aims to boost theoretical and applied research in related<br/>fields such as
              blockchain,finance, economics, game theory,<br/>machine learning, computer science,and software
              engineering and<br/>helps to spread this knowledge to the public.</Text>
          </Stack>
          <HStack justifyContent={"space-between"} spacing={'44px'}>
            <Stack bg={'white'} py={'134px'} h={'440px'} borderRadius={'20px'} w={'full'} align={"center"}>
              <Stack>
                <Text fontSize={'25px'} fontWeight={600}>Promote Industry<br/>Communication</Text>
                <Text fontSize={'15px'} fontWeight={600}>NRA’s research activities include but are not<br/>limited to
                  writing research papers published in<br/>peer-reviewed international academic journals, <br/>writing
                  research reports for the public and <br/>investors,and organizing conferences,<br/>workshops,
                  webinars, and AMA.</Text>
              </Stack>
            </Stack>
            <Stack bg={'white'} py={'134px'} h={'440px'} borderRadius={'20px'} w={'full'} align={"center"}>
              <Stack>
                <Text fontSize={'25px'} fontWeight={600}>Facilitate Academic<br/>Exploration</Text>
                <Text fontSize={'15px'} fontWeight={600}>NRA provides funding and job opportunities for<br/>researchers
                  in different stages. NRA and NEST<br/>feel honored if the support helps scholars make<br/>breakthrough
                  progress in academics and achieve<br/>significant contributions to human society from<br/>various
                  perspectives.</Text>
              </Stack>
            </Stack>
          </HStack>
          <Stack align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'} pt={'138px'}>Funding Opportunity</Heading>
            <Stack px={'160px'} w={'full'}>
              <Stack bg={'white'} align={"center"} textAlign={"center"} py={'130px'} borderRadius={'20px'}>
                <Text>image</Text>
                <Text fontSize={'15px'} fontWeight={'600'}>NRA welcomes research in fields such as blockchain, finance, <br/>economics, game theory, machine
                  learning, computer science, and software engineering.<br/>Those interested, please send your research
                  proposal (maximum 10 pages) to <br/><Link>nra@nestprotocol.org</Link></Text>
              </Stack>
            </Stack>

          </Stack>
          <Stack align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'} pt={'138px'}>Vacant Position</Heading>
            <Stack px={'160px'} w={'full'}>
              <Stack bg={'white'} align={"center"} textAlign={"center"} py={'130px'} borderRadius={'20px'}>
                <Text>image</Text>
                <Text fontSize={'15px'} fontWeight={'600'}>NRA welcomes applicants to researchers of all levels.<br/>NRA evaluates the work of its
                  researchers in a result-oriented manner with flexibility in terms<br/>of working location and hours.
                  The salary is decided case by case.<br/>Those interested, please send your academic CV
                  to<br/><Link>nra@nestprotocol.org</Link></Text>
              </Stack>
            </Stack>
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
                  <chakra.img src={'image/Footer/email_icon.svg'} h={'44px'} w={'44px'} />
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