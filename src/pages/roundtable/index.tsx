import Head from "@docusaurus/Head";
import React, {useState} from "react";
import {
  Button,
  chakra,
  ChakraProvider, Text,
  HStack,
  Link, Modal, ModalBody, ModalCloseButton, ModalContent, Spacer,
  Stack,
  useDisclosure, useMediaQuery, VStack, Wrap, WrapItem, Box
} from "@chakra-ui/react";
import {ChevronRightIcon, HamburgerIcon} from "@chakra-ui/icons";
import {menu} from "@site/src/pages";
import theme from "../../chakra";

const Roundtable = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [showMore, setShowMore] = useState(false)
  const name = "NEST Roundtable"

  const spaces = [
    {
      id: 9,
      title: "Digital Assets in GameFi",
      date: "2022-10-24",
      time: "1:35:24",
      link: "https://twitter.com/i/spaces/1nAKErNMjkvGL?s=20",
      pics: ['/image/roundtable/routable9/logo1.png', '/image/roundtable/routable9/logo2.png', '/image/roundtable/routable9/logo3.png', '/image/roundtable/routable9/logo4.png']
    },
    {
      id: 8,
      title: "How does DeFi vs TradFi? Will XEN be the future?",
      date: "2021-10-17",
      time: "1:03:06",
      link: "https://twitter.com/i/spaces/1PlJQpBYkVXGE?s=20",
      pics: ['/image/roundtable/routable8/logo1.png', '/image/roundtable/routable8/logo2.png', '/image/roundtable/routable8/logo3.png', '/image/roundtable/routable8/logo4.png', '/image/roundtable/routable8/logo5.png']
    },
    {
      id: 7,
      title: "New chances of NFT under Web3 infrastructure",
      date: "2022-10-10",
      time: "1:04:51",
      link: "https://twitter.com/i/spaces/1OdKrzlqdevKX?s=20",
      pics: ['/image/roundtable/routable7/logo1.png', '/image/roundtable/routable7/logo2.png', '/image/roundtable/routable7/logo3.png', '/image/roundtable/routable7/logo4.png', '/image/roundtable/routable9/logo5.png']
    },
    {
      id: 6,
      title: "How to deal with the risks in bearish market and in general?",
      date: "2022-10-03",
      time: "1:22:16",
      link: "https://twitter.com/i/spaces/1mnxeRqbMQvKX?s=20",
      pics: ['/image/roundtable/routable6/logo1.png', '/image/roundtable/routable6/logo2.png', '/image/roundtable/routable6/logo3.png', '/image/roundtable/routable6/logo4.png']
    },
    {
      id: 5,
      title: "Investment strategy in crypto bear market",
      date: "2022-09-26",
      time: "1:22:44",
      link: "https://twitter.com/i/spaces/1lPKqBNljgEGb?s=20",
      pics: ['/image/roundtable/routable5/logo1.png', '/image/roundtable/routable5/logo2.png', '/image/roundtable/routable5/logo3.png', '/image/roundtable/routable5/logo4.png',
        '/image/roundtable/routable5/logo5.png', '/image/roundtable/routable5/logo6.png', '/image/roundtable/routable5/logo7.png', '/image/roundtable/routable5/logo8.png']
    },
    {
      id: 4,
      title: "Investment strategy in crypto bear market",
      date: "2022-09-26",
      time: "1:22:44",
      link: "https://twitter.com/i/spaces/1lPKqBNljgEGb?s=20",
      pics: ['/image/roundtable/routable4/logo1.png', '/image/roundtable/routable4/logo2.png', '/image/roundtable/routable4/logo3.png', '/image/roundtable/routable4/logo4.png', '/image/roundtable/routable4/logo5.png']
    },
    {
      id: 3,
      title: "Ethereum merge is coming, opportunities & challenges to infrastructure",
      date: "2022-09-12",
      time: "1:08:26",
      link: "https://twitter.com/i/spaces/1OyKAVMZyzWGb?s=20",
      pics: ['/image/roundtable/routable3/logo1.png', '/image/roundtable/routable3/logo2.png', '/image/roundtable/routable3/logo3.png', '/image/roundtable/routable3/logo4.png']
    },
    {
      id: 2,
      title: "How will DeFi develop after the Ethereum Merge?",
      date: "2022-09-05",
      time: "49:22",
      link: "https://twitter.com/i/spaces/1YpKkgyMXWwKj?s=20"
    },
    {
      id: 1,
      title: "How can the established public chains rise up during bear market?",
      date: "2022-08-22",
      time: "49:09",
      link: "https://twitter.com/i/spaces/1LyxBoXekWYKN?s=20"
    }
  ]

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST Protocol | The most important infrastructure after ETH</title>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      {isDesktop ? (
        <Stack h={'full'} w={'100vw'} align={"center"}>
          <Stack w={'100%'} maxW={'1920px'} h={'100%'} bgSize={'cover'} bgImage={"/image/Developer/Developer_bg.jpg"}
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
              <Stack direction={"row"} align={"center"} spacing={'24px'} fontWeight={'500'} fontSize={'15px'}
                     color={'#003232'}>
                <Link href={'/nest-fi/'}>NESTFi</Link>
                <Link href={'/developers/'}>Developers</Link>
                <Link href={'/docs/Overview/What-is-NEST-Protocol/'}>Doc</Link>
                <Link href={'/blogs/'}>Blog</Link>
                <Link href={'/about/'}>About</Link>
                <Button onClick={() => {
                  window.open('https://finance.nestprotocol.org/', '_blank')
                }}>
                  App
                </Button>
              </Stack>
            </Stack>
            <Stack align={"center"} py={'270px'}>
              <Text fontSize={'50px'} fontWeight={'bold'} color={'#003232'}>NEST Roundtable</Text>
              <Text fontSize={'18px'} fontWeight={'bold'} color={'#003232'}>NEST Roundtable, A weekly current affairs
                topic to understand the world of blockchain</Text>
            </Stack>
            <Wrap w={'full'} px={'88px'} spacing={'20px'} justify={"center"}>
              {spaces.slice(0, showMore ? spaces.length : 6).map((item) => (
                <WrapItem key={item.link} w={'full'} minH={'200px'}>
                  <HStack w={'full'} bgImage={"/image/roundtable/roundtable-bg.png"} bgSize={'cover'}
                          borderRadius={'12px'} spacing={'0'} cursor={"pointer"}>
                    <Stack h={'full'} spacing={'20px'} p={'30px'}>
                      <HStack>
                        <Text fontSize={'24px'} fontWeight={'700'}>
                          {name} {item.id}
                        </Text>
                        { item.pics && item.pics.length > 0 && item.pics.map(item => (
                          <chakra.img src={'/image/roundtable/roundtable-bg.png'} alt={'icon'}/>
                          )) }
                      </HStack>
                      <Text fontWeight={'700'} fontSize={'32px'}>
                        {item.title}
                      </Text>
                      <HStack alignItems={"center"}>
                        <chakra.img src={'/svg/data.svg'}/>
                        <Text fontSize={'18px'} fontWeight={'500'} color={'#878787'}>
                          {item.date}
                        </Text>
                      </HStack>
                    </Stack>
                    <Spacer/>
                    <Box w={'1px'} bg={'#C5C5C5'} h={'200px'}>
                    </Box>
                    <Stack minW={'200px'} w={'200px'} h={'200px'} onClick={() => {
                      window.open(item.link, '_blank')
                    }}>
                      <chakra.img src={'/svg/play.svg'} p={'50px'}/>
                    </Stack>
                  </HStack>
                </WrapItem>
              ))}
            </Wrap>
            <Stack align={"center"} justify={"center"} pt={'80px'} pb={'120px'} cursor={'pointer'} onClick={() => {
              setShowMore(!showMore)
            }}>
              <Text fontSize={'15px'} fontWeight={'600'}
                    color={'#00A0E9'}>{showMore ? 'Less' : 'More'} Roundtable <ChevronRightIcon/></Text>
            </Stack>
            <HStack py={'88px'} px={'45px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"}
                    align={"start"}>
              <Stack spacing={'40px'} align={"start"}>
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
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/doc/ennestwhitepaper.pdf'}>Whitepaper</Link>
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
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs/'}>FAQs</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Frequently asked questions</Text>
                </Stack>
                <HStack spacing={'24px'}>
                  <Link href={'https://github.com/NEST-Protocol'} isExternal>
                    <chakra.img src={'/image/Footer/github_icon.svg'} h={'44px'} w={'44px'}
                                alt={'NEST-Protocol github'}/>
                  </Link>
                  <Link href={'https://twitter.com/nest_protocol/'} isExternal>
                    <chakra.img src={'/image/Footer/twitter_icon.svg'} h={'44px'} w={'44px'}
                                alt={'NEST-Protocol Twitter'}/>
                  </Link>
                  <Link href={'https://t.me/nest_chat/'} isExternal>
                    <chakra.img src={'/image/Footer/telegram_icon.svg'} h={'44px'} w={'44px'}
                                alt={'NEST-Protocol Telegram'}/>
                  </Link>
                  <Link href={'https://nest-protocol.medium.com/'} isExternal>
                    <chakra.img src={'/image/Footer/medium_icon.svg'} h={'44px'} w={'44px'}
                                alt={'NEST-Protocol Medium'}/>
                  </Link>
                  <Link href={'https://discord.gg/nestprotocol'} isExternal>
                    <chakra.img src={'/image/Footer/discord_icon.svg'} h={'44px'} w={'44px'}
                                alt={'NEST-Protocol Discord'}/>
                  </Link>
                  <Link href={'mailto:hello@nestprotocol.org'} isExternal>
                    <chakra.img src={'/image/Footer/email_icon.svg'} h={'44px'} w={'44px'}
                                alt={'hello@nestprotocol.org'}/>
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
        </Stack>
      )}
    </ChakraProvider>
  )
}

export default Roundtable;