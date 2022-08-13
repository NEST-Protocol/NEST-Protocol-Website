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
      bgImage={isDesktop ? "" : "/image/FAQs/Phone_FAQ_nav_bg.jpg"}
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