import { chakra, Heading, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'
import Banner_URI from '../../assets/webp/Ecosystem_pic_1.webp'
import Project1_URI from '../../assets/webp/Ecosystem_pic_2.webp'
import Project2_URI from '../../assets/webp/Ecosystem_pic_3.webp'
import Market_Icon_URI from '../../assets/webp/Market_icon.webp'
import Phone_Icon_URI from '../../assets/webp/iPhone_pic.webp'
import RIGHT_URI from '../../assets/svg/right_icon.svg'
import { Helmet } from 'react-helmet'
import Ecosystem_icon1 from '../../assets/webp/Ecosystem_icon_1.webp'
import Ecosystem_icon2 from '../../assets/webp/Ecosystem_icon_2.webp'
import Ecosystem_icon3 from '../../assets/webp/Ecosystem_icon_3.webp'
import ChakraBox from '../../components/ChakraBox'

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
        <ChakraBox
          position={'absolute'}
          h={'600px'}
          w={'full'}
          overflow={'hidden'}
          bgSize={'contain'}
          bgImage={Ecosystem_icon1}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          zIndex={0}
          animate={{
            rotate: [0, 360]
          }}
          // @ts-ignore
          transition={{
            duration: 60,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
        <Text textAlign={'center'} fontSize={['24px', '48px']} fontWeight={'bold'} zIndex={1}>
          Explore the {!isDesktop && <br />} NEST Ecosystem
        </Text>
        <Text
          fontSize={['12px', '24px']}
          fontWeight={'bold'}
          textAlign={'center'}
          maxW={'720px'}
          zIndex={1}
        >
          A complete gaming space with applications of DeFi, GameFi NFT built on the NEST. Swap,
          hedge, earn and even game with the NEST network to gain excess returns.
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
          <Stack
            position={'absolute'}
            h={'400px'}
            w={'full'}
            overflow={'hidden'}
            align={'center'}
            bgSize={'contain'}
            bgImage={Ecosystem_icon2}
            bgRepeat={'no-repeat'}
            bgPosition={'center'}
            zIndex={0}
          />
          <chakra.img src={Market_Icon_URI} zIndex={1} />
          <chakra.a
            fontSize={['17px', '24px']}
            fontWeight={'semibold'}
            color={'#003232'}
            zIndex={1}
          >
            NEST Financial Market
          </chakra.a>
          <chakra.a
            zIndex={1}
            fontSize={['12px', '15px']}
            fontWeight={'semibold'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            maxW={'320px'}
          >
            Get NEST token here and buy futures, options or play DeFi games to win NEST.
          </chakra.a>
          <chakra.a
            zIndex={1}
            fontSize={['12px', '15px']}
            fontWeight={'semibold'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            maxW={'320px'}
          >
            Win NEST and Trade
          </chakra.a>
          <chakra.img
            zIndex={1}
            src={RIGHT_URI}
            w={'44px'}
            cursor={'pointer'}
            _hover={{ transform: 'translateX(8px)' }}
            onClick={() => {
              window.open('https://finance.nestprotocol.org', '_blank')
            }}
          />
        </Stack>
      </Stack>
      <Stack spacing={'48px'} align={'center'} h={'840px'} justify={'start'}>
        <Stack
          align={'center'}
          maxH={'440px'}
          w={'full'}
          justify={'start'}
          spacing={['13px', '16px']}
          bgImage={Project2_URI}
          bgSize={'100% 100%'}
        >
          <Stack
            position={'absolute'}
            h={'440px'}
            w={'full'}
            overflow={'hidden'}
            bgImage={Ecosystem_icon3}
            bgRepeat={'no-repeat'}
            bgPosition={'bottom'}
            zIndex={0}
          />
          <chakra.img zIndex={1} pt={'80px'} src={Phone_Icon_URI} />
          <chakra.a
            fontSize={['17px', '24px']}
            fontWeight={'semibold'}
            color={'#003232'}
            zIndex={1}
          >
            NEST Oracle
          </chakra.a>
          <chakra.a
            zIndex={1}
            fontSize={['12px', '15px']}
            fontWeight={'semibold'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            maxW={'320px'}
          >
            Truly decentralized oracle
            <br />
            Nodeless permissionless quotation
            <br />
            On-chain verification.
          </chakra.a>
          <chakra.a
            zIndex={1}
            fontSize={['12px', '15px']}
            fontWeight={'semibold'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            maxW={'320px'}
          >
            Create Your Own Oracle
          </chakra.a>
          <chakra.img
            zIndex={1}
            src={RIGHT_URI}
            w={'44px'}
            cursor={'pointer'}
            _hover={{ transform: 'translateX(8px)' }}
            onClick={() => {
              window.open('https://oracle.nestprotocol.org/', '_blank')
            }}
          />
        </Stack>
      </Stack>
    </>
  )
}

export default Ecosystem
