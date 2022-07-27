import {Button, HStack, Stack, Text, useMediaQuery, chakra} from "@chakra-ui/react";
import * as React from "react";
import Home_bg_1 from "../../assets/image/Home/Home_bg_1.jpg"
import Home_bg_icon_1 from "../../assets/image/Home/Home_bg_icon_1.png"

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

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
        <chakra.img
          position={"absolute"}
          src={Home_bg_icon_1}
          alt={'NEST'}
          h={['540px', '615px']}
          objectFit={'cover'}
          overflow={"hidden"}
        />
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

        { isDesktop ? (
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
        ) : (
          <Stack>
            <Text
              fontWeight={"bold"}
              fontSize={['12px', '25px']}
              textAlign={"center"}
              color={'#003434'}
              zIndex={1}
              px={'24px'}
            >
              NEST is a blockchain-based probability virtual machine (PVM) system
              with web3 applications of DeFi, GameFi, NFT built on it.
              Swap, hedge, earn and even game with the NEST network
              to gain excess returns.
            </Text>
            <HStack justify={"center"} pt={'50px'}>
              <Button
                minW={'160px'}
                minH={['44px', '34px']}
              >
                App
              </Button>
            </HStack>
          </Stack>
        ) }
      </Stack>
    </Stack>
  )
}

export default Banner