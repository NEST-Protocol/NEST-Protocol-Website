import Head from "@docusaurus/Head";
import React from "react";
import {
  Button,
  chakra,
  ChakraProvider, Text,
  HStack,
  Link, Modal, ModalBody, ModalCloseButton, ModalContent, Spacer,
  Stack,
  useDisclosure, useMediaQuery, VStack, Wrap, WrapItem
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {menu} from "@site/src/pages";
import theme from "../../chakra";

const Roundtable = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const {isOpen, onOpen, onClose} = useDisclosure()
  const name = "NEST Protocol | 20x leverage futures on NEST Fi"

  const spaces = [
    {
      title: "Digital Assets in GameFi",
      date: "2022-10-24",
      time: "1:35:24",
      link: "https://twitter.com/i/spaces/1nAKErNMjkvGL?s=20"
    },
    {
      title: "How does DeFi vs TradFi? Will XEN be the future?",
      date: "2021-10-17",
      time: "1:03:06",
      link: "https://twitter.com/i/spaces/1PlJQpBYkVXGE?s=20"
    },
    {
      title: "New chances of NFT under Web3 infrastructure",
      date: "2022-10-10",
      time: "1:04:51",
      link: "https://twitter.com/i/spaces/1OdKrzlqdevKX?s=20"
    },
    {
      title: "How to deal with the risks in bearish market and in general?",
      date: "2022-10-03",
      time: "1:22:16",
      link: "https://twitter.com/i/spaces/1mnxeRqbMQvKX?s=20"
    },
    {
      title: "Investment strategy in crypto bear market",
      date: "2022-09-26",
      time: "1:22:44",
      link: "https://twitter.com/i/spaces/1lPKqBNljgEGb?s=20"
    },
    {
      title: "Ethereum merge is coming, opportunities & challenges to infrastructure",
      date: "2022-09-12",
      time: "1:08:26",
      link: "https://twitter.com/i/spaces/1OyKAVMZyzWGb?s=20"
    },
    {
      title: "How will DeFi develop after the Ethereum Merge?",
      date: "2022-09-05",
      time: "49:22",
      link: "https://twitter.com/i/spaces/1YpKkgyMXWwKj?s=20"
    },
    {
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
            <Wrap w={'full'} px={'45px'} spacing={'24px'} justify={"center"}>
              { spaces.map((item) => (
                <WrapItem key={item.link} w={'566px'} minH={'205px'}>
                  <Stack w={'full'} h={'full'}
                         bg={'rgb(153, 77, 77)'} p={'12px'}
                         borderRadius={'12px'}>
                    <HStack>
                      <chakra.img
                        src={'https://pbs.twimg.com/profile_images/1550375547368521728/AxJNEstE_400x400.jpg'}
                        alt={'nest protocol'}
                        w={'18px'}
                        h={'18px'}
                        borderRadius={'full'}
                        border={'1px solid #fff'}
                      />
                      <Link fontSize={'14px'} color={'white'} fontWeight={'700'} href={'https://twitter.com/NEST_Protocol'} isExternal>
                        {name}
                      </Link>
                    </HStack>

                    <Text fontWeight={'700'}
                          color={"white"} fontSize={'20px'}>
                      {item.title}
                    </Text>
                    <Text fontSize={'14px'} color={'white'} fontWeight={'700'}>
                      {item.date} · {item.time}
                    </Text>
                    <Spacer/>
                    <Button
                      color={'black'}
                      bg={'white'}
                      fontWeight={'700'}
                      height={'34px'}
                      _hover={{ bg: "gray.200" }}
                      _active={{ bg: "white" }}
                      borderColor={'rgba(255, 255, 255, 0.35)'}
                      onClick={() => {
                        window.open(item.link, '_blank')
                      }}
                    >
                      Play
                    </Button>
                  </Stack>
                </WrapItem>
              )) }
            </Wrap>
          </Stack>
        </Stack>
      ) : (
        <Stack h={'100%'} bgImage={'/image/Home/01-Phone-bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
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