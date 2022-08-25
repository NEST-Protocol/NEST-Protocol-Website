import React from 'react';
import {
  Stack,
  useMediaQuery,
  ChakraProvider,
  chakra,
  Heading,
  Text,
  HStack,
  Center,
  Link,
  Button, SimpleGrid, VStack
} from "@chakra-ui/react";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../chakra"
import TheHeader from "@site/src/components/TheHeader";
import BigTitle from "@site/src/components/BigTitle";
import {ChevronRightIcon} from "@chakra-ui/icons";
import BrowserOnly from "@docusaurus/BrowserOnly";


export default function Home(): JSX.Element {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST Protocol | The stochastic computer based on PVM</title>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "56px"}>
        <React.Suspense fallback={<div></div>}>
          <Banner/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <NESTFi/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <Developers/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <News/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <Research/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <Partners/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <TheFooter/>
        </React.Suspense>
      </Stack>
    </ChakraProvider>
  );
}

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'44px'}>
      <Stack
        align={'center'}
        justify={'center'}
        h={isDesktop ? "615px" : "540px"}
        bgImage={isDesktop ? "/image/Home/Home_bg_1.webp" : "/image/Home/Home_bg_1_phone.webp"}
        bgSize={'cover'}
        bgPosition={"center"}
        spacing={'24px'}
      >
        <TheHeader/>
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Home/Home_bg_icon_1.webp" : "/image/Home/Home_bg_icon_1_phone.webp"}
          alt={'NEST'}
          h={['540px', '615px']}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <Heading
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={isDesktop ? "40px" : "24px"}
          fontWeight={'700'}
          zIndex={1}
          color={'#003434'}
        >
          What is NEST
        </Heading>

        {isDesktop ? (
          <Text
            fontWeight={"700"}
            fontSize={isDesktop ? "25px" : "12px"}
            textAlign={"center"}
            color={'#003434'}
            zIndex={1}
          >
            NEST is the stochastic computer based on PVM,
            <br/>
            enables the generation and programming of stochastic assets.
          </Text>
        ) : (
          <Stack>
            <Text
              fontWeight={"700"}
              fontSize={isDesktop ? "25px" : "12px"}
              textAlign={"center"}
              color={'#003434'}
              zIndex={1}
              px={'24px'}
            >
              NEST is the stochastic computer based on PVM, enables the generation and programming of stochastic assets.
            </Text>
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

const Developers = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Stack spacing={'48px'} align={'center'}>
        <BigTitle title={'Developers'}/>
        <HStack w={"100%"} spacing={'44px'} maxW={'1440px'}>
          <Center color={'#003232'} borderRadius={'12px'} fontWeight={"600"} w={'100%'} h={'440px'}
                  bgImage={"/image/Home/Home_bg_3.webp"} bgSize={"cover"} bgPosition={"center"}>
            <Stack maxW={'360px'}>
              <Text fontSize={25}>
                NEST PVM
              </Text>
              <Text>
                NEST Probabilistic Virtual Machine (NEST PVM) is a virtual machine-like structure based on the basic
                function library.
              </Text>
              <Link color={'#00A0E9'} fontSize={15} href={'/docs/Concept/What-is-NEST'}>
                Learn more about NEST PVM<ChevronRightIcon/>
              </Link>
            </Stack>
          </Center>
          <Center color={'#003232'} borderRadius={'12px'} fontWeight={"600"} w={'100%'} h={'440px'}
                  bgImage={"/image/Home/Home_bg_4.webp"} bgSize={"cover"} bgPosition={"center"}>
            <Stack maxW={'360px'}>
              <Text fontSize={25}>
                NEST Oracle
              </Text>
              <Text>
                NEST oracle is the only truly decentralized
                oracle on the market today.
                <br/>
                <br/>
              </Text>
              <Link color={'#00A0E9'} fontSize={15} href={'/docs/NEST-Oracle/How-does-NEST-Oracle-Work'}>
                Learn more about NEST Oracle<ChevronRightIcon/>
              </Link>
            </Stack>
          </Center>
        </HStack>
      </Stack>
    )
  } else {
    return (
      <Stack spacing={'48px'} align={'center'}>
        <BigTitle title={'Developers'}/>
        <Stack w={"100%"} spacing={'44px'} maxW={'1440px'}>
          <Center color={'#003232'} fontWeight={"600"} w={'100%'} h={'440px'} bgImage={"/image/Home/Home_bg_3.webp"}
                  bgSize={"cover"} bgPosition={"center"}>
            <Stack maxW={'360px'} p={'12px'} align={"center"}>
              <Text fontSize={17}>
                NEST PVM
              </Text>
              <Text textAlign={"center"} fontSize={12}>
                NEST Probabilistic Virtual Machine (NEST PVM)
                is a virtual machine-like structure based
                on the basic function library.
              </Text>
              <br/>
              <Link color={'#00A0E9'} fontSize={12} href={'/docs/Concept/What-is-NEST'}>
                Learn more about NEST PVM<ChevronRightIcon/>
              </Link>
            </Stack>
          </Center>
          <Center color={'#003232'} fontWeight={"600"} w={'100%'} h={'440px'} bgImage={"/image/Home/Home_bg_4.webp"}
                  bgSize={"cover"} bgPosition={"center"}>
            <Stack maxW={'360px'} p={'12px'} align={"center"}>
              <Text fontSize={17}>
                NEST Oracle
              </Text>
              <Text textAlign={"center"} fontSize={12}>
                NEST oracle is the only truly decentralized oracle on the market today.
                <br/>
                <br/>
              </Text>
              <br/>
              <Link color={'#00A0E9'} fontSize={12} href={'/docs/NEST-Oracle/Concept'}>
                Learn more about NEST Oracle<ChevronRightIcon/>
              </Link>
            </Stack>
          </Center>
        </Stack>
      </Stack>
    )
  }
}

