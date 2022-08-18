import {chakra, Heading, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Research = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'NEST Research Academy'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'100%'}
        justify={'center'}
        spacing={isDesktop ? "16px" : "13px"}
        bgImage={isDesktop ? "/image/Home/Home_bg_5.jpg" : "/image/Home/Home_bg_5_phone.jpg"}
        bgSize={'cover'}
        bgPosition={"center"}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Home/Home_bg_icon_3.png" : "/image/Home/Home_bg_icon_3_phone.png"}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={"/image/Home/icon_2.png"} zIndex={1} h={isDesktop ? "90px" : "55px"}/>
        <Heading
          fontSize={isDesktop ? "24px" : "17px"}
          fontWeight={'600'}
          color={'#003232'}
          zIndex={1}
        >
          NEST Research Academy (NRA)
        </Heading>
        {isDesktop ? (
          <Text
            zIndex={1}
            fontSize={isDesktop ? "15px" : "12px"}
            fontWeight={'600'}
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
            fontSize={isDesktop ? "15px" : "12px"}
            fontWeight={'600'}
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

        <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'15px'} zIndex={1}
              href={'/nest-research-academy'}>
          Learn more about NRA<ChevronRightIcon/>
        </Link>
      </Stack>
    </Stack>
  )
}

export default Research