import {
  Heading,
  Stack,
  chakra,
  Text,
  Button,
  HStack,
  useMediaQuery,
} from '@chakra-ui/react'
import * as React from 'react'
import {Helmet} from 'react-helmet'

import Home_NESTxFORT_pic from '../assets/webp/Home_NESTxFORT_pic.webp'
import Developer_URI from '../assets/webp/Home_pic_2.webp'
import Community_URI from '../assets/webp/Home_pic_4.webp'
import Ecosystem_URI from '../assets/webp/Home_pic_3.webp'
import Developer_Icon_URI from '../assets/webp/Home_Developers_icon.webp'
import Community_Icon_URI from '../assets/webp/Home_Community_icon.webp'
import Ecosystem_Icon_URI from '../assets/webp/Home_Ecosystem_icon.webp'
import {useNavigate} from 'react-router-dom'
import NEST_URI from '../assets/svg/nest_blue.svg'
import FORT_URI from '../assets/svg/fort.svg'
import Home_NESTxFORT_icon from '../assets/webp/Home_NESTxFORT_icon.webp'
import Home_icon_3 from '../assets/webp/Home_icon_3.webp'
import Home_icon_2 from '../assets/webp/Home_icon_2.webp'
import Home_icon_4 from '../assets/webp/Home_icon_4.webp'
import phone_home_01 from '../assets/webp/phone_Home_01.webp'
import phone_home_02 from '../assets/webp/phone_Home_02.webp'
import phone_home_03 from '../assets/webp/phone_Home_03.webp'
import phone_home_04 from '../assets/webp/phone_Home_04.webp'

const Root = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const navigate = useNavigate()
  const pages = [
    {
      name: 'Ecosystem',
      pathname: 'ecosystem',
      icon: Ecosystem_Icon_URI,
      bg: Ecosystem_URI,
      bgIcon: Home_icon_3,
      phoneBg: phone_home_03,
      title: 'Explore the NEST Ecosystem',
      desc: `A complete gaming space with applications of DeFi, GameFi and NFT built on the NEST. Swap, hedge, earn and even game with the NEST network to gain excess returns.`,
      bgSize: ['160%', '80%'],
    },
    {
      name: 'Developers',
      pathname: 'docs',
      icon: Developer_Icon_URI,
      bg: Developer_URI,
      bgIcon: Home_icon_2,
      phoneBg: phone_home_02,
      title: 'Build smart contract with NEST',
      desc: `Technical guidelines, source code, and detailed training materials on how to build NEST-based\napplications from scratch here.`,
      bgSize: ['160%', '100%'],
    },
    {
      name: 'Community',
      pathname: 'community',
      icon: Community_Icon_URI,
      bg: Community_URI,
      bgIcon: Home_icon_4,
      phoneBg: phone_home_04,
      title: 'Community',
      desc: `The NEST community is made up of developers, creators, enthusiasts, explore, contribute to the community and\nget reward.`,
      bgSize: ['140%', '100%'],
    }
  ]

  return (
    <>
      <Helmet>
        <title>Home | NEST Protocol</title>
      </Helmet>
      <Stack spacing={'44px'}>
        <Stack
          align={'center'}
          h={'full'}
          justify={'center'}
          minH={['540px', '660px']}
          bgImage={isDesktop ? Home_NESTxFORT_pic : phone_home_01}
          bgSize={'cover'}
          bgPosition={"center"}
          spacing={'24px'}
        >
          <Stack w={"full"} p={'12px'} position={"absolute"} zIndex={0}>
            <chakra.img
              src={Home_NESTxFORT_icon}
              alt="NEST"
              objectFit={"contain"}
              maxH={'308px'}
            />
          </Stack>
          <chakra.img src={NEST_URI} h={['20px', '34px']} alt={'nest_logo'} zIndex={1}/>
          <chakra.img src={FORT_URI} h={['17px', '30px']} alt={'fort_logo'} zIndex={1}/>
          <Text
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            fontSize={['24px', '38px']}
            fontWeight={'bold'}
            zIndex={1}
            letterSpacing={['7px', '10px']}
            color={'#003434'}
          >
            NEST and FORT
            <br/>
            merged
            {!isDesktop ? <br/> : <span>&nbsp;</span>}
            on July 22, 2022
          </Text>
        </Stack>
        <HStack justify={'center'}>
          <Button
            minH={isDesktop ? '34px' : '44px'}
            px={isDesktop ? '20px' : '70px'}
            onClick={() => {
              navigate('learn')
            }}
          >
            About NEST
          </Button>
        </HStack>
      </Stack>
      {pages.map(({name, icon, bg, bgSize, pathname, phoneBg, bgIcon, title, desc}) => (
        <Stack key={name} spacing={'48px'}>
          <Stack px={['24px', '48px']} w={'full'} align={'center'}>
            <Stack maxW={'1440px'} w={'full'}>
              <Heading fontSize={['24px', '48px']} color={'#003232'}>
                {name}
              </Heading>
            </Stack>
          </Stack>
          <Stack
            align={'center'}
            minH={'440px'}
            justify={'center'}
            spacing={['13px', '16px']}
            bgImage={isDesktop ? bg : phoneBg}
            bgSize={"cover"}
            px={'24px'}
            cursor={"pointer"}
            onClick={() => {
              navigate(pathname)
              window.scrollTo(0,0)
            }}
          >
            <Stack
              position={'absolute'}
              h={'440px'}
              w={'full'}
              bgImage={bgIcon}
              bgRepeat={'no-repeat'}
              bgPosition={'center'}
              bgSize={bgSize}
              zIndex={0}
            />
            <chakra.img src={icon} h={['55px', '110px']} zIndex={1}/>
            <chakra.a
              fontSize={['17px', '24px']}
              fontWeight={'semibold'}
              color={'#003232'}
              zIndex={1}
            >
              {title}
            </chakra.a>
            <chakra.a
              fontSize={['12px', '15px']}
              fontWeight={'semibold'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
              textAlign={'center'}
              maxW={'480px'}
              zIndex={1}
            >
              {desc}
            </chakra.a>
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default Root
