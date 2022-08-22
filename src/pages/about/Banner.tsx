import {Stack, Text, chakra, useMediaQuery, HStack, Link} from "@chakra-ui/react";
import * as React from "react";
import TheHeader from "@site/src/components/TheHeader";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      h={'full'}
      justify={'center'}
      minH={["600px", "615px"]}
      bgImage={isDesktop ? "/image/About/About_bg_1.webp" : "/image/About/Phone_About_bg_1.webp"}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={0}
      px={'24px'}
    >
      <TheHeader/>
      <chakra.img
        position={"absolute"}
        src={isDesktop ? "/image/About/About_bg_icon_1.webp" : "/image/About/Phone_About_bg_icon.webp"}
        alt={''}
        minH={["600px", "615px"]}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Stack spacing={["22px", "44px"]} align={"center"} zIndex={1}>
        {isDesktop ? (
          <HStack alignItems={"start"} py={'90px'} spacing={'70px'}>
            <Stack w={'280px'} align={"center"} textAlign={"center"} spacing={'28px'}>
              <chakra.img src={'/image/About/BTC.svg'} w={'40px'}/>
              <Text fontSize={'20px'} fontWeight={'600'}>
                Creating Informationized<br/>
                Assets
              </Text>
            </Stack>
            <Stack h={'40px'} align={"center"} justify={"center"}>
              <img src={'/image/About/about_arrow_icon.svg'} alt={''}/>
            </Stack>
            <Stack w={'280px'} align={"center"} textAlign={"center"} spacing={'28px'}>
              <chakra.img src={'/image/About/ETH.png'} w={'24px'} h={'40px'}/>
              <Text fontSize={'20px'} fontWeight={'600'}>
                Programming with<br/>
                Informationized Assets
              </Text>
            </Stack>
            <Stack h={'40px'} align={"center"} justify={"center"}>
              <img src={'/image/About/about_arrow_icon.svg'} alt={''}/>
            </Stack>
            <Stack w={'280px'} align={"center"} textAlign={"center"} spacing={'28px'}>
              <chakra.img src={'/image/About/NEST.svg'} w={'40px'} h={'40px'}/>
              <Text fontSize={'20px'} fontWeight={'600'}>
                Programming with<br/>
                Stochastic Assets
              </Text>
            </Stack>
          </HStack>
        ) : (
          <Stack spacing={'15px'} pt={'50px'}>
            <Stack minW={'200px'} align={"center"} textAlign={"center"} spacing={'10px'}>
              <chakra.img src={'/image/About/BTC.svg'} w={'40px'}/>
              <Text fontSize={'12px'} fontWeight={'600'}>
                Creating Informationized<br/>
                Assets
              </Text>
            </Stack>
            <Stack h={'70px'} align={"center"} justify={"center"} transform={"rotate(90deg)"}>
              <img src={'/image/About/about_arrow_icon.svg'} alt={''}/>
            </Stack>
            <Stack minW={'200px'} align={"center"} textAlign={"center"} spacing={'10px'}>
              <chakra.img src={'/image/About/ETH.png'} w={'24px'} h={'40px'}/>
              <Text fontSize={'12px'} fontWeight={'600'}>
                Programming with<br/>
                Informationized Assets
              </Text>
            </Stack>
            <Stack h={'70px'} align={"center"} justify={"center"} transform={"rotate(90deg)"}>
              <img src={'/image/About/about_arrow_icon.svg'} alt={''}/>
            </Stack>
            <Stack minW={'200px'} align={"center"} textAlign={"center"} spacing={'10px'}>
              <chakra.img src={'/image/About/NEST.svg'} w={'40px'} h={'40px'}/>
              <Text fontSize={'12px'} fontWeight={'600'}>
                Programming with<br/>
                Stochastic Assets
              </Text>
            </Stack>
          </Stack>
        )}
        <HStack spacing={'44px'}>
          <Link color={'#00A0E9'} fontWeight={600} fontSize={15} href={'/about/faqs/'}>
            FAQs <ChevronRightIcon/>
          </Link>
          <Link color={'#00A0E9'} fontWeight={600} fontSize={15} href={'/doc/ennestwhitepaper.pdf'} isExternal>
            Whitepaper <ChevronRightIcon/>
          </Link>
        </HStack>
      </Stack>
    </Stack>
  )
}

export default Banner