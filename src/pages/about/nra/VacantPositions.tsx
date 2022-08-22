import {chakra, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import BigTitle from "../../../components/BigTitle";
import * as React from "react";

const VacantPositions = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'} id={'vacant-positions'}>
      <BigTitle title={'Vacant Positions'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'100%'}
        justify={'center'}
        spacing={isDesktop ? "16px" : "13px"}
        bgImage={isDesktop ? "/image/Research/Research_bg_5.webp" : "/image/Research/Research_bg_5_phone.webp"}
        bgSize={'cover'}
        bgPosition={"center"}
        px={'24px'}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Research/Research_bg_icon_3.webp" : "/image/Research/Research_bg_icon_3_phone.webp"}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={"/image/Research/icon_2.webp"} zIndex={1}/>
        <Text
          zIndex={1}
          fontSize={isDesktop ? "15px" : "12px"}
          fontWeight={'600'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
        >
          NRA accepts applications from researchers of all levels.
          {isDesktop && (<br/>)}
          The work of NRA's researchers is evaluated in a result-oriented manner, with flexibility in terms
          {isDesktop && (<br/>)}
          of working location and hours. Salary is determined on an individual basis.
          {isDesktop && (<br/>)}
          Please send your academic CV to
          {isDesktop && (<br/>)}
          <br/>
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'15px'} zIndex={1}
                href={'mailto:nra@nestprotocol.org'} isExternal>
            nra@nestprotocol.org
          </Link>
        </Text>
      </Stack>
    </Stack>
  )
}

export default VacantPositions