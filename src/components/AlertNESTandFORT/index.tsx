import {useRef} from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay, chakra, HStack, Stack, Text
} from "@chakra-ui/react";
import NEST_URI from "../../assets/svg/nest.svg";
import FORT_URI from "../../assets/svg/fort.svg";
import * as React from "react";
import {atom, useRecoilState} from "recoil";

const showAlertNESTandFORTAtom = atom({
  key: 'showAlertNESTandFORT',
  default: true,
});

const AlertNESTandFORT = () => {
  const cancelRef = useRef(null)
  const [show, setShow] = useRecoilState(showAlertNESTandFORTAtom);

  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={() => setShow(false)}
      isOpen={show}
      isCentered
      autoFocus={false}
      closeOnOverlayClick={false}
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
            <Text>
              The technical teams of the FORT protocol and NEST
              protocol will jointly advance the merger, and the merger is
              expected to be completed on July 29th.
            </Text>
            <Text>
              Starting from 10:00 (GMT+0) July 7 (some suspensions will
              take place a few hours earlier due to technical reason).
            </Text>
            <Text textAlign={"end"}>FORT DAO July 6th, 2022</Text>
          </Stack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertNESTandFORT