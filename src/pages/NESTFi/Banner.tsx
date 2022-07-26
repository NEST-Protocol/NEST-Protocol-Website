import {Stack, Text, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      justify={'center'}
      h={'330px'}
      bgImage={""}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={['22px', '44px']}
      px={'24px'}
    >
      <Stack
        w={'full'}
        h={'330px'}
        position={'absolute'}
        bgImage={""}
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