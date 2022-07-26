import {Helmet} from "react-helmet";
import * as React from "react";
import {chakra, Heading, HStack, Stack, Text} from "@chakra-ui/react";
import Banner from "./Banner";

const Research = () => {

  const pages = [
    {
      name: 'Funding Opportunity',
      icon: "",
      bg: "",
      bgIcon: "",
      desc: `NRA welcomes research in fields such as blockchain, finance, \neconomics, game theory, machine learning, computer science, and software engineering.\n Those interested, please send your research proposal (maximum 10 pages) to`,
      email: 'nra@nestprotocol.org',
      bgSize: 'cover',
    },
    {
      name: 'Vacant Positions',
      icon: "",
      bg: "",
      bgIcon: "",
      desc: `NRA welcomes applicants to researchers of all levels. \nNRA evaluates the work of its researchers in a result-oriented manner with flexibility in terms \nof working location and hours. The salary is decided case by case. \nThose interested, please send your academic CV to`,
      email: 'nra@nestprotocol.org',
      bgSize: 'cover',
    },
  ]

  const list = [
    {
      title: 'Promote Industry \nCommunication',
      desc: 'NRA’s research activities include but are not \nlimited to writing research papers published in \npeer-reviewed international academic journals, \nwriting research reports for the public and \ninvestors, and organizing conferences, \nworkshops, webinars, and AMA.',
      bg: "",
      icon: "",
    },
    {
      title: 'Facilitate Academic \nExploration',
      desc: 'NRA provides funding and job opportunities for \nresearchers in different stages. NRA and NEST \nfeel honored if the support helps scholars make \nbreakthrough progress in academics and achieve \nsignificant contributions to human society from \nvarious perspectives.',
      bg: "",
      icon: "",
    },
  ]

  return (
    <>
      <Helmet>
        <title>NEST Community</title>
      </Helmet>
      <Banner/>
      <Stack align={"center"}>
        <HStack spacing={'44px'} w={'1440px'} justifyContent={"center"}>
          {list.map((item) => (
            <Stack bgImage={item.bg} p={0} key={item.title}>
              <Stack
                p={'120px'}
                w={'full'}
                fontWeight={'semibold'}
                color={'#003232'}
                whiteSpace={'break-spaces'}
                bgImage={item.icon}
                bgSize={'contain'}
                bgRepeat={"no-repeat"}
                bgPosition={"center"}
              >
                <Text fontSize={'25px'}>{item.title}</Text>
                <Text fontSize={'15px'}>{item.desc}</Text>
              </Stack>
            </Stack>
          ))}
        </HStack>
      </Stack>
      {pages.map(({name, icon, bg, bgSize, bgIcon, desc, email}) => (
        <Stack key={name} spacing={'48px'}>
          <Stack px={['24px', '48px']} w={'full'} align={'center'}>
            <Stack maxW={'1440px'} w={'full'}>
              <Heading fontSize={['24px', '48px']} color={'#003232'}>
                {name}
              </Heading>
            </Stack>
          </Stack>
          <Stack
            align={'center'}
            minH={'440px'}
            justify={'center'}
            spacing={['13px', '16px']}
            bgImage={bg}
            bgSize={"cover"}
            px={'24px'}
            cursor={"pointer"}
          >
            <Stack
              position={'absolute'}
              h={'440px'}
              w={'full'}
              bgImage={bgIcon}
              bgRepeat={'no-repeat'}
              bgPosition={'center'}
              bgSize={bgSize}
              zIndex={0}
            />
            <chakra.img src={icon} h={['55px', '110px']} zIndex={1}/>
            <chakra.a
              fontSize={['12px', '15px']}
              fontWeight={'semibold'}
              color={'#003232'}
              whiteSpace={'break-spaces'}
              textAlign={'center'}
              zIndex={1}
            >
              {desc}
              <chakra.a
                fontSize={['12px', '15px']}
                fontWeight={'semibold'}
                color={'#00A0E9'}
                whiteSpace={'break-spaces'}
                textAlign={'center'}
                maxW={'480px'}
                zIndex={1}
              >
                <br/>
                {email}
              </chakra.a>
            </chakra.a>
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default Research