import {chakra, Link, Stack, Text} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";
import Home_bg_5 from '../../assets/image/Home/Home_bg_5.jpg'
import Icon2 from '../../assets/image/Home/icon_2.png'

const Research = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'NEST Research Academy'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'full'}
        justify={'center'}
        spacing={['13px', '16px']}
        bgImage={Home_bg_5}
        bgSize={'cover'}
        bgPosition={"center"}
      >
        <chakra.img src={Icon2} zIndex={1}/>
        <Text
          fontSize={['17px', '24px']}
          fontWeight={'semibold'}
          color={'#003232'}
          zIndex={1}
        >
          NEST Research Academy (NRA)
        </Text>
        <Text
          zIndex={1}
          fontSize={['12px', '15px']}
          fontWeight={'semibold'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
        >
          NEST Research Academy (NRA), initialized by the NEST protocol, aims to boost
          <br/>
          theoretical and applied research in related fields such as blockchain, finance,
          <br/>
          economics, game theory, machine learning, computer science, and software
          <br/>
          engineering and helps to spread this knowledge to the public.
        </Text>
        <Link color={'#00A0E9'} fontWeight={'semibold'} fontSize={'15px'} zIndex={1}
              href={'/#/nest-research-academy'} isExternal>
          Know more about NRA
        </Link>
      </Stack>
    </Stack>
  )
}

export default Research