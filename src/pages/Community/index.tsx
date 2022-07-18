import {
  Box,
  HStack,
  Link,
  SimpleGrid,
  VStack,
  chakra,
  useMediaQuery,
  Text,
  Stack
} from '@chakra-ui/react'
import Right1 from '../../assets/svg/right_icon.svg'
import * as React from 'react'
import Banner_URI from '../../assets/webp/Community_pic_1.webp'
import Twitter_pic from '../../assets/webp/Twitter_pic.webp'
import Discord_pic from '../../assets/webp/Discord_pic.webp'
import Telegram_pic from '../../assets/webp/Telegram_pic.webp'
import { Helmet } from 'react-helmet'

const Community = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  const menu = [
    {
      label: 'Twitter',
      bg: Twitter_pic,
      link: 'https://twitter.com/nest_protocol/'
    },
    {
      label: 'Telegram',
      bg: Telegram_pic,
      link: 'https://t.me/nest_chat/'
    },
    {
      label: 'Medium',
      bg: Discord_pic,
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
        <Text
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={['24px', '48px']}
          fontWeight={'bold'}
        >
          NEST Community
        </Text>
        <Text fontSize={['12px', '24px']} fontWeight={'bold'} textAlign={'center'} maxW={'720px'}>
          The NEST community is made up of developers, creators, enthusiasts, explore, contribute to the community and get reward.
        </Text>
      </Stack>
      <Stack align={'center'} px={['24px', '48px']}>
        <SimpleGrid columns={2} spacing={['22px', '22px', '44px']}>
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
              <Box overflow={'hidden'}>
                <chakra.img src={item.bg} alt={item.label} _hover={{ transform: 'scale(1.05)' }} />
              </Box>
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
                      src={Right1}
                      alt={'right'}
                      _hover={{ transform: 'translateX(8px)' }}
                    />
                  ) : (
                    <chakra.img src={Right1} alt={'right'} height={'24px'} width={'24px'} />
                  )}
                </Link>
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  )
}

export default Community
