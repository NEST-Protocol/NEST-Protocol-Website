import {Center, Heading, HStack, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";

const Info = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Stack spacing={'48px'} align={'center'}>
        <HStack w={"100%"} spacing={'44px'} maxW={'1440px'}>
          <Center color={'#003232'} fontWeight={"600"} w={'100%'} h={'440px'}
                  bgImage={"/image/Research/Research_bg_2.jpg"} bgPosition={"center"}
                  bgSize={"cover"}>
            <Stack
              fontWeight={'600'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
            >
              <Text fontSize={'25px'}>Promote Industry <br/>Communication</Text>
              <Text fontSize={'15px'}>NRA’s research activities include but are not limited
                <br/>
                to writing research papers published in peer-reviewed
                <br/>
                international academic journals, writing research
                <br/>
                reports for the public and investors, and organizing
                <br/>
                conferences, workshops, webinars, and AMA.
              </Text>
            </Stack>
          </Center>
          <Center color={'#003232'} fontWeight={"600"} w={'100%'} h={'440px'}
                  bgImage={"/image/Research/Research_bg_3.jpg"} bgPosition={"center"}
                  bgSize={"cover"}>
            <Stack
              fontWeight={'600'}
              color={'#003232'}
              whiteSpace={'break-spaces'}>
              <Text fontSize={'25px'}>Facilitate Academic
                <br/>
                Exploration</Text>
              <Text fontSize={'15px'}>
                NRA offers funding and job opportunities to
                <br/>
                researchers at various stages. NRA and NEST consider
                <br/>
                it an honour if their assistance enables scholars to make
                <br/>
                significant contributions to human society from various
                <br/>
                perspectives.
              </Text>
            </Stack>
          </Center>
        </HStack>
      </Stack>
    )
  } else {
    return (
      <Stack spacing={'48px'} align={'center'}>
        <Stack w={"100%"} spacing={'44px'} maxW={'1440px'}>
          <Center color={'#003232'} fontWeight={"600"} w={'100%'} h={'440px'}
                  bgImage={"/image/Research/Research_bg_2.jpg"} bgPosition={"center"}
                  bgSize={"cover"}>
            <Stack
              p={'24px'}
              fontWeight={'600'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
            >
              <Heading fontSize={'16px'} fontWeight={600} textAlign={"center"}>Promote
                Industry <br/>Communication</Heading>
              <Text fontSize={'15px'} textAlign={"center"}>
                NRA’s research activities include but are not limited to writing research papers published in
                peer-reviewed international academic journals, writing research reports for the public and
                investors,
                and organizing conferences, workshops, webinars, and AMA.
              </Text>
            </Stack>
          </Center>
          <Center color={'#003232'} fontWeight={"600"} w={'100%'} h={'440px'}
                  bgImage={"/image/Research/Research_bg_3.jpg"} bgPosition={"center"}
                  bgSize={"cover"}>
            <Stack
              p={'24px'}
              fontWeight={'600'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
            >
              <Heading fontSize={'16px'} fontWeight={600} textAlign={"center"}>Facilitate Academic
                <br/>
                Exploration</Heading>
              <Text fontSize={'15px'} textAlign={"center"}>
                NRA offers funding and job opportunities to researchers at various stages. NRA and NEST consider it
                an
                honour if their assistance enables scholars to make significant contributions to human society from
                various perspectives.
              </Text>
            </Stack>
          </Center>
        </Stack>
      </Stack>
    )
  }
}

export default Info