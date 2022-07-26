import {Text, HStack, Stack, Button, Link, Spacer, Center} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";
import Home_bg_3 from '../../assets/image/Home/Home_bg_3.jpg'
import Home_bg_4 from '../../assets/image/Home/Home_bg_4.jpg'

const Developers = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Developers'}/>
      <HStack w={"full"} spacing={'44px'} maxW={'1440px'}>
        <Center color={'#003232'} fontWeight={"semibold"} w={'full'} h={'440px'} bgImage={Home_bg_3} bgSize={"cover"}>
          <Stack maxW={'360px'}>
            <Text fontSize={25}>
              NEST PVM
            </Text>
            <Text>
              NEST Probability Virtual Machine (PVM)
              is a virtual machine-like structure based
              on the basic function library.
            </Text>
            <Link color={'#00A0E9'} fontSize={15}>
              Learn more about NEST PVM
            </Link>
          </Stack>
        </Center>
        <Center color={'#003232'} fontWeight={"semibold"} w={'full'} h={'440px'} bgImage={Home_bg_4}  bgSize={"cover"}>
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
            <Link color={'#00A0E9'} fontSize={15}>
              Learn more about NEST Oracle
            </Link>
          </Stack>
        </Center>
      </HStack>
    </Stack>
  )
}

export default Developers