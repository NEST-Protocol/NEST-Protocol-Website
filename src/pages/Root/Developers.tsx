import {Text, HStack, Stack, Button, Link, Spacer} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";

const Developers = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Developers'}/>
      <HStack w={"full"} spacing={'44px'}>
        <HStack color={'#003232'} fontWeight={"semibold"} spacing={'20px'} w={'full'}>
          <Spacer/>
          <Stack p={'168px'}>
            <Text fontSize={25}>
              NEST PVM
            </Text>
            <Text>
              NEST Probability Virtual Machine (PVM)
              <br/>
              is a virtual machine-like structure based
              <br/>
              on the basic function library.
            </Text>
            <Link color={'#00A0E9'} fontSize={15}>
              Learn more about NEST PVM
            </Link>
          </Stack>
        </HStack>
        <HStack color={'#003232'} fontWeight={"semibold"} spacing={'20px'} w={'full'}>
          <Stack p={'168px'}>
            <Text fontSize={25}>
              NEST Oracle
            </Text>
            <Text>
              NEST oracle is the only truly decentralized
              <br/>
              oracle on the market today.
              <br/>
              <br/>
            </Text>
            <Link color={'#00A0E9'} fontSize={15}>
              Learn more about NEST Oracle
            </Link>
          </Stack>
         <Spacer/>
        </HStack>
      </HStack>
    </Stack>
  )
}

export default Developers