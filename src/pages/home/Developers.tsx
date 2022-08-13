import {Text, HStack, Stack, Link, Center, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Developers = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Stack spacing={'48px'} align={'center'}>
        <BigTitle title={'Developers'}/>
        <HStack w={"100%"} spacing={'44px'} maxW={'1440px'}>
          <Center color={'#003232'} borderRadius={'12px'} fontWeight={"600"} w={'100%'} h={'440px'} bgImage={"/image/Home/Home_bg_3.jpg"} bgSize={"cover"} bgPosition={"center"}>
            <Stack maxW={'360px'}>
              <Text fontSize={25}>
                NEST PVM
              </Text>
              <Text>
                NEST Probabilistic Virtual Machine (PVM) is a virtual machine-like structure based on the basic function library.
              </Text>
              <Link color={'#00A0E9'} fontSize={15} href={'/docs/Concept/What-is-NEST'}>
                Learn more about NEST PVM<ChevronRightIcon/>
              </Link>
            </Stack>
          </Center>
          <Center color={'#003232'} borderRadius={'12px'} fontWeight={"600"} w={'100%'} h={'440px'} bgImage={"/image/Home/Home_bg_4.jpg"} bgSize={"cover"} bgPosition={"center"}>
            <Stack maxW={'360px'}>
              <Text fontSize={25}>
                NEST Oracle
              </Text>
              <Text>
                NEST oracle is the only truly decentralized
                oracle on the market today.
                <br/>
                <br/>
              </Text>
              <Link color={'#00A0E9'} fontSize={15} href={'/docs/NEST-Oracle/How-does-NEST-Oracle-Work'}>
                Learn more about NEST Oracle<ChevronRightIcon/>
              </Link>
            </Stack>
          </Center>
        </HStack>
      </Stack>
    )
  } else {
    return (
      <Stack spacing={'48px'} align={'center'}>
        <BigTitle title={'Developers'}/>
        <Stack w={"100%"} spacing={'44px'} maxW={'1440px'}>
          <Center color={'#003232'} fontWeight={"600"} w={'100%'} h={'440px'} bgImage={"/image/Home/Home_bg_3.jpg"} bgSize={"cover"} bgPosition={"center"}>
            <Stack maxW={'360px'} p={'12px'} align={"center"}>
              <Text fontSize={17}>
                NEST PVM
              </Text>
              <Text textAlign={"center"} fontSize={12}>
                NEST Probabilistic Virtual Machine (PVM)
                is a virtual machine-like structure based
                on the basic function library.
              </Text>
              <br/>
              <Link color={'#00A0E9'} fontSize={12} href={'/docs/NEST-PVM/Concept'}>
                Learn more about NEST PVM<ChevronRightIcon/>
              </Link>
            </Stack>
          </Center>
          <Center color={'#003232'} fontWeight={"600"} w={'100%'} h={'440px'} bgImage={"/image/Home/Home_bg_4.jpg"}  bgSize={"cover"} bgPosition={"center"}>
            <Stack maxW={'360px'} p={'12px'} align={"center"}>
              <Text fontSize={17}>
                NEST Oracle
              </Text>
              <Text textAlign={"center"} fontSize={12}>
                NEST oracle is the only truly decentralized oracle on the market today.
                <br/>
                <br/>
              </Text>
              <br/>
              <Link color={'#00A0E9'} fontSize={12} href={'/docs/NEST-Oracle/Concept'}>
                Learn more about NEST Oracle<ChevronRightIcon/>
              </Link>
            </Stack>
          </Center>
        </Stack>
      </Stack>
    )
  }
}

export default Developers