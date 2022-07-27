import {Stack, Text} from "@chakra-ui/react";
import * as React from "react";
import Research_bg_1 from '../../assets/image/Research/Research_bg_1.jpg'

const Banner = () => {
  return (
    <Stack
      align={'center'}
      h={'full'}
      justify={'center'}
      minH={['540px', '660px']}
      bgImage={Research_bg_1}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={['22px', '44px']}
      px={'24px'}
    >
      <Text
        whiteSpace={'break-spaces'}
        textAlign={'center'}
        fontSize={['24px', '48px']}
        fontWeight={'bold'}
        zIndex={1}
        color={'#003434'}
        maxW={['200px', '720px']}
      >
        NEST Research Academy (NRA)
      </Text>
      <Text
        fontSize={['12px', '17px']}
        fontWeight={'bold'}
        textAlign={'center'}
        zIndex={1}
        color={'#003434'}
        maxW={['full', '700px']}
      >
        NEST Research Academy (NRA), initialized by the NEST protocol,
        aims to boost theoretical and applied research in related
        fields such as blockchain,finance, economics, game theory,
        machine learning, computer science,and software engineering and
        helps to spread this knowledge to the public.
      </Text>
    </Stack>
  )
}

export default Banner