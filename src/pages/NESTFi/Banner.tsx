import {Stack, Text, useMediaQuery} from "@chakra-ui/react";
import Banner_URI from "../../assets/webp/Ecosystem_pic_1.webp";
import Ecosystem_icon1 from "../../assets/webp/Ecosystem_icon_1.png";
import * as React from "react";

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      justify={'center'}
      h={'330px'}
      bgImage={Banner_URI}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={['22px', '44px']}
      px={'24px'}
    >
      <Stack
        w={'full'}
        h={'330px'}
        position={'absolute'}
        bgImage={Ecosystem_icon1}
        bgSize={'contain'}
        bgRepeat={"no-repeat"}
        bgPosition={"bottom"}
      >

      </Stack>
      <Text textAlign={'center'} fontSize={['24px', '48px']} fontWeight={'bold'} zIndex={1} color={'#003434'}>
        Explore the {!isDesktop && <br/>} NEST Ecosystem
      </Text>
    </Stack>
  )
}

export default Banner