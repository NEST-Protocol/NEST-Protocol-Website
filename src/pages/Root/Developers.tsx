import {Text, HStack, Stack, Button, Link} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";

const Developers = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Developers'}/>
      <HStack>
        <Stack color={'#003232'} fontWeight={"semibold"} spacing={'20px'}>
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
        <Stack color={'#003232'} fontWeight={"semibold"} spacing={'20px'}>
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
      </HStack>
    </Stack>
  )
}

export default Developers