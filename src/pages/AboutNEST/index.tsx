import {
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
import Blogs_pic_1 from '../../assets/webp/Blogs_pic_1.webp'
import Blogs_pic_2 from '../../assets/webp/Blogs_pic_2.webp'
import Blogs_pic_3 from '../../assets/webp/Blogs_pic_3.webp'
import Blogs_pic_4 from '../../assets/webp/Blogs_pic_4.webp'
import Blogs_pic_5 from '../../assets/webp/Blogs_pic_5.webp'
import Blogs_pic_6 from '../../assets/webp/Blogs_pic_6.webp'
import { Helmet } from 'react-helmet'
import NEST_icon1 from '../../assets/webp/NEST_icon_1.webp'
import blogs_icon_1 from '../../assets/webp/Blogs_icon_1.webp'
import blogs_icon_2 from '../../assets/webp/Blogs_icon_2.webp'
import blogs_icon_3 from '../../assets/webp/Blogs_icon_3.webp'
import blogs_icon_4 from '../../assets/webp/Blogs_icon_4.webp'
import blogs_icon_5 from '../../assets/webp/Blogs_icon_5.webp'
import blogs_icon_6 from '../../assets/webp/Blogs_icon_6.webp'

const AboutNEST = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Helmet>
        <title>What is NEST</title>
      </Helmet>
      <Stack
        align={'center'}
        h={'full'}
        justify={'center'}
        minH={'660px'}
        bgImage={Banner_URI}
        bgSize={'cover'}
        bgPosition={"center"}
        spacing={['22px', '44px']}
        px={'24px'}
      >
        <Stack
          position={'absolute'}
          w={'full'}
          overflow={"hidden"}
          h={['500px', '660px']}
        >
          <Stack
            h={"full"}
            bgSize={['cover', 'contain']}
            bgImage={NEST_icon1}
            bgRepeat={'no-repeat'}
            bgPosition={'center'}
            zIndex={0}
          />
        </Stack>
        <Text
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={['24px', '48px']}
          fontWeight={'bold'}
          zIndex={1}
          color={'#003434'}
        >
          What is NEST
        </Text>
        <Text
          fontSize={['12px', '24px']}
          fontWeight={'bold'}
          textAlign={'center'}
          maxW={'740px'}
          zIndex={1}
          color={'#003434'}
        >
          A complete gaming space with applications of DeFi, GameFi, NFT built on the NEST. Swap,
          hedge, earn and even game with the NEST network to gain excess returns.
        </Text>
      </Stack>
      {/*<Stack spacing={'48px'} align={'center'}>*/}
      {/*  <Stack px={['24px', '48px']} w={'full'} align={'center'}>*/}
      {/*    <Stack maxW={'1440px'} w={'full'}>*/}
      {/*      <Heading fontSize={['24px', '48px']} color={'#003232'}>*/}
      {/*        Integrations & Partners*/}
      {/*      </Heading>*/}
      {/*    </Stack>*/}
      {/*  </Stack>*/}
      {/*  <Stack*/}
      {/*    px={['24px', '48px']}*/}
      {/*    align={'center'}*/}
      {/*    justify={'center'}*/}
      {/*    spacing={'16px'}*/}
      {/*  >*/}
      {/*    <SimpleGrid columns={[2, 2, 4, 4]} spacing={['20px', '40px']} pb={'27px'}>*/}
      {/*      {[*/}
      {/*        {*/}
      {/*          label: 'Top Infrastructural Award',*/}
      {/*          logo: blogs_logo_1,*/}
      {/*          link: 'https://twitter.com/nest_protocol/status/1531909822408699904?s=21'*/}
      {/*        },*/}
      {/*        {*/}
      {/*          label: 'Top Infrastructural Award',*/}
      {/*          logo: blogs_logo_1,*/}
      {/*          link: 'https://twitter.com/nest_protocol/status/1531909822408699904?s=21'*/}
      {/*        },*/}
      {/*        {*/}
      {/*          label: 'Top Infrastructural Award',*/}
      {/*          logo: blogs_logo_1,*/}
      {/*          link: 'https://twitter.com/nest_protocol/status/1531909822408699904?s=21'*/}
      {/*        },*/}
      {/*        {*/}
      {/*          label: 'Top Infrastructural Award',*/}
      {/*          logo: blogs_logo_1,*/}
      {/*          link: 'https://twitter.com/nest_protocol/status/1531909822408699904?s=21'*/}
      {/*        },*/}
      {/*        {*/}
      {/*          label: 'Top Infrastructural Award',*/}
      {/*          logo: blogs_logo_1,*/}
      {/*          link: 'https://twitter.com/nest_protocol/status/1531909822408699904?s=21'*/}
      {/*        },*/}
      {/*        {*/}
      {/*          label: 'Top Infrastructural Award',*/}
      {/*          logo: blogs_logo_1,*/}
      {/*          link: 'https://twitter.com/nest_protocol/status/1531909822408699904?s=21'*/}
      {/*        },*/}
      {/*        {*/}
      {/*          label: 'Top Infrastructural Award',*/}
      {/*          logo: blogs_logo_1,*/}
      {/*          link: 'https://twitter.com/nest_protocol/status/1531909822408699904?s=21'*/}
      {/*        },*/}
      {/*        {*/}
      {/*          label: 'Top Infrastructural Award',*/}
      {/*          logo: blogs_logo_1,*/}
      {/*          link: 'https://twitter.com/nest_protocol/status/1531909822408699904?s=21'*/}
      {/*        },*/}
      {/*      ].map(item => (*/}
      {/*        <chakra.img src={item.logo} alt={item.label} />*/}
      {/*      ))}*/}
      {/*    </SimpleGrid>*/}
      {/*  </Stack>*/}
      {/*</Stack>*/}
      <Stack spacing={'48px'} align={'center'}>
        <Stack px={['24px', '48px']} w={'full'} align={'center'}>
          <Stack maxW={'1440px'} w={'full'}>
            <Heading fontSize={['24px', '48px']} color={'#003232'}>
              Blogs
            </Heading>
          </Stack>
        </Stack>
        <Stack
          px={['24px', '48px']}
          align={'center'}
          minH={'440px'}
          justify={'center'}
          spacing={'16px'}
        >
          <SimpleGrid columns={[1, 1, 2, 3]} spacing={['22px', '22px', '44px']} pb={'27px'}>
            {[
              {
                label: 'NEST Protocol: A New Paradigm of Game Theoretic Oracle',
                bg: Blogs_pic_1,
                logo: blogs_icon_1,
                desc: 'Blockchain innovation defined the major part of the last decade,with cryptocurrency disrupting.',
                link: 'https://nest-protocol-82041.medium.com/nest-protocol-a-new-paradigm-of-game-theoretic-oracle-187c1f853128'
              },
              {
                label: 'NEST’s RSS FEED INTEGRATED WITH CRYPTO.COM PRICE PAGE',
                bg: Blogs_pic_2,
                logo: blogs_icon_2,
                desc: 'Through Crypto.com’s NEST Price Page, you can now directly access NEST’s RSS news feed.',
                link: 'https://nest-protocol-82041.medium.com/nests-rss-feed-integrated-with-crypto-com-price-page-9323828d28d9'
              },
              {
                label: 'NEST Protocol partners with UTU.ONE to seek and create more opportunities in DAO governance',
                bg: Blogs_pic_3,
                logo: blogs_icon_3,
                desc: 'NEST Protocol is delighted to announce a strategic.',
                link: 'https://nest-protocol-82041.medium.com/nest-protocol-partners-with-utu-one-to-seek-and-create-more-opportunities-in-dao-governance-1ab02d072d7d'
              },
              {
                label: 'Comments on Vitalik’s Twitter',
                bg: Blogs_pic_4,
                logo: blogs_icon_4,
                desc: 'Introduction Vitalik, the founder of Ethereum, delivered something interesting on Twitter at the beginning of 2022.',
                link: 'https://nest-protocol-82041.medium.com/comments-on-vitaliks-twitter-227c9198b85c'
              },
              {
                label: 'James Talks | \nThree major genres in the blockchain jungle',
                bg: Blogs_pic_5,
                logo: blogs_icon_5,
                desc: 'The blockchain world is also like the corner of the country with genres of thought.',
                link: 'https://nest-protocol-82041.medium.com/james-talks-three-major-genres-in-the-blockchain-jungle-dcf075824204'
              },
              {
                label: 'NEST Protocol is Open as a Self-looping Oracle System',
                bg: Blogs_pic_6,
                logo: blogs_icon_6,
                desc: 'It is reasonable to use NEST Token or nToken as an incentive for quoting mainstream assets because',
                link: 'https://nest-protocol-82041.medium.com/nest-protocol-is-open-as-a-self-looping-oracle-system-16ed1fd1536'
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
                <Stack
                  bgImage={item.bg}
                  bgRepeat={'no-repeat'}
                  w={'full'}
                  bgSize={'cover'}
                  align={'center'}
                  justify={'center'}
                  h={['120px', '160px']}
                >
                  <chakra.img src={item.logo} _hover={{ transform: 'scale(1.05)' }} />
                </Stack>
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
                    whiteSpace={'break-spaces'}
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

export default AboutNEST
