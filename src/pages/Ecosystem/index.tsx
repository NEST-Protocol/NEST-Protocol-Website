import {chakra, Heading, Stack} from "@chakra-ui/react";
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