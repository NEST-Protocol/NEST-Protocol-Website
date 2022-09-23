import React from 'react';
import {
  ChakraProvider, Text, Stack, Link, Button, Heading, HStack, chakra, Box, Spacer
} from "@chakra-ui/react";
import theme from "../chakra"
import {ChevronRightIcon} from "@chakra-ui/icons";
import {AiOutlineTwitter, FaTelegramPlane, AiOutlineGithub} from "react-icons/all";
import Head from "@docusaurus/Head";

export default function Home(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      <Stack h={'100%'} w={'100vw'} align={"center"}>
        <Stack w={'100%'} maxW={'1920px'} h={'5752px'} bgImage={"image/Home/Home_bg.jpg"} bgPosition={"center"} spacing={0}>
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
            <Heading pt={'138px'} fontSize={'50px'} textAlign={"center"} pb={'57px'}>How does NEST Protocol
              work?</Heading>
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
            <HStack px={'45px'} align={"start"}>
              <Stack>
                <Text>image1</Text>
              </Stack>
              <Stack w={'full'} align={"center"}>
                <Text>image2</Text>
                <HStack px={'45px'} justify={"space-around"} w={'full'} align={"start"}>
                  <Stack align={"center"} w={'200px'}>
                    <Text fontSize={'17px'} fontWeight={'bold'}>2018.12 v1.0</Text>
                    <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>Start! A lending<br/>protocol goes
                      live.</Text>
                  </Stack>
                  <Stack align={"center"} w={'200px'}>
                    <Text fontSize={'17px'} fontWeight={'bold'}>2019.12 v2.0</Text>
                    <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>NEST oracle V1.0<br/>goes
                      live.</Text>
                  </Stack>
                  <Stack align={"center"} w={'200px'}>
                    <Text fontSize={'17px'} fontWeight={'bold'}>2020.07 v3.0</Text>
                    <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>NEST oracle upgraded.<br/>Open all
                      oracle tracks<br/>and supported all <br/>ERC20 Token/ETH price</Text>
                  </Stack>
                  <Stack align={"center"} w={'200px'}>
                    <Text fontSize={'17px'} fontWeight={'bold'}>2021.04 v3.6</Text>
                    <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>Voting governance<br/>module was
                      added</Text>
                  </Stack>
                  <Stack align={"center"} w={'200px'}>
                    <Text fontSize={'17px'} fontWeight={'bold'}>2021.11 v4.1</Text>
                    <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>NEST oracle upgraded.<br/>Allows
                      anyone<br/>to build their oracle<br/>for their project.</Text>
                  </Stack>
                </HStack>
              </Stack>
              <Stack>
                <Text>image3</Text>
              </Stack>
            </HStack>
          </Stack>
          <Stack bg={'rgba(255, 255, 255, 0.7)'} py={'90px'}>
            <Stack spacing={'28px'}>
              <Heading fontSize={'50px'} textAlign={"center"}>More</Heading>
              <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"}>Over 1 MILLION community members, Join
                us</Text>
            </Stack>
            <HStack justify={"center"} alignItems={"start"} spacing={'120px'} py={'62px'} color={'#00A0E9'}
                    fontWeight={'600'}>
              <Stack spacing={'20px'}>
                <Stack align={"center"}>
                  <AiOutlineTwitter fontSize={'48px'} color={'#003232'}/>
                </Stack>
                <Link href={'https://twitter.com/NEST_Protocol'} isExternal>@NEST_Protocol <ChevronRightIcon/></Link>
                <Link href={'https://twitter.com/NESTDAOSupport'} isExternal>@NESTDAOSupport <ChevronRightIcon/></Link>
              </Stack>
              <Stack spacing={'20px'}>
                <Stack align={"center"}>
                  <FaTelegramPlane fontSize={'48px'} color={'#003232'}/>
                </Stack>
                <Link href={'https://t.me/NEST_Community'} isExternal>@NEST_Community <ChevronRightIcon/></Link>
                <Link href={'https://t.me/nest_chat'} isExternal>@nest_chat <ChevronRightIcon/></Link>
              </Stack>
              <Stack spacing={'20px'}>
                <Stack align={"center"}>
                  <AiOutlineGithub fontSize={'48px'} color={'#003232'}/>
                </Stack>
                <Link href={'/developers'}>For developers <ChevronRightIcon/></Link>
              </Stack>
            </HStack>
            <Stack spacing={'60px'} align={"center"}>
              <HStack spacing={'100px'}>
                <Text>image1</Text>
                <Text>image2</Text>
                <Text>image3</Text>
              </HStack>
              <HStack spacing={'100px'}>
                <Text>image1</Text>
                <Text>image2</Text>
                <Text>image3</Text>
              </HStack>
            </Stack>
            <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"} pt={'93px'}>Listed on more than 15
              exchanges</Text>
          </Stack>
          <Stack py={'138px'} align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>Blogs</Heading>
            <HStack spacing={'44px'}>
              <Stack w={'308px'} bg={"white"} borderRadius={'20px'} h={'352px'}>
                <Text>image</Text>
                <Stack spacing={'20px'} p={'20px'}>
                  <Text fontSize={'18px'} fontWeight={'bold'}>Coinbase Announces Planned Listing of Tokens, Adds $NEST
                    to ‘Experimental Asset’ Label</Text>
                  <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Leading United States-based
                    cryptocurrency</Text>
                  <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>July 25, 2022</Text>
                </Stack>
              </Stack>
              <Stack w={'308px'} bg={"white"} h={'352px'} borderRadius={'20px'}>
                <Text>image</Text>
                <Stack spacing={'20px'} p={'20px'}>
                  <Text fontSize={'18px'} fontWeight={'bold'}>NEST Protocol: A New Paradigm of Game Theoretic
                    Oracle</Text>
                  <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Blockchain innovation defined the major
                    part of the last decade, with</Text>
                  <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>Jun 9, 2022</Text>
                </Stack>
              </Stack>
              <Stack w={'308px'} bg={"white"} h={'352px'} borderRadius={'20px'}>
                <Text>image</Text>
                <Stack spacing={'20px'} p={'20px'}>
                  <Text fontSize={'18px'} fontWeight={'bold'}>NEST’s RSS FEED INTEGRATED WITH CRYPTO.COM PRICE
                    PAGE</Text>
                  <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Through Crypto.com’s NEST Price Page, you
                    can now directly access NEST’s</Text>
                  <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>May 6, 2022</Text>
                </Stack>
              </Stack>
            </HStack>
            <Box pt={'20px'}>
              <Button variant={'outline'}>
                More
              </Button>
            </Box>
          </Stack>
          <Stack spacing={'48px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>Integrations & Partners</Heading>
            <Stack bg={'rgba(255,255,255, 0.7)'} h={'440px'} align={"center"} spacing={'60px'} justify={"center"}>
              <HStack spacing={'80px'}>
                <chakra.img src={"/svg/huobi.svg"} h={'45px'}/>
                <chakra.img src={"/svg/binance.svg"} h={'45px'}/>
                <chakra.img src={"/svg/Coinbase.svg"} h={'45px'}/>
                <chakra.img src={"/svg/polygon.svg"} h={'45px'}/>
              </HStack>
              <HStack spacing={'80px'}>
                <chakra.img src={"/svg/kcc.svg"} h={'45px'}/>
                <chakra.img src={"/svg/cointelegraph.svg"} h={'45px'} />
                <chakra.img src={"/svg/cube.svg"} h={'45px'}/>
                <chakra.img src={"/svg/peckshield.svg"} h={'45px'}/>
                <chakra.img src={"/svg/fortube.svg"} h={'45px'}/>
              </HStack>
              <HStack spacing={'80px'}>
                <chakra.img src={"/svg/polynetwork.svg"} h={'45px'}/>
                <chakra.img src={"/svg/CoFiX.svg"} h={'45px'}/>
                <chakra.img src={"/svg/Parasset.svg"} h={'45px'}/>
                <chakra.img src={"/svg/certik.svg"} h={'45px'}/>
              </HStack>
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