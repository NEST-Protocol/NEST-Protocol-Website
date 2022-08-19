import {chakra, HStack, Spacer, Stack, Text, useMediaQuery, VStack, Wrap, WrapItem, ChakraProvider} from "@chakra-ui/react";
import React from "react";
import Head from '@docusaurus/Head';

const TheFooter = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Head>
        <script src="https://crypto.com/price/static/widget/index.js"></script>
      </Head>
      <Stack
        px={isDesktop ? "48px" : "24px"}
        w={'100%'}
        align={'center'}
        bgImage={isDesktop ? "/image/Footer/Footer_bg.jpg" : "/image/Footer/Footer_bg_phone.jpg"}
        bgSize={'cover'}
        bgPosition={"right"}
        zIndex={'10'}
      >
        <chakra.img
          zIndex={0}
          position={"absolute"}
          src={isDesktop ? "/image/Footer/Footer_bg_icon.png" : "/image/Footer/Footer_bg_icon_phone.png"}
          alt={'NEST'}
          minH={'380px'}
          objectFit={'cover'}
          overflow={"hidden"}
          objectPosition={"center"}
        />
        <Stack maxW={'1440px'} justify={'space-around'} w={'100%'} zIndex={1} py={isDesktop ? "88px" : "66px"}>
          <Wrap spacing={isDesktop ? "44px" : "22px"} justify={"space-between"} fontSize={isDesktop ? "15px" : "12px"}
                w={"100%"}>
            <WrapItem>
              <Stack px={['0', '16px']} spacing={isDesktop ? "44px" : "22px"} minW={'300px'}>
                <VStack align={"start"} spacing={'20px'}>
                  <Text fontWeight={"700"}
                        cursor={"pointer"}
                        onClick={() => {
                          window.open('https://finance.nestprotocol.org/', '_blank')
                        }}
                        color={'#003232'}>Launch App</Text>
                  <Text
                    color={'#7D7D7D'}
                    fontWeight={'600'}
                  >Buy futures, options and win NEST</Text>
                </VStack>
                <VStack spacing={'20px'} align={"start"}>
                  <Text fontWeight={"700"} color={'#003232'}
                        cursor={"pointer"} onClick={() => {
                    window.location.pathname = '/news'
                  }}
                  >NEST News</Text>
                  <Text color={'#7D7D7D'} fontWeight={'600'}>Latest news from NEST</Text>
                </VStack>
                <VStack spacing={'20px'} align={"start"}>
                  <Text fontWeight={"700"} color={'#003232'} cursor={"pointer"} onClick={() => {
                    window.location.pathname = '/nest-research-academy'
                  }}>NEST Research Academy</Text>
                  <Text color={'#7D7D7D'} fontWeight={'600'}>Learn about NRA</Text>
                </VStack>
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack px={['0', '16px']} spacing={isDesktop ? "44px" : "22px"} minW={'300px'}>
                <VStack spacing={'20px'} align={"start"}>
                  <Text fontWeight={"700"} color={'#003232'} cursor={"pointer"} onClick={() => {
                    window.location.pathname = '/docs/Concept/What-is-NEST'
                  }}>Developer Docs</Text>
                  <Text color={'#7D7D7D'} fontWeight={'600'}>Learn how to develop on NEST PVM</Text>
                </VStack>
                <VStack spacing={'20px'} align={"start"}>
                  <Text fontWeight={"700"} color={'#003232'} cursor={"pointer"} onClick={() => {
                    window.location.pathname = '/about/faqs'
                  }}>FAQs</Text>
                  <Text color={'#7D7D7D'} fontWeight={'600'}>Frequently asked questions</Text>
                </VStack>
                {isDesktop && (
                  <HStack spacing={'24px'}>
                    <chakra.img
                      alt={'https://github.com/NEST-Protocol'}
                      src={"/image/Footer/github_icon.svg"}
                      width={'44px'}
                      height={'44px'}
                      cursor={"pointer"}
                      onClick={() => {
                        window.open('https://github.com/NEST-Protocol', '_blank')
                      }}
                    />
                    <chakra.img
                      alt={'https://twitter.com/nest_protocol/'}
                      src={"/image/Footer/twitter_icon.svg"}
                      width={'44px'}
                      height={'44px'}
                      cursor={"pointer"}
                      onClick={() => {
                        window.open('https://twitter.com/nest_protocol/', '_blank')
                      }}
                    />
                    <chakra.img
                      alt={'https://t.me/nest_chat/'}
                      src={"/image/Footer/telegram_icon.svg"}
                      width={'44px'}
                      height={'44px'}
                      cursor={"pointer"}
                      onClick={() => {
                        window.open('https://t.me/nest_chat/', '_blank')
                      }}
                    />
                    <chakra.img
                      alt={'https://nest-protocol-82041.medium.com/'}
                      src={"/image/Footer/medium_icon.svg"}
                      width={'44px'}
                      height={'44px'}
                      cursor={"pointer"}
                      onClick={() => {
                        window.open('https://nest-protocol-82041.medium.com/', '_blank')
                      }}
                    />
                    <chakra.img
                      alt={'https://discord.gg/nestprotocol'}
                      src={"/image/Footer/discord_icon.svg"}
                      width={'44px'}
                      height={'44px'}
                      cursor={"pointer"}
                      onClick={() => {
                        window.open('https://discord.gg/nestprotocol', '_blank')
                      }}
                    />
                  </HStack>
                )}
              </Stack>
            </WrapItem>
            <WrapItem w={'400px'}>
              <Stack spacing={['10px', "-12px"]} zIndex={1} w={"100%"} h={'full'}>
                <Text px={[0, '16px']} fontSize={isDesktop ? "15px" : "12px"} fontWeight={'700'} color={'#003232'}>
                  Market price
                </Text>
                <chakra.div
                  id="crypto-widget-CoinList"
                  data-transparent="true"
                  data-design="classic"
                  data-coin-ids="2204"
                  w={'100%'}
                ></chakra.div>
                <Spacer/>
                {isDesktop && (
                  <HStack pt={'80px'}>
                    <Spacer/>
                    <Text color={'#7D7D7D'} fontSize={'15px'} fontWeight={'600'}>
                      ©2022 NEST
                    </Text>
                  </HStack>
                )}
              </Stack>
            </WrapItem>
            {!isDesktop && (
              <WrapItem w={"full"} justifyContent={"center"}>
                <HStack spacing={'24px'}>
                  <chakra.img
                    alt={'https://github.com/NEST-Protocol'}
                    src={"/image/Footer/github_icon.svg"}
                    width={'44px'}
                    height={'44px'}
                    cursor={"pointer"}
                    onClick={() => {
                      window.open('https://github.com/NEST-Protocol', '_blank')
                    }}
                  />
                  <chakra.img
                    alt={'https://twitter.com/nest_protocol/'}
                    src={"/image/Footer/twitter_icon.svg"}
                    width={'44px'}
                    height={'44px'}
                    cursor={"pointer"}
                    onClick={() => {
                      window.open('https://twitter.com/nest_protocol/', '_blank')
                    }}
                  />
                  <chakra.img
                    alt={'https://t.me/nest_chat/'}
                    src={"/image/Footer/telegram_icon.svg"}
                    width={'44px'}
                    height={'44px'}
                    cursor={"pointer"}
                    onClick={() => {
                      window.open('https://t.me/nest_chat/', '_blank')
                    }}
                  />
                  <chakra.img
                    alt={'https://nest-protocol-82041.medium.com/'}
                    src={"/image/Footer/medium_icon.svg"}
                    width={'44px'}
                    height={'44px'}
                    cursor={"pointer"}
                    onClick={() => {
                      window.open('https://nest-protocol-82041.medium.com/', '_blank')
                    }}
                  />
                  <chakra.img
                    alt={'https://discord.gg/nestprotocol'}
                    src={"/image/Footer/discord_icon.svg"}
                    width={'44px'}
                    height={'44px'}
                    cursor={"pointer"}
                    onClick={() => {
                      window.open('https://discord.gg/nestprotocol', '_blank')
                    }}
                  />
                </HStack>
              </WrapItem>
            )}
            {!isDesktop && (
              <HStack justify={"center"} w={'full'}>
                <Text color={'#7D7D7D'} fontSize={'12px'} fontWeight={'600'}>
                  ©2022 NEST
                </Text>
              </HStack>
            )}
          </Wrap>
        </Stack>
      </Stack>
    </>
  )
}

export default TheFooter;