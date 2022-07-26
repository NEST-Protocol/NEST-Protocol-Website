import {Button, Stack, chakra, Text, Heading} from "@chakra-ui/react"
import * as React from "react";

const NESTFi = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <Stack px={['24px', '48px']} w={'full'} align={'center'}>
        <Stack maxW={'1440px'} w={'full'}>
          <Heading fontSize={['24px', '48px']} color={'#003232'}>
            Integrations & Partners
          </Heading>
        </Stack>
      </Stack>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'full'}
        justify={'center'}
        spacing={['13px', '16px']}
        bgImage={""}
        bgSize={'cover'}
        bgPosition={"center"}
      >
        <Stack
          position={'absolute'}
          h={'400px'}
          w={'full'}
          overflow={'hidden'}
          align={'center'}
          bgSize={'contain'}
          bgImage={""}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          zIndex={0}
        />
        <chakra.img src={""} zIndex={1}/>
        <Text
          fontSize={['17px', '24px']}
          fontWeight={'semibold'}
          color={'#003232'}
          zIndex={1}
        >
          NEST Financial Market
        </Text>
        <Text
          zIndex={1}
          fontSize={['12px', '15px']}
          fontWeight={'semibold'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          maxW={'320px'}
        >
          Get NEST token here and buy futures, options or play DeFi games to win NEST.
        </Text>
        <Button
          minW={'160px'}
          minH={['44px', '34px']}
          onClick={() => {
            window.open('https://finance.nestprotocol.org/#/win', '_blank')
          }}
        >
          Win NEST
        </Button>
      </Stack>
    </Stack>
  )
}

export default NESTFi