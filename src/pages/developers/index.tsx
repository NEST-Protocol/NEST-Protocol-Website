import {
  Stack,
  useMediaQuery,
  ChakraProvider,
  chakra,
  Heading,
  Text,
  Button,
  HStack,
  Center,
  Link
} from "@chakra-ui/react";
import React from "react";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../chakra";
import TheHeader from "@site/src/components/TheHeader";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Developer = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Developers | NEST Protocol</title>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "56px"}>
        <React.Suspense fallback={<div></div>}>
          <Banner/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <Apps/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <TheFooter/>
        </React.Suspense>
      </Stack>
    </ChakraProvider>
  );
}

export default Developer

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      h={'full'}
      justify={'center'}
      minH={["600px", "660px"]}
      bgImage={isDesktop ? "/image/Developer/Developers_bg.webp" : "/image/Developer/Phone_Developers_bg_1.webp"}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={0}
      px={'24px'}
    >
      <TheHeader/>
      <chakra.img
        position={"absolute"}
        src={isDesktop ? "/image/Developer/Developers_bg_icon.webp" : "/image/Developer/Phone_Developers_bg_icon.webp"}
        alt={''}
        minH={["600px", "660px"]}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Stack spacing={["22px", "44px"]} pt={'60px'} align={"center"}>
        <Heading
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={["24px", "48px"]}
          fontWeight={'700'}
          zIndex={1}
          color={'#003434'}
        >
          Another Revolution in Blockchain
        </Heading>
        {isDesktop ? (
          <Text
            fontSize={["12px", "17px"]}
            fontWeight={'700'}
            textAlign={'center'}
            zIndex={1}
            color={'#003434'}
          >
            NEST ecosystem is a paradigm revolution to the traditional
            <br/>
            market mechanism, providing the blockchain world with a
            <br/>
            whole new range of development tools and creative new assets.
          </Text>
        ) : (
          <Text
            fontSize={["12px", "17px"]}
            fontWeight={'700'}
            textAlign={'center'}
            zIndex={1}
            color={'#003434'}
          >
            NEST ecosystem is a paradigm revolution<br/>
            to the traditional market mechanism,<br/>
            providing the blockchain world with a<br/>
            whole new range of development tools and<br/>
            creative new assets.
          </Text>
        )}

        <Button className={'button--primary'} w={'160px'} onClick={() => {
          window.location.pathname = '/docs/Building-On-NEST/Contracts'
        }}>
          Developer Docs
        </Button>
      </Stack>
    </Stack>
  )
}

const Apps = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Stack align={"center"} spacing={0} w={'100%'} alignItems={"center"}>
        <Stack maxW={'1440px'} w={'100%'} spacing={'80px'}>
          <HStack spacing={0} w={'100%'}>
            <Stack
              bgImage={'/image/Developer/Developers_bg_2.webp'} borderRadius={'12px'}
              w={'100%'} h={'100%'} bgRepeat={"no-repeat"}
              align={"center"} justify={"center"} bgSize={"cover"}>
              <img src={'/image/Developer/Flowchart_1.svg'} alt={'what is NEST PVM'} width={'98%'}/>
            </Stack>
            <Center w={'100%'} h={'100%'} minW={'500px'}>
              <Stack px={'20px'}>
                <Text fontSize={'24px'} fontWeight={'600'} m={0}>NEST PVM</Text>
                <Text fontSize={'15px'} fontWeight={'600'}>
                  NEST Probabilistic Virtual Machine (NEST PVM) is a virtual
                  <br/>
                  machine-like structure based on the basic function
                  <br/>
                  library. Developers can develop various exciting
                  <br/>
                  applications based on the function library, similar
                  <br/>
                  to Ethereum virtual machine (EVM) programming.
                </Text>
                <Stack pt={'10px'}>
                  <Link color={'#00A0E9'} fontWeight={'600'} fontSize={15}
                        href={'/docs/Concept/What-is-NEST'}>
                    PVM Mechanism<ChevronRightIcon/>
                  </Link>
                </Stack>
              </Stack>
            </Center>
          </HStack>
          <HStack w={'100%'} spacing={0}>
            <Center w={'100%'} h={'100%'} minW={'500px'}>
              <Stack px={'20px'}>
                <Text fontSize={'24px'} fontWeight={'600'} m={0}>NEST Oracle</Text>
                <Text fontSize={'15px'} fontWeight={'600'}>
                  NEST oracle is the only truly decentralized oracle
                  <br/>
                  on the market today.
                </Text>
                <HStack pt={'10px'} spacing={'60px'}>
                  <Link color={'#00A0E9'} fontWeight={'600'} fontSize={15} href={'/docs/NEST-Oracle/How-to-Mining'}>
                    How to Mining<ChevronRightIcon/>
                  </Link>
                  <Link color={'#00A0E9'} fontWeight={'600'} fontSize={15} href={'/docs/NEST-Oracle/How-to-Call-Price'}>
                    How to Call Price<ChevronRightIcon/>
                  </Link>
                </HStack>
              </Stack>
            </Center>
            <Stack bgImage={'/image/Developer/Developers_bg_3.webp'} w={'100%'} h={'100%'} bgRepeat={"no-repeat"}
                   align={"center"} justify={"center"} bgSize={"cover"} borderRadius={'12px'}>
              <img
                src={'/image/Developer/Flowchart_2.svg'}
                alt={'what is NEST Oracle'} height={'94%'}/>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
    )
  }

  return (
    <Stack spacing={'35px'}>
      <Stack bgImage={'/image/Developer/Developers_bg_2.webp'} w={'100%'} h={'375px'} bgRepeat={"no-repeat"}
             borderRadius={'12px'}
             align={"center"} justify={"center"} bgSize={"cover"}>
        <img src={'/image/Developer/Phone_Flowchart_1.svg'} alt={'what is NEST PVM'} width={'98%'}/>
      </Stack>
      <Stack px={'20px'} textAlign={"center"}>
        <Text fontSize={'16px'} fontWeight={'600'} m={0}>NEST PVM</Text>
        <Text fontSize={'12px'} fontWeight={'600'}>
          NEST Probabilistic Virtual Machine (NEST PVM) is a virtual
          machine-like structure based on the basic function
          library. Developers can develop various exciting
          applications based on the function library, similar
          to Ethereum virtual machine (EVM) programming.
        </Text>
        <Stack pt={'10px'}>
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={12}
                href={'/docs/Concept/What-is-NEST#probabilistic-virtual-machine-pvm'}>
            PVM Mechanism<ChevronRightIcon/>
          </Link>
        </Stack>
      </Stack>
      <Stack bgImage={'/image/Developer/Developers_bg_3.webp'} w={'100%'} h={'375px'} bgRepeat={"no-repeat"}
             borderRadius={'12px'}
             align={"center"} justify={"center"} bgSize={"cover"}>
        <img src={'/image/Developer/Phone_Flowchart_2.svg'} alt={'what is NEST Oracle'} height={'375px'}/>
      </Stack>
      <Stack px={'20px'} textAlign={"center"}>
        <Text fontSize={'16px'} fontWeight={'600'} m={0}>NEST Oracle</Text>
        <Text fontSize={'12px'} fontWeight={'600'}>
          NEST oracle is the only truly decentralized oracle
          on the market today.
        </Text>
        <Stack pt={'10px'} spacing={'20px'}>
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={12} href={'/docs/NEST-Oracle/How-to-Mining'}>
            How to Mining<ChevronRightIcon/>
          </Link>
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={12} href={'/docs/NEST-Oracle/How-to-Call-Price'}>
            How to Call Price<ChevronRightIcon/>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