const NESTFi = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <BrowserOnly>
      {() => (
        <Stack spacing={'48px'} align={'center'}>
          <BigTitle title={'NEST Fi'}/>
          <Stack
            align={'center'}
            minH={'440px'}
            w={'100%'}
            justify={'center'}
            spacing={isDesktop ? "16px" : "13px"}
            bgImage={isDesktop ? "/image/Home/Home_bg_2.webp" : "/image/Home/Home_bg_2_phone.webp"}
            bgSize={'cover'}
            bgPosition={"center"}
          >
            <chakra.img
              position={"absolute"}
              src={isDesktop ? "/image/Home/Home_bg_icon_2.webp" : "/image/Home/Home_bg_icon_2_phone.webp"}
              alt={'NEST'}
              minH={'440px'}
              objectFit={'cover'}
              overflow={"hidden"}
            />
            <chakra.img src={"/image/Home/icon_1.webp"} alt={'NEST Financial Market'} zIndex={1}
                        h={isDesktop ? "90px" : "55px"}/>
            <Heading
              fontSize={isDesktop ? "24px" : "17px"}
              fontWeight={'600'}
              color={'#003232'}
              zIndex={1}
            >
              NEST Financial Market
            </Heading>
            <Text
              zIndex={1}
              fontSize={isDesktop ? "15px" : "12px"}
              fontWeight={'600'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
              textAlign={'center'}
            >
              Get NEST token here and buy futures,
              {isDesktop ? ' ' : <br/>}
              options or play DeFi games to win NEST.
            </Text>
            <Stack pt={'16px'}>
              <Button
                aria-label={'Launch App'}
                className={"button--primary"}
                minW={'160px'}
                minH={isDesktop ? "34px" : "44px"}
                onClick={() => {
                  window.open('https://finance.nestprotocol.org/#/win', '_blank')
                }}
              >
                Launch App
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}
    </BrowserOnly>
  )
}

