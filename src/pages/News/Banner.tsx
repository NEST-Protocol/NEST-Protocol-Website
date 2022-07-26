import {Stack, Text} from "@chakra-ui/react";
import * as React from "react";

const Banner = () => {
  return (
    <Stack
      align={'center'}
      h={'full'}
      justify={'center'}
      minH={['540px', '660px']}
      bgImage={""}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={['22px', '44px']}
      px={'24px'}
    >
      <Stack
        position={'absolute'}
        h={'600px'}
        w={'full'}
        bgSize={'contain'}
        bgImage={""}
        bgRepeat={'no-repeat'}
        bgPosition={'center'}
        zIndex={0}
      />
      <Text
        whiteSpace={'break-spaces'}
        textAlign={'center'}
        fontSize={['24px', '48px']}
        fontWeight={'bold'}
        zIndex={1}
        color={'#003434'}
      >
        NEST Community
      </Text>
      <Text
        fontSize={['12px', '24px']}
        fontWeight={'bold'}
        textAlign={'center'}
        maxW={'720px'}
        zIndex={1}
        color={'#003434'}
      >
        The NEST community is made up of developers, creators, enthusiasts, explore, contribute to the
        <br/>
        community and get reward.
      </Text>
    </Stack>
  )
}

export default Banner