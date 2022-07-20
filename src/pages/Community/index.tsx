import {
  HStack,
  Link,
  SimpleGrid,
  VStack,
  chakra,
  useMediaQuery,
  Text,
  Stack
} from '@chakra-ui/react'
import Right from '../../assets/svg/right_icon.svg'
import * as React from 'react'
import Banner_URI from '../../assets/webp/Community_pic_1.webp'
import Twitter_pic from '../../assets/webp/Twitter_pic.webp'
import Discord_pic from '../../assets/webp/Discord_pic.webp'
import Telegram_pic from '../../assets/webp/Telegram_pic.webp'
import Twitter_icon from '../../assets/webp/Twitter_icon.webp'
import Discord_icon from '../../assets/webp/Discord_icon.webp'
import Telegram_icon from '../../assets/webp/Telegram_icon.webp'
import Community_icon from '../../assets/webp/Community_icon_1.webp'

import { Helmet } from 'react-helmet'

const Community = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  const menu = [
    {
      label: 'Twitter',
      bg: Twitter_pic,
      icon: Twitter_icon,
      link: 'https://twitter.com/nest_protocol/'
    },
    {
      label: 'Telegram',
      bg: Telegram_pic,
      icon: Telegram_icon,
      link: 'https://t.me/nest_chat/'
    },
    {
      label: 'Medium',
      bg: Discord_pic,
      icon: Discord_icon,
      link: 'https://nest-protocol-82041.medium.com/'
    }
  ]

  return (
    <>
      <Helmet>
        <title>NEST Community</title>
      </Helmet>
      <Stack
        align={'center'}
        h={'full'}
        justify={'center'}
        minH={['540px', '660px']}
        bgImage={Banner_URI}
        bgSize={'100% 100%'}
        spacing={['22px', '44px']}
        px={'24px'}
      >
        <Stack
          position={'absolute'}
          h={'600px'}
          w={'full'}
          bgSize={'contain'}
          bgImage={Community_icon}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          zIndex={0}
        />
        <Text
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={['24px', '48px']}
          fontWeight={'bold'}
          zIndex={1}
          color={'#003434'}
        >
          NEST Community
        </Text>
        <Text
          fontSize={['12px', '24px']}
          fontWeight={'bold'}
          textAlign={'center'}
          maxW={'720px'}
          zIndex={1}
          color={'#003434'}
        >
          The NEST community is made up of developers, creators, enthusiasts, explore, contribute to the
          <br/>
          community and get reward.
        </Text>
      </Stack>
      <Stack align={'center'}>
        <Stack
          px={['24px', '48px']}
          align={'center'}
          minH={'440px'}
          justify={'center'}
          spacing={'16px'}
        >
          <SimpleGrid columns={2} spacing={['22px', '22px', '44px']} w={'full'}>
            {menu.map(item => (
              <VStack
                key={item.label}
                borderRadius={'12px'}
                spacing={0}
                w={['full', 'full', '308px']}
                border={'1px solid #EEEEEE'}
                boxShadow={'0px 0px 45px 5px #E5E5E5'}
                overflow={'hidden'}
              >
                <Stack
                  bgImage={item.bg}
                  bgRepeat={'no-repeat'}
                  w={'full'}
                  bgSize={'cover'}
                  align={'center'}
                  justify={'center'}
                  h={['120px', '200px']}
                >
                  <chakra.img src={item.icon} _hover={{ transform: 'scale(1.05)' }} />
                </Stack>
                <HStack
                  px={['22px', '22px', '44px']}
                  py={['11px', '11px', '33px']}
                  justifyContent={'space-between'}
                  w={'full'}
                  alignItems={'center'}
                >
                  <Text fontSize={['12px', '12px', '17px']} fontWeight={'semibold'} color={'#003232'}>
                    {item.label}
                  </Text>
                  <Link isExternal href={item.link}>
                    {isDesktop ? (
                      <chakra.img
                        src={Right}
                        alt={'right'}
                        w={'44px'}
                        _hover={{ transform: 'translateX(8px)' }}
                      />
                    ) : (
                      <chakra.img src={Right} alt={'right'} height={'24px'} width={'24px'} />
                    )}
                  </Link>
                </HStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </>
  )
}

export default Community
