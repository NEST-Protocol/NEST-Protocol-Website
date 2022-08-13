import {Stack, Text, chakra, useMediaQuery, Heading, Button} from "@chakra-ui/react";
import * as React from "react";
import TheHeader from "@site/src/components/TheHeader";

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      h={'full'}
      justify={'center'}
      minH={["600px", "660px"]}
      bgImage={isDesktop ? "/image/Developer/Developers_bg.jpg" : "/image/Developer/Phone_Developers_bg_1.jpg"}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={0}
      px={'24px'}
    >
      <TheHeader/>
      <chakra.img
        position={"absolute"}
        src={isDesktop ? "/image/Developer/Developers_bg_icon.png" : "/image/Developer/Phone_Developers_bg_icon.png"}
        alt={''}
        minH={["600px", "660px"]}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Stack spacing={["22px", "44px"]} pt={'60px'} align={"center"}>
        <Heading
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={["24px", "48px"]}
          fontWeight={'700'}
          zIndex={1}
          color={'#003434'}
        >
          Another Revolution in Blockchain
        </Heading>
        {isDesktop ? (
          <Text
            fontSize={["12px", "17px"]}
            fontWeight={'700'}
            textAlign={'center'}
            zIndex={1}
            color={'#003434'}
          >
            NEST ecosystem is a paradigm revolution to the traditional
            <br/>
            market mechanism, providing the blockchain world with a
            <br/>
            whole new range of development tools and creative new assets.
          </Text>
        ) : (
          <Text
            fontSize={["12px", "17px"]}
            fontWeight={'700'}
            textAlign={'center'}
            zIndex={1}
            color={'#003434'}
          >
            NEST ecosystem is a paradigm revolution<br/>
            to the traditional market mechanism,<br/>
            providing the blockchain world with a<br/>
            whole new range of development tools and<br/>
            creative new assets.
          </Text>
        )}

        <Button className={'button--primary'} w={'160px'} onClick={() => {
          window.location.pathname = '/docs/Building-On-NEST/Contracts'
        }}>
          Developer Docs
        </Button>
      </Stack>
    </Stack>
  )
}

export default Banner