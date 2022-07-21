import {CloseButton, HStack, Stack, Text} from "@chakra-ui/react";
import {useState} from "react";

const Banner = () => {
  const [show, setShow] = useState(true)
  return (
    <Stack
      w={'full'}
      position={'sticky'}
      top={0}
      bgSize={'cover'}
      align={'center'}
      hidden={!show}
      bg={"white"}
    >
      <HStack
        maxW={'1440px'}
        w={'full'}
        px={['24px', '48px']}
        py={'12px'}
        spacing={'24px'}
        justify={"space-between"}
      >
        <div/>
        <Text
          fontSize={'7px'}
          fontWeight={"medium"}
          maxW={'500px'}
          color={'#003232'}
        >The technical teams of the FORT protocol and NEST protocol will jointly advance the merger, and the merger is expected to be completed on July 29th.</Text>
        <CloseButton
          border={'2px'}
          borderRadius={'full'}
          color={'#003232'}
          size={'sm'}
          onClick={() => setShow(false)}
        />
      </HStack>
    </Stack>
  )
}

export default Banner