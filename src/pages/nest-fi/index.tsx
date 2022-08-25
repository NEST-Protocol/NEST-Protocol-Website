import {
  Stack,
  useMediaQuery,
  ChakraProvider,
  Wrap,
  WrapItem,
  Text,
  chakra,
  HStack,
  Center,
  Heading, Button
} from '@chakra-ui/react'
import * as React from 'react'
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../chakra";
import {useEffect} from "react";
import TheHeader from "@site/src/components/TheHeader";

const NESTFi = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST Fi | NEST Protocol</title>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "30px"}>
        <Banner/>
        <Apps/>
        {/*<Data/>*/}
        <TheFooter/>
      </Stack>
    </ChakraProvider>
  )
}

export default NESTFi

const Data = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const [data, setData] = React.useState({
    userCount: 0,
    position: 0,
    txValue: 0
  })

  const fetchData = async () => {
    const response = await fetch('https://nestdapp.io/nestwebApi/nestFiInfo');
    const d = await response.json();
    if (d?.value) {
      setData(d.value);
      console.log(d.value);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Stack align={"center"} spacing={0}>
      <Wrap maxW={'1000px'} w={'100%'} justify={"space-around"} align={"center"} spacing={'24px'}>
        <WrapItem w={isDesktop ? '300px' : '100%'} justifyContent={"center"}>
          <Stack textAlign={"center"} align={"center"} justify={"center"} spacing={0}>
            <Text fontSize={'33px'} fontWeight={'600'}
                  m={0}>{data.txValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>Total Trading Volume ($NEST)</Text>
          </Stack>
        </WrapItem>
        <WrapItem w={isDesktop ? '300px' : '100%'} justifyContent={"center"}>
          <Stack textAlign={"center"} align={"center"} justify={"center"} spacing={0}>
            <Text fontSize={'33px'} fontWeight={'600'}
                  m={0}>{data.position.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>Open Interest ($NEST)</Text>
          </Stack>
        </WrapItem>
        <WrapItem w={isDesktop ? '300px' : '100%'} justifyContent={"center"}>
          <Stack textAlign={"center"} align={"center"} justify={"center"} spacing={0}>
            <Text fontSize={'33px'} fontWeight={'600'}
                  m={0}>{data.userCount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>Total Users</Text>
          </Stack>
        </WrapItem>
      </Wrap>
    </Stack>
  )
}

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      justify={'center'}
      h={'410px'}
      w={"100%"}
      bgImage={isDesktop ? "/image/NEST_Fi/NEST_Fi_bg_1.webp" : "/image/NEST_Fi/NEST_Fi_bg_1_phone.webp"}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={0}
      px={'24px'}
    >
      <TheHeader/>
      <chakra.img
        position={"absolute"}
        src={isDesktop ? "/image/NEST_Fi/NEST_Fi_bg_icon_1.webp" : "/image/NEST_Fi/NEST_Fi_bg_icon_1_phone.webp"}
        alt={'NEST Fi'}
        h={'410px'}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Stack pt={'60px'} spacing={isDesktop ? "44px" : "22px"}>
        <Text textAlign={'center'} fontSize={["24px", "48px"]} fontWeight={'700'} zIndex={1} color={'#003434'}>
          Decentralized
          {!isDesktop ? (<br/>) : " "}
          Financial Market
        </Text>
        <Text textAlign={"center"} fontWeight={"700"} fontSize={["12px", "24px"]} color={'#003434'} zIndex={1}>
          NEST Financial Market provides futures
          {!isDesktop ? (<br/>) : " "}
          and options with infinite liquidity.
        </Text>
      </Stack>
    </Stack>
  )
}

const Apps = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Stack align={"center"} spacing={0} w={'100%'} alignItems={"center"}>
        <Stack maxW={'1440px'} w={'100%'} spacing={'80px'}>
          <HStack spacing={0} w={'100%'}>
            <Stack bgImage={'/image/NEST_Fi/NEST_Fi_bg_2.webp'} borderRadius={'12px'} w={'100%'} h={'100%'} align={"center"} justify={"center"}
                   bgRepeat={"no-repeat"} bgSize={"cover"}>
              <img src={'/image/NEST_Fi/iPhone_1.webp'} alt={'NEST Fi Futures'} width={'189px'} />
            </Stack>
            <Center w={'100%'} h={'100%'}>
              <Stack px={'20px'}>
                <Heading fontSize={'24px'} fontWeight={'600'} m={0}>NEST Fi Futures</Heading>
                <Text fontSize={'15px'} fontWeight={'600'}>
                  Trade BTC/USDT and ETH/USDT futures directly
                  <br/>
                  from your wallet without trading fee.
                </Text>
                <Stack pt={'10px'}>
                  <Button
                    className={'button--primary'}
                    w={'160px'}
                    onClick={() => {
                      window.open('https://finance.nestprotocol.org/#/futures', '_blank')
                    }}
                  >
                    Buy Futures
                  </Button>
                </Stack>
              </Stack>
            </Center>
          </HStack>
          <HStack w={'100%'} spacing={0}>
            <Center w={'100%'} h={'100%'}>
              <Stack px={'20px'}>
                <Heading fontSize={'24px'} fontWeight={'600'} m={0}>NEST Fi Options</Heading>
                <Text fontSize={'15px'} fontWeight={'600'}>
                  Buy options with flexible choices on exercise date,
                  <br/>
                  direction and strike price, and no commission.
                </Text>
                <Stack pt={'10px'}>
                  <Button
                    className={'button--primary'}
                    w={'160px'}
                    onClick={() => {
                      window.open('https://finance.nestprotocol.org/#/options', '_blank')
                    }}
                  >
                    Buy Options
                  </Button>
                </Stack>
              </Stack>
            </Center>
            <Stack bgImage={'/image/NEST_Fi/NEST_Fi_bg_3.webp'} borderRadius={'12px'} w={'100%'} h={'100%'} bgRepeat={"no-repeat"}
                   align={"center"} justify={"center"} bgSize={"cover"}>
              <img src={'/image/NEST_Fi/iPhone_2.webp'} alt={'NEST Fi Options'} width={'189px'} />
            </Stack>
          </HStack>
        </Stack>
      </Stack>
    )
  }

  return (
    <Stack spacing={'35px'}>
      <Stack bgImage={'/image/NEST_Fi/Phone_NEST_Fi_bg_2.webp'} w={'100%'} h={'425px'} align={"center"} justify={"center"}
             bgRepeat={"no-repeat"} bgSize={"cover"}>
        <img src={'/image/NEST_Fi/iPhone_1.webp'} alt={'NEST Fi Futures'} width={'189px'} />
      </Stack>
      <Stack px={'20px'} textAlign={"center"}>
        <Heading fontSize={'16px'} fontWeight={'600'} m={0}>NEST Fi Futures</Heading>
        <Text fontSize={'12px'} fontWeight={'600'}>
          Trade BTC/USDT and ETH/USDT futures directly
          from your wallet without trading fee.
        </Text>
        <Stack pt={'10px'} align={"center"} justify={"center"}>
          <Button
            className={'button--primary'}
            w={'160px'}
            onClick={() => {
              window.open('https://finance.nestprotocol.org/#/futures', '_blank')
            }}
          >
            Buy Futures
          </Button>
        </Stack>
      </Stack>
      <Stack bgImage={'/image/NEST_Fi/Phone_NEST_Fi_bg_3.webp'} w={'100%'} h={'425px'} bgRepeat={"no-repeat"}
             align={"center"} justify={"center"} bgSize={"cover"}>
        <img src={'/image/NEST_Fi/iPhone_2.webp'} alt={'NEST Fi Options'} width={'189px'} />
      </Stack>
      <Stack px={'20px'} textAlign={"center"}>
        <Heading fontSize={'16px'} fontWeight={'600'} m={0}>NEST Fi Options</Heading>
        <Text fontSize={'12px'} fontWeight={'600'}>
          Buy options with flexible choices on exercise date,
          <br/>
          direction and strike price, and no commission.
        </Text>
        <Stack pt={'10px'} align={"center"} justify={"center"}>
          <Button
            className={'button--primary'}
            w={'160px'}
            onClick={() => {
              window.open('https://finance.nestprotocol.org/#/options', '_blank')
            }}
          >
            Buy Options
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}