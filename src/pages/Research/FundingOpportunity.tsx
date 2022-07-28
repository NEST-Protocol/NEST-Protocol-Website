import {chakra, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import BigTitle from "../../components/BigTitle";
import * as React from "react";
import Research_bg_4 from '../../assets/image/Research/Research_bg_4.jpg'
import Research_bg_4_phone from '../../assets/image/Research/Research_bg_4.jpg'
import icon1 from '../../assets/image/Research/icon_1.png'
import Research_bg_icon_2 from '../../assets/image/Research/Research_bg_icon_2.png'
import Research_bg_icon_2_phone from '../../assets/image/Research/Research_bg_icon_2_phone.png'

const FundingOpportunity = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Funding Opportunity'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'full'}
        justify={'center'}
        spacing={['13px', '16px']}
        bgImage={isDesktop ? Research_bg_4 : Research_bg_4_phone}
        bgSize={'cover'}
        bgPosition={"center"}
        px={'24px'}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? Research_bg_icon_2 : Research_bg_icon_2_phone}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={icon1} zIndex={1}/>
        <Text
          zIndex={1}
          fontSize={['12px', '15px']}
          fontWeight={'semibold'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
        >
          NRA welcomes research in fields such as blockchain, finance,
          { isDesktop && ( <br/>) }
          economics, game theory, machine learning, computer science, and software engineering.
          { isDesktop && ( <br/>) }
          Those interested, please send your research proposal (maximum 10 pages) to
          { isDesktop && ( <br/>) }
          <br/>
          <Link color={'#00A0E9'} fontWeight={'semibold'} fontSize={'15px'} zIndex={1}
                href={'mailto:nra@nestprotocol.org'} isExternal>
            nra@nestprotocol.org
          </Link>
        </Text>

      </Stack>
    </Stack>
  )
}

export default FundingOpportunity