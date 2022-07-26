import {Stack, Text} from "@chakra-ui/react";
import * as React from "react";
import News_bg_1 from '../../assets/image/News/News_bg_1.jpg'

const Banner = () => {
  return (
    <Stack
      align={'center'}
      h={'full'}
      justify={'center'}
      minH={['540px', '410px']}
      bgImage={News_bg_1}
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
        fontSize={['12px', '24px']}
        fontWeight={'bold'}
        textAlign={'center'}
        maxW={'720px'}
        zIndex={1}
        color={'#003434'}
      >
        Know NEST from Our News, Blogs and Announcements
      </Text>
    </Stack>
  )
}

export default Banner