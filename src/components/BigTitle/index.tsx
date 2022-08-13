import {Text, Stack, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import {FC} from "react";

interface Props {
  title: string
}

const BigTitle: FC<Props> = ({ title }) => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  return (
    <Stack px={isDesktop ? "48px" : "24px"} w={"100%"} align={'center'}>
      <Stack maxW={'1440px'} w={'100%'}>
        <Text fontSize={isDesktop ? "48px" : "24px"} color={'#003232'} fontWeight={"700"}>
          {title}
        </Text>
      </Stack>
    </Stack>
  )
}

export default BigTitle