const News = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'News'}/>
      <Stack
        px={isDesktop ? "48px" : "24px"}
        align={'center'}
        minH={'440px'}
        justify={'center'}
        spacing={'16px'}
      >
        <SimpleGrid columns={isDesktop ? 3 : 1} spacing={isDesktop ? "44px" : "22px"} pb={'27px'}>
          {[
            {
              label: `Coinbase Announces Planned Listing of Tokens, Adds $NEST to ‘Experimental Asset’ Label`,
              bg: "/image/Home/News_card_bg.webp",
              logo: "/image/Home/News_card_icon.webp",
              desc: `Leading United States-based cryptocurrency exchange`,
              link: '/blog/Coinbase-Announces-Adds-$NEST-to-Experimental-Asset-Label',
              date: "July 25, 2022"
            },
            {
              label: 'NEST Protocol: A New Paradigm of Game Theoretic Oracle',
              bg: "/image/Home/News_card_bg_1.webp",
              logo: "/image/Home/News_card_icon_1.webp",
              desc: 'Blockchain innovation defined the major part of the last decade,with cryptocurrency disrupting.',
              link: '/blog/NEST-Protocol-A-New-Paradigm-of-Game-Theoretic-Oracle',
              date: "July 9, 2022"
            },
            {
              label: 'NEST’s RSS FEED INTEGRATED WITH CRYPTO.COM PRICE PAGE',
              bg: "/image/Home/News_card_bg_2.webp",
              logo: "/image/Home/News_card_icon_2.webp",
              desc: 'Through Crypto.com’s NEST Price Page, you can now directly access NEST’s RSS news feed.',
              link: '/blog/NEST\'s-RSS-FEED-INTEGRATED-WITH-CRYPTO.COM-PRICE-PAGE',
              date: "May 6, 2022"
            },
          ].map(item => (
            <VStack
              key={item.label}
              w={isDesktop ? '308px' : '100%'}
              spacing={0}
              border={'1px solid #EEEEEE'}
              boxShadow={'0px 0px 45px 5px #E5E5E5'}
              borderRadius={'12px'}
              overflow={'hidden'}
            >
              <Stack
                bgImage={item.bg}
                bgRepeat={'no-repeat'}
                w={'100%'}
                bgSize={'cover'}
                align={'center'}
                justify={'center'}
                h={isDesktop ? "160px" : "135px"}
              >
                <chakra.img src={item.logo} alt={''} _hover={{transform: 'scale(1.05)'}} h={'90px'}/>
              </Stack>
              <VStack
                w={'full'}
                px={'30px'}
                py={'24px'}
                spacing={'8px'}
                alignItems={isDesktop ? 'center' : 'start'}
                justifyContent={'start'}
              >
                <Link
                  isExternal
                  href={item.link}
                  style={{textDecoration: 'none'}}
                  fontSize={[12, 15]}
                  color={'#003232'}
                  fontWeight={'700'}
                  textAlign={'start'}
                  w={'full'}
                  whiteSpace={'break-spaces'}
                >
                  {item.label}
                </Link>
                <Link
                  isExternal
                  href={item.link}
                  style={{textDecoration: 'none'}}
                  fontSize={[12, 15]}
                  fontWeight={'600'}
                  color={'#7d7d7d'}
                >
                  {item.desc}
                </Link>
                <HStack w={"full"}>
                  <Text
                    fontSize={[12, 15]}
                    fontWeight={'500'}
                    color={'#7d7d7d'}
                  >{item.date}</Text>
                </HStack>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
      <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'15px'} cursor={"pointer"} href={'/news'}>
        More news<ChevronRightIcon/>
      </Link>
    </Stack>
  )
}

