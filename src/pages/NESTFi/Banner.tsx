import {Stack, Text, useMediaQuery, chakra} from "@chakra-ui/react";
import * as React from "react";
import NESTFI_bg_1 from '../../assets/image/NEST_Fi/NEST_Fi_bg_1.jpg'
import NEST_Fi_bg_icon_1 from '../../assets/image/NEST_Fi/NEST_Fi_bg_icon_1.png'


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
      spacing={0}
      px={'24px'}
    >
      <chakra.img
        position={"absolute"}
        src={NEST_Fi_bg_icon_1}
        alt={'NEST'}
        h={'410px'}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Stack spacing={['22px', '44px']}>
        <Text textAlign={'center'} fontSize={['24px', '48px']} fontWeight={'bold'} zIndex={1} color={'#003434'}>
          NEST
          { !isDesktop && (<br/>) }
          Financial Market
        </Text>
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={[12, 24]} color={'#003434'} zIndex={1}>
          Get NEST token here and buy futures,
          <br/>
          options or play DeFi games to win NEST.
        </Text>
      </Stack>
    </Stack>
  )
}

export default Banner