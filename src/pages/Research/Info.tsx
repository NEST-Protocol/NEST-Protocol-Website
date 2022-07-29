import {Center, Heading, HStack, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import Research_bg_2 from '../../assets/image/Research/Research_bg_2.jpg'
import Research_bg_3 from '../../assets/image/Research/Research_bg_3.jpg'

const Info = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Stack spacing={'48px'} align={'center'}>
        <HStack w={"full"} spacing={'44px'} maxW={'1440px'}>
          <Center color={'#003232'} fontWeight={"semibold"} w={'full'} h={'440px'} bgImage={Research_bg_2} bgPosition={"center"}
                  bgSize={"cover"}>
            <Stack
              fontWeight={'semibold'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
            >
              <Text fontSize={'25px'}>Promote Industry <br/>Communication</Text>
              <Text fontSize={'15px'}>NRA’s research activities include but are not
                <br/>
                limited to writing research papers published in
                <br/>
                peer-reviewed international academic journals,
                <br/>
                writing research reports for the public and
                <br/>
                investors, and organizing conferences,
                <br/>
                workshops, webinars, and AMA.</Text>
            </Stack>
          </Center>
          <Center color={'#003232'} fontWeight={"semibold"} w={'full'} h={'440px'} bgImage={Research_bg_3} bgPosition={"center"}
                  bgSize={"cover"}>
            <Stack
              fontWeight={'semibold'}
              color={'#003232'}
              whiteSpace={'break-spaces'}>
              <Text fontSize={'25px'}>Facilitate Academic
                <br/>
                Exploration</Text>
              <Text fontSize={'15px'}>NRA provides funding and job opportunities for
                <br/>
                researchers in different stages. NRA and NEST
                <br/>
                feel honored if the support helps scholars make
                <br/>
                breakthrough progress in academics and achieve
                <br/>
                significant contributions to human society from
                <br/>
                various perspectives.</Text>
            </Stack>
          </Center>
        </HStack>
      </Stack>
    )
  } else {
    return (
      <Stack spacing={'48px'} align={'center'}>
        <Stack w={"full"} spacing={'44px'} maxW={'1440px'}>
          <Center color={'#003232'} fontWeight={"semibold"} w={'full'} h={'440px'} bgImage={Research_bg_2} bgPosition={"center"}
                  bgSize={"cover"}>
            <Stack
              p={'24px'}
              fontWeight={'semibold'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
            >
              <Heading fontSize={'25px'} textAlign={"center"}>Promote Industry <br/>Communication</Heading>
              <Text fontSize={'15px'} textAlign={"center"}>NRA’s research activities include but are not
                limited to writing research papers published in
                peer-reviewed international academic journals,
                writing research reports for the public and
                investors, and organizing conferences,
                workshops, webinars, and AMA.
              </Text>
            </Stack>
          </Center>
          <Center color={'#003232'} fontWeight={"semibold"} w={'full'} h={'440px'} bgImage={Research_bg_3} bgPosition={"center"}
                  bgSize={"cover"}>
            <Stack
              p={'24px'}
              fontWeight={'semibold'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
            >
              <Heading fontSize={'25px'} textAlign={"center"}>Facilitate Academic
                <br/>
                Exploration</Heading>
              <Text fontSize={'15px'} textAlign={"center"}>NRA provides funding and job opportunities for
                researchers in different stages. NRA and NEST
                feel honored if the support helps scholars make
                breakthrough progress in academics and achieve
                significant contributions to human society from
                various perspectives.</Text>
            </Stack>
          </Center>
        </Stack>
      </Stack>
    )
  }

}

export default Info