import {
  chakra,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'
import * as React from 'react'
import Banner_URI from '../../assets/webp/NEST_pic_1.webp'
import Blogs_pic_1 from '../../assets/webp/Blogs_pic_1.webp'
import Blogs_pic_2 from '../../assets/webp/Blogs_pic_2.webp'
import Blogs_pic_3 from '../../assets/webp/Blogs_pic_3.webp'
import Blogs_pic_4 from '../../assets/webp/Blogs_pic_4.webp'
import Blogs_pic_5 from '../../assets/webp/Blogs_pic_5.webp'
import Blogs_pic_6 from '../../assets/webp/Blogs_pic_6.webp'
import {Helmet} from 'react-helmet'
import NEST_icon1 from '../../assets/webp/NEST_icon_1.webp'
import blogs_icon_1 from '../../assets/webp/Blogs_icon_1.webp'
import blogs_icon_2 from '../../assets/webp/Blogs_icon_2.webp'
import blogs_icon_3 from '../../assets/webp/Blogs_icon_3.webp'
import blogs_icon_4 from '../../assets/webp/Blogs_icon_4.webp'
import blogs_icon_5 from '../../assets/webp/Blogs_icon_5.webp'
import blogs_icon_6 from '../../assets/webp/Blogs_icon_6.webp'
import Home_icon from '../../assets/webp/Home_icon.webp'

import huobi from '../../assets/svg/huobi.svg'
import binance from '../../assets/svg/binance.svg'
import certik from '../../assets/svg/certik.svg'
import CoFiX from '../../assets/svg/CoFiX.svg'
import cointelegraph from '../../assets/svg/cointelegraph.svg'
import cube from '../../assets/svg/cube.svg'
import fortube from '../../assets/svg/fortube.svg'
import kcc from '../../assets/svg/kcc.svg'
import Parasset from '../../assets/svg/Parasset.svg'
import peckshield from '../../assets/svg/peckshield.svg'
import polygon from '../../assets/svg/polygon.svg'
import polynetwork from '../../assets/svg/polynetwork.svg'

const AboutNEST = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Helmet>
        <title>What is NEST</title>
      </Helmet>
      <Stack
        align={'center'}
        h={'full'}
        justify={'center'}
        minH={['540px', '660px']}
        bgImage={Banner_URI}
        bgSize={'cover'}
        bgPosition={"center"}
        spacing={['22px', '44px']}
        px={'24px'}
      >
        <Stack
          position={'absolute'}
          w={'full'}
          overflow={"hidden"}
          h={['500px', '660px']}
        >
          <Stack
            h={"full"}
            bgSize={['cover', 'contain']}
            bgImage={NEST_icon1}
            bgRepeat={'no-repeat'}
            bgPosition={'center'}
            zIndex={0}
          />
        </Stack>
        <Text
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={['24px', '48px']}
          fontWeight={'bold'}
          zIndex={1}
          color={'#003434'}
        >
          What is NEST
        </Text>
        <Text
          fontSize={['12px', '24px']}
          fontWeight={'bold'}
          textAlign={'center'}
          maxW={'740px'}
          zIndex={1}
          color={'#003434'}
        >
          A complete gaming space with applications of DeFi, GameFi, NFT built on the NEST. Swap,
          hedge, earn and even game with the NEST network to gain excess returns.
        </Text>
      </Stack>


    </>
  )
}

export default AboutNEST
