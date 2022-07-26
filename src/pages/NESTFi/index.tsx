import {Button, chakra, Stack, Text} from '@chakra-ui/react'
import * as React from 'react'
import {Helmet} from 'react-helmet'
import Banner from "./Banner";

const NESTFi = () => {

  return (
    <>
      <Helmet>
        <title>NEST Financial Market</title>
      </Helmet>
      <Banner/>
      <Stack spacing={'48px'} align={'center'} h={['600px', '720px']} justify={'start'}>
        <Stack
          align={'center'}
          h={['375px', '440px']}
          w={'full'}
          justify={'start'}
          spacing={['13px', '16px']}
          bgImage={""}
          bgSize={'cover'}
          bgPosition={"center"}
        >
          <Stack
            position={'absolute'}
            h={['375px', '440px']}
            w={'full'}
            overflow={'hidden'}
            bgImage={""}
            bgRepeat={'no-repeat'}
            bgPosition={'bottom'}
            zIndex={0}
          />
          <Stack pt={'40px'}>
            <chakra.img zIndex={1} h={['360px', '440px']} src={""}/>
          </Stack>
          <Button
            minW={'160px'}
            minH={['44px', '34px']}
            onClick={() => {
              window.open('https://oracle.nestprotocol.org/', '_blank')
            }}
          >
            Launch App
          </Button>
        </Stack>
      </Stack>
    </>
  )
}

export default NESTFi
