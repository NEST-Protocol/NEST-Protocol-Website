import {chakra, Heading, Stack, Text} from "@chakra-ui/react";
import * as React from "react";

const Ecosystem = () => {
  const pages = [
    {
      name: 'Project',
      path: 'project',
      icon: '',
      bg: '',
      title: 'NEST Financial Market',
      desc: 'Get NEST token here and buy futures\noptions\nor do defi games to win NEST.'
    },
    {
      name: '',
      path: 'oracle',
      icon: '',
      bg: '',
      title: 'NEST Oracle',
      desc: 'Truly decentralized oracle\nNodeless permissionless quotation\nOn-chain verification.'
    },
  ]

  return (
    <>
      <Stack align={"center"} h={'full'} justify={"center"} minH={'660px'} bg={"red"} spacing={'44px'}>
        <Text textAlign={"center"} fontSize={'48px'} fontWeight={'bold'}>
          Explore the NEST Ecosystem
        </Text>
        <Text fontSize={'25px'} fontWeight={"bold"} textAlign={"center"}>
          A complete gaming space with applications of DeFi, GameFi<br/>NFT built on the NEST. Swap, hedge, earn and even game<br/>with the NEST network to gain excess returns.
        </Text>
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

export default Ecosystem