import {
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import Banner_URI from '../../assets/webp/NEST_pic_1.webp'
import {Helmet} from 'react-helmet'
import NEST_icon1 from '../../assets/webp/NEST_icon_1.webp'

const AboutNEST = () => {
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
