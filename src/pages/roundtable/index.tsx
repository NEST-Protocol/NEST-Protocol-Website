import Head from "@docusaurus/Head";
import axios from "axios";
import React, {useCallback, useEffect, useState} from "react";
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
import {useLocation} from "@docusaurus/router";

type Space = {
  id: number,
  title: string,
  date: string,
  link: string,
  pics: string[],
}

const Roundtable = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [showMore, setShowMore] = useState(false)
  const name = "NEST Roundtable"
  const location = useLocation();
  const [spaces, setSpaces] = useState<Space[]>([])

  const fetchRoundtables = useCallback(async () => {
    const res = await axios({
      method: 'get',
      url: 'https://cms.nestfi.net/api/roundtables?sort[0]=scheduled_start%3Adesc&populate=%2A',
    })
    if (res.data?.data) {
      setSpaces(res.data.data.map((item: any) => ({
          id: item.id,
          title: item.attributes.title,
          date: item.attributes.scheduled_start,
          link: item.attributes.link,
          pics: item.attributes?.invited_user_icons?.data?.map((item: any) => 'https://cms.nestfi.net' + item.attributes.url)
        }
      )))
    }
  }, [])

  useEffect(() => {
    fetchRoundtables()
  }, [fetchRoundtables])

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
                <Link href={'https://nft.nestprotocol.org/'} isExternal>Cyber Ink</Link>
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
                    <Stack h={'full'} spacing={'20px'} p={'30px'} w={'full'}>
                      <HStack w={'full'} spacing={'20px'} overflow={"hidden"}>
                        <Text fontSize={'24px'} fontWeight={'700'} whiteSpace={'nowrap'}>
                          {name} {item.id}
                        </Text>
                        <Spacer/>
                        {item.pics && item.pics.length > 0 && item.pics.map(item => (
                          <chakra.img src={item} alt={'icon'}/>
                        ))}
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
          <Stack align={"center"} pt={'220px'} pb={'280px'}>
            <Text fontSize={'25px'} fontWeight={'bold'}>NEST Roundtable</Text>
            <Text fontSize={'12.5px'} fontWeight={'bold'} textAlign={"center"}>NEST Roundtable, A weekly current affairs
              topic to understand the world of blockchain</Text>
          </Stack>
          <Stack spacing={'10px'}>
            {spaces.slice(0, showMore ? spaces.length : 6).map((item) => (
              <Stack key={item.link} w={'full'} px={'15px'} overflow={'hidden'}>
                <Stack w={'full'} bgImage={"/image/roundtable/roundtable-bg.png"} bgSize={'cover'} borderRadius={'10px'}
                       spacing={'10px'} cursor={"pointer"} p={'10px'}>
                  <Text fontSize={'12px'} fontWeight={'700'} whiteSpace={'nowrap'}>
                    {name} {item.id}
                  </Text>
                  <HStack>
                    <Stack spacing={'10px'}>
                      <Text fontWeight={'700'} fontSize={'16px'}>
                        {item.title}
                      </Text>
                      <HStack alignItems={"center"}>
                        <chakra.img src={'/svg/data.svg'} w={'12px'}/>
                        <Text fontSize={'9px'} fontWeight={'500'} color={'#878787'}>
                          {item.date}
                        </Text>
                      </HStack>
                    </Stack>
                    <Spacer/>
                    <Stack minW={'70px'} pr={'20px'} onClick={() => {
                      window.open(item.link, '_blank')
                    }}>
                      <chakra.img src={'/svg/play.svg'} h={'50px'}/>
                    </Stack>
                  </HStack>
                  <HStack spacing={'10px'}>
                    {item.pics && item.pics.length > 0 && item.pics.map(item => (
                      <chakra.img src={item} alt={'icon'} h={'10px'}/>
                    ))}
                  </HStack>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Stack align={"center"} justify={"center"} pt={'40px'} pb={'60px'} cursor={'pointer'} onClick={() => {
            setShowMore(!showMore)
          }}>
            <Text fontSize={'15px'} fontWeight={'600'}
                  color={'#00A0E9'}>{showMore ? 'Less' : 'More'} Roundtable <ChevronRightIcon/></Text>
          </Stack>
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
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/doc/ennestwhitepaper.pdf'}>Whitepaper</Link>
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
  )
}

export default Roundtable;