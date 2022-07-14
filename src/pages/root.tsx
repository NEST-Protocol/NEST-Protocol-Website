import {Heading, Stack, Text, chakra} from "@chakra-ui/react";
import * as React from "react";
import {useNavigate} from "react-router-dom";

const Root = () => {
  const navigate = useNavigate()

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
      {pages.map(({name, path, icon, bg, title, desc}) => (
        <Stack key={name} spacing={'48px'}>
          <Heading fontSize={'48px'} px={['48px']} color={'#003232'}>{name}</Heading>
          <Stack align={"center"} minH={'440px'} justify={"center"} spacing={'16px'}>
            <chakra.img/>
            <Text
              fontSize={'25px'} fontWeight={'semibold'} color={'#434344'}
              cursor={'pointer'}
              onClick={() => {
                navigate(path)
              }}
            >
              {title}
            </Text>
            <Text
              fontSize={'15px'} fontWeight={'semibold'} color={'#7d7d7d'} whiteSpace={'break-spaces'}
              textAlign={"center"}
              cursor={'pointer'}
              onClick={() => {
                navigate(path)
              }}
            >
              {desc}
            </Text>
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default Root