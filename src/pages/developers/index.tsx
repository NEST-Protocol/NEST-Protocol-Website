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
  useDisclosure,
  Modal,
  ModalContent,
  ModalCloseButton, ModalBody, VStack, useMediaQuery,
} from "@chakra-ui/react";
import theme from "../../chakra"
import Head from "@docusaurus/Head";
import {ChevronRightIcon, HamburgerIcon} from "@chakra-ui/icons";
import {menu} from "@site/src/pages";
import {useLocation} from "@docusaurus/router";

export default function Home(): JSX.Element {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const {isOpen, onOpen, onClose} = useDisclosure()
  const location = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Developers | NEST Protocol</title>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      {isDesktop ? (
        <Stack h={'100%'} w={'100vw'} align={"center"}>
          <Stack w={'100%'} maxW={'1920px'} h={'100%'} bgPosition={"center"} bgSize={'cover'}
                 bgImage={'/image/Developer/Developer_bg.jpg'} spacing={0}>
            <Stack px={'45px'} h={'88px'} direction={"row"} justifyContent={"space-between"} align={"center"}>
              <Link href={'/'}>
                <chakra.img
                  src={"/img/logo.svg"}
                  alt="nest"
                  h={'20px'}
                />
              </Link>
              <Stack direction={"row"} align={"center"} spacing={'24px'} fontWeight={'500'} fontSize={'15px'}>
                <Link href={'/nest-fi/'} color={'#003232'}>NESTFi</Link>
                <Link href={'/developers/'} color={'#EAAA00'} fontWeight={'700'}>Developers</Link>
                <Link href={'/docs/Overview/What-is-NEST-Protocol/'} color={'#003232'}>Doc</Link>
                <Link href={'/blogs/'} color={'#003232'}>Blog</Link>
                <Link href={'/about/'} color={'#003232'}>About</Link>
                <Button onClick={() => {
                  window.open('https://finance.nestprotocol.org/', '_blank')
                }}>
                  App
                </Button>
              </Stack>
            </Stack>
            <Stack pt={'164px'} pb={'202px'}>
              <Stack spacing={'40px'} align={"center"}>
                <Heading fontSize={'50px'} textAlign={"center"}>Another Revolution in Blockchain</Heading>
                <Text textAlign={"center"} fontWeight={'600'} fontSize={'21px'}>NEST ecosystem is a paradigm revolution
                  to
                  the traditional<br/>market mechanism, providing the blockchain world with a<br/>whole new range of
                  development tools and creative new assets.</Text>
                <Box>
                  <Button onClick={() => {
                    window.open('/docs/PVM-Technical-Reference/', '_blank')
                  }}>
                    Developer Doc
                  </Button>
                </Box>
              </Stack>
            </Stack>
            <Stack bg={'rgba(255, 255, 255, 0.8)'} direction={"row"} spacing={0}>
              <Stack w={'50%'} align={"center"} justify={"center"}>
                <chakra.img src={'/image/Developer/03-Flowchart-01.svg'} alt={''}/>
              </Stack>
              <Stack w={'50%'} py={'216px'} spacing={'21px'} align={"center"}>
                <Stack w={'500px'}>
                  <Text fontSize={'25px'} fontWeight={600}>NEST PVM</Text>
                  <Text fontSize={'15px'} fontWeight={600}>NEST Probability Virtual Machine (PVM) is a virtual<br/>machine-like
                    structure based on the basic function<br/>library. Developers can develop various exciting<br/>applications
                    based on the function library, similar<br/>to Ethereum virtual machine (EVM) programming.</Text>
                  <Link color={'#00A0E9'} fontSize={'15px'} fontWeight={600} isExternal
                        href={'/docs/Concept/PVM/'}>PVM Mechanism <ChevronRightIcon/></Link>
                </Stack>
              </Stack>
            </Stack>
            <Stack h={'138px'}/>
            <HStack bg={'rgba(255, 255, 255, 0.8)'}>
              <Stack w={'50%'} py={'216px'} align={"center"}>
                <Stack w={'500px'}>
                  <Text fontSize={'25px'} fontWeight={600}>NEST Oracle</Text>
                  <Text fontSize={'15px'} fontWeight={600}>NEST oracle is the only truly decentralized oracle<br/>on the
                    market today.</Text>
                  <HStack spacing={'68px'}>
                    <Link color={'#00A0E9'} fontSize={'15px'} fontWeight={600} isExternal
                          href={'/docs/Technical-Reference-NEST-Oracle/#how-to-mining/'}>How to
                      Mining <ChevronRightIcon/></Link>
                    <Link color={'#00A0E9'} fontSize={'15px'} fontWeight={600} isExternal
                          href={'/docs/Technical-Reference-NEST-Oracle/#how-to-call-price'}>How to Call
                      Price <ChevronRightIcon/></Link>
                  </HStack>
                </Stack>

              </Stack>
              <Stack w={'50%'} align={"center"} justify={"center"}>
                <chakra.img src={'/image/Developer/03-Flowchart-02.svg'} alt={''}/>
              </Stack>
            </HStack>
            <Stack h={'138px'}/>
            <HStack py={'88px'} px={'45px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"}
                    align={"start"}>
              <Stack spacing={'40px'} align={"start"}>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch
                    App</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Open futures, options NFT here</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/blogs'}>NEST Blog</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Blogs & news from NEST</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/nra'}>NEST Research Academy</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Learn more about NEST</Text>
                </Stack>
              </Stack>
              <Stack spacing={'40px'}>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/docs/PVM-Technical-Reference/'}>Developer
                    Docs</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know how to develop on NEST</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs'}>FAQs</Link>
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
                  <Link href={'https://nest-protocol.medium.com/'} isExternal>
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
        <Stack h={'100%'} bgImage={'/image/Developer/03-Phone-bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
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
          <Stack align={"center"} pt={'145px'} pb={'180px'}>
            <Text fontSize={'25px'} fontWeight={'bold'} textAlign={'center'}>Another Revolution<br/>in Blockchain</Text>
            <Text fontSize={'12.5px'} fontWeight={'bold'} textAlign={"center"}>NEST ecosystem is a paradigm
              revolution<br/>to the traditional market mechanism, <br/>whole new range of development tools
              and<br/> creative new assets.</Text>
            <Stack pt={'54px'}>
              <Button onClick={() => {
                window.open('/docs/PVM-Technical-Reference/', '_blank')
              }}>
                Developer Doc
              </Button>
            </Stack>
          </Stack>
          <Stack align={"center"} bg={'rgba(255,255,255,0.7)'} pb={'35px'}>
            <chakra.img src={'/image/Developer/03-Phone-flowchart-01.svg'} alt={''}/>
            <Stack pt={'60px'} align={"center"}>
              <Text fontSize={'16px'} fontWeight={'600'}>NEST PVM</Text>
              <Text fontSize={'12.5px'} fontWeight={'600'} textAlign={"center"}>NEST Probability Virtual Machine (PVM)
                is<br/>a virtual machine-like structure based on<br/>the basic function library. Developers can<br/>develop
                various exciting applications based<br/>develop various exciting applications based<br/> virtual machine
                (EVM) programming.</Text>
              <Link color={'#00A0E9'} fontSize={'12.5px'} fontWeight={'600'} pt={'20px'} href={'/docs/Concept/PVM/'}
                    isExternal>
                PVM Mechanism <ChevronRightIcon/>
              </Link>
            </Stack>
          </Stack>
          <Stack h={'40px'}/>
          <Stack align={"center"} bg={'rgba(255,255,255,0.7)'} pb={'35px'}>
            <chakra.img src={'/image/Developer/03-Phone-flowchart-02.svg'} alt={''}/>
            <Stack align={"center"}>
              <Text fontSize={'16px'} fontWeight={'600'}>NEST Oracle</Text>
              <Text fontSize={'12.5px'} fontWeight={'600'} textAlign={"center"}>NEST oracle is the only truly
                decentralized<br/>oracle on the market today.</Text>
              <Link color={'#00A0E9'} fontSize={'12.5px'} fontWeight={'600'}
                    href={'/docs/Technical-Reference-NEST-Oracle/#how-to-mining/'} isExternal>
                How to Mining <ChevronRightIcon/>
              </Link>
              <Link color={'#00A0E9'} fontSize={'12.5px'} fontWeight={'600'}
                    href={'/docs/Technical-Reference-NEST-Oracle/#how-to-call-price'} isExternal>
                How to Call Price <ChevronRightIcon/>
              </Link>
            </Stack>
          </Stack>
          <Stack h={'62px'}/>
          <Stack py={'44px'} px={'24px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"}
                 align={"start"}>
            <Stack spacing={'40px'} align={"start"} w={'full'}>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch
                  App</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Open futures, options NFT here</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/blogs/'}>NEST Blog</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Blogs & news from NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/nra/'}>NEST Research Academy</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Learn more about NEST</Text>
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
                  <Link href={'https://nest-protocol.medium.com/'} isExternal>
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