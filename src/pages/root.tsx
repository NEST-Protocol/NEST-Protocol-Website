import { Heading, Stack, chakra, Text, Button, HStack, useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'
import { Helmet } from 'react-helmet'

import Home_NESTxFORT_icon from '../assets/webp/Home_NESTxFORT_icon.webp'
import Home_NESTxFORT_pic from '../assets/webp/Home_NESTxFORT_pic.webp'
import Banner_URI from '../assets/webp/Home_pic_1.webp'
import Developer_URI from '../assets/webp/Home_pic_2.webp'
import Community_URI from '../assets/webp/Home_pic_4.webp'
import Ecosystem_URI from '../assets/webp/Home_pic_3.webp'
import Developer_Icon_URI from '../assets/webp/Home_Developers_icon.webp'
import Community_Icon_URI from '../assets/webp/Home_Community_icon.webp'
import Ecosystem_Icon_URI from '../assets/webp/Home_Ecosystem_icon.webp'
import {useNavigate} from "react-router-dom";

const Root = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const navigate = useNavigate()
  const pages = [
    {
      name: 'Ecosystem',
      path: 'ecosystem',
      icon: Ecosystem_Icon_URI,
      bg: Ecosystem_URI,
      title: 'Explore the NEST Ecosystem',
      desc: `A complete gaming space with applications of DeFi, GameFi and NFT built on the NEST. Swap, hedge, earn and even game with the NEST network to gain excess returns.`
    },
    {
      name: 'Developers',
      path: 'developers',
      icon: Developer_Icon_URI,
      bg: Developer_URI,
      title: 'Build smart contract with NEST',
      desc: `Technical guidelines, source code, and detailed training materials on how to build NEST-based applications from scratch here.`
    },
    {
      name: 'Community',
      path: 'community',
      icon: Community_Icon_URI,
      bg: Community_URI,
      title: 'Community',
      desc: `The NEST community is made up of developers, creators, enthusiasts, explore, contribute to the community and get reward.`
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
          bgImage={Home_NESTxFORT_pic}
          bgSize={'100% 100%'}
        >
          <Text
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            fontSize={['24px', '48px']}
            fontWeight={'bold'}
          >
            NEST and FORT
            <br />
            Will merged {!isDesktop && <br />} on July 29, 2022
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
            What is NEST
          </Button>
        </HStack>
      </Stack>
      {pages.map(({ name, path, icon, bg, title, desc }) => (
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
            bgImage={bg}
            bgSize={'100% 100%'}
            px={'24px'}
          >
            <chakra.img src={icon} />
            <chakra.a
              fontSize={['17px', '24px']}
              fontWeight={'semibold'}
              color={'#003232'}
              href={path}
            >
              {title}
            </chakra.a>
            <chakra.a
              fontSize={['12px', '15px']}
              fontWeight={'semibold'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
              textAlign={'center'}
              href={path}
              maxW={'480px'}
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
