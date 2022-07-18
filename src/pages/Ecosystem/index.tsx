import { chakra, Heading, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'
import Banner_URI from '../../assets/webp/Ecosystem_pic_1.webp'
import Project1_URI from '../../assets/webp/Ecosystem_pic_2.webp'
import Project2_URI from '../../assets/webp/Ecosystem_pic_3.webp'
import Market_Icon_URI from '../../assets/webp/Ecosystem_Market_icon.webp'
import Phone_Icon_URI from '../../assets/webp/Ecosystem_iPhone_pic.webp'
import { Helmet } from 'react-helmet'

const Ecosystem = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Helmet>
        <title>Explore the NEST Ecosystem</title>
      </Helmet>
      <Stack
        align={'center'}
        h={'full'}
        justify={'center'}
        minH={['540px', '660px']}
        bgImage={Banner_URI}
        bgSize={'100% 100%'}
        spacing={['22px', '44px']}
        px={'24px'}
      >
        <Text textAlign={'center'} fontSize={['24px', '48px']} fontWeight={'bold'}>
          Explore the {!isDesktop && <br />} NEST Ecosystem
        </Text>
        <Text fontSize={['12px', '24px']} fontWeight={'bold'} textAlign={'center'} maxW={'720px'}>
          A complete gaming space with applications of DeFi, GameFi NFT built on the NEST. Swap, hedge, earn and even game with the NEST network to gain excess returns.
        </Text>
      </Stack>
      <Stack spacing={'48px'} align={'center'}>
        <Stack px={['24px', '48px']} w={'full'} align={'center'}>
          <Stack maxW={'1440px'} w={'full'}>
            <Heading fontSize={['24px', '48px']} color={'#003232'}>
              Project
            </Heading>
          </Stack>
        </Stack>
        <Stack
          align={'center'}
          minH={'440px'}
          w={'full'}
          justify={'center'}
          spacing={['13px', '16px']}
          bgImage={Project1_URI}
          bgSize={'100% 100%'}
        >
          <chakra.img src={Market_Icon_URI} />
          <chakra.a fontSize={['17px', '24px']} fontWeight={'semibold'} color={'#003232'}>
            NEST Financial Market
          </chakra.a>
          <chakra.a
            fontSize={['12px', '15px']}
            fontWeight={'semibold'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            maxW={'480px'}
          >
            Get NEST token here and buy futures
            <br />
            options
            <br />
            or do defi games to win NEST.
          </chakra.a>
        </Stack>
      </Stack>
      <Stack spacing={'48px'} align={'center'} h={'700px'} justify={'start'}>
        <Stack
          align={'center'}
          maxH={'440px'}
          w={'full'}
          justify={'start'}
          pt={'80px'}
          spacing={['13px', '16px']}
          bgImage={Project2_URI}
          bgSize={'100% 100%'}
        >
          <chakra.img
            src={Phone_Icon_URI}
            cursor={'pointer'}
            onClick={() => {
              window.open('https://channel.nestprotocol.org/', '_blank')
            }}
          />
          <chakra.a fontSize={['17px', '24px']} fontWeight={'semibold'} color={'#003232'}>
            NEST Oracle
          </chakra.a>
          <chakra.a
            fontSize={['12px', '15px']}
            fontWeight={'semibold'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            maxW={'720px'}
          >
            Truly decentralized oracle
            <br/>
            Nodeless permissionless quotation
            <br/>
            On-chain verification.
          </chakra.a>
        </Stack>
      </Stack>
    </>
  )
}

export default Ecosystem
