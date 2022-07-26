import {chakra, Stack, Text} from "@chakra-ui/react";
import * as React from "react";
import Home_bg_1 from "../../assets/image/Home/Home_bg_1.jpg"
import Home_bg_icon_1 from "../../assets/image/Home/Home_bg_icon_1.png"

const Banner = () => {
  return (
    <Stack spacing={'44px'}>
      <Stack
        align={'center'}
        justify={'center'}
        h={['540px', '615px']}
        bgImage={Home_bg_1}
        bgSize={'cover'}
        bgPosition={"center"}
        spacing={'24px'}
      >
        <Stack w={"full"} position={"absolute"} zIndex={0}>
          <chakra.img
            src={Home_bg_icon_1}
            alt=""
            objectFit={"cover"}
            h={['540px', '615px']}
            pb={'40px'}
          />
        </Stack>
        <Text
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={['24px', '40px']}
          fontWeight={'bold'}
          zIndex={1}
          color={'#003434'}
        >
          What is NEST
        </Text>
        <Text
          fontWeight={"bold"}
          fontSize={['12px', '25px']}
          textAlign={"center"}
          color={'#003434'}
          zIndex={1}
        >
          A complete gaming space with applications of
          <br/>
          DeFi, GameFi, NFT built on the NEST.
          <br/>
          Swap, hedge, earn and even game with the NEST network
          <br/>
          to gain excess returns.
        </Text>
      </Stack>
    </Stack>
  )
}

export default Banner