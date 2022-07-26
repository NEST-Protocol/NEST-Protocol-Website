import {chakra, Link, Stack, Text} from "@chakra-ui/react";
import BigTitle from "../../components/BigTitle";
import * as React from "react";

const VacantPositions = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Vacant Positions'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'full'}
        justify={'center'}
        spacing={['13px', '16px']}
        bgImage={""}
        bgSize={'cover'}
        bgPosition={"center"}
      >
        <Stack
          position={'absolute'}
          h={'400px'}
          w={'full'}
          overflow={'hidden'}
          align={'center'}
          bgSize={'contain'}
          bgImage={""}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          zIndex={0}
        />
        <chakra.img src={""} zIndex={1}/>
        <Text
          zIndex={1}
          fontSize={['12px', '15px']}
          fontWeight={'semibold'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
        >
          NRA welcomes applicants to researchers of all levels.
          <br/>
          NRA evaluates the work of its researchers in a result-oriented manner with flexibility in terms
          <br/>
          of working location and hours. The salary is decided case by case.
          <br/>
          Those interested, please send your academic CV to
          <br/>
          <Link color={'#00A0E9'} fontWeight={'semibold'} fontSize={'15px'} zIndex={1}
                href={''} isExternal>
            nra@nestprotocol.org
          </Link>
        </Text>
      </Stack>
    </Stack>
  )
}

export default VacantPositions