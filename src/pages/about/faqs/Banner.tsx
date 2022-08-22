import {Stack, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import TheHeader from "@site/src/components/TheHeader";

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      h={'full'}
      justify={'center'}
      minH={['60px', '88px']}
      bgImage={isDesktop ? "/image/FAQs/FAQ_bg_top.webp" : "/image/FAQs/Phone_FAQ_nav_bg.webp"}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={0}
      px={'24px'}
    >
      <TheHeader/>
    </Stack>
  )
}

export default Banner