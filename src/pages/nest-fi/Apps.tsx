import {Stack, Text, Center, Button, useMediaQuery, HStack} from "@chakra-ui/react";
import React from "react";

const Apps = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Stack align={"center"} spacing={0} w={'100%'} alignItems={"center"}>
        <Stack maxW={'1440px'} w={'100%'} spacing={'80px'}>
          <HStack spacing={0} w={'100%'}>
            <Stack bgImage={'/image/NEST_Fi/NEST_Fi_bg_2.jpg'} borderRadius={'12px'} w={'100%'} h={'100%'} align={"center"} justify={"center"}
                   bgRepeat={"no-repeat"} bgSize={"cover"}>
              <img src={'/image/NEST_Fi/iphone_1.png'} alt={''} width={'189px'} />
            </Stack>
            <Center w={'100%'} h={'100%'}>
              <Stack px={'20px'}>
                <Text fontSize={'24px'} fontWeight={'600'} m={0}>NEST Fi Futures</Text>
                <Text fontSize={'15px'} fontWeight={'600'}>
                  Trade BTC/USDT and ETH/USDT futures directly
                  <br/>
                  from your wallet without trading fee.
                </Text>
                <Stack pt={'10px'}>
                  <Button
                    className={'button--primary'}
                    w={'160px'}
                    onClick={() => {
                      window.open('https://finance.nestprotocol.org/#/futures', '_blank')
                    }}
                  >
                    Buy Futures
                  </Button>
                </Stack>
              </Stack>
            </Center>
          </HStack>
          <HStack w={'100%'} spacing={0}>
            <Center w={'100%'} h={'100%'}>
              <Stack px={'20px'}>
                <Text fontSize={'24px'} fontWeight={'600'} m={0}>NEST Fi Options</Text>
                <Text fontSize={'15px'} fontWeight={'600'}>
                  Buy options with flexible choices on exercise date,
                  <br/>
                  direction and strike price, and no commission.
                </Text>
                <Stack pt={'10px'}>
                  <Button
                    className={'button--primary'}
                    w={'160px'}
                    onClick={() => {
                      window.open('https://finance.nestprotocol.org/#/options', '_blank')
                    }}
                  >
                    Buy Options
                  </Button>
                </Stack>
              </Stack>
            </Center>
            <Stack bgImage={'/image/NEST_Fi/NEST_Fi_bg_3.jpg'} borderRadius={'12px'} w={'100%'} h={'100%'} bgRepeat={"no-repeat"}
                   align={"center"} justify={"center"} bgSize={"cover"}>
              <img src={'/image/NEST_Fi/iphone_2.png'} alt={''} width={'189px'} />
            </Stack>
          </HStack>
        </Stack>
      </Stack>
    )
  }

  return (
    <Stack spacing={'35px'}>
      <Stack bgImage={'/image/NEST_Fi/Phone_NEST_Fi_bg_2.jpg'} w={'100%'} h={'425px'} align={"center"} justify={"center"}
             bgRepeat={"no-repeat"} bgSize={"cover"}>
        <img src={'/image/NEST_Fi/iphone_1.png'} alt={''} width={'189px'} />
      </Stack>
      <Stack px={'20px'} textAlign={"center"}>
        <Text fontSize={'16px'} fontWeight={'600'} m={0}>NEST Fi Futures</Text>
        <Text fontSize={'12px'} fontWeight={'600'}>
          Trade BTC/USDT and ETH/USDT futures directly
          from your wallet without trading fee.
        </Text>
        <Stack pt={'10px'} align={"center"} justify={"center"}>
          <Button
            className={'button--primary'}
            w={'160px'}
            onClick={() => {
              window.open('https://finance.nestprotocol.org/#/futures', '_blank')
            }}
          >
            Buy Futures
          </Button>
        </Stack>
      </Stack>
      <Stack bgImage={'/image/NEST_Fi/Phone_NEST_Fi_bg_3.jpg'} w={'100%'} h={'425px'} bgRepeat={"no-repeat"}
             align={"center"} justify={"center"} bgSize={"cover"}>
        <img src={'/image/NEST_Fi/iphone_2.png'} alt={''} width={'189px'} />
      </Stack>
      <Stack px={'20px'} textAlign={"center"}>
        <Text fontSize={'16px'} fontWeight={'600'} m={0}>NEST Fi Options</Text>
        <Text fontSize={'12px'} fontWeight={'600'}>
          Buy options with flexible choices on exercise date,
          <br/>
          direction and strike price, and no commission.
        </Text>
        <Stack pt={'10px'} align={"center"} justify={"center"}>
          <Button
            className={'button--primary'}
            w={'160px'}
            onClick={() => {
              window.open('https://finance.nestprotocol.org/#/options', '_blank')
            }}
          >
            Buy Options
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Apps