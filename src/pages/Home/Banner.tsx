import {Button, HStack, Stack, Text, useMediaQuery, chakra, Heading} from "@chakra-ui/react";
import * as React from "react";
import Home_bg_1 from "../../assets/image/Home/Home_bg_1.jpg"
import Home_bg_icon_1 from "../../assets/image/Home/Home_bg_icon_1.png"
import Home_bg_1_phone from "../../assets/image/Home/Home_bg_1_phone.jpg"
import Home_bg_icon_1_phone from "../../assets/image/Home/Home_bg_icon_1_phone.png"

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'44px'}>
      <Stack
        align={'center'}
        justify={'center'}
        h={['540px', '615px']}
        bgImage={isDesktop ? Home_bg_1 : Home_bg_1_phone}
        bgSize={'cover'}
        bgPosition={"center"}
        spacing={'24px'}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? Home_bg_icon_1 : Home_bg_icon_1_phone}
          alt={'NEST'}
          h={['540px', '615px']}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <Heading
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={['24px', '40px']}
          fontWeight={'bold'}
          zIndex={1}
          color={'#003434'}
        >
          What is NEST
        </Heading>

        { isDesktop ? (
          <Text
            fontWeight={"bold"}
            fontSize={['12px', '25px']}
            textAlign={"center"}
            color={'#003434'}
            zIndex={1}
          >
            NEST is a blockchain-based probabilistic virtual machine (PVM) system
            <br/>
            with web3 applications of DeFi, GameFi, and NFT built on it.
            <br/>
            To maximize returns, use the NEST network to swap,
            <br/>
            hedge, earn, and even game.
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
              NEST is a blockchain-based probabilistic virtual machine (PVM) system with web3 applications of DeFi,
              GameFi, and NFT built on it. To maximize returns, use the NEST network to swap, hedge, earn, and even game.
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