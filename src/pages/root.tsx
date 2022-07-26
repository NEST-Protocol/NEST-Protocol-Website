import {
  Heading,
  Stack,
  chakra,
  useMediaQuery,
} from '@chakra-ui/react'
import * as React from 'react'
import {Helmet} from 'react-helmet'
import {useNavigate} from 'react-router-dom'

const Root = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const navigate = useNavigate()
  const pages = [
    {
      name: 'Ecosystem',
      pathname: 'ecosystem',
      icon: "",
      bg: "",
      bgIcon: "",
      phoneBg: "",
      title: 'Explore the NEST Ecosystem',
      desc: `A complete gaming space with applications of DeFi, GameFi and NFT built on the NEST. Swap, hedge, earn and even game with the NEST network to gain excess returns.`,
      bgSize: ['160%', '80%'],
    },
    {
      name: 'Developers',
      pathname: 'docs',
      icon: "",
      bg: "",
      bgIcon: "",
      phoneBg: "",
      title: 'Build smart contract with NEST',
      desc: `Technical guidelines, source code, and detailed training materials on how to build NEST-based\napplications from scratch here.`,
      bgSize: ['160%', '100%'],
    },
    {
      name: 'Community',
      pathname: 'community',
      icon: "",
      bg: "",
      bgIcon: "",
      phoneBg: "",
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
