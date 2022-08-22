import {Stack, chakra, useMediaQuery, Heading} from "@chakra-ui/react";
import * as React from "react";
import TheHeader from "@site/src/components/TheHeader";

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      justify={'center'}
      minH={isDesktop ? "410px" : "300px"}
      bgImage={isDesktop ? "/image/News/News_bg_1.webp" : "/image/News/News_bg_phone.webp"}
      bgSize={'cover'}
      bgPosition={"center"}
      px={'24px'}
      spacing={0}
    >
      <TheHeader />
      <chakra.img
        position={"absolute"}
        src={isDesktop ? "/image/News/News_bg_icon_1.webp" : "/image/News/News_bg_icon_phone.webp"}
        alt={'NEST'}
        minH={isDesktop ? "410px" : "300px"}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Heading
        pt={'60px'}
        fontSize={["12px", "24px"]}
        fontWeight={'700'}
        textAlign={'center'}
        maxW={ isDesktop ? "720px" : "200px"}
        zIndex={1}
        color={'#003434'}
      >
        Know NEST from Our News, Blogs and Announcements
      </Heading>
    </Stack>
  )
}

export default Banner