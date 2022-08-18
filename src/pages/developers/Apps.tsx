import {Stack, Text, Center, useMediaQuery, Link, HStack} from "@chakra-ui/react";
import React from "react";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Apps = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Stack align={"center"} spacing={0} w={'100%'} alignItems={"center"}>
        <Stack maxW={'1440px'} w={'100%'} spacing={'80px'}>
          <HStack spacing={0} w={'100%'}>
            <Stack
              bgImage={'/image/Developer/Developers_bg_2.jpg'} borderRadius={'12px'}
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
            <Stack bgImage={'/image/Developer/Developers_bg_3.jpg'} w={'100%'} h={'100%'} bgRepeat={"no-repeat"}
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
      <Stack bgImage={'/image/Developer/Developers_bg_2.jpg'} w={'100%'} h={'375px'} bgRepeat={"no-repeat"} borderRadius={'12px'}
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
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={12} href={'/docs/Concept/What-is-NEST#probabilistic-virtual-machine-pvm'}>
            PVM Mechanism<ChevronRightIcon/>
          </Link>
        </Stack>
      </Stack>
      <Stack bgImage={'/image/Developer/Developers_bg_3.jpg'} w={'100%'} h={'375px'} bgRepeat={"no-repeat"} borderRadius={'12px'}
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

export default Apps