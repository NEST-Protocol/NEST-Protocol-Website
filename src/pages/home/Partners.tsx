import {chakra, SimpleGrid, Stack, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";

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

export default Partners