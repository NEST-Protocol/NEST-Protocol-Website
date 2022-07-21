import {useEffect, useRef} from "react";
import {useSearchParams} from "react-router-dom";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent, AlertDialogHeader,
  AlertDialogOverlay, chakra, HStack, Stack, Text, useDisclosure, useMediaQuery
} from "@chakra-ui/react";
import NEST_URI from "../../assets/svg/nest_blue.svg";
import FORT_URI from "../../assets/svg/fort.svg";
import * as React from "react";
import {SmallCloseIcon} from "@chakra-ui/icons";
import Banner_URI from "../../assets/webp/Ecosystem_pic_1.webp";

const AlertFromFORT = () => {
  let [searchParams] = useSearchParams();
  const from = searchParams.get('from') || undefined;
  const {isOpen, onOpen, onClose} = useDisclosure()
  const cancelRef = useRef(null)
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (from === 'fort') {
      onOpen()
    }
  }, [from])

  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      autoFocus={false}
      size={isDesktop ? 'lg' : 'xs'}
    >
      <AlertDialogOverlay/>
      <AlertDialogContent borderRadius={'20px'} bgImage={Banner_URI} bgPosition={"center"} bgSize={"cover"}>
        <AlertDialogCloseButton
          top={0}
          right={['-30px', '-48px']}
          color={'white'}
          borderRadius={'full'}
          border={'2px'}
          size={'sm'}
        />
        <AlertDialogHeader pt={['24px', '40px']} pb={0} fontSize='lg' fontWeight='bold'>
          <HStack justify={"center"}>
            <chakra.img src={NEST_URI} h={'20px'}/>
            <SmallCloseIcon />
            <chakra.img src={FORT_URI} h={'34px'}/>
          </HStack>
        </AlertDialogHeader>
        <AlertDialogBody p={['24px', '40px']}>
          <Stack fontSize={'14px'} color={'#003434'} fontWeight={'600'} spacing={'44px'} minH={'240px'} justify={"center"}>
            <Stack spacing={'24px'}>
              <Text>
                The technical teams of the FORT protocol and NEST
                protocol worked together to advance the merger, and the merger is
                completed ahead of schedule on July 22nd.
              </Text>
              <Text>
                Starting from 10:00 (GMT+0) July 7 (some suspensions will
                take place a few hours earlier due to technical reason).
              </Text>
              <Text>
                1. the users will be suspended from buying DCU, although
                the holder can still sell it;
              </Text>
              <Text>
                2. the investors cannot open any positions for the future and
                option contracts, but all the contracts already purchased can
                still be settled;
              </Text>
              <Text>
                3. Probability coin is suspended from buying and selling but
                the holder can still spend it to win DCU.
              </Text>
              <br/>
              <Text textAlign={"end"}>FORT DAO July 6th, 2022</Text>
            </Stack>
          </Stack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertFromFORT