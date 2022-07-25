import {Helmet} from "react-helmet";
import * as React from "react";
import {chakra, Heading, HStack, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import Banner_URI from "../../assets/webp/Community_pic_1.webp";
import Community_icon from "../../assets/webp/Community_icon_1.webp";
import Ecosystem_Icon_URI from "../../assets/webp/Home_Ecosystem_icon.webp";
import Ecosystem_URI from "../../assets/webp/Home_pic_3.webp";
import Home_icon_3 from "../../assets/webp/Home_icon_3.webp";
import phone_home_03 from "../../assets/webp/phone_Home_03.webp";
import Developer_Icon_URI from "../../assets/webp/Home_Developers_icon.webp";
import Developer_URI from "../../assets/webp/Home_pic_2.webp";
import Home_icon_2 from "../../assets/webp/Home_icon_2.webp";
import phone_home_02 from "../../assets/webp/phone_Home_02.webp";

const Research = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  const pages = [
    {
      name: 'Funding Opportunity',
      icon: Ecosystem_Icon_URI,
      bg: Ecosystem_URI,
      bgIcon: Home_icon_3,
      phoneBg: phone_home_03,
      desc: `NRA welcomes research in fields such as blockchain, finance, \neconomics, game theory, machine learning, computer science, and software engineering.\n Those interested, please send your research proposal (maximum 10 pages) to`,
      email: 'nra@nestprotocol.org',
      bgSize: 'cover',
    },
    {
      name: 'Vacant Positions',
      icon: Developer_Icon_URI,
      bg: Developer_URI,
      bgIcon: Home_icon_2,
      phoneBg: phone_home_02,
      desc: `NRA welcomes applicants to researchers of all levels. \nNRA evaluates the work of its researchers in a result-oriented manner with flexibility in terms \nof working location and hours. The salary is decided case by case. \nThose interested, please send your academic CV to`,
      email: 'nra@nestprotocol.org',
      bgSize: 'cover',
    },
  ]

  const list = [
    {
      title: 'Promote Industry \nCommunication',
      desc: 'NRA’s research activities include but are not \nlimited to writing research papers published in \npeer-reviewed international academic journals, \nwriting research reports for the public and \ninvestors, and organizing conferences, \nworkshops, webinars, and AMA.'
    },
    {
      title: 'Facilitate Academic \nExploration',
      desc: 'NRA provides funding and job opportunities for \nresearchers in different stages. NRA and NEST \nfeel honored if the support helps scholars make \nbreakthrough progress in academics and achieve \nsignificant contributions to human society from \nvarious perspectives.'
    },
  ]

  return (
    <>
      <Helmet>
        <title>NEST Community</title>
      </Helmet>
      <Stack
        align={'center'}
        h={'full'}
        justify={'center'}
        minH={['540px', '660px']}
        bgImage={Banner_URI}
        bgSize={'cover'}
        bgPosition={"center"}
        spacing={['22px', '44px']}
        px={'24px'}
      >
        <Stack
          position={'absolute'}
          h={'600px'}
          w={'full'}
          bgSize={'contain'}
          bgImage={Community_icon}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          zIndex={0}
        />
        <Text
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={['24px', '48px']}
          fontWeight={'bold'}
          zIndex={1}
          color={'#003434'}
        >
          NEST Research Academy (NRA)
        </Text>
        <Text
          fontSize={['12px', '17px']}
          fontWeight={'bold'}
          textAlign={'center'}
          zIndex={1}
          color={'#003434'}
        >
          NEST Research Academy (NRA), initialized by the NEST protocol,
          <br/>
          aims to boost theoretical and applied research in related
          <br/>
          fields such as blockchain,finance, economics, game theory,
          <br/>
          machine learning, computer science,and software engineering and
          <br/>
          helps to spread this knowledge to the public.
        </Text>
      </Stack>
      <Stack align={"center"}>
        <HStack spacing={'44px'} w={'1440px'}>
          {list.map((item) => (
            <Stack key={item.title} p={'120px'} w={'full'} fontWeight={'semibold'} color={'#003232'} whiteSpace={'break-spaces'}>
              <Text fontSize={'25px'}>{item.title}</Text>
              <Text fontSize={'15px'}>{item.desc}</Text>
            </Stack>
          ))}
        </HStack>
      </Stack>
      {pages.map(({name, icon, bg, bgSize, phoneBg, bgIcon, desc, email}) => (
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
            bgImage={isDesktop ? bg : phoneBg}
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