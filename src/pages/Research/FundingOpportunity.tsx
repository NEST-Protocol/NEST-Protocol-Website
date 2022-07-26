import {chakra, Link, Stack, Text} from "@chakra-ui/react";
import BigTitle from "../../components/BigTitle";
import * as React from "react";

const FundingOpportunity = () => {
  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Funding Opportunity'}/>
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
          NRA welcomes research in fields such as blockchain, finance,
          <br/>
          economics, game theory, machine learning, computer science, and software engineering.
          <br/>
          Those interested, please send your research proposal (maximum 10 pages) to
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

export default FundingOpportunity