import {
  HStack,
  Link,
  VStack,
  chakra,
  useMediaQuery,
  Text,
  Stack, IconButton, Wrap
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

import {Helmet} from 'react-helmet'

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
    },
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
        bgSize={'cover'}
        bgPosition={"center"}
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

      { isDesktop ? (
        <Stack align={'center'}>
          <Wrap
            px={['24px', '48px']}
            align={'center'}
            justify={'center'}
            spacing={['24px', '48px']}
          >
            {menu.map(item => (
              <VStack
                key={item.label}
                borderRadius={'12px'}
                spacing={0}
                w={['40%', '308px']}
                border={'1px solid #EEEEEE'}
                boxShadow={'0px 0px 45px 5px #E5E5E5'}
                overflow={'hidden'}
              >
                <Stack
                  bgImage={item.bg}
                  bgRepeat={'no-repeat'}
                  bgSize={'cover'}
                  align={'center'}
                  justify={'center'}
                  h={'200px'}
                  w={"full"}
                >
                  <chakra.img src={item.icon} _hover={{transform: 'scale(1.05)'}}/>
                </Stack>
                <HStack
                  px={'44px'}
                  py={'33px'}
                  justifyContent={'space-between'}
                  w={'full'}
                  alignItems={'center'}
                >
                  <Text fontSize={'17px'} fontWeight={'semibold'} color={'#003232'}>
                    {item.label}
                  </Text>
                  <Link isExternal href={item.link}>
                    <IconButton
                      aria-label={''}
                      _hover={{transform: 'translateX(8px)'}}
                      icon={<chakra.img src={Right} alt={'right'} w={'44px'}/>} size={'24px'}/>
                  </Link>
                </HStack>
              </VStack>
            ))}
          </Wrap>
        </Stack>
      ) : (
        <Stack px={'24px'} spacing={'24px'}>
          <HStack spacing={'24px'}>
            {menu.slice(0, 2).map(item => (
              <VStack
                key={item.label}
                borderRadius={'12px'}
                spacing={0}
                w={'full'}
                border={'1px solid #EEEEEE'}
                boxShadow={'0px 0px 45px 5px #E5E5E5'}
                overflow={'hidden'}
              >
                <Stack
                  bgImage={item.bg}
                  bgRepeat={'no-repeat'}
                  bgSize={'cover'}
                  align={'center'}
                  justify={'center'}
                  h={'100px'}
                  w={'full'}
                >
                  <chakra.img
                    src={item.icon}
                    _hover={{transform: 'scale(1.05)'}}
                    h={'65px'}
                  />
                </Stack>
                <HStack
                  px={'11px'}
                  py={'11px'}
                  justifyContent={'space-between'}
                  w={'full'}
                  alignItems={'center'}
                >
                  <Text fontSize={'12px'} fontWeight={'semibold'} color={'#003232'}>
                    {item.label}
                  </Text>
                  <Link isExternal href={item.link}>
                    <chakra.img src={Right} alt={'right'} minW={'22px'} minH={'22px'}/>
                  </Link>
                </HStack>
              </VStack>
            ))}
          </HStack>
          <HStack justifyContent={"center"}>
            {menu.slice(2, 3).map(item => (
              <VStack
                key={item.label}
                borderRadius={'12px'}
                spacing={0}
                w={'47%'}
                border={'1px solid #EEEEEE'}
                boxShadow={'0px 0px 45px 5px #E5E5E5'}
                overflow={'hidden'}
              >
                <Stack
                  bgImage={item.bg}
                  bgRepeat={'no-repeat'}
                  bgSize={'cover'}
                  align={'center'}
                  justify={'center'}
                  h={['100px', '120px']}
                  w={'full'}
                >
                  <chakra.img
                    src={item.icon}
                    _hover={{transform: 'scale(1.05)'}}
                    h={'65px'}
                  />
                </Stack>
                <HStack
                  px={'11px'}
                  py={'11px'}
                  justifyContent={'space-between'}
                  w={'full'}
                  alignItems={'center'}
                >
                  <Text fontSize={'12px'} fontWeight={'semibold'} color={'#003232'}>
                    {item.label}
                  </Text>
                  <Link isExternal href={item.link}>
                    <chakra.img src={Right} alt={'right'} minH={'22px'} minW={'22px'}/>
                  </Link>
                </HStack>
              </VStack>
            ))}
          </HStack>
        </Stack>
      ) }
    </>
  )
}

export default Community
