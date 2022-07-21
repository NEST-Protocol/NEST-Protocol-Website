import { Stack, Text, HStack, useMediaQuery, chakra, Wrap, WrapItem } from '@chakra-ui/react'
import BG_URL from '../../assets/webp/Footer_bg.webp'
import Footer_icon from '../../assets/webp/Footer_icon.webp'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const navigate = useNavigate()

  if (isDesktop) {
    return (
      <Stack
        px={['24px', '48px']}
        w={'full'}
        align={'center'}
        bgImage={BG_URL}
        bgSize={'cover'}
        bgPosition={"center"}
        zIndex={'10'}
      >
        <Stack
          position={'absolute'}
          h={'360px'}
          w={'full'}
          bgSize={'contain'}
          bgImage={Footer_icon}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          zIndex={0}
        />
        <Wrap maxW={'1440px'} w={'full'} align={'start'} spacingY={'48px'} pt={'80px'} zIndex={1}>
          <WrapItem pl={4}>
            <Stack spacing={'44px'} w={'full'} minW={'180px'}>
              <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
                Ecosystem
              </Text>
              <Stack
                spacing={'16px'}
                color={'#7d7d7d'}
                fontWeight={'semibold'}
                fontSize={['12px', '15px']}
              >
                <Text
                  cursor={'pointer'}
                  onClick={() => {
                    navigate('ecosystem')
                  }}
                >
                  Explore applications
                </Text>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack spacing={'44px'} w={'full'} minW={'180px'}>
              <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
                Developers
              </Text>
              <Stack
                spacing={'16px'}
                color={'#7d7d7d'}
                fontWeight={'semibold'}
                fontSize={['12px', '15px']}
              >
                <Text
                  cursor={'pointer'}
                  onClick={() => {
                    navigate('docs')
                  }}
                >
                  Docs
                </Text>
                <Text
                  cursor={'pointer'}
                  onClick={() => {
                    window.open('https://github.com/NEST-Protocol/', '_blank')
                  }}
                >
                  Github
                </Text>
                <Text
                  cursor={'pointer'}
                  onClick={() => {
                    navigate('docs/Guide/Set-Up-Local-Environment.md')
                  }}
                >
                  Set up local environment
                </Text>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack spacing={'44px'} w={'full'} minW={'180px'}>
              <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
                Community
              </Text>
              <Stack
                spacing={'16px'}
                color={'#7d7d7d'}
                fontWeight={'semibold'}
                fontSize={['12px', '15px']}
              >
                <Text
                  cursor={'pointer'}
                  onClick={() => {
                    navigate('community')
                  }}
                >
                  Online communities
                </Text>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack spacing={'44px'} w={'full'} minW={'180px'}>
              <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
                Learn
              </Text>
              <Stack
                spacing={'16px'}
                color={'#7d7d7d'}
                fontWeight={'semibold'}
                fontSize={['12px', '15px']}
              >
                <Text
                  cursor={'pointer'}
                  onClick={() => {
                    navigate('learn')
                  }}
                >
                  What is NEST
                </Text>
                <Text
                  cursor={'pointer'}
                  onClick={() => {
                    navigate('learn')
                  }}
                >
                  Blogs
                </Text>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack spacing={7} w={'full'} minW={'400px'}>
              <Text pl={4} fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
                Market price
              </Text>
              <chakra.div
                id="crypto-widget-CoinList"
                data-transparent="true"
                data-design="classic"
                data-coin-ids="2204"
                h={'120px'}
              ></chakra.div>
            </Stack>
          </WrapItem>
        </Wrap>
        <HStack maxW={'1440px'} w={'full'} pr={4} justifyContent={'end'} pb={'80px'} zIndex={1}>
          <Text color={'#003434'} fontSize={'14px'} fontWeight={'bold'} textAlign={'end'}>
            ©2022 NEST
          </Text>
        </HStack>
      </Stack>
    )
  } else {
    return (
      <Stack
        py={'56px'}
        spacing={'32px'}
        bgImage={BG_URL}
        bgSize={'cover'}
        bgPosition={"center"}
      >
        <Stack
          position={'absolute'}
          h={'360px'}
          w={'full'}
          bgSize={'cover'}
          bgImage={Footer_icon}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          zIndex={0}
        />
        <HStack px={'24px'}>
          <Stack spacing={'32px'} w={'full'} zIndex={1}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Ecosystem
            </Text>
            <Stack
              spacing={'16px'}
              color={'#7d7d7d'}
              fontWeight={'semibold'}
              fontSize={['12px', '15px']}
            >
              <Text
                cursor={'pointer'}
                onClick={() => {
                  navigate('ecosystem')
                  window.scrollTo(0, 0)
                }}
              >
                Explore applications
              </Text>
            </Stack>
          </Stack>
        </HStack>
        <HStack px={'24px'} align={'start'}>
          <Stack spacing={'32px'} w={'full'} zIndex={1}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Developers
            </Text>
            <Stack
              spacing={'16px'}
              color={'#7d7d7d'}
              fontWeight={'semibold'}
              fontSize={['12px', '15px']}
            >
              <Text
                cursor={'pointer'}
                onClick={() => {
                  navigate('docs')
                }}
              >
                Docs
              </Text>
              <Text
                cursor={'pointer'}
                onClick={() => {
                  window.open('https://github.com/NEST-Protocol', '_blank')
                }}
              >
                Github
              </Text>
              <Text
                cursor={'pointer'}
                onClick={() => {
                  navigate('docs/Guide/Set-Up-Local-Environment.md')
                  window.scrollTo(0, 0)
                }}
              >
                Set up local environment
              </Text>
            </Stack>
          </Stack>
          <Stack spacing={'32px'} w={'full'} zIndex={1}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Community
            </Text>
            <Stack
              spacing={'16px'}
              color={'#7d7d7d'}
              fontWeight={'semibold'}
              fontSize={['12px', '15px']}
            >
              <Text
                cursor={'pointer'}
                onClick={() => {
                  navigate('community')
                  window.scrollTo(0, 0)
                }}
              >
                Online communities
              </Text>
            </Stack>
          </Stack>
        </HStack>
        <HStack px={'24px'} align={'start'}>
          <Stack spacing={'32px'} w={'full'} zIndex={1}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Learn
            </Text>
            <Stack
              spacing={'16px'}
              color={'#7d7d7d'}
              fontWeight={'semibold'}
              fontSize={['12px', '15px']}
            >
              <Text
                cursor={'pointer'}
                onClick={() => {
                  navigate('learn')
                  window.scrollTo(0, 0)
                }}
              >
                What is NEST
              </Text>
            </Stack>
          </Stack>
          <Stack spacing={'32px'} w={'full'} zIndex={1}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'} opacity={0}>
              Learn
            </Text>
            <Stack
              spacing={'16px'}
              color={'#7d7d7d'}
              fontWeight={'semibold'}
              fontSize={['12px', '15px']}
            >
              <Text
                cursor={'pointer'}
                onClick={() => {
                  navigate('learn')
                  window.scrollTo(0, 0)
                }}
              >
                Blogs
              </Text>
            </Stack>
          </Stack>
        </HStack>
        <Stack px={'24px'} spacing={'32px'} zIndex={1}>
          <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
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
        <Text px={'24px'} color={'#7D7D7D'} fontSize={'12px'} fontWeight={'semibold'}>
          ©2022 NEST
        </Text>
      </Stack>
    )
  }
}

export default Footer
