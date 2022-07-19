import {
  Heading,
  Stack,
  chakra,
  Text,
  Button,
  HStack,
  useMediaQuery,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter
} from '@chakra-ui/react'
import * as React from 'react'
import { Helmet } from 'react-helmet'

import Home_NESTxFORT_pic from '../assets/webp/Home_NESTxFORT_pic.webp'
import Developer_URI from '../assets/webp/Home_pic_2.webp'
import Community_URI from '../assets/webp/Home_pic_4.webp'
import Ecosystem_URI from '../assets/webp/Home_pic_3.webp'
import Developer_Icon_URI from '../assets/webp/Home_Developers_icon.webp'
import Community_Icon_URI from '../assets/webp/Home_Community_icon.webp'
import Ecosystem_Icon_URI from '../assets/webp/Home_Ecosystem_icon.webp'
import {useNavigate, useSearchParams} from 'react-router-dom'
import NEST_URI from '../assets/svg/nest.svg'
import FORT_URI from '../assets/svg/fort.svg'
import Home_NESTxFORT_icon from '../assets/webp/Home_NESTxFORT_icon.webp'
import Home_icon_3 from '../assets/webp/Home_icon_3.webp'
import Home_icon_2 from '../assets/webp/Home_icon_2.webp'
import Home_icon_4 from '../assets/webp/Home_icon_4.webp'
import ChakraBox from '../components/ChakraBox'
import {useEffect, useRef} from "react";


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
      title: 'Explore the NEST Ecosystem',
      desc: `A complete gaming space with applications of DeFi, GameFi and NFT built on the NEST. Swap, hedge, earn and even game with the NEST network to gain excess returns.`
    },
    {
      name: 'Developers',
      pathname: 'developers',
      icon: Developer_Icon_URI,
      bg: Developer_URI,
      bgIcon: Home_icon_2,
      title: 'Build smart contract with NEST',
      desc: `Technical guidelines, source code, and detailed training materials on how to build NEST-based applications from scratch here.`
    },
    {
      name: 'Community',
      pathname: 'community',
      icon: Community_Icon_URI,
      bg: Community_URI,
      bgIcon: Home_icon_4,
      title: 'Community',
      desc: `The NEST community is made up of developers, creators, enthusiasts, explore, contribute to the community and get reward.`
    }
  ]
  let [searchParams, setSearchParams] = useSearchParams();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)

  const from = searchParams.get('from') || undefined;

  useEffect(() => {
    if (from === 'fort') {
      onOpen()
    }
  }, [from])

  return (
    <>
      <Helmet>
        <title>Home | NEST Protocol</title>
      </Helmet>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent p={'24px'}>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Stack fontSize={'md'} color={'#003434'} fontWeight={'500'} spacing={'24px'}>
              <HStack align={"center"} justify={"center"}>
                <chakra.img src={NEST_URI}/>
                <Text>x</Text>
                <chakra.img src={FORT_URI}/>
              </HStack>
              <Text>
                The technical teams of the FORT protocol and NEST
                protocol will jointly advance the merger, and the merger is
                expected to be completed on July 29th.
              </Text>
              <Text>
                Starting from 10:00 (GMT+0) July 7 (some suspensions will
                take place a few hours earlier due to technical reason)
              </Text>
              <Text textAlign={"end"}>FORT DAO July 6th, 2022</Text>
            </Stack>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
      <Stack spacing={'44px'}>
        <Stack
          align={'center'}
          h={'full'}
          justify={'center'}
          minH={['540px', '660px']}
          bgImage={Home_NESTxFORT_pic}
          bgSize={'100% 100%'}
          spacing={'24px'}
        >
          <ChakraBox
            position={'absolute'}
            h={'360px'}
            w={'full'}
            bgSize={'contain'}
            bgImage={Home_NESTxFORT_icon}
            bgRepeat={'no-repeat'}
            bgPosition={'center'}
            zIndex={0}
          />
          <chakra.img src={NEST_URI} h={'34px'} alt={'nest_logo'} zIndex={1} />
          <chakra.img src={FORT_URI} h={'34px'} alt={'fort_logo'} zIndex={1} />
          <Text
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            fontSize={['24px', '38px']}
            fontWeight={'bold'}
            zIndex={1}
            letterSpacing={'10px'}
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
      {pages.map(({ name, pathname, icon, bg, bgIcon, title, desc }) => (
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
            <Stack
              position={'absolute'}
              h={'440px'}
              w={'full'}
              bgImage={bgIcon}
              bgRepeat={'no-repeat'}
              bgPosition={'center'}
              zIndex={0}
            />
            <chakra.img src={icon} zIndex={1} />
            <chakra.a
              fontSize={['17px', '24px']}
              fontWeight={'semibold'}
              color={'#003232'}
              href={pathname}
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
              href={pathname}
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
