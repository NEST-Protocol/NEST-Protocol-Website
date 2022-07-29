import {Stack, chakra, useMediaQuery, Heading} from "@chakra-ui/react";
import * as React from "react";
import News_bg_1 from '../../assets/image/News/News_bg_1.jpg'
import News_bg_icon_1 from '../../assets/image/News/News_bg_icon_1.png'
import News_bg_1_phone from '../../assets/image/News/News_bg_phone.jpg'
import News_bg_icon_1_phone from '../../assets/image/News/News_bg_icon_phone.jpg'

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      justify={'center'}
      minH={['300px', '410px']}
      bgImage={isDesktop ? News_bg_1 : News_bg_1_phone}
      bgSize={'cover'}
      bgPosition={"center"}
      px={'24px'}
      spacing={0}
    >
      <chakra.img
        position={"absolute"}
        src={isDesktop ? News_bg_icon_1 : News_bg_icon_1_phone}
        alt={'NEST'}
        minH={['300px', '410px']}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Heading
        fontSize={['12px', '24px']}
        fontWeight={'bold'}
        textAlign={'center'}
        maxW={['200px', '720px']}
        zIndex={1}
        color={'#003434'}
      >
        Know NEST from Our News, Blogs and Announcements
      </Heading>
    </Stack>
  )
}

export default Banner