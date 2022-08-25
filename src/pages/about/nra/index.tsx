import React from 'react';
import {Stack, useMediaQuery, ChakraProvider, HStack, Link, Heading, Text, chakra, Center} from "@chakra-ui/react";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../../chakra";
import TheHeader from "@site/src/components/TheHeader";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import BigTitle from "@site/src/components/BigTitle";

export default function NRA(): JSX.Element {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NRA | NEST Protocol</title>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "56px"}>
        <Banner/>
        <Banner2/>
        <Info/>
        <FundingOpportunity/>
        <VacantPositions/>
        <TheFooter/>
      </Stack>
    </ChakraProvider>
  );
}

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      h={'full'}
      justify={'center'}
      minH={isDesktop ? "88px" : "60px"}
      bgImage={isDesktop ? "/image/Research/Research_bg_1.webp" : "/image/Research/Research_bg_1_phone.webp"}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={0}
      px={'24px'}
    >
      <TheHeader/>
    </Stack>
  )
}


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
      <Stack w={'100%'} align={"center"} pt={'48px'} h={'440px'} bgImage={'/image/Research/RNA_bg_icon.webp'}
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

const FundingOpportunity = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'} id={"funding-opportunity"}>
      <BigTitle title={'Funding Opportunity'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'100%'}
        justify={'center'}
        spacing={isDesktop ? "16px" : "13px"}
        bgImage={isDesktop ? "/image/Research/Research_bg_4.webp" : "/image/Research/Research_bg_4.webp"}
        bgSize={'cover'}
        bgPosition={"center"}
        px={'24px'}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Research/Research_bg_icon_2.webp" : "/image/Research/Research_bg_icon_2_phone.webp"}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={"/image/Research/icon_1.webp"} zIndex={1}/>
        <Text
          zIndex={1}
          fontSize={isDesktop ? "15px" : "12px"}
          fontWeight={'600'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
        >
          NRA encourages research in areas such as blockchain, finance,
          {isDesktop && (<br/>)}
          economics, game theory, machine learning, computer science, and software engineering.
          {isDesktop && (<br/>)}
          Those interested should send a research proposal (maximum of 10 pages) to
          {isDesktop && (<br/>)}
          <br/>
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'15px'} zIndex={1}
                href={'mailto:nra@nestprotocol.org'} isExternal>
            nra@nestprotocol.org
          </Link>
        </Text>

      </Stack>
    </Stack>
  )
}

const Info = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Stack spacing={'48px'} align={'center'}>
        <HStack w={"100%"} spacing={'44px'} maxW={'1440px'}>
          <Center color={'#003232'} fontWeight={"600"} w={'100%'} h={'440px'} borderRadius={'12px'}
                  bgImage={"/image/Research/Research_bg_2.webp"} bgPosition={"center"}
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
          <Center color={'#003232'} fontWeight={"600"} w={'100%'} h={'440px'} borderRadius={'12px'}
                  bgImage={"/image/Research/Research_bg_3.webp"} bgPosition={"center"}
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
                  bgImage={"/image/Research/Research_bg_2.webp"} bgPosition={"center"}
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
                  bgImage={"/image/Research/Research_bg_3.webp"} bgPosition={"center"}
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

const VacantPositions = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'} id={'vacant-positions'}>
      <BigTitle title={'Vacant Positions'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'100%'}
        justify={'center'}
        spacing={isDesktop ? "16px" : "13px"}
        bgImage={isDesktop ? "/image/Research/Research_bg_5.webp" : "/image/Research/Research_bg_5_phone.webp"}
        bgSize={'cover'}
        bgPosition={"center"}
        px={'24px'}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Research/Research_bg_icon_3.webp" : "/image/Research/Research_bg_icon_3_phone.webp"}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={"/image/Research/icon_2.webp"} zIndex={1}/>
        <Text
          zIndex={1}
          fontSize={isDesktop ? "15px" : "12px"}
          fontWeight={'600'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
        >
          NRA accepts applications from researchers of all levels.
          {isDesktop && (<br/>)}
          The work of NRA's researchers is evaluated in a result-oriented manner, with flexibility in terms
          {isDesktop && (<br/>)}
          of working location and hours. Salary is determined on an individual basis.
          {isDesktop && (<br/>)}
          Please send your academic CV to
          {isDesktop && (<br/>)}
          <br/>
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'15px'} zIndex={1}
                href={'mailto:nra@nestprotocol.org'} isExternal>
            nra@nestprotocol.org
          </Link>
        </Text>
      </Stack>
    </Stack>
  )
}