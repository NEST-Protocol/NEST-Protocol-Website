import {useEffect, useRef} from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent, AlertDialogHeader,
  AlertDialogOverlay, chakra, HStack, Stack, Text, useMediaQuery
} from "@chakra-ui/react";
import NEST_URI from "../../assets/svg/nest_blue.svg";
import FORT_URI from "../../assets/svg/fort.svg";
import * as React from "react";
import {atom, useRecoilState} from "recoil";
import {SmallCloseIcon} from "@chakra-ui/icons";
import Banner_URI from '../../assets/webp/Ecosystem_pic_1.webp'
import {useSearchParams} from "react-router-dom";

const showAlertNESTandFORTAtom = atom({
  key: 'showAlertNESTandFORT',
  default: true,
});

const AlertNESTandFORT = () => {
  let [searchParams] = useSearchParams();
  const from = searchParams.get('from') || undefined;
  const cancelRef = useRef(null)
  const [show, setShow] = useRecoilState(showAlertNESTandFORTAtom);
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (from === 'fort') {
      setShow(false)
    }
  }, [show]);

  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={() => setShow(false)}
      isOpen={show}
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
          <Stack fontSize={'14px'} color={'#003434'} fontWeight={'600'} spacing={'44px'} minH={['300px', '240px']} justify={"center"}>
            <Stack spacing={'24px'}>
              <Text>
                The technical teams of the FORT protocol and NEST
                protocol will jointly advance the merger, and the merger is
                expected to be completed on July 29th.
              </Text>
              <Text>
                Starting from 10:00 (GMT+0) July 7 (some suspensions will
                take place a few hours earlier due to technical reason).
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

export default AlertNESTandFORT