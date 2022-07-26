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
        NEST Research Academy (NRA)
      </Text>
      <Text
        fontSize={['12px', '17px']}
        fontWeight={'bold'}
        textAlign={'center'}
        zIndex={1}
        color={'#003434'}
      >
        NEST Research Academy (NRA), initialized by the NEST protocol,
        <br/>
        aims to boost theoretical and applied research in related
        <br/>
        fields such as blockchain,finance, economics, game theory,
        <br/>
        machine learning, computer science,and software engineering and
        <br/>
        helps to spread this knowledge to the public.
      </Text>
    </Stack>
  )
}

export default Banner