import {Stack, Text} from "@chakra-ui/react";
import * as React from "react";
import Home_bg_1 from "../../assets/image/Home/Home_bg_1.jpg"

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
          NEST is a blockchain-based probability virtual machine (PVM) system
          <br/>
          with web3 applications of DeFi, GameFi, NFT built on it.
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