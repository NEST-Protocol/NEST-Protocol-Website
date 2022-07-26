import {Heading, Stack} from "@chakra-ui/react";
import * as React from "react";

const Developers = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <Stack px={['24px', '48px']} w={'full'} align={'center'}>
        <Stack maxW={'1440px'} w={'full'}>
          <Heading fontSize={['24px', '48px']} color={'#003232'}>
            Developers
          </Heading>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Developers