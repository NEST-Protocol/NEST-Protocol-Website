import {chakra, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import BigTitle from "../../components/BigTitle";
import * as React from "react";
import Research_bg_5 from '../../assets/image/Research/Research_bg_5.jpg'
import icon2 from '../../assets/image/Research/icon_2.png'
import Research_bg_icon_3 from '../../assets/image/Research/Research_bg_icon_3.png'

const VacantPositions = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Vacant Positions'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'full'}
        justify={'center'}
        spacing={['13px', '16px']}
        bgImage={Research_bg_5}
        bgSize={'cover'}
        bgPosition={"center"}
        px={'24px'}
      >
        <chakra.img
          position={"absolute"}
          src={Research_bg_icon_3}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={icon2} zIndex={1}/>
        <Text
          zIndex={1}
          fontSize={['12px', '15px']}
          fontWeight={'semibold'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
        >
          NRA welcomes applicants to researchers of all levels.
          { isDesktop && ( <br/>) }
          NRA evaluates the work of its researchers in a result-oriented manner with flexibility in terms
          { isDesktop && ( <br/>) }
          of working location and hours. The salary is decided case by case.
          { isDesktop && ( <br/>) }
          Those interested, please send your academic CV to
          { isDesktop && ( <br/>) }
          <Link color={'#00A0E9'} fontWeight={'semibold'} fontSize={'15px'} zIndex={1}
                href={'mailto:nra@nestprotocol.org'} isExternal>
            nra@nestprotocol.org
          </Link>
        </Text>
      </Stack>
    </Stack>
  )
}

export default VacantPositions