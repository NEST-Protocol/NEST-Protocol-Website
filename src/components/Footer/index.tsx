import {Stack, Text, HStack, chakra, Wrap, WrapItem, VStack, Link, useMediaQuery} from '@chakra-ui/react'
import * as React from 'react'
import BG_URL from "../../assets/image/Footer/Footer_bg.jpg"
import Github_URL from "../../assets/image/Footer/github_icon.svg"
import Twitter_URL from "../../assets/image/Footer/twitter_icon.svg"
import Telegram_URL from "../../assets/image/Footer/telegram_icon.svg"
import Medium_URL from "../../assets/image/Footer/medium_icon.svg"
import {useNavigate} from "react-router-dom";

const Footer = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const navigate = useNavigate()

  return (
    <Stack
      px={['24px', '48px']}
      py={['88px']}
      w={'full'}
      align={'center'}
      bgImage={BG_URL}
      bgSize={'cover'}
      bgPosition={"right"}
      zIndex={'10'}
    >
      <Stack maxW={'1440px'} justify={'space-around'} w={'full'}>
        <Wrap spacing={['22px', '44px']} fontSize={15} w={"full"}>
          <WrapItem>
            <Stack px={isDesktop ? '0' : '16px'} spacing={'40px'} minW={'300px'}>
              <VStack spacing={'16px'} align={"start"}>
                <Text fontWeight={"bold"}
                      cursor={"pointer"}
                      onClick={() => {
                        window.open('https://finance.nestprotocol.org/', '_blank')
                      }}
                      color={'#003232'}>Launch App</Text>
                <Text
                  color={'#7D7D7D'}
                  fontWeight={'semibold'}
                >Buy futures, options and win NEST</Text>
              </VStack>
              <VStack spacing={'16px'} align={"start"}>
                <Text fontWeight={"bold"} color={'#003232'}
                      cursor={"pointer"} onClick={() => {
                  navigate('news')
                  window.scrollTo(0, 0)
                }}
                >NEST News</Text>
                <Text color={'#7D7D7D'} fontWeight={'semibold'}>Latest news from NEST</Text>
              </VStack>
              <VStack spacing={'16px'} align={"start"}>
                <Text fontWeight={"bold"} color={'#003232'} cursor={"pointer"} onClick={() => {
                  navigate('nest-research-academy')
                  window.scrollTo(0, 0)
                }}>NEST Research Academy</Text>
                <Text color={'#7D7D7D'} fontWeight={'semibold'}>Know about NRA</Text>
              </VStack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack px={isDesktop ? '0' : '16px'} spacing={'40px'} minW={'300px'}>
              <VStack spacing={'16px'} align={"start"}>
                <Text fontWeight={"bold"} color={'#003232'} cursor={"pointer"} onClick={() => {
                  navigate('docs/NEST-PVM/Concept.md')
                  window.scrollTo(0, 0)
                }}>NEST PVM Docs</Text>
                <Text color={'#7D7D7D'} fontWeight={'semibold'}>Know how to develop on NEST PVM</Text>
              </VStack>
              <VStack spacing={'16px'} align={"start"}>
                <Text fontWeight={"bold"} color={'#003232'} cursor={"pointer"} onClick={() => {
                  navigate('docs/NEST-Oracle/Concept.md')
                  window.scrollTo(0, 0)
                }}>NEST Oracle Docs</Text>
                <Text color={'#7D7D7D'} fontWeight={'semibold'}>Know how to use NEST Oracle</Text>
              </VStack>
              <HStack spacing={'24px'}>
                <chakra.img
                  alt={'https://github.com/NEST-Protocol'}
                  src={Github_URL}
                  width={'44px'}
                  height={'44px'}
                  cursor={"pointer"}
                  onClick={() => {
                    window.open('https://github.com/NEST-Protocol', '_blank')
                  }}
                />
                <chakra.img
                  alt={'https://twitter.com/nest_protocol/'}
                  src={Twitter_URL}
                  width={'44px'}
                  height={'44px'}
                  cursor={"pointer"}
                  onClick={() => {
                    window.open('https://twitter.com/nest_protocol/', '_blank')
                  }}
                />
                <chakra.img
                  alt={'https://t.me/nest_chat/'}
                  src={Telegram_URL}
                  width={'44px'}
                  height={'44px'}
                  cursor={"pointer"}
                  onClick={() => {
                    window.open('https://t.me/nest_chat/', '_blank')
                  }}
                />
                <chakra.img
                  alt={'https://nest-protocol-82041.medium.com/'}
                  src={Medium_URL}
                  width={'44px'}
                  height={'44px'}
                  cursor={"pointer"}
                  onClick={() => {
                    window.open('https://nest-protocol-82041.medium.com/', '_blank')
                  }}
                />
              </HStack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack spacing={'32px'} zIndex={1} w={isDesktop ? '500px' : 'full'}>
              <Text px={'16px'} fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
                Market price
              </Text>
              <chakra.div
                id="crypto-widget-CoinList"
                data-transparent="true"
                data-design="classic"
                data-coin-ids="2204"
                w={'full'}
              ></chakra.div>
            </Stack>
          </WrapItem>
        </Wrap>
      </Stack>
      <HStack justify={"end"} w={'full'}>
        <Text px={'24px'} color={'#7D7D7D'} fontSize={'15px'} fontWeight={'semibold'}>
          ©2022 NEST
        </Text>
      </HStack>
    </Stack>
  )
}

export default Footer
