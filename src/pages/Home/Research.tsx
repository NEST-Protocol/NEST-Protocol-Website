import {chakra, Heading, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";
import Home_bg_5 from '../../assets/image/Home/Home_bg_5.jpg'
import Home_bg_5_phone from '../../assets/image/Home/Home_bg_5_phone.jpg'
import Icon2 from '../../assets/image/Home/icon_2.png'
import {ChevronRightIcon} from "@chakra-ui/icons";
import Home_bg_icon_3 from '../../assets/image/Home/Home_bg_icon_3.png'
import Home_bg_icon_3_phone from '../../assets/image/Home/Home_bg_icon_3_phone.png'

const Research = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'NEST Research Academy'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'full'}
        justify={'center'}
        spacing={['13px', '16px']}
        bgImage={isDesktop ? Home_bg_5: Home_bg_5_phone}
        bgSize={'cover'}
        bgPosition={"center"}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? Home_bg_icon_3 : Home_bg_icon_3_phone}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={Icon2} zIndex={1} h={['55px', '110px']}/>
        <Heading
          fontSize={['17px', '24px']}
          fontWeight={'semibold'}
          color={'#003232'}
          zIndex={1}
        >
          NEST Research Academy (NRA)
        </Heading>
        {isDesktop ? (
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
        ) : (
          <Text
            zIndex={1}
            fontSize={['12px', '15px']}
            fontWeight={'semibold'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            textAlign={'center'}
            px={'24px'}
          >
            NEST Research Academy (NRA), initialized by the NEST protocol, aims to boost
            theoretical and applied research in related fields such as blockchain, finance,
            economics, game theory, machine learning, computer science, and software
            engineering and helps to spread this knowledge to the public.
          </Text>
        )}

        <Link color={'#00A0E9'} fontWeight={'semibold'} fontSize={'15px'} zIndex={1}
              href={'/#/nest-research-academy'} isExternal>
          Learn more about NRA<ChevronRightIcon/>
        </Link>
      </Stack>
    </Stack>
  )
}

export default Research