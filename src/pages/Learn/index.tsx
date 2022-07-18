import {
  Box,
  chakra,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'
import * as React from 'react'
import Banner_URI from '../../assets/webp/NEST_pic_1.webp'
// import UseCase_URI from "../../assets/webp/NEST_pic_2.webp";
import Blogs_pic_1 from '../../assets/webp/Blogs_pic_1.webp'
import Blogs_pic_2 from '../../assets/webp/Blogs_pic_2.webp'
import Blogs_pic_3 from '../../assets/webp/Blogs_pic_3.webp'
import Blogs_pic_4 from '../../assets/webp/Blogs_pic_4.webp'
import Blogs_pic_5 from '../../assets/webp/Blogs_pic_5.webp'
import Blogs_pic_6 from '../../assets/webp/Blogs_pic_6.webp'
import { Helmet } from 'react-helmet'

const Learn = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  // const pages = [
  //   {
  //     name: 'Use cases',
  //     path: '',
  //     icon: '',
  //     bg: UseCase_URI,
  //     title: 'NEST Financial Market',
  //     desc: 'Get NEST token here and buy futures\noptions\nor do defi games to win NEST.'
  //   },
  // ]

  const pages: any[] = []

  return (
    <>
      <Helmet>
        <title>What is NEST</title>
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
          What is NEST
        </Text>
        <Text fontSize={['12px', '24px']} fontWeight={'bold'} textAlign={'center'} maxW={'720px'}>
          A complete gaming space with applications of DeFi, GameFi NFT built on the NEST. Swap, hedge, earn and even game with the NEST network to gain excess returns.
        </Text>
      </Stack>
      {pages.map(({ name, path, icon, bg, title, desc }) => (
        <Stack key={name} spacing={'48px'} align={'center'}>
          <Stack px={['24px', '48px']} w={'full'} align={'center'}>
            <Stack maxW={'1440px'} w={'full'}>
              <Heading fontSize={['24px', '48px']} color={'#003232'}>
                {name}
              </Heading>
            </Stack>
          </Stack>
          <Stack
            align={'center'}
            minH={'440px'}
            justify={'center'}
            w={'full'}
            spacing={['13px', '16px']}
            bgImage={bg}
            bgSize={'100% 100%'}
          >
            <chakra.img src={icon} />
            <chakra.a
              fontSize={['17px', '24px']}
              fontWeight={'semibold'}
              color={'#434344'}
              href={'/#/' + path}
            >
              {title}
            </chakra.a>
            <chakra.a
              fontSize={['12px', '15px']}
              fontWeight={'semibold'}
              color={'#7d7d7d'}
              whiteSpace={'break-spaces'}
              textAlign={'center'}
              href={'/#/' + path}
            >
              {desc}
            </chakra.a>
          </Stack>
        </Stack>
      ))}
      <Stack spacing={'48px'} align={'center'}>
        <Stack px={['24px', '48px']} w={'full'} align={'center'}>
          <Stack maxW={'1440px'} w={'full'}>
            <Heading fontSize={['24px', '48px']} color={'#003232'}>
              Blogs
            </Heading>
          </Stack>
        </Stack>
        <Stack px={['24px', '48px']} align={'center'} minH={'440px'} justify={'center'} spacing={'16px'}>
          <SimpleGrid columns={[1, 1, 2, 3]} spacing={['22px', '22px', '44px']} pb={'27px'}>
            {[
              {
                label: 'Top Infrastructural Award',
                bg: Blogs_pic_1,
                desc: 'Based on the feedback of KCC community, and the voting results at the Unicorn Contest, NEST has been awarded “Top Infrastructural Award”!',
                link: 'https://twitter.com/nest_protocol/status/1531909822408699904?s=21'
              },
              {
                label: 'NEST v4.4 Upgrade Proposal',
                bg: Blogs_pic_2,
                desc: 'Voting for the NEST v4.4 upgrade is now open on snapshot, please participate and cast your vote!',
                link: 'https://snapshot.org/#/nestprotocols.eth/proposal/0xc44f29b7a8695fc3379fa34d6e78bf933d9d4493121d2d66160a25b8175816a9'
              },
              {
                label: 'NEST Oracle Special Awards in KCC',
                bg: Blogs_pic_3,
                desc: 'NEST Foundation will pro vide awards, advisory sessions, and integration support to Kucoin Community Chain (KCC) developers',
                link: 'https://www.newsbtc.com/press-releases/nest-oracle-special-awards-in-kcc-unicorn-contest/'
              },
              {
                label: 'Strategic Partnership with MAP Protocol',
                bg: Blogs_pic_4,
                desc: 'NEST has become the first oracle in MAP ecosystem and provides reliable price for the transactions',
                link: 'https://www.goldentreenews.com/news/article.html?no=278663'
              },
              {
                label: 'What is NEST, a decentralized price oracle network',
                bg: Blogs_pic_5,
                desc: 'NEST is one of the projects that is developing the technology to provide this Oracle service in a decentralized way',
                link: 'https://coinpost.jp/?p=226764'
              },
              {
                label: 'NEST Protocol project overview and NEST coin',
                bg: Blogs_pic_6,
                desc: 'The project uses a unique “quote mining” mechanism to ensure that off-chain price data is generated on-chain in a synchronous manner',
                link: 'https://coin68.com/nest-protocol-la-gi/'
              }
            ].map(item => (
              <VStack
                key={item.label}
                w={isDesktop ? '308px' : 'full'}
                spacing={0}
                border={'1px solid #EEEEEE'}
                boxShadow={'0px 0px 45px 5px #E5E5E5'}
                borderRadius={'12px'}
                overflow={'hidden'}
                cursor={'pointer'}
                onClick={() => {
                  window.open(item.link)
                }}
              >
                <Box overflow={'hidden'} w={"full"}>
                  <chakra.img
                    src={item.bg}
                    alt={item.label}
                    style={{ objectFit: 'cover' }}
                    _hover={{ transform: 'scale(1.05)' }}
                    w={"full"}
                  />
                </Box>
                <VStack
                  w={'full'}
                  px={['22px', '22px', '44px']}
                  py={'22px'}
                  spacing={'8px'}
                  alignItems={isDesktop ? 'center' : 'start'}
                  justifyContent={'start'}
                >
                  <Link
                    isExternal
                    href={item.link}
                    style={{ textDecoration: 'none' }}
                    fontSize={['12px', '15px']}
                    color={'#003232'}
                    fontWeight={'bold'}
                    textAlign={'start'}
                    w={'full'}
                  >
                    {item.label}
                  </Link>
                  <Link
                    isExternal
                    href={item.link}
                    style={{ textDecoration: 'none' }}
                    fontSize={['12px', '12px', '15px']}
                    fontWeight={'semibold'}
                    color={'#7d7d7d'}
                  >
                    {item.desc}
                  </Link>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </>
  )
}

export default Learn
