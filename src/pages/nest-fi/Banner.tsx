import {Stack, Text, useMediaQuery, chakra, Heading} from "@chakra-ui/react";
import * as React from "react";
import TheHeader from "@site/src/components/TheHeader";

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      justify={'center'}
      h={'410px'}
      w={"100%"}
      bgImage={isDesktop ? "/image/NEST_Fi/NEST_Fi_bg_1.jpg" : "/image/NEST_Fi/NEST_Fi_bg_1_phone.jpg"}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={0}
      px={'24px'}
    >
      <TheHeader/>
      <chakra.img
        position={"absolute"}
        src={isDesktop ? "/image/NEST_Fi/NEST_Fi_bg_icon_1.png" : "/image/NEST_Fi/NEST_Fi_bg_icon_1_phone.png"}
        alt={'NEST'}
        h={'410px'}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Stack pt={'60px'} spacing={isDesktop ? "44px" : "22px"}>
        <Heading textAlign={'center'} fontSize={["24px", "48px"]} fontWeight={'700'} zIndex={1} color={'#003434'}>
          Decentralized
          {!isDesktop ? (<br/>) : " "}
          Financial Market
        </Heading>
        <Text textAlign={"center"} fontWeight={"700"} fontSize={["12px", "24px"]} color={'#003434'} zIndex={1}>
          NEST Financial Market provides futures
          {!isDesktop ? (<br/>) : " "}
          and options with infinite liquidity.
        </Text>
      </Stack>
    </Stack>
  )
}

export default Banner