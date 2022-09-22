import React from 'react';
import {
  ChakraProvider, Text, Stack, Link, Button, Heading, HStack, chakra,
} from "@chakra-ui/react";
import Head from "@docusaurus/Head";
import theme from "../../../chakra"
import {ChevronRightIcon} from "@chakra-ui/icons";

export default function NRA(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST Protocol | The stochastic computer based on PVM</title>
      </Head>
      <Stack h={'100%'} w={'100vw'} align={"center"}>
        <Stack w={'100%'} maxW={'1920px'} h={'100%'} bg={'gray.200'} spacing={0}>
          <Stack px={'45px'} py={'34px'} direction={"row"} justifyContent={"space-between"}>
            <Link href={'/'}>
              <chakra.img
                src={"/img/logo.svg"}
                alt=""
                h={'20px'}
              />
            </Link>
            <Stack direction={"row"} align={"center"} spacing={'22px'} fontWeight={'500'} fontSize={'15px'}>
              <Link href={'/nest-fi'}>NEST Fi</Link>
              <Link href={'/developers'}>Developers</Link>
              <Link href={'/'}>Doc</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/about'} color={'#EAAA00'}>About</Link>
              <Button>
                App
              </Button>
            </Stack>
          </Stack>
          <Stack align={"center"} spacing={'48px'} pb={'210px'}>
            <HStack color={'#00A0E9'} fontSize={'15px'} fontWeight={'600'} w={'full'} px={'45px'}>
              <Link>About</Link>
              <ChevronRightIcon/>
              <Link>NRA</Link>
            </HStack>
            <Heading pt={'48px'} fontSize={'50px'}>NEST Research Academy (NRA)</Heading>
            <Text textAlign={"center"} fontSize={'18px'} fontWeight={'bold'}>NEST Research Academy (NRA), initialized by
              the NEST protocol,<br/>aims to boost theoretical and applied research in related<br/>fields such as
              blockchain,finance, economics, game theory,<br/>machine learning, computer science,and software
              engineering and<br/>helps to spread this knowledge to the public.</Text>
          </Stack>
          <HStack justifyContent={"space-between"} spacing={'44px'}>
            <Stack bg={'white'} py={'134px'} h={'440px'} borderRadius={'20px'} w={'full'} align={"center"}>
              <Stack>
                <Text fontSize={'25px'} fontWeight={600}>Promote Industry<br/>Communication</Text>
                <Text fontSize={'15px'} fontWeight={600}>NRA’s research activities include but are not<br/>limited to
                  writing research papers published in<br/>peer-reviewed international academic journals, <br/>writing
                  research reports for the public and <br/>investors,and organizing conferences,<br/>workshops,
                  webinars, and AMA.</Text>
              </Stack>
            </Stack>
            <Stack bg={'white'} py={'134px'} h={'440px'} borderRadius={'20px'} w={'full'} align={"center"}>
              <Stack>
                <Text fontSize={'25px'} fontWeight={600}>Facilitate Academic<br/>Exploration</Text>
                <Text fontSize={'15px'} fontWeight={600}>NRA provides funding and job opportunities for<br/>researchers
                  in different stages. NRA and NEST<br/>feel honored if the support helps scholars make<br/>breakthrough
                  progress in academics and achieve<br/>significant contributions to human society from<br/>various
                  perspectives.</Text>
              </Stack>
            </Stack>
          </HStack>
          <Stack align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'} pt={'138px'}>Funding Opportunity</Heading>
            <Stack px={'160px'} w={'full'}>
              <Stack bg={'white'} align={"center"} textAlign={"center"} py={'130px'} borderRadius={'20px'}>
                <Text>image</Text>
                <Text fontSize={'15px'} fontWeight={'600'}>NRA welcomes research in fields such as blockchain, finance, <br/>economics, game theory, machine
                  learning, computer science, and software engineering.<br/>Those interested, please send your research
                  proposal (maximum 10 pages) to <br/><Link>nra@nestprotocol.org</Link></Text>
              </Stack>
            </Stack>

          </Stack>
          <Stack align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'} pt={'138px'}>Vacant Position</Heading>
            <Stack px={'160px'} w={'full'}>
              <Stack bg={'white'} align={"center"} textAlign={"center"} py={'130px'} borderRadius={'20px'}>
                <Text>image</Text>
                <Text fontSize={'15px'} fontWeight={'600'}>NRA welcomes applicants to researchers of all levels.<br/>NRA evaluates the work of its
                  researchers in a result-oriented manner with flexibility in terms<br/>of working location and hours.
                  The salary is decided case by case.<br/>Those interested, please send your academic CV
                  to<br/><Link>nra@nestprotocol.org</Link></Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack h={'138px'}/>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}