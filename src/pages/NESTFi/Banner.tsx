import {Stack, Text, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import NESTFI_bg_1 from '../../assets/image/NEST_Fi/NEST_Fi_bg_1.jpg'
import NESTFI_bg_icon_1 from '../../assets/image/NEST_Fi/NEST_Fi_bg_icon_1.png'

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      justify={'center'}
      h={'410px'}
      w={"full"}
      bgImage={NESTFI_bg_1}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={['22px', '44px']}
      px={'24px'}
    >
      <Stack
        w={'400px'}
        h={'410px'}
        position={'absolute'}
        bgImage={NESTFI_bg_icon_1}
        bgSize={'cover'}
        bgRepeat={"no-repeat"}
        bgPosition={"top"}
      >
      </Stack>
      <Text textAlign={'center'} fontSize={['24px', '48px']} fontWeight={'bold'} zIndex={1} color={'#003434'}>
        NEST Financial Market
      </Text>
      <Text textAlign={"center"} fontWeight={"bold"} fontSize={25} color={'#003434'} zIndex={1}>
        Get NEST token here and buy futures,
        <br/>
        options or play DeFi games to win NEST.
      </Text>
    </Stack>
  )
}

export default Banner