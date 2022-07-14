import {Heading, Stack, chakra, Text, Button, HStack} from "@chakra-ui/react";
import * as React from "react";

const Root = () => {
  const pages = [
    {
      name: 'Ecosystem',
      path: 'ecosystem',
      icon: '',
      bg: '',
      title: 'Explore the NEST Ecosystem',
      desc: 'A complete gaming space with applications of DeFi, GameFi\nand NFT built on the NEST. Swap, hedge, earn and even game\nwith the NEST network to gain excess returns.'
    },
    {
      name: 'Developers',
      path: 'developers',
      icon: '',
      bg: '',
      title: 'Build smart contract with NEST',
      desc: 'Technical guidelines, source code, and detailed training\nmaterials on how to build NEST-based\napplications from scratch here.'
    },
    {
      name: 'Community',
      path: 'community',
      icon: '',
      bg: '',
      title: 'Community',
      desc: 'The NEST community is made up of developers, creators,\nenthusiasts, explore, contribute to the community and\nget reward.'
    },
  ]

  return (
    <>
      <Stack spacing={'44px'}>
        <Stack align={"center"} h={'full'} justify={"center"} minH={'660px'} bg={"red"}>
          <Text whiteSpace={'break-spaces'} textAlign={"center"} fontSize={'48px'} fontWeight={'bold'}>
            NEST and FORT<br/>Will merged on July 29, 2022
          </Text>
        </Stack>
        <HStack justify={"center"}>
          <Button>
            What is NEST
          </Button>
        </HStack>
      </Stack>
      {pages.map(({name, path, icon, bg, title, desc}) => (
        <Stack key={name} spacing={'48px'}>
          <Heading fontSize={'48px'} px={['48px']} color={'#003232'}>{name}</Heading>
          <Stack align={"center"} minH={'440px'} justify={"center"} spacing={'16px'}>
            <chakra.img/>
            <chakra.a
              fontSize={'25px'} fontWeight={'semibold'} color={'#434344'} href={'/#/' + path}
            >
              {title}
            </chakra.a>
            <chakra.a
              fontSize={'15px'} fontWeight={'semibold'} color={'#7d7d7d'} whiteSpace={'break-spaces'}
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

export default Root