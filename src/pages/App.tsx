import * as React from "react"
import {
  Button,
  HStack, useConst,
  VStack, Text, Box, Heading, Spacer,
} from "@chakra-ui/react"

export const App = () => {
  const menu = useConst([
    {label: "About NEST"},
    {label: "Data"},
    {label: "Ecology"},
    {label: "Community"},
    {label: "News"},
  ])

  return (
    <VStack w={"full"}>
      <VStack id={"menu+index"} bg={'#FFD789'} w={"full"} p={'27px 45px'}>
        <HStack id={"menu"} justifyContent={"space-between"} w={"full"}>
          <Text>Logo</Text>
          <HStack>
            {menu.map((item) => (
              <Button variant={"ghost"}>{item.label}</Button>
            ))}
            <Button>Developers</Button>
          </HStack>
        </HStack>
        <VStack id={"page1"} alignItems={"start"} w={"full"}>
          <VStack alignItems={"start"} w={"full"}>
            <Heading fontSize={"5xl"}>Truly Decentralized Oracle</Heading>
            <Heading fontSize={"5xl"}>No Nodes No Auditing Free Quotation</Heading>
            <Heading fontSize={"5xl"}>On-Chain Verification</Heading>
          </VStack>
          <Button>
            DAPP Web
          </Button>
          <HStack>
            <Text>Logos</Text>
          </HStack>
        </VStack>
      </VStack>
      <VStack id={"what is a nest nest oracle"} w={"full"} p={'27px 45px'}>
        <Heading fontSize={"5xl"} w={"full"}>What Is A NEST Oracle</Heading>
      </VStack>
      <VStack id={"impeccable technical architecture"} w={"full"} p={'27px 45px'}>
        <Heading fontSize={"5xl"} w={"full"}>Impeccable technical</Heading>
        <Heading fontSize={"5xl"} w={"full"}>Architecture</Heading>
      </VStack>
      <VStack id={"rapidly growing data"} w={"full"} p={'27px 45px'}>
        <Heading fontSize={"5xl"} w={"full"}>Rapidly Growing Data</Heading>
      </VStack>
      <VStack id={"huge ecosystem"} w={"full"} p={'27px 45px'}>
        <Heading fontSize={"5xl"} w={"full"}>Huge Ecosystem</Heading>
      </VStack>
      <VStack id={"join nest's global community"} w={"full"} p={'27px 45px'}>
        <Heading fontSize={"5xl"} w={"full"}>Join NEST's Global</Heading>
        <Heading fontSize={"5xl"} w={"full"}>Community</Heading>
      </VStack>
      <VStack id={"join the nest unicorn"} w={"full"} p={'27px 45px'}>
        <Heading fontSize={"5xl"} w={"full"}>Join the NEST Unicorn</Heading>
        <Heading fontSize={"5xl"} w={"full"}>Rewards Program</Heading>
      </VStack>
      <VStack id={"coming soon so stay tuned"} w={"full"} p={'27px 45px'}>
        <Heading fontSize={"5xl"} w={"full"}>Coming Soon So Stay</Heading>
        <Heading fontSize={"5xl"} w={"full"}>Tuned</Heading>
      </VStack>
      <VStack id={"news"} w={"full"} p={'27px 45px'}>
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

