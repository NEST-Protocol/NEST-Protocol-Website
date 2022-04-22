import * as React from "react"
import {
  Button,
  HStack,
  VStack, Text, Heading, Spacer, Link, Box,
} from "@chakra-ui/react"
import { AspectRatio } from '@chakra-ui/react'
import nest from "../assets/svg/nest.svg"
import nest_labs from "../assets/svg/nestlabs.svg"
import fort from "../assets/svg/FORT.svg"
import cofix from "../assets/svg/cofix.svg"
import parasset from "../assets/svg/parasset.svg"
import binance from "../assets/svg/BSC.svg"
import coinbase from "../assets/svg/coinbase.svg"
import SENSITIVITY from "../assets/svg/SENSITIVITY_icon.svg"
import ACCURACY from "../assets/svg/ACCURACY_icon.svg"
import VALIDATION from "../assets/svg/VALIDATION_icon.svg"
import FLEXIBILITY from "../assets/svg/FLEXIBILITY_icon.svg"
import ANTI_ATTACK from "../assets/svg/ANTI-ATTACK_icon.svg"
import Github from "../assets/svg/github_icon.svg"
import Whitepaper from "../assets/svg/whitepaper_icon.svg"
import SecurityReport from "../assets/svg/security_icon.svg"
import Right2 from "../assets/svg/RIGHT_2_icon.svg"


export const App = () => {
  const menu = [
    {label: "About NEST"},
    {label: "Data"},
    {label: "Ecology"},
    {label: "Community"},
    {label: "News"},
  ]

  const page1Logos = [
    { id: "nest_labs", src: nest_labs, link: "#"},
    { id: "fort", src: fort, link: "https://fortprotocol.com" },
    { id: "cofix", src: cofix, link: "https://cofix.tech"},
    { id: "parasset", src: parasset, link: "https://home.parasset.top"},
    { id: "binance", src: binance, link: "https://www.binance.com/"},
    { id: "coinbase", src: coinbase, link: "https://www.coinbase.com"},
  ]

  const page3List = [
    { id: "SENSITIVITY", logo: SENSITIVITY, desc: "Respond to market price quickly" },
    { id: "ACCURACY", logo: ACCURACY, desc: "Reflect the real market price" },
    { id: "VALIDATION", logo: VALIDATION, desc: "Any third party with no threshold" },
    { id: "FLEXIBILITY", logo: FLEXIBILITY, desc: "Free to entry or exit" },
    { id: "ANTI-ATTACK", logo: ANTI_ATTACK, desc: "High cost to tamper the price" },
  ]

  const page3List2 = [
    { id: "Github", logo: Github, link: "" },
    { id: "Whitepaper", logo: Whitepaper, link: "" },
    { id: "Security Report", logo: SecurityReport, link: "" },
  ]

  return (
    <VStack w={"full"}>
      <VStack id={"menu+index"} bg={'#FFD789'} w={"full"} p={'27px 45px'}>
        <HStack id={"menu"} justifyContent={"space-between"} w={"full"}>
          <img src={nest} />
          <HStack>
            {menu.map((item) => (
              <Button key={item.label} variant={"ghost"}>{item.label}</Button>
            ))}
            <Button>Developers</Button>
          </HStack>
        </HStack>
        <VStack id={"page1"} alignItems={"start"} w={"full"} spacing={"60px"} p={"140px 0 80px"}>
          <VStack alignItems={"start"} w={"full"}>
            <Heading fontSize={"5xl"}>Truly Decentralized Oracle</Heading>
            <Heading fontSize={"5xl"}>No Nodes No Auditing Free Quotation</Heading>
            <Heading fontSize={"5xl"}>On-Chain Verification</Heading>
          </VStack>
          <Button>
            DAPP Web
          </Button>
          <HStack spacing={"44px"}>
            { page1Logos.map((item) => (
              <Link key={item.id} isExternal href={item.link}>
                <img src={item.src} alt={item.id}/>
              </Link>
            )) }
          </HStack>
        </VStack>
      </VStack>
      <VStack id={"what is a nest nest oracle"} w={"full"} p={'100px 45px 0'}>
        <Box mb={"100px"} w={"full"}>
          <Heading fontSize={"5xl"} w={"full"}>What Is A NEST Oracle</Heading>
        </Box>
        <AspectRatio maxW='720px' w={"720px"} ratio={16/9} bg={"red"}>
          <iframe
            title='naruto'
            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
            allowFullScreen
          />
        </AspectRatio>
      </VStack>
      <VStack id={"impeccable technical architecture"} w={"full"} p={'100px 45px 0'}>
        <Box w={"full"} mb={"100px"}>
          <Heading fontSize={"5xl"} w={"full"}>Impeccable technical</Heading>
          <Heading fontSize={"5xl"} w={"full"}>Architecture</Heading>
        </Box>
        <HStack justifyContent={"space-between"} w={"full"} pb={"44px"}>
          { page3List.map((item) => (
            <VStack key={item.id} w={"220px"} h={"220px"} borderRadius={"12px"}
                    alignItems={"start"} p={"22px"} justifyContent={"center"} spacing={"22px"}
                    boxShadow={"0 0 45px 5px #E5E5E5"} border={"1px solid #EEEEEE"}>
              <img src={item.logo} alt={item.id}/>
              <Text fontWeight={600} fontSize={"15px"}>{item.id}</Text>
              <Text color={"#878787"} fontSize={"15px"} fontWeight={600}>{item.desc}</Text>
            </VStack>
          )) }
        </HStack>
        <HStack spacing={"90px"} pb={"27px"}>
          { page3List2.map((item)=>(
            <Link isExternal href={item.link}>
              <HStack spacing={"22px"}>
                <img src={item.logo} alt={item.id}/>
                <Text fontSize={"15px"} fontWeight={"semibold"}>{item.id}</Text>
                <img src={Right2} alt={"right"}/>
              </HStack>
            </Link>
          )) }
        </HStack>
        <Button variant={"outline"}>
          Developers
        </Button>
      </VStack>
      <VStack id={"rapidly growing data"} w={"full"} p={'80px 45px 0'}>
        <Heading fontSize={"5xl"} w={"full"}>Rapidly Growing Data</Heading>
      </VStack>
      <VStack id={"huge ecosystem"} w={"full"} p={'80px 45px 0'}>
        <Heading fontSize={"5xl"} w={"full"}>Huge Ecosystem</Heading>
      </VStack>
      <VStack id={"join nest's global community"} w={"full"} p={'80px 45px 0'}>
        <Heading fontSize={"5xl"} w={"full"}>Join NEST's Global</Heading>
        <Heading fontSize={"5xl"} w={"full"}>Community</Heading>
      </VStack>
      <VStack id={"join the nest unicorn"} w={"full"} p={'80px 45px 0'}>
        <Heading fontSize={"5xl"} w={"full"}>Join the NEST Unicorn</Heading>
        <Heading fontSize={"5xl"} w={"full"}>Rewards Program</Heading>
      </VStack>
      <VStack id={"coming soon so stay tuned"} w={"full"} p={'80px 45px'}>
        <Heading fontSize={"5xl"} w={"full"}>Coming Soon So Stay</Heading>
        <Heading fontSize={"5xl"} w={"full"}>Tuned</Heading>
      </VStack>
      <VStack id={"news"} w={"full"} p={'80px 45px'}>
        <Heading fontSize={"5xl"} w={"full"}>News</Heading>
      </VStack>
      <HStack id={"footer"} w={"full"} p={'90px 45px'} bg={'#FFD789'} spacing={'20px'}>
        <VStack alignItems={"start"} w={'240px'} h={'400px'}>
          <Text fontWeight={"bold"}>App</Text>
          <br/>
          <Text fontWeight={"semibold"}>Developers</Text>
          <Text fontWeight={"semibold"}>DAPP Web</Text>
        </VStack>
        <VStack alignItems={"start"} w={'240px'} h={'400px'}>
          <Text fontWeight={"bold"}>Community</Text>
          <br/>
        </VStack>
        <VStack alignItems={"start"} w={'240px'} h={'400px'}>
          <Text fontWeight={"bold"}>Technology</Text>
          <br/>
        </VStack>
        <Spacer/>
        <VStack>
        </VStack>
      </HStack>
    </VStack>
  )
}

