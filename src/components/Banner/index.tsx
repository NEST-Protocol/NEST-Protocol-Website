import {CloseButton, Collapse, HStack, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import {useEffect, useState} from "react";

const Banner = () => {
  const [show, setShow] = useState(false);
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    const isHidden = window.localStorage.getItem('nest:hidden:banner')
    if (isHidden) {
      setShow(false)
    } else {
      setTimeout(() => {
        setShow(true)
      }, 3000)
    }
  }, [])

  return (
    <Collapse in={show} animateOpacity>
      <Stack
        w={'100vw'}
        bgSize={'cover'}
        align={'center'}
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
          {isDesktop && <div/>}
          <Text
            fontSize={'7px'}
            fontWeight={"medium"}
            maxW={'500px'}
            color={'#003232'}
          >The technical teams of the FORT protocol and NEST protocol will jointly advance the merger, and the merger is
            expected to be completed on July 29th.</Text>
          <CloseButton
            border={'2px'}
            borderRadius={'full'}
            color={'#003232'}
            size={'sm'}
            onClick={() => {
              setShow(false)
              window.localStorage.setItem('nest:hidden:banner', 'true')
            }}
          />
        </HStack>
      </Stack>
    </Collapse>
  )
}

export default Banner