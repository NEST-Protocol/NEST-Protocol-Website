import {useEffect, useRef} from "react";
import {useSearchParams} from "react-router-dom";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay, chakra, HStack, Stack, Text, useDisclosure
} from "@chakra-ui/react";
import NEST_URI from "../../assets/svg/nest.svg";
import FORT_URI from "../../assets/svg/fort.svg";
import * as React from "react";

const AlertFromFORT = () => {
  let [searchParams] = useSearchParams();
  const from = searchParams.get('from') || undefined;
  const {isOpen, onOpen, onClose} = useDisclosure()
  const cancelRef = useRef(null)

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
    >
      <AlertDialogOverlay/>
      <AlertDialogContent p={'24px'}>
        <AlertDialogCloseButton/>
        <AlertDialogBody>
          <Stack fontSize={'md'} color={'#003434'} fontWeight={'500'} spacing={'24px'}>
            <HStack justify={"center"}>
              <chakra.img src={NEST_URI}/>
              <Text>✖️</Text>
              <chakra.img src={FORT_URI}/>
            </HStack>
            <Text textAlign={"justify"}>
              The technical teams of the FORT protocol and NEST
              protocol will jointly advance the merger, and the merger is
              expected to be completed on July 29th.
            </Text>
            <Text textAlign={"justify"}>
              Starting from 10:00 (GMT+0) July 7 (some suspensions will
              take place a few hours earlier due to technical reason).
            </Text>
            <Text textAlign={"justify"}>
              1. the users will be suspended from buying DCU, although
              the holder can still sell it;
              <br/>
              2. the investors cannot open any positions for the future and
              option contracts, but all the contracts already purchased can
              still be settled;
              <br/>
              3. Probability coin is suspended from buying and selling but
              the holder can still spend it to win DCU.
            </Text>
            <Text textAlign={"end"}>FORT DAO July 6th, 2022</Text>
          </Stack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertFromFORT