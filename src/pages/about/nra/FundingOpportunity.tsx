import {chakra, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import BigTitle from "../../../components/BigTitle";
import * as React from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';

const FundingOpportunity = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'} id={"funding-opportunity"}>
      <BigTitle title={'Funding Opportunity'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'100%'}
        justify={'center'}
        spacing={isDesktop ? "16px" : "13px"}
        bgImage={isDesktop ? "/image/Research/Research_bg_4.jpg" : "/image/Research/Research_bg_4.jpg"}
        bgSize={'cover'}
        bgPosition={"center"}
        px={'24px'}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Research/Research_bg_icon_2.png" : "/image/Research/Research_bg_icon_2_phone.png"}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={"/image/Research/icon_1.png"} zIndex={1}/>
        <Text
          zIndex={1}
          fontSize={isDesktop ? "15px" : "12px"}
          fontWeight={'600'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
        >
          NRA encourages research in areas such as blockchain, finance,
          {isDesktop && (<br/>)}
          economics, game theory, machine learning, computer science, and software engineering.
          {isDesktop && (<br/>)}
          Those interested should send a research proposal (maximum of 10 pages) to
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

export default FundingOpportunity