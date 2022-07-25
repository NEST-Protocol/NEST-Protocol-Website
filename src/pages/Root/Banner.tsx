import {chakra, Stack, Text} from "@chakra-ui/react";
import Home from "../../assets/webp/Home.webp";
import Home_icon from "../../assets/webp/Home_icon.webp";
import * as React from "react";

const Banner = () => {
  return (
    <Stack spacing={'44px'}>
      <Stack
        align={'center'}
        h={'full'}
        justify={'center'}
        minH={['540px', '660px']}
        bgImage={Home}
        bgSize={'cover'}
        bgPosition={"center"}
        spacing={'24px'}
      >
        <Stack w={"full"} p={'12px'} position={"absolute"} zIndex={0}>
          <chakra.img
            src={Home_icon}
            alt="NEST"
            objectFit={["cover", 'contain']}
            h={'400px'}
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