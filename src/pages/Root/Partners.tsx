import {chakra, Heading, SimpleGrid, Stack} from "@chakra-ui/react";
import Banner_URI from "../../assets/webp/NEST_pic_1.webp";
import Home_icon from "../../assets/webp/Home_icon.webp";
import huobi from "../../assets/svg/huobi.svg";
import binance from "../../assets/svg/binance.svg";
import kcc from "../../assets/svg/kcc.svg";
import polygon from "../../assets/svg/polygon.svg";
import cointelegraph from "../../assets/svg/cointelegraph.svg";
import cube from "../../assets/svg/cube.svg";
import peckshield from "../../assets/svg/peckshield.svg";
import fortube from "../../assets/svg/fortube.svg";
import polynetwork from "../../assets/svg/polynetwork.svg";
import CoFiX from "../../assets/svg/CoFiX.svg";
import Parasset from "../../assets/svg/Parasset.svg";
import certik from "../../assets/svg/certik.svg";
import * as React from "react";

const Partners = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <Stack px={['24px', '48px']} w={'full'} align={'center'}>
        <Stack maxW={'1440px'} w={'full'}>
          <Heading fontSize={['24px', '48px']} color={'#003232'}>
            Integrations & Partners
          </Heading>
        </Stack>
      </Stack>
      <Stack
        px={['24px', '48px']}
        align={'center'}
        justify={'center'}
        spacing={'16px'}
        minH={'440px'}
        w={"full"}
        bgImage={Banner_URI}
        bgPosition={"bottom"}
      >
        <Stack w={"full"} p={'12px'} position={"absolute"} zIndex={0}>
          <chakra.img
            src={Home_icon}
            alt="NEST"
            objectFit={["cover", 'contain']}
            h={'400px'}
          />
        </Stack>
        <SimpleGrid columns={[3, 3, 4, 4]} zIndex={1} spacing={['20px', '40px']} pb={'27px'}>
          {[
            {
              label: 'Huobi',
              logo: huobi,
              link: 'https://www.huobi.com/'
            },
            {
              label: 'Binance',
              logo: binance,
              link: 'https://www.binance.com/'
            },
            {
              label: 'kcc',
              logo: kcc,
              link: 'https://kcc.io'
            },
            {
              label: 'polygon',
              logo: polygon,
              link: 'https://polygon.technology/'
            },
            {
              label: 'cointelegraph',
              logo: cointelegraph,
              link: 'https://cointelegraph.com/'
            },
            {
              label: 'cube',
              logo: cube,
              link: 'https://cube.network/'
            },
            {
              label: 'pechshield',
              logo: peckshield,
              link: 'https://peckshield.com/'
            },
            {
              label: 'fortube',
              logo: fortube,
              link: 'https://for.tube'
            },
            {
              label: 'polynetwork',
              logo: polynetwork,
              link: 'https://polygon.technology/'
            },
            {
              label: 'cofix',
              logo: CoFiX,
              link: 'https://cofix.tech/'
            },
            {
              label: 'parasset',
              logo: Parasset,
              link: 'https://www.parasset.top/'
            },
            {
              label: 'certik',
              logo: certik,
              link: 'https://www.certik.com/'
            },
          ].map(item => (
            <chakra.img
              src={item.logo} alt={item.label} h={'48px'}
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