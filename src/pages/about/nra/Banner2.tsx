import {Heading, HStack, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

const Banner2 = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Stack w={'100%'} alignItems={"center"} px={isDesktop ? "48px" : "24px"} position={'absolute'} py={'28px'}>
        {isDesktop ? (
          <Stack maxW={'1440px'} w={'100%'} position={"sticky"} top={'22px'}>
            <HStack fontWeight={'600'}>
              <Link fontSize={'15px'} color={'#00A0E9'} href={'/about'}>About</Link>
              <ChevronRightIcon color={'#00A0E9'}/>
              <Link fontSize={'15px'} color={'#00A0E9'} href={'/about/nra'}>NRA</Link>
            </HStack>
          </Stack>
        ) : (
          <HStack w={"full"}>
            <ChevronLeftIcon fontSize={"40px"} ml={'-10px'} onClick={() => {
              window.location.pathname = "/about"
            }}/>
          </HStack>
        )}
      </Stack>
      <Stack w={'100%'} align={"center"} pt={'48px'} h={'440px'} bgImage={'/image/Research/RNA_bg_icon.png'}
             bgRepeat={"no-repeat"} bgSize={["120%", "contain"]} bgPos={"center"} justify={"center"}>
        <Stack spacing={isDesktop ? "44px" : "22px"}>
          {isDesktop ? (
            <>
              <Heading
                whiteSpace={'break-spaces'}
                textAlign={'center'}
                fontSize={isDesktop ? "48px" : "24px"}
                fontWeight={'700'}
                zIndex={1}
                color={'#003434'}
              >
                NEST Research Academy (NRA)
              </Heading>
              <Text
                fontSize={isDesktop ? "17px" : "12px"}
                fontWeight={'700'}
                textAlign={'center'}
                zIndex={1}
                color={'#003434'}
              >
                The NEST Research Academy (NRA), founded by the NEST protocol, <br/>
                aims to promote theoretical and applied research in fields such as<br/>
                blockchain, finance, economics, game theory, machine learning,<br/>
                computer science, and software engineering, as well as to disseminate<br/>
                this knowledge to the general public.
              </Text>
            </>
          ) : (
            <>
              <Heading
                whiteSpace={'break-spaces'}
                textAlign={'center'}
                fontSize={isDesktop ? "48px" : "24px"}
                fontWeight={'700'}
                zIndex={1}
                color={'#003434'}
              >
                NEST Research<br/> Academy (NRA)
              </Heading>
              <Text
                fontSize={isDesktop ? "17px" : "12px"}
                fontWeight={'700'}
                textAlign={'center'}
                zIndex={1}
                color={'#003434'}
              >
                The NEST Research Academy (NRA), founded by<br/>
                the NEST protocol, aims to promote theoretical<br/>
                and applied research in fields such as<br/>
                blockchain, finance, economics, game theory,<br/>
                machine learning, computer science, and software<br/>
                engineering, as well as to disseminate this knowledge<br/>
                to the general public.
              </Text>
            </>
          )}
        </Stack>
      </Stack>
    </>
  )
}

export default Banner2;