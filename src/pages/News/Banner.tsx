import {Stack, Text, chakra} from "@chakra-ui/react";
import * as React from "react";
import News_bg_1 from '../../assets/image/News/News_bg_1.jpg'
import News_bg_icon_1 from '../../assets/image/News/News_bg_icon_1.png'

const Banner = () => {
  return (
    <Stack
      align={'center'}
      justify={'center'}
      minH={['300px', '410px']}
      bgImage={News_bg_1}
      bgSize={'cover'}
      bgPosition={"center"}
      px={'24px'}
      spacing={0}
    >
      <chakra.img
        position={"absolute"}
        src={News_bg_icon_1}
        alt={'NEST'}
        minH={['300px', '410px']}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Text
        fontSize={['12px', '24px']}
        fontWeight={'bold'}
        textAlign={'center'}
        maxW={['200px', '720px']}
        zIndex={1}
        color={'#003434'}
      >
        Know NEST from Our News, Blogs and Announcements
      </Text>
    </Stack>
  )
}

export default Banner