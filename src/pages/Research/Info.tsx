import {HStack, Stack, Text} from "@chakra-ui/react";
import * as React from "react";

const Info = () => {
  const list = [
    {
      title: 'Facilitate Academic \nExploration',
      desc: '',
      bg: "",
      icon: "",
    },
  ]

  return (
    <Stack align={"center"}>
      <HStack spacing={'44px'} w={'1440px'} justifyContent={"center"}>
        <Stack bgImage={""} p={0}>
          <Stack
            p={'120px'}
            w={'full'}
            fontWeight={'semibold'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            bgImage={""}
            bgSize={'contain'}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
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
        </Stack>
        <Stack bgImage={""} p={0}>
          <Stack
            p={'120px'}
            w={'full'}
            fontWeight={'semibold'}
            color={'#003232'}
            whiteSpace={'break-spaces'}
            bgImage={""}
            bgSize={'contain'}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
          >
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
        </Stack>
      </HStack>
    </Stack>
  )
}

export default Info