const Partners = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Integrations & Partners'}/>
      <Stack
        align={'center'}
        justify={'center'}
        spacing={'16px'}
        h={'440px'}
        w={"100vw"}
        bgImage={isDesktop ? "/image/Home/Home_bg_6.webp" : "/image/Home/Home_bg_6_phone.webp"}
        bgPosition={"bottom"}
        bgSize={'cover'}
        px={['30px']}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Home/Home_bg_icon_4.webp" : "image/Home/Home_bg_icon_4_phone.webp"}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <SimpleGrid columns={isDesktop ? 4 : 3} zIndex={1} spacing={isDesktop ? "40px" : "20px"}>
          {[
            {
              label: 'Huobi',
              logo: "/svg/huobi.svg",
              link: 'https://www.huobi.com/'
            },
            {
              label: 'Binance',
              logo: "svg/binance.svg",
              link: 'https://www.binance.com/'
            },
            {
              label: 'Coinbase',
              logo: "/svg/Coinbase.svg",
              link: 'https://www.coinbase.com/'
            },
            {
              label: 'kcc',
              logo: "/svg/kcc.svg",
              link: 'https://kcc.io'
            },
            {
              label: 'polygon',
              logo: "/svg/polygon.svg",
              link: 'https://polygon.technology/'
            },
            {
              label: 'cointelegraph',
              logo: "/svg/cointelegraph.svg",
              link: 'https://cointelegraph.com/'
            },
            {
              label: 'cube',
              logo: "/svg/cube.svg",
              link: 'https://cube.network/'
            },
            {
              label: 'pechshield',
              logo: "/svg/peckshield.svg",
              link: 'https://peckshield.com/'
            },
            {
              label: 'fortube',
              logo: "/svg/fortube.svg",
              link: 'https://for.tube'
            },
            {
              label: 'polynetwork',
              logo: "/svg/polynetwork.svg",
              link: 'https://polygon.technology/'
            },
            {
              label: 'cofix',
              logo: "/svg/CoFiX.svg",
              link: 'https://cofix.tech/'
            },
            {
              label: 'parasset',
              logo: "/svg/Parasset.svg",
              link: 'https://www.parasset.top/'
            },
            {
              label: 'certik',
              logo: "/svg/certik.svg",
              link: 'https://www.certik.com/'
            },
          ].map(item => (
            <chakra.img
              src={item.logo}
              alt={item.label} h={'48px'}
              cursor={"pointer"}
              onClick={() => {
                window.open(item.link, '_blank')
              }}/>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

const Research = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'NEST Research Academy'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'100%'}
        justify={'center'}
        spacing={isDesktop ? "16px" : "13px"}
        bgImage={isDesktop ? "/image/Home/Home_bg_5.webp" : "/image/Home/Home_bg_5_phone.webp"}
        bgSize={'cover'}
        bgPosition={"center"}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Home/Home_bg_icon_3.webp" : "/image/Home/Home_bg_icon_3_phone.webp"}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={"/image/Home/icon_2.webp"} alt={''} zIndex={1} h={isDesktop ? "90px" : "55px"}/>
        <Heading
          fontSize={isDesktop ? "24px" : "17px"}
          fontWeight={'600'}
          color={'#003232'}
          zIndex={1}
        >
          NEST Research Academy (NRA)
        </Heading>
        {isDesktop ? (
          <Text
            zIndex={1}
            fontSize={isDesktop ? "15px" : "12px"}
            fontWeight={'600'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            textAlign={'center'}
          >
            NEST Research Academy (NRA), initialized by the NEST protocol, aims to boost
            <br/>
            theoretical and applied research in related fields such as blockchain, finance,
            <br/>
            economics, game theory, machine learning, computer science, and software
            <br/>
            engineering and helps to spread this knowledge to the public.
          </Text>
        ) : (
          <Text
            zIndex={1}
            fontSize={isDesktop ? "15px" : "12px"}
            fontWeight={'600'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            px={'24px'}
          >
            NEST Research Academy (NRA), initialized by the NEST protocol, aims to boost
            theoretical and applied research in related fields such as blockchain, finance,
            economics, game theory, machine learning, computer science, and software
            engineering and helps to spread this knowledge to the public.
          </Text>
        )}

        <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'15px'} zIndex={1}
              href={'/nest-research-academy'}>
          Learn more about NRA<ChevronRightIcon/>
        </Link>
      </Stack>
    </Stack>
  )
}