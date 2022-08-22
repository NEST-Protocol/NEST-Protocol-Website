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
      minH={isDesktop ? "88px" : "60px"}
      bgImage={isDesktop ? "/image/Research/Research_bg_1.webp" : "/image/Research/Research_bg_1_phone.webp"}
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