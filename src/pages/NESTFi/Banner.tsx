import {Stack, Text, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import NESTFI_bg_1 from '../../assets/image/NEST_Fi/NEST_Fi_bg_1.jpg'

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