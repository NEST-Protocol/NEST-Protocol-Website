import {Stack, Text, HStack, useMediaQuery, chakra, Wrap, WrapItem, VStack} from '@chakra-ui/react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import BG_URL from "../../assets/image/Footer/Footer_bg.jpg"

const Footer = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const navigate = useNavigate()

  return (
    <Stack
      p={['24px', '48px']}
      w={'full'}
      align={'center'}
      bgImage={BG_URL}
      bgSize={'cover'}
      bgPosition={"right"}
      zIndex={'10'}
    >
      <Stack maxW={'1440px'} justify={'space-around'} w={'full'}>
        <Wrap spacing={['22px', '44px']} fontSize={15} w={"full"}>
          <WrapItem>
            <Stack px={'24px'} spacing={'40px'} minW={'300px'} >
              <VStack spacing={'22px'} align={"start"}>
                <Text fontWeight={"bold"} color={'#003232'}>Launch App</Text>
                <Text color={'#7D7D7D'} fontWeight={'semibold'}>Buy futures, options and win NEST</Text>
              </VStack>
              <VStack spacing={'22px'} align={"start"}>
                <Text fontWeight={"bold"} color={'#003232'}>NEST News</Text>
                <Text color={'#7D7D7D'} fontWeight={'semibold'}>Latest news from NEST</Text>
              </VStack>
              <VStack spacing={'22px'} align={"start"}>
                <Text fontWeight={"bold"} color={'#003232'}>NEST Research Academy</Text>
                <Text color={'#7D7D7D'} fontWeight={'semibold'}>Know about NRA</Text>
              </VStack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack px={'24px'} spacing={'40px'} minW={'300px'}>
              <VStack spacing={'22px'} align={"start"}>
                <Text fontWeight={"bold"} color={'#003232'}>NEST PVM Docs</Text>
                <Text color={'#7D7D7D'} fontWeight={'semibold'}>Know how to develop on NEST PVM</Text>
              </VStack>
              <VStack spacing={'22px'} align={"start"}>
                <Text fontWeight={"bold"} color={'#003232'}>NEST Oracle Docs</Text>
                <Text color={'#7D7D7D'} fontWeight={'semibold'}>Know how to use NEST Oracle</Text>
              </VStack>
              <HStack>
                <Text>Github</Text>
                <Text>Twitter</Text>
                <Text>Telegram</Text>
                <Text>Medium</Text>
              </HStack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack spacing={'32px'} zIndex={1} minW={'500px'} w={'full'}>
              <Text px={'24px'} fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
                Market price
              </Text>
              <chakra.div
                id="crypto-widget-CoinList"
                data-transparent="true"
                data-design="classic"
                data-coin-ids="2204"
                w={'full'}
              ></chakra.div>
            </Stack>
          </WrapItem>
        </Wrap>
      </Stack>
      <HStack justify={"end"} w={'full'}>
        <Text px={'24px'} color={'#7D7D7D'} fontSize={'15px'} fontWeight={'semibold'}>
          ©2022 NEST
        </Text>
      </HStack>
    </Stack>
  )
}

export default Footer
