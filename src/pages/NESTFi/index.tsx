import {Button, chakra, HStack, Stack, Text} from '@chakra-ui/react'
import * as React from 'react'
import {Helmet} from 'react-helmet'
import Banner from "./Banner";
import iPhone from "../../assets/image/NEST_Fi/iPhone.png";
import NESTFI_bg_2 from '../../assets/image/NEST_Fi/NEST_Fi_bg_2.jpg'
import NESTFI_bg_icon_2 from '../../assets/image/NEST_Fi/NEST_Fi_bg_icon_2.png'

const NESTFi = () => {

  return (
    <Stack spacing={['30px', '80px']} pb={['30px', '80px']}>
      <Helmet>
        <title>NEST Financial Market</title>
      </Helmet>
      <Banner/>
      <Stack spacing={'48px'} align={'center'} justify={'start'}>
        <Stack
          align={'center'}
          h={['300px', '440px']}
          w={'full'}
          justify={'start'}
          spacing={['30px', '40px']}
          bgImage={NESTFI_bg_2}
          bgSize={'cover'}
          bgPosition={"center"}
        >
          <chakra.img
            position={"absolute"}
            src={NESTFI_bg_icon_2}
            alt={'NEST'}
            h={['300px', '440px']}
            objectFit={'cover'}
            overflow={"hidden"}
          />
          <Stack
            position={'absolute'}
            h={['375px', '440px']}
            w={'full'}
            overflow={'hidden'}
            bgImage={iPhone}
            bgRepeat={'no-repeat'}
            bgPosition={'bottom'}
            bgSize={'contain'}
            zIndex={0}
          />
        </Stack>
      </Stack>
      <HStack justify={"center"} pt={['110px', 0]}>
        <Button
          minW={'160px'}
          minH={['44px', '34px']}
          onClick={() => {
            window.open('https://finance.nestprotocol.org/', '_blank')
          }}
        >
          Launch App
        </Button>
      </HStack>
    </Stack>
  )
}

export default NESTFi
