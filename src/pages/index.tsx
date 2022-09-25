import React, {useState} from 'react';
import {
  ChakraProvider, Text, Stack, Link, Button, Heading, HStack, chakra, Box, Spacer, Divider, useInterval
} from "@chakra-ui/react";
import theme from "../chakra"
import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {AiOutlineTwitter, FaTelegramPlane, AiOutlineGithub} from "react-icons/all";
import Head from "@docusaurus/Head";

export default function Home(): JSX.Element {
  const [start, setStart] = useState(0)
  const [selectedWork, setSelectedWork] = useState(0)
  const [selectedStochastic, setSelectedStochastic] = useState(0)

  useInterval(() => {
    setSelectedStochastic((selectedStochastic + 1) % 4)
  }, 10000)

  const stochastic = [
    {
      icon: '',
      title: 'Stochastic Asset is an on-chain asset that can be issued and destroyed in response to random information flows',
      desc: ''
    },
    {
      icon: '',
      title: 'Token is information asset',
      desc: 'The blockchain mechanism prevents consensus information (such as wallet balance) from being spent twice. The source of token value and the basis for token becoming an asset is the scarcity of consensus information. As a result, we refer to a token as an information asset that can generate scarce information and is a unit that measures the value of information.'
    },
    {
      icon: '',
      title: 'What is the difference between BTC, ETH and NEST?',
      desc: 'The mechanisms of BTC\'s UTXO and ETH\'s EVM both ensure that the quantity of tokens will not increase during the transaction. NEST\'s PVM extends this scenario by controlling the expected value rather than by controlling the quantity, which will lead to a new paradigm revolution.'
    },
    {
      icon: '',
      title: 'Why do blockchain need stochastic assets?',
      desc: `Almost all financial applications can be thought of as the acquisition of stochastic assets with varying risk-return structures. Stochastic assets are a more natural way for building on-chain finance, such as decentralized derivatives.`
    }
  ]

  const work = [
    {
      type: 'PVM',
      title: `PVM (Probabilistic Virtual Machine) is a class of\nvirtual machine structures based on a library of basic\nfunctions that allow a developer to assemble as many\napplications as he wants - similar to EVM programming`,
      desc: `PVM enables the generation and programming of\nstochastic assets, which is widely used in DeFi, GameFi,\nNFT, etc.`,
      link: '/docs/Concept/History-of-EVM-&-PVM'
    },
    {
      type: 'NEST Oracle',
      title: `The NEST oracle is currently the market's\nonly truly decentralized oracle. The stochastic\ninformation of decentralized price flow is introduced\ninto the chain using the Game Theoretical\nmechanism of arbitrage.`,
      desc: `The NEST token is generated using the NEST\noracle's stochastic information. The NEST token\n serves as the monetary unit for all stochastic assets\nin the NEST ecosystem.`,
      link: '/docs/NEST-Oracle/How-does-NEST-Oracle-Work'
    },
    {
      type: 'OMM',
      title: `OMM is a new trading and settlement paradigm:\nEveryone trades and settle stochastic assets with\ncontracts rather than individuals.`,
      desc: `OMM addresses the issue of liquidity and settlement.\nNEST tokens can be used to circulate any stochastic\nasset. Any benefit, even if it is greater than the\nexpected value, can be settled.\nThere is no need to match makers and takers, and all\nNEST holders share the same risks and rewards.
`,
      link: ''
    },
  ]

  const developmentPath = [
    {title: `2018.12 v1.0`, desc: `Start! A lending\nprotocol goes live.`},
    {title: '2019.12 v2.0', desc: `NEST oracle V1.0\ngoes live.`},
    {
      title: '2020.07 v3.0',
      desc: `NEST oracle upgraded.\nOpen all oracle tracks\nand supported all\nERC20 Token/ETH price`
    },
    {title: '2021.04 v3.6', desc: `Voting governance\nmodule was added`},
    {title: '2021.11 v4.1', desc: `NEST oracle upgraded.\nAllows anyone\nto build their oracle\nfor their project.`},
    {title: '2021.12 v4.3', desc: `NEST oracle upgraded.\nAllows each channel for\nmultiple quotation pairs.`},
    {title: '2022.07 v5.0', desc: `Merge FORT protocol\nNEST protocol= NEST oracle\n+ OMM +PVM`},
    {title: 'Gene game', desc: '', icon: '/svg/icon_17.svg'},
    {title: 'Keyboard boy game', desc: '', icon: '/svg/icon_16.svg'},
    {title: 'DABS', desc: '', icon: '/image/Home/01-icon-dabs.svg'},
    {title: 'Cyber ink', desc: '', icon: '/image/Home/01-icon-cyberink.png'},
  ]

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      <Stack h={'100%'} w={'100vw'} align={"center"}>
        <Stack w={'100%'} maxW={'1920px'} h={'100%'} bgSize={'cover'} bgImage={"image/Home/Home_bg.jpg"}
               bgPosition={"center"}
               spacing={0}>
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
              <Button onClick={() => {
                window.open('https://finance.nestprotocol.org/', '_blank')
              }}>
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
          <Stack px={['20px', '40px', '80px', '160px']}>
            <Stack bg={'rgba(255, 255, 255, 0.7)'} py={'92px'} w={'full'} align={"center"} borderRadius={'20px'}>
              <Heading fontSize={'50px'} textAlign={"center"}>What is stochastic assets?</Heading>
              <chakra.img src={'/image/Home/01-icon-01.png'} alt={''} py={'50px'}/>
              <Stack h={'200px'} align={"center"} overflow={"scroll"}>
                <Text fontSize={'25px'} fontWeight={"bold"} w={'620px'}
                      textAlign={"center"}>{stochastic[selectedStochastic].title}</Text>
                <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"} w={'600px'}>
                  {stochastic[selectedStochastic].desc}
                </Text>
              </Stack>
              <HStack spacing={'12px'} pt={'20px'}>
                <chakra.div w={'10px'} h={'10px'} bg={selectedStochastic === 0 ? '#EAAA00' : ''}
                            border={selectedStochastic === 0 ? '' : '1px solid #003344'}
                            onClick={() => setSelectedStochastic(0)}
                            cursor={'pointer'}
                            borderRadius={'full'}/>
                <chakra.div w={'10px'} h={'10px'} bg={selectedStochastic === 1 ? '#EAAA00' : ''}
                            border={selectedStochastic === 1 ? '' : '1px solid #003344'}
                            onClick={() => setSelectedStochastic(1)}
                            cursor={'pointer'}
                            borderRadius={'full'}/>
                <chakra.div w={'10px'} h={'10px'} bg={selectedStochastic === 2 ? '#EAAA00' : ''}
                            border={selectedStochastic === 2 ? '' : '1px solid #003344'}
                            onClick={() => setSelectedStochastic(2)}
                            cursor={'pointer'}
                            borderRadius={'full'}/>
                <chakra.div w={'10px'} h={'10px'} bg={selectedStochastic === 3 ? '#EAAA00' : ''}
                            border={selectedStochastic === 3 ? '' : '1px solid #003344'}
                            onClick={() => setSelectedStochastic(3)}
                            cursor={'pointer'}
                            borderRadius={'full'}/>
              </HStack>
            </Stack>
          </Stack>
          <Stack align={"center"}>
            <Heading pt={'138px'} fontSize={'50px'} textAlign={"center"} pb={'57px'}>How does NEST Protocol
              work?</Heading>
            <Stack bg={'rgba(255, 255, 255, 0.7)'} align={"center"} py={'130px'} spacing={'18px'} w={'full'}>
              <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600} onClick={() => setSelectedWork(0)}
                     cursor={'pointer'}>
                <Text>Program stochastic asset</Text>
                <Text color={'#00A0E9'}>PVM</Text>
                <ChevronDownIcon color={'#00A0E9'}/>
              </Stack>
              <HStack align={"end"} spacing={'24px'}>
                <Stack w={'300px'} align={"end"} pb={'40px'}>
                  <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                         onClick={() => setSelectedWork(1)} cursor={'pointer'}>
                    <Text>Provide random information flow</Text>
                    <Text color={'#00A0E9'}>NEST Oracle</Text>
                    <ChevronDownIcon color={'#00A0E9'}/>
                  </Stack>
                </Stack>
                <chakra.img src={'/image/Home/01-icon-02.png'} alt={''}/>
                <Stack align={"start"} w={'300px'} pb={'40px'}>
                  <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                         onClick={() => setSelectedWork(2)} cursor={'pointer'}>
                    <Text>Generate stochastic assets</Text>
                    <Text color={'#00A0E9'}>OMM</Text>
                    <ChevronDownIcon color={'#00A0E9'}/>
                  </Stack>
                </Stack>
              </HStack>
              <Stack pt={'50px'} h={'300px'}>
                <Text fontSize={'25px'} textAlign={"center"} fontWeight={'bold'}>
                  {work[selectedWork].type}
                </Text>
                <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"} whiteSpace={'break-spaces'}>
                  {work[selectedWork].title}
                </Text>
                <Text textAlign={"center"} color={'#7D7D7D'} fontWeight={'600'} fontSize={'15px'}
                      whiteSpace={'break-spaces'}>
                  {work[selectedWork].desc}
                  <Link color={'#00A0E9'} href={work[selectedWork].link}> Learn more <ChevronRightIcon/></Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack py={'138px'} spacing={'48px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>Development path</Heading>
            <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"}>The NEST community always insists<br/>on
              decentralization and innovation</Text>
            <HStack px={'45px'} align={"start"}>
              <chakra.img src={'/svg/right_icon.svg'} w={'44px'} h={'44px'} transform={'rotate(180deg)'}
                          opacity={start === 0 ? 0.5 : 1}
                          cursor={"pointer"}
                          onClick={() => {
                            if (start > 0) {
                              setStart(start - 1)
                            }
                          }}/>
              <Stack w={'full'} spacing={'-34px'} align={"center"}>
                <Stack h={'44px'} w={'full'} justify={"center"} px={'15px'}>
                  <Divider h={'1px'} color={'#C9C9C9'}/>
                </Stack>
                <HStack px={'45px'} justify={"space-around"} w={'full'} align={"start"}>
                  {developmentPath.slice(start, start + 5).map((item, index) => (
                    <Stack key={index} align={"center"} w={'200px'} h={'180px'}>
                      <chakra.img src={'/image/Home/01-icon-03.png'} h={'24px'} w={'36px'} alt={''} mb={'22px'}/>
                      <Text fontSize={'17px'} fontWeight={'bold'}>{item.title}</Text>
                      <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>{item.desc}</Text>
                      {item?.icon && (
                        <chakra.img src={item.icon} h={'44px'} mt={'22px'}/>
                      )}
                    </Stack>
                  ))}
                </HStack>
              </Stack>
              <chakra.img src={'/svg/right_icon.svg'} w={'44px'} h={'44px'} cursor={"pointer"}
                          opacity={start === developmentPath.length - 5 ? 0.5 : 1}
                          onClick={() => {
                            if (start < developmentPath.length - 5) {
                              setStart(start + 1)
                            }
                          }}/>
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
                <Stack w={'130px'} align={"center"}>
                  <Link href={'https://www.coinbase.com/'} isExternal>
                    <chakra.img src={'/image/Home/01-icon-coinbase.png'} h={'34px'} alt={''}/>
                  </Link>
                </Stack>
                <Stack w={'130px'} align={"center"}>
                  <Link href={'https://www.huobi.com/'} isExternal>
                    <chakra.img src={'/image/Home/01-icon-huobiresearch.png'} h={'34px'} alt={''}/>
                  </Link>
                </Stack>
                <Stack w={'130px'} align={"center"}>
                  <Link href={'https://www.mexc.com/'} isExternal>
                    <chakra.img src={'/image/Home/01-icon-mexc.png'} h={'45px'} alt={''}/>
                  </Link>
                </Stack>
              </HStack>
              <HStack spacing={'100px'}>
                <Link w={'130px'} href={'https://www.lbank.info/'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-LBANK.svg'} h={'45px'} alt={''}/>
                </Link>
                <Link w={'130px'} href={'https://www.bibox.com/'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-Bibox.svg'} h={'45px'} alt={''}/>
                </Link>
                <Link w={'130px'} href={'https://www.gate.io/'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-Gate.svg'} w={'130px'} h={'45px'} alt={''}/>
                </Link>
              </HStack>
            </Stack>
            <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"} pt={'93px'}>Listed on more than 15
              exchanges</Text>
          </Stack>
          <Stack py={'138px'} align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>Blogs</Heading>
            <HStack spacing={'44px'}>
              <Stack w={'308px'} bg={"white"} borderRadius={'20px'} spacing={0}>
                <chakra.img src={'/image/Home/01-card-01.png'} alt={''}/>
                <Stack spacing={'10px'} p={'20px'} h={'230px'}>
                  <Text fontSize={'18px'} fontWeight={'bold'}>Coinbase Announces Planned Listing of Tokens, Adds $NEST
                    to ‘Experimental Asset’ Label</Text>
                  <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Leading United States-based
                    cryptocurrency</Text>
                  <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>July 25, 2022</Text>
                </Stack>
              </Stack>
              <Stack w={'308px'} bg={"white"} borderRadius={'20px'} spacing={0}>
                <chakra.img src={'/image/Home/01-card-02.png'} alt={''}/>
                <Stack spacing={'20px'} p={'20px'} h={'230px'}>
                  <Text fontSize={'18px'} fontWeight={'bold'}>NEST Protocol: A New Paradigm of Game Theoretic
                    Oracle</Text>
                  <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Blockchain innovation defined the major
                    part of the last decade, with</Text>
                  <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>Jun 9, 2022</Text>
                </Stack>
              </Stack>
              <Stack w={'308px'} bg={"white"} borderRadius={'20px'} spacing={0}>
                <chakra.img src={'/image/Home/01-card-03.png'} alt={''}/>
                <Stack spacing={'20px'} p={'20px'} h={'230px'}>
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
                <Link href={'https://www.huobi.com/zh-cn/'} isExternal>
                  <chakra.img src={"/svg/huobi.svg"} h={'45px'}/>
                </Link>
                <Link href={'https://www.binance.com/'} isExternal>
                  <chakra.img src={"/svg/binance.svg"} h={'45px'}/>
                </Link>
                <Link href={'https://www.coinbase.com/'} isExternal>
                  <chakra.img src={"/svg/Coinbase.svg"} h={'45px'}/>
                </Link>
                <Link href={'https://polygon.technology/'} isExternal>
                  <chakra.img src={"/svg/polygon.svg"} h={'45px'}/>
                </Link>
              </HStack>
              <HStack spacing={'80px'}>
                <Link href={'https://kcc.io/'} isExternal>
                  <chakra.img src={"/svg/kcc.svg"} h={'45px'}/>
                </Link>
                <Link href={'https://cointelegraph.com/'} isExternal>
                  <chakra.img src={"/svg/cointelegraph.svg"} h={'45px'}/>
                </Link>
                <Link href={'https://cube.network/'} isExternal>
                  <chakra.img src={"/svg/cube.svg"} h={'45px'}/>
                </Link>
                <Link href={'https://peckshield.com/'} isExternal>
                  <chakra.img src={"/svg/peckshield.svg"} h={'45px'}/>
                </Link>
                <Link href={'https://for.tube/'} isExternal>
                  <chakra.img src={"/svg/fortube.svg"} h={'45px'}/>
                </Link>
              </HStack>
              <HStack spacing={'80px'}>
                <Link href={'https://polygon.technology/'} isExternal>
                  <chakra.img src={"/svg/polynetwork.svg"} h={'45px'}/>
                </Link>
                <Link href={'https://cofix.tech/'} isExternal>
                  <chakra.img src={"/svg/CoFiX.svg"} h={'45px'}/>
                </Link>
                <Link href={'https://www.parasset.top/'} isExternal>
                  <chakra.img src={"/svg/Parasset.svg"} h={'45px'}/>
                </Link>
                <Link href={'https://www.certik.com/'} isExternal>
                  <chakra.img src={"/svg/certik.svg"} h={'45px'}/>
                </Link>
              </HStack>
            </Stack>
          </Stack>
          <Stack h={'138px'}/>
          <HStack py={'88px'} px={'45px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"}
                  align={"start"}>
            <Stack spacing={'40px'} align={"start"}>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch
                  App</Link>
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
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/docs/Building-On-NEST/Contracts/'}>Developer
                  Docs</Link>
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