import React from 'react';
import {
  ChakraProvider,
  Text,
  Stack,
  Link,
  Button,
  Heading,
  HStack,
  chakra,
  Box,
  Spacer,
  Modal,
  ModalContent,
  ModalCloseButton, ModalBody, VStack, useDisclosure, useMediaQuery,
} from "@chakra-ui/react";
import theme from "../../chakra"
import Head from "@docusaurus/Head";
import {HamburgerIcon} from "@chakra-ui/icons";
import {menu} from "@site/src/pages";
import {useLocation} from "@docusaurus/router";

export default function NestFi(): JSX.Element {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const {isOpen, onOpen, onClose} = useDisclosure()
  const location = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST FI | the decentralized financial market based on OMM</title>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      {isDesktop ? (
        <Stack h={'100%'} w={'100vw'} align={"center"}>
          <Stack w={'100%'} maxW={'1920px'} h={'100%'} bgPosition={"center"} bgSize={'cover'}
                 bgImage={'/image/NEST_Fi/NESTFi_bg.jpg'} spacing={0}>
            <Stack px={'45px'} h={'88px'} direction={"row"} justifyContent={"space-between"} align={"center"}>
              <Link rel={'alternate'} hrefLang={'en'} href={'/'}>
                <chakra.img
                  src={"/img/logo.svg"}
                  alt="nest"
                  h={'20px'}
                />
              </Link>
              <Stack direction={"row"} align={"center"} spacing={'24px'} fontWeight={'500'} fontSize={'15px'}>
                <Link rel={'alternate'} hrefLang={'en'} href={'/nest-fi/'} color={'#EAAA00'} fontWeight={'700'}>NEST Fi</Link>
                <Link rel={'alternate'} hrefLang={'en'} href={'/developers/'} color={'#003232'}>Developers</Link>
                <Link rel={'alternate'} hrefLang={'en'} href={'/docs/Overview/What-is-NEST-Protocol/'} color={'#003232'}>Doc</Link>
                <Link rel={'alternate'} hrefLang={'en'} href={'/blogs/'} color={'#003232'}>Blog</Link>
                <Link rel={'alternate'} hrefLang={'en'} href={'/about/'} color={'#003232'}>About</Link>
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
              <chakra.img src={'/image/NEST_Fi/02-icon-01@2x.png'} w={'100px'} alt={''} py={'20px'}/>
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
                    <chakra.img src={'/image/NEST_Fi/02-icon-02@2x.png'} alt={''} h={'98px'}/>
                  </Stack>
                  <Text fontSize={'18px'} fontWeight={'bold'}>Valid Settlement</Text>
                  <Text fontWeight={'600'} fontSize={'13px'}>ETH cannot make valid<br/>settlement for all
                    transactions;<br/>however, OMM can settle all<br/>transactions.</Text>
                </Stack>
                <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                  <Stack align={"center"} h={'120px'} justify={"center"}>
                    <chakra.img src={'/image/NEST_Fi/02-icon-03@2x.png'} alt={''} h={'88px'} w={'88px'}/>
                  </Stack>
                  <Text fontSize={'18px'} fontWeight={'bold'}>Market Clearing</Text>
                  <Text fontWeight={'600'} fontSize={'13px'}>OMM can structure atomic<br/>liquidation, which means that
                    all<br/>excess return can be cleared.</Text>
                </Stack>
                <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                  <Stack align={"center"} h={'120px'} justify={"center"}>
                    <chakra.img src={'/image/NEST_Fi/02-icon-04@2x.png'} alt={''} h={'87px'} w={'94px'}/>
                  </Stack>
                  <Text fontSize={'18px'} fontWeight={'bold'}>Infinite Liquidity</Text>
                  <Text fontWeight={'600'} fontSize={'13px'}>The liquidity will not be limited<br/>by the LP’s pool
                    size,
                    theoretically<br/>OMM can provide infinite liquidity</Text>
                </Stack>
              </HStack>
            </Stack>
            <Stack align={"center"} spacing={'48px'}>
              <Heading fontSize={'50px'}>Dapps in NEST FI</Heading>
              <HStack w={'full'}>
                <Stack w={'50%'} align={"center"} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/iPhone_1.webp'} h={'400px'}/>
                </Stack>
                <Stack w={'50%'} bg={'white'} align={"center"}>
                  <Stack w={'400px'} py={'155px'}  borderRadius={'20px'}>
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
                </Stack>
              </HStack>
              <HStack w={'full'} pt={'40px'}>
                <Stack w={'50%'} bg={'white'} align={"center"}>
                  <Stack py={'155px'} borderRadius={'20px'}>
                    <Text fontSize={'25px'} fontWeight={600}>NEST FI - Options</Text>
                    <Text fontSize={'15px'} fontWeight={600}>Buy options with flexible choices on exercise date,<br/>direction
                      and strike price, and no commission.</Text>
                    <Box pt={'25px'}>
                      <Button w={'160px'} onClick={() => {
                        window.open('https://finance.nestprotocol.org/#/options', '_blank')
                      }}>
                        Buy Options
                      </Button>
                    </Box>
                  </Stack>
                </Stack>
                <Stack w={'50%'} align={"center"} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/iPhone_2.webp'} h={'400px'}/>
                </Stack>
              </HStack>
            </Stack>
            <Stack h={'138px'}/>
            <HStack py={'88px'} px={'45px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"}
                    align={"start"}>
              <Stack spacing={'40px'} align={"start"}>
                <Stack spacing={'22px'}>
                  <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch
                    App</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Buy futures, options and win NEST</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} fontWeight={'bold'} href={'/blogs/'}>NEST Blog</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Latest blogs from NEST</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} fontWeight={'bold'} href={'/about/nra/'}>NEST Research Academy</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know about NRA</Text>
                </Stack>
              </Stack>
              <Stack spacing={'40px'}>
                <Stack spacing={'22px'}>
                  <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} fontWeight={'bold'} href={'/docs/PVM-Technical-Reference/'}>Developer
                    Docs</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know how to develop on NEST</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs/'}>FAQs</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Frequently asked questions</Text>
                </Stack>
                <HStack spacing={'24px'}>
                  <Link rel={'alternate'} hrefLang={'en'} href={'https://github.com/NEST-Protocol'} isExternal>
                    <chakra.img src={'/image/Footer/github_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                  <Link rel={'alternate'} hrefLang={'en'} href={'https://twitter.com/nest_protocol/'} isExternal>
                    <chakra.img src={'/image/Footer/twitter_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                  <Link rel={'alternate'} hrefLang={'en'} href={'https://t.me/nest_chat/'} isExternal>
                    <chakra.img src={'/image/Footer/telegram_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                  <Link rel={'alternate'} hrefLang={'en'} href={'https://nest-protocol-82041.medium.com/'} isExternal>
                    <chakra.img src={'/image/Footer/medium_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                  <Link rel={'alternate'} hrefLang={'en'} href={'https://discord.gg/nestprotocol'} isExternal>
                    <chakra.img src={'/image/Footer/discord_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                  <Link rel={'alternate'} hrefLang={'en'} href={'mailto:hello@nestprotocol.org'} isExternal>
                    <chakra.img src={'/image/Footer/email_icon.svg'} h={'44px'} w={'44px'}/>
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
      ) : (
        <Stack h={'100%'} bgImage={'/image/NEST_Fi/02-Phone-bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
          <HStack w={'full'} px={'24px'} py={'20px'}>
            <Link rel={'alternate'} hrefLang={'en'} href={'/'}>
              <chakra.img
                src={"/img/logo.svg"}
                alt="nest"
                h={'20px'}
              />
            </Link>
            <Spacer/>
            <Button onClick={onOpen} fontSize={'36px'} alignItems={'end'} p={0} variant={"ghost"} _active={{bg: null}}
                    _hover={{bg: null}} aria-label={'menu'}>
              <HamburgerIcon />
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              blockScrollOnMount={false}
              returnFocusOnClose={false}
              size={'full'}
            >
              <ModalContent>
                <ModalCloseButton
                  size={'36px'}
                  mt={'14px'}
                  mx={'11px'}
                />
                <ModalBody p={'22px'}>
                  <VStack alignItems={'center'} pt={'100px'} spacing={'120px'}>
                    <VStack spacing={'17px'}>
                      {menu.map(({name, pathname}) => (
                        <Button
                          key={name}
                          aria-label={name}
                          color={location.pathname.includes(pathname) ? '#EAAA00' : '#003232'}
                          fontWeight={location.pathname.includes(pathname) ? 'bold' : '600'}
                          variant={'ghost'}
                          fontSize={'25px'}
                          _active={{bg: null}}
                          _hover={{bg: null}}
                          p={0}
                          onClick={() => {
                            window.location.pathname = pathname
                            onClose()
                          }}
                        >
                          {name}
                        </Button>
                      ))}

                    </VStack>
                    <Button
                      variant={'solid'}
                      aria-label={'App'}
                      bg={'#EAAA00'}
                      borderRadius={'full'}
                      _active={{bg: null}}
                      _hover={{bg: null}}
                      minH={'44px'}
                      px={'70px'}
                      minW={'120px'}
                      onClick={() => {
                        window.open('https://finance.nestprotocol.org/', '_blank')
                      }}
                    >
                      App
                    </Button>
                  </VStack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </HStack>
          <Stack align={"center"} pt={'180px'} pb={'220px'}>
            <Text fontWeight={'bold'} textAlign={"center"} fontSize={'25px'}>NEST Fi<br/>the decentralized<br/>financial
              market<br/>based on OMM</Text>
            <Text fontSize={'12px'} textAlign={"center"} fontWeight={'600'}>NEST Fi (NEST Financial Market)<br/>provides
              futures and options<br/>with infinite liquidity now.</Text>
          </Stack>
          <Stack align={"center"} py={'40px'} bg={'rgba(255,255,255,0.7)'}>
            <Text fontWeight={'bold'} fontSize={'25px'}>What is OMM?</Text>
            <chakra.img src={'/image/NEST_Fi/02-icon-01@2x.png'} w={'50px'} py={'40px'}/>
            <Text fontSize={'16px'} fontWeight={'bold'} textAlign={"center"}>From P2P to OMM, <br/>a new settlement
              paradigm</Text>
            <Text fontSize={'12.5px'} fontWeight={600} textAlign={"center"}>OMM(Omnipotent Market Maker) is<br/>a new
              trading and settlement paradigm:<br/>everyone trades and settles<br/>stochastic assets with NEST
              system<br/>rather than individuals.</Text>
            <Text fontWeight={'600'} fontSize={'12.5px'}>First constraint:</Text>
            <Text fontWeight={'600'} fontSize={'12.5px'} textAlign={"center"} color={'#7D7D7D'}>c(X) ≥ E(X)<br/>The
              production cost of stochastic asset<br/>is not less than the expected<br/>value of this stochastic
              asset</Text>
            <Text fontWeight={'600'} fontSize={'12.5px'}>Second constraint:</Text>
            <Text fontWeight={'600'} fontSize={'12.5px'} textAlign={"center"} color={'#7D7D7D'}>E(X) ≥ E(F(X))<br/>
              The expected value of the<br/>
              programmed stochastic asset<br/>
              will be not higher than its cost.</Text>
          </Stack>
          <Stack align={"center"} pt={'62px'}>
            <Text fontSize={'25px'} fontWeight={'bold'}>What does OMM solve?</Text>
            <Stack px={'24px'} pt={'38px'} w={'full'}>
              <Stack px={'33px'} bg={'white'} borderRadius={'20px'} align={"center"} pt={'50px'}>
                <chakra.img src={'/image/NEST_Fi/02-icon-02@2x.png'} w={'150px'}/>
                <Stack py={'50px'} w={'full'}>
                  <Text fontWeight={'bold'} fontSize={'16px'}>Valid Settlement</Text>
                  <Text fontWeight={'600'} fontSize={'12.5px'}>ETH cannot make valid settlement for<br/>all
                    transactions; however, OMM can<br/>settle all transactions.</Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack px={'24px'} py={'24px'} w={'full'}>
              <Stack px={'33px'} pt={'50px'} bg={'white'} borderRadius={'20px'} align={"center"}>
                <Stack>
                  <chakra.img src={'/image/NEST_Fi/02-icon-03@2x.png'} w={'68px'}/>
                </Stack>
                <Stack py={'50px'} w={'full'}>
                  <Text fontWeight={'bold'} fontSize={'16px'}>Market Clearing</Text>
                  <Text fontWeight={'600'} fontSize={'12.5px'}>OMM can structure atomic<br/>liquidation, which means
                    that all<br/>excess return can be cleared.</Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack px={'24px'} w={'full'}>
              <Stack px={'33px'} pt={'50px'} bg={'white'} borderRadius={'20px'} align={"center"}>
                <Stack>
                  <chakra.img src={'/image/NEST_Fi/02-icon-04@2x.png'} w={'68px'}/>
                </Stack>
                <Stack py={'50px'} w={'full'}>
                  <Text fontWeight={'bold'} fontSize={'16px'}>Infinite Liquidity</Text>
                  <Text fontWeight={'600'} fontSize={'12.5px'}>The liquidity will not be limited<br/>by the LP’s pool
                    size, theoretically<br/>OMM can provide infinite liquidity</Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack align={"center"} pt={'62px'}>
            <chakra.img src={'/image/NEST_Fi/iPhone_1.webp'} w={'180px'}/>
          </Stack>
          <Stack align={"center"} bg={'rgba(255,255,255, 0.8)'} py={'30px'}>
            <Text fontWeight={'600'} fontSize={'16px'}>NEST FI - Futures</Text>
            <Text textAlign={"center"} fontWeight={'600'} fontSize={'12.5px'}>Trade BTC/USDT and ETH/USDT futures
              directly<br/>from your wallet without trading fee</Text>
            <Stack pt={'30px'}>
              <Button onClick={() => {
                window.open('https://finance.nestprotocol.org/#/futures', '_blank')
              }}>Buy Futures</Button>
            </Stack>
          </Stack>
          <Stack align={"center"} py={'40px'}>
            <chakra.img src={'/image/NEST_Fi/iPhone_2.webp'} w={'180px'}/>
          </Stack>
          <Stack align={"center"} bg={'rgba(255,255,255, 0.8)'} py={'30px'}>
            <Text fontWeight={'600'} fontSize={'16px'}>NEST FI - Options</Text>
            <Text textAlign={"center"} fontWeight={'600'} fontSize={'12.5px'}>Buy options with flexible choices on
              exercise date,<br/>direction and strike price, and no commission</Text>
            <Stack pt={'30px'}>
              <Button onClick={() => {
                window.open('https://finance.nestprotocol.org/#/options', '_blank')
              }}>Buy Options</Button>
            </Stack>
          </Stack>
          <Stack h={'62px'}/>
          <Stack py={'44px'} px={'24px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"}
                 align={"start"}>
            <Stack spacing={'40px'} align={"start"} w={'full'}>
              <Stack spacing={'22px'}>
                <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch
                  App</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Buy futures, options and win NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} fontWeight={'bold'} href={'/blogs'}>NEST Blog</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Latest blogs from NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} fontWeight={'bold'} href={'/about/nra/'}>NEST Research Academy</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know about NRA</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} fontWeight={'bold'} href={'/docs/PVM-Technical-Reference/'}>Developer
                  Docs</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know how to develop on NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs/'}>FAQs</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Frequently asked questions</Text>
              </Stack>
              <Stack spacing={'10px'} w={'full'}>
                <Text fontSize={'15px'} fontWeight={'bold'}>Market price</Text>
                <chakra.div
                  id="crypto-widget-CoinList"
                  data-transparent="true"
                  data-design="classic"
                  data-coin-ids="2204"
                  w={'100%'}
                ></chakra.div>
              </Stack>
              <Stack w={'full'} align={"center"} spacing={'12px'}>
                <HStack spacing={'40px'}>
                  <Link href={'https://discord.gg/nestprotocol'} isExternal>
                    <chakra.img src={'/image/Footer/discord_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                  <Link href={'https://github.com/NEST-Protocol'} isExternal>
                    <chakra.img src={'/image/Footer/github_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                  <Link href={'https://twitter.com/nest_protocol/'} isExternal>
                    <chakra.img src={'/image/Footer/twitter_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                </HStack>
                <HStack spacing={'40px'}>
                  <Link href={'https://t.me/nest_chat/'} isExternal>
                    <chakra.img src={'/image/Footer/telegram_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                  <Link href={'https://nest-protocol-82041.medium.com/'} isExternal>
                    <chakra.img src={'/image/Footer/medium_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                  <Link href={'mailto:hello@nestprotocol.org'} isExternal>
                    <chakra.img src={'/image/Footer/email_icon.svg'} h={'44px'} w={'44px'}/>
                  </Link>
                </HStack>
              </Stack>
              <Stack align={"center"} w={'full'}>
                <Text fontSize={'14px'} textAlign={"center"} fontWeight={'bold'} color={'#7D7D7D'}>@2022 NEST</Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      )}
    </ChakraProvider>
  );
}