import {Text, HStack, Stack, Button, Link, Spacer} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";
import Home_bg_3 from '../../assets/image/Home/Home_bg_3.jpg'
import Home_bg_4 from '../../assets/image/Home/Home_bg_4.jpg'
import Home_bg_icon_3 from '../../assets/image/Home/Home_bg_icon_3.png'
import Home_bg_icon_4 from '../../assets/image/Home/Home_bg_icon_4.png'

const Developers = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Developers'}/>
      <HStack w={"full"} spacing={'44px'}>
        <HStack color={'#003232'} fontWeight={"semibold"} spacing={'20px'} w={'full'} h={'440px'} bgImage={Home_bg_3}>
          <Spacer/>
          <Stack minW={'320px'} bgImage={Home_bg_icon_3} h={"full"} justify={"center"}>
            <Stack pr={['60px', '90px']}>
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
          </Stack>
        </HStack>
        <HStack color={'#003232'} fontWeight={"semibold"} spacing={'20px'} w={'full'} h={'440px'} bgImage={Home_bg_4}>
          <Stack pl={['60px', '90px']} minW={'320px'} bgImage={Home_bg_icon_4} h={"full"} justify={"center"}>
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
         <Spacer/>
        </HStack>
      </HStack>
    </Stack>
  )
}

export default Developers