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
  Spacer,
  useDisclosure,
  Modal,
  ModalContent,
  ModalCloseButton, ModalBody, VStack, useMediaQuery,
} from "@chakra-ui/react";
import theme from "../../../chakra"
import {ChevronLeftIcon, ChevronRightIcon, HamburgerIcon} from "@chakra-ui/icons";
import Head from "@docusaurus/Head";
import {menu} from "@site/src/pages";
import {useLocation} from "@docusaurus/router";

export default function NRA(): JSX.Element {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const {isOpen, onOpen, onClose} = useDisclosure()
  const location = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST Research Academy | NEST Protocol</title>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      {isDesktop ? (
        <Stack h={'100%'} w={'100vw'} align={"center"}>
          <Stack w={'100%'} maxW={'1920px'} h={'100%'} bgSize={'cover'} bgImage={'/image/About/About_bg_nra.jpg'}
                 bgPosition={"center"} spacing={0}>
            <Stack px={'45px'} h={'88px'} direction={"row"} justifyContent={"space-between"} align={"center"}>
              <Link href={'/'}>
                <chakra.img
                  src={"/img/logo.svg"}
                  alt="nest"
                  h={'20px'}
                />
              </Link>
              <Stack direction={"row"} align={"center"} spacing={'24px'} fontWeight={'500'} fontSize={'15px'}>
                <Link href={'/nest-fi/'} color={'#003232'}>NEST Fi</Link>
                <Link href={'/developers/'} color={'#003232'}>Developers</Link>
                <Link href={'/docs/Overview/What-is-NEST-Protocol/'} color={'#003232'}>Doc</Link>
                <Link href={'/blogs/'} color={'#003232'}>Blog</Link>
                <Link href={'/about/'} color={'#EAAA00'}>About</Link>
                <Button onClick={() => {
                  window.open('https://finance.nestprotocol.org/', '_blank')
                }}>
                  App
                </Button>
              </Stack>
            </Stack>
            <Stack align={"center"} spacing={'48px'} pb={'210px'}>
              <HStack color={'#00A0E9'} fontSize={'15px'} fontWeight={'600'} w={'full'} px={'45px'}>
                <Link href={'/about/'}>About</Link>
                <ChevronRightIcon/>
                <Link href={'/about/nra/'}>NRA</Link>
              </HStack>
              <Heading pt={'48px'} fontSize={'50px'}>NEST Research Academy (NRA)</Heading>
              <Text textAlign={"center"} fontSize={'18px'} fontWeight={'bold'}>NEST Research Academy (NRA), initialized
                by
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
                  <chakra.img src={'/image/About/04-icon-01@2x.png'} w={'105px'} alt={''} mb={'26px'}/>
                  <Text fontSize={'15px'} fontWeight={'600'}>NRA welcomes research in fields such as blockchain,
                    finance, <br/>economics, game theory, machine
                    learning, computer science, and software engineering.<br/>Those interested, please send your
                    research
                    proposal (maximum 10 pages) to <br/><Link href={'mailto:nra@nestprotocol.org'} isExternal
                                                              color={'#00A0E9'}>nra@nestprotocol.org</Link></Text>
                </Stack>
              </Stack>

            </Stack>
            <Stack align={"center"} spacing={'48px'}>
              <Heading fontSize={'50px'} pt={'138px'}>Vacant Position</Heading>
              <Stack px={'160px'} w={'full'}>
                <Stack bg={'white'} align={"center"} textAlign={"center"} py={'130px'} borderRadius={'20px'}>
                  <chakra.img src={'/image/About/04-icon-02@2x.png'} w={'114px'} alt={''} mb={'26px'}/>
                  <Text fontSize={'15px'} fontWeight={'600'}>NRA welcomes applicants to researchers of all levels.<br/>NRA
                    evaluates the work of its
                    researchers in a result-oriented manner with flexibility in terms<br/>of working location and hours.
                    The salary is decided case by case.<br/>Those interested, please send your academic CV
                    to<br/><Link href={'mailto:nra@nestprotocol.org'} isExternal
                                 color={'#00A0E9'}>nra@nestprotocol.org</Link></Text>
                </Stack>
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
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/blogs/'}>NEST Blog</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Latest blogs from NEST</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/nra/'}>NEST Research Academy</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know about NRA</Text>
                </Stack>
              </Stack>
              <Stack spacing={'40px'}>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/docs/PVM-Technical-Reference/'}>Developer
                    Docs</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know how to develop on NEST</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs/'}>FAQs</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Frequently asked questions</Text>
                </Stack>
                <HStack spacing={'24px'}>
                  <Link href={'https://github.com/NEST-Protocol'} isExternal>
                    <chakra.img src={'/image/Footer/github_icon.svg'} h={'44px'} w={'44px'} alt={'github_icon'}/>
                  </Link>
                  <Link href={'https://twitter.com/nest_protocol/'} isExternal>
                    <chakra.img src={'/image/Footer/twitter_icon.svg'} h={'44px'} w={'44px'} alt={'twitter_icon.svg'}/>
                  </Link>
                  <Link href={'https://t.me/nest_chat/'} isExternal>
                    <chakra.img src={'/image/Footer/telegram_icon.svg'} h={'44px'} w={'44px'} alt={'telegram_icon'}/>
                  </Link>
                  <Link href={'https://nest-protocol-82041.medium.com/'} isExternal>
                    <chakra.img src={'/image/Footer/medium_icon.svg'} h={'44px'} w={'44px'} alt={'medium'}/>
                  </Link>
                  <Link href={'https://discord.gg/nestprotocol'} isExternal>
                    <chakra.img src={'/image/Footer/discord_icon.svg'} h={'44px'} w={'44px'} alt={'discord'}/>
                  </Link>
                  <Link href={'mailto:hello@nestprotocol.org'} isExternal>
                    <chakra.img src={'/image/Footer/email_icon.svg'} h={'44px'} w={'44px'} alt={'email'}/>
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
        <Stack h={'100%'} bgImage={'/image/About/04-Phone-bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
          <HStack w={'full'} px={'24px'} py={'20px'}>
            <Link href={'/'}>
              <chakra.img
                src={"/img/logo.svg"}
                alt="nest"
                h={'20px'}
              />
            </Link>
            <Spacer/>
            <Button onClick={onOpen} fontSize={'36px'} alignItems={'end'} p={0} variant={"ghost"} _active={{bg: null}}
                    _hover={{bg: null}} aria-label={'menu'}>
              <HamburgerIcon/>
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
          <HStack px={'20px'}>
            <ChevronLeftIcon h={'40px'} w={'28px'} cursor={"pointer"}
                             onClick={() => {
                               window.location.pathname = '/about/'
                             }}/>
            <Spacer/>
          </HStack>
          <Stack align={"center"} pt={'115px'} pb={'210px'}>
            <Text fontSize={'25px'} fontWeight={'bold'}>NEST Research<br/>Academy (NRA)</Text>
            <Text textAlign={"center"} fontSize={'12.5px'} fontWeight={'bold'} pt={'20px'}>NEST Research Academy (NRA),
              initialized by<br/>
              the NEST protocol, aims to boost theoretical<br/>
              and applied research in related fields such<br/>
              as blockchain, finance, economics, game<br/>
              theory, machine learning, computer science,<br/>
              and software engineering and helps to spread<br/>
              this knowledge to the public. </Text>
          </Stack>
          <Stack bg={'rgba(255,255,255, 0.7)'} px={'28px'} py={'66px'}>
            <Text fontSize={'16px'} fontWeight={'600'}>Promote Industry<br/>Communication</Text>
            <Text fontSize={'12.5px'} fontWeight={'600'}>NRA’s research activities include but are<br/>
              not limited to writing research papers<br/>
              published in peer-reviewed international<br/>
              academic journals, writing research reports<br/>
              for the public and investors,and organizing<br/>
              conferences, workshops, webinars, and AMA.</Text>
          </Stack>
          <Stack h={'30px'}/>
          <Stack bg={'rgba(255,255,255, 0.7)'} px={'28px'} py={'66px'}>
            <Text fontSize={'16px'} fontWeight={'600'}>Facilitate Academic<br/>Exploration</Text>
            <Text fontSize={'12.5px'} fontWeight={'600'}>NRA provides funding and job opportunities<br/>
              for researchers in different stages. NRA and<br/>
              NEST feel honored if the support helps<br/>
              scholars make breakthrough progress in<br/>
              academics and achieve significant<br/>
              contributions to human society from<br/>
              various perspectives.</Text>
          </Stack>
          <Stack pt={'54px'}>
            <Text fontSize={'25px'} fontWeight={'bold'} textAlign={"start"} px={'24px'}>Funding Opportunity</Text>
            <Stack px={'24px'} pt={'30px'}>
              <Stack align={"center"} bg={'rgba(255,255,255, 0.7)'} py={'100px'} borderRadius={'20px'}>
                <chakra.img src={'/image/About/04-icon-01@2x.png'} pb={'40px'} w={'85px'}/>
                <Text fontSize={'12.5px'} fontWeight={'600'} textAlign={"center"}>NRA welcomes research in fields
                  such<br/>
                  as blockchain, finance, economics, game<br/>
                  theory, machine learning, computer<br/>
                  science, and software engineering.<br/>
                  Those interested, please send your<br/>
                  research proposal (maximum 10 pages) to<br/>
                </Text>
                <Link fontSize={'12.5px'} fontWeight={'600'} textAlign={"center"} color={'#00A0E9'}
                      href={'mailto:nra@nestprotocol.org'}
                >nra@nestprotocol.org</Link>
              </Stack>
            </Stack>
          </Stack>
          <Stack pt={'62px'}>
            <Text fontSize={'25px'} fontWeight={'bold'} textAlign={"start"} px={'24px'}>Vacant Positions</Text>
            <Stack px={'24px'} pt={'30px'}>
              <Stack align={"center"} bg={'rgba(255,255,255, 0.7)'} py={'100px'} borderRadius={'20px'}>
                <chakra.img src={'/image/About/04-icon-02@2x.png'} pb={'40px'} w={'85px'}/>
                <Text fontSize={'12.5px'} fontWeight={'600'} textAlign={"center"}>NRA welcomes applicants to researchers<br/>
                  of all levels. NRA evaluates the work of<br/>
                  its researchers in a result-oriented<br/>
                  manner with flexibility in terms<br/>
                  of working location and hours.<br/>
                  The salary is decided case by case.<br/>
                  Those interested,<br/>
                  please send your academic CV to<br/>
                </Text>
                <Link fontSize={'12.5px'} fontWeight={'600'} textAlign={"center"} href={'mailto:nra@nestprotocol.org'}
                      color={'#00A0E9'}>nra@nestprotocol.org</Link>
              </Stack>
            </Stack>
          </Stack>
          <Stack h={'62px'}/>
          <Stack py={'44px'} px={'24px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"} w={'full'}
                 align={"start"}>
            <Stack spacing={'40px'} align={"start"} w={'full'}>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch
                  App</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Buy futures, options and win NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/blogs/'}>NEST Blog</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Latest blogs from NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/nra/'}>NEST Research Academy</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know about NRA</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/docs/PVM-Technical-Reference/'}>Developer
                  Docs</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know how to develop on NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs/'}>FAQs</Link>
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
                    <chakra.img src={'/image/Footer/discord_icon.svg'} h={'44px'} w={'44px'} alt={'discord'}/>
                  </Link>
                  <Link href={'https://github.com/NEST-Protocol'} isExternal>
                    <chakra.img src={'/image/Footer/github_icon.svg'} h={'44px'} w={'44px'} alt={'github_icon'}/>
                  </Link>
                  <Link href={'https://twitter.com/nest_protocol/'} isExternal>
                    <chakra.img src={'/image/Footer/twitter_icon.svg'} h={'44px'} w={'44px'} alt={'twitter_icon.svg'}/>
                  </Link>
                </HStack>
                <HStack spacing={'40px'}>
                  <Link href={'https://t.me/nest_chat/'} isExternal>
                    <chakra.img src={'/image/Footer/telegram_icon.svg'} h={'44px'} w={'44px'} alt={'telegram_icon'}/>
                  </Link>
                  <Link href={'https://nest-protocol-82041.medium.com/'} isExternal>
                    <chakra.img src={'/image/Footer/medium_icon.svg'} h={'44px'} w={'44px'} alt={'medium'}/>
                  </Link>
                  <Link href={'mailto:hello@nestprotocol.org'} isExternal>
                    <chakra.img src={'/image/Footer/email_icon.svg'} h={'44px'} w={'44px'} alt={'email'}/>
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