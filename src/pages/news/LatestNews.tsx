import {chakra, Text, SimpleGrid, Stack, useMediaQuery, VStack, Link, HStack} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "@site/src/components/BigTitle";

const LatestNews = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'40px'} align={'center'}>
      <BigTitle title={"The Latest from NEST"}/>
      <Stack
        px={['24px', '48px']}
        align={'center'}
        minH={'440px'}
        justify={'center'}
        spacing={'16px'}
      >
        <SimpleGrid columns={[1, 3]} spacing={['24px', '48px']} pb={'24px'}>
          {[
            {
              label: `Coinbase Announces Planned Listing of Tokens, Adds $NEST to ‘Experimental Asset’ Label`,
              bg: "/image/News/News_card_1.webp",
              logo: "/image/Home/News_card_icon.webp",
              desc: `Leading United States-based cryptocurrency exchange`,
              link: '/blog/Coinbase-Announces-Adds-$NEST-to-Experimental-Asset-Label',
              date: "July 25, 2022"
            },
            {
              label: 'NEST Protocol: A New Paradigm of Game Theoretic Oracle',
              bg: "/image/News/News_card_2.webp",
              logo: "/image/Home/News_card_icon_1.webp",
              desc: 'Blockchain innovation defined the major part of the last decade,with cryptocurrency disrupting.',
              link: '/blog/NEST-Protocol-A-New-Paradigm-of-Game-Theoretic-Oracle',
              date: "July 9, 2022"
            },
            {
              label: 'NEST’s RSS FEED INTEGRATED WITH CRYPTO.COM PRICE PAGE',
              bg: "/image/News/News_card_3.webp",
              logo: "/image/Home/News_card_icon_2.webp",
              desc: 'Through Crypto.com’s NEST Price Page, you can now directly access NEST’s RSS news feed.',
              link: '/blog/NEST\'s-RSS-FEED-INTEGRATED-WITH-CRYPTO.COM-PRICE-PAGE',
              date: "May 6, 2022"
            },
            {
              label: 'NEST Protocol partners with UTU.ONE to seek and create more opportunities in DAO governance',
              bg: "/image/News/News_card_1.webp",
              logo: "/image/News/News_card_icon_4.webp",
              desc: 'NEST Protocol is delighted to announce a strategic.',
              link: '/blog/NEST-Protocol-partners-with-UTU.ONE-to-seek-and-create-more-opportunities-in-DAO-governance',
              date: "July 25, 2022"
            },
            {
              label: 'Comments on Vitalik’s Twitter',
              bg: "/image/News/News_card_2.webp",
              logo: "/image/News/News_card_icon_5.webp",
              desc: 'Introduction Vitalik, the founder of Ethereum, delivered something interesting on Twitter at the beginning of 2022.',
              link: '/blog/Comments-on-Vitalik’s-Twitter',
              date: "Jun 9, 2022"
            },
            {
              label: 'James Talks | \nThree major genres in the blockchain jungle',
              bg: "/image/News/News_card_3.webp",
              logo: "/image/News/News_card_icon_6.webp",
              desc: 'The blockchain world is also like the corner of the country with genres of thought.',
              link: '/blog/James-Talks-Three-major-genres-in-the-blockchain-jungle',
              date: "May 6, 2022"
            }
          ].map(item => (
            <VStack
              key={item.label}
              w={['full', '308px']}
              spacing={0}
              border={'1px solid #EEEEEE'}
              boxShadow={'0px 0px 45px 5px #E5E5E5'}
              borderRadius={'12px'}
              overflow={'hidden'}
            >
              <Stack
                bgImage={item.bg}
                bgRepeat={'no-repeat'}
                w={'100%'}
                bgSize={'cover'}
                align={'center'}
                justify={'center'}
                h={'160px'}
              >
                <chakra.img src={item.logo} _hover={{transform: 'scale(1.05)'}} h={'90px'}/>
              </Stack>
              <VStack
                w={'100%'}
                px={['30px']}
                py={'23px'}
                spacing={'8px'}
                alignItems={isDesktop ? 'center' : 'start'}
                justifyContent={'start'}
              >
                <Link
                  isExternal
                  href={item.link}
                  style={{textDecoration: 'none'}}
                  fontSize={[12, 15]}
                  color={'#003232'}
                  fontWeight={'700'}
                  textAlign={'start'}
                  w={'100%'}
                  whiteSpace={'break-spaces'}
                >
                  {item.label}
                </Link>
                <Link
                  isExternal
                  href={item.link}
                  style={{textDecoration: 'none'}}
                  color={'#7d7d7d'}
                  fontSize={[12, 15]}
                  fontWeight={600}
                >
                  {item.desc}
                </Link>
                <HStack w={"full"}>
                  <Text
                    color={'#7d7d7d'}
                    fontSize={[12, 15]}
                    fontWeight={500}
                  >
                    {item.date}
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

export default LatestNews