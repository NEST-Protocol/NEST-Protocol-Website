import {chakra, Heading, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import Banner_URI from "../../assets/webp/Ecosystem_pic_1.webp";
import Project1_URI from "../../assets/webp/Ecosystem_pic_2.webp";
import Project2_URI from "../../assets/webp/Ecosystem_pic_3.webp";

const Ecosystem = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const pages = [
    {
      name: 'Project',
      path: 'project',
      icon: '',
      bg: Project1_URI,
      title: 'NEST Financial Market',
      desc: 'Get NEST token here and buy futures\noptions\nor do defi games to win NEST.'
    },
    {
      name: '',
      path: 'oracle',
      icon: '',
      bg: Project2_URI,
      title: 'NEST Oracle',
      desc: 'Truly decentralized oracle\nNodeless permissionless quotation\nOn-chain verification.'
    },
  ]

  return (
    <>
      <Stack align={"center"} h={'full'} justify={"center"} minH={['540px', '660px']} bgImage={Banner_URI} spacing={['22px', '44px']}>
        <Text textAlign={"center"} fontSize={['24px', '48px']} fontWeight={'bold'}>
          Explore the {!isDesktop && <br/> } NEST Ecosystem
        </Text>
        <Text fontSize={['12px', '24px']} fontWeight={"bold"} textAlign={"center"}>
          A complete gaming space with applications of{ !isDesktop && <br/> } DeFi, GameFi {isDesktop && <br/>}NFT built on the NEST.{ !isDesktop && <br/> } Swap, hedge, earn and even game<br/>with the NEST network to gain excess returns.
        </Text>
      </Stack>
      {pages.map(({name, path, icon, bg, title, desc}) => (
        <Stack key={name} spacing={'48px'} align={"center"}>
          <Stack px={['24px', '48px']} w={"full"} align={"center"}>
            <Stack maxW={'1440px'} w={'full'}>
              <Heading fontSize={['24px', '48px']} color={'#003232'}>{name}</Heading>
            </Stack>
          </Stack>
          <Stack align={"center"} minH={'440px'} w={'full'} justify={"center"} spacing={['13px', '16px']} bgImage={bg}>
            <chakra.img/>
            <chakra.a
              fontSize={['17px', '24px']} fontWeight={'semibold'} color={'#434344'} href={'/#/' + path}
            >
              {title}
            </chakra.a>
            <chakra.a
              fontSize={['12px', '15px']} fontWeight={'semibold'} color={'#7d7d7d'} whiteSpace={'break-spaces'}
              textAlign={"center"} href={'/#/' + path}
            >
              {desc}
            </chakra.a>
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default Ecosystem