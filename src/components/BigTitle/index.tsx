import {Heading, Stack} from "@chakra-ui/react";
import * as React from "react";
import {FC} from "react";

interface Props {
  title: string
}

const BigTitle: FC<Props> = ({ title }) => {
  return (
    <Stack px={['24px', '48px']} w={'full'} align={'center'}>
      <Stack maxW={'1440px'} w={'full'}>
        <Heading fontSize={['24px', '48px']} color={'#003232'}>
          {title}
        </Heading>
      </Stack>
    </Stack>
  )
}

export default BigTitle