import {Heading, Stack, chakra, Text, Button, HStack, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";

const Root = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const pages = [
    {
      name: 'Ecosystem',
      path: 'ecosystem',
      icon: '',
      bg: '',
      title: 'Explore the NEST Ecosystem',
      desc: `A complete gaming space with ${ !isDesktop && '\n' }applications of DeFi, GameFi\nand NFT built on the NEST. Swap, hedge, ${ !isDesktop && '\n' }earn and even game\nwith the NEST network to ${ !isDesktop && '\n' }gain excess returns.`
    },
    {
      name: 'Developers',
      path: 'developers',
      icon: '',
      bg: '',
      title: 'Build smart contract with NEST',
      desc: `Technical guidelines, source code,${ !isDesktop && '\n' } and detailed training\nmaterials on how to build NEST-based\napplications from scratch here.`
    },
    {
      name: 'Community',
      path: 'community',
      icon: '',
      bg: '',
      title: 'Community',
      desc: `The NEST community is made${ !isDesktop && '\n' } up of developers, creators,\nenthusiasts, explore, contribute to the${ !isDesktop && '\n' } community and${ isDesktop && '\n' } get reward.`
    },
  ]

  return (
    <>
      <Stack spacing={'44px'}>
        <Stack align={"center"} h={'full'} justify={"center"} minH={'660px'} bg={"red"}>
          <Text whiteSpace={'break-spaces'} textAlign={"center"} fontSize={['24px', '48px']} fontWeight={'bold'}>
            NEST and FORT<br/>Will merged {!isDesktop && <br/>} on July 29, 2022
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
          <Heading fontSize={['24px', '48px']} px={['24px', '48px']} color={'#003232'}>{name}</Heading>
          <Stack align={"center"} minH={'440px'} justify={"center"} spacing={['13px', '16px']}>
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

export default Root