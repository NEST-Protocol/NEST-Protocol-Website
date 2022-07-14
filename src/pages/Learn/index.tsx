import {Box, chakra, Heading, Link, SimpleGrid, Stack, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import * as React from "react";
import new1 from '../../assets/img/news 1.png'
import new2 from '../../assets/img/news 2.png'
import new3 from '../../assets/img/news 3.png'
import new4 from '../../assets/img/news 4.png'
import new5 from '../../assets/img/news5.png'
import nest4_4 from '../../assets/svg/news_v4.4.png'

const Learn = () => {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

  const pages = [
    {
      name: 'Use cases',
      path: '',
      icon: '',
      bg: '',
      title: 'NEST Financial Market',
      desc: 'Get NEST token here and buy futures\noptions\nor do defi games to win NEST.'
    },
  ]

  return (
    <>
      <Stack align={"center"} h={'full'} justify={"center"} minH={'660px'} bg={"red"} spacing={'44px'}>
        <Text whiteSpace={'break-spaces'} textAlign={"center"} fontSize={'48px'} fontWeight={'bold'}>
          What is NEST
        </Text>
        <Text fontSize={'25px'} fontWeight={"bold"} textAlign={"center"}>
          A complete gaming space with applications of DeFi, GameFi<br/>NFT built on the NEST. Swap, hedge, earn and even game<br/> with the NEST network to gain excess returns.
        </Text>
      </Stack>
      {pages.map(({name, path, icon, bg, title, desc}) => (
        <Stack key={name} spacing={'48px'}>
          <Heading fontSize={'48px'} px={['48px']} color={'#003232'}>{name}</Heading>
          <Stack align={"center"} minH={'440px'} justify={"center"} spacing={'16px'}>
            <chakra.img/>
            <chakra.a
              fontSize={'25px'} fontWeight={'semibold'} color={'#434344'} href={'/#/' + path}
            >
              {title}
            </chakra.a>
            <chakra.a
              fontSize={'15px'} fontWeight={'semibold'} color={'#7d7d7d'} whiteSpace={'break-spaces'}
              textAlign={"center"} href={'/#/' + path}
            >
              {desc}
            </chakra.a>
          </Stack>
        </Stack>
      ))}
      <Stack spacing={'48px'}>
        <Heading fontSize={'48px'} px={['48px']} color={'#003232'}>Blogs</Heading>
        <Stack align={"center"} minH={'440px'} justify={"center"} spacing={'16px'}>
          <SimpleGrid columns={[1, 1, 2, 3]} spacing={['22px', '22px', '44px']} pb={'27px'}>
            {[
              {
                label: 'Top Infrastructural Award',
                bg: new5,
                desc: 'Based on the feedback of KCC community, and the voting results at the Unicorn Contest, NEST has been awarded “Top Infrastructural Award”!',
                link: 'https://twitter.com/nest_protocol/status/1531909822408699904?s=21'
              },
              {
                label: 'NEST v4.4 Upgrade Proposal',
                bg: nest4_4,
                desc: 'Voting for the NEST v4.4 upgrade is now open on snapshot, please participate and cast your vote!',
                link: 'https://snapshot.org/#/nestprotocols.eth/proposal/0xc44f29b7a8695fc3379fa34d6e78bf933d9d4493121d2d66160a25b8175816a9'
              },
              {
                label: 'NEST Oracle Special Awards in KCC',
                bg: new1,
                desc: 'NEST Foundation will pro vide awards, advisory sessions, and integration support to Kucoin Community Chain (KCC) developers',
                link: 'https://www.newsbtc.com/press-releases/nest-oracle-special-awards-in-kcc-unicorn-contest/'
              },
              {
                label: 'Strategic Partnership with MAP Protocol',
                bg: new2,
                desc: 'NEST has become the first oracle in MAP ecosystem and provides reliable price for the transactions',
                link: 'https://www.goldentreenews.com/news/article.html?no=278663'
              },
              {
                label: 'What is NEST, a decentralized price oracle network',
                bg: new3,
                desc: 'NEST is one of the projects that is developing the technology to provide this Oracle service in a decentralized way',
                link: 'https://coinpost.jp/?p=226764'
              },
              {
                label: 'NEST Protocol project overview and NEST coin',
                bg: new4,
                desc: 'The project uses a unique “quote mining” mechanism to ensure that off-chain price data is generated on-chain in a synchronous manner',
                link: 'https://coin68.com/nest-protocol-la-gi/'
              }
            ]
              .map(item => (
                <VStack
                  key={item.label}
                  w={isLargerThan480 ? '308px' : 'full'}
                  spacing={0}
                  border={'1px solid #EEEEEE'}
                  boxShadow={'0px 0px 45px 5px #E5E5E5'}
                  borderRadius={'12px'}
                  overflow={'hidden'}
                  cursor={"pointer"}
                  onClick={()=>{
                    window.open(item.link)
                  }}
                >
                  <Box overflow={"hidden"}>
                    <chakra.img src={item.bg} alt={item.label} style={{objectFit: 'cover'}}
                                _hover={{transform: 'scale(1.05)'}}/>
                  </Box>
                  <VStack
                    w={'full'}
                    px={['22px', '22px', '44px']}
                    py={'22px'}
                    spacing={'8px'}
                    alignItems={isLargerThan480 ? 'center' : 'start'}
                    justifyContent={"start"}
                  >
                    <Link isExternal href={item.link} fontSize={'15px'} fontWeight={'bold'} textAlign={"start"} w={"full"}>
                      {item.label}
                    </Link>
                    <Link
                      isExternal
                      href={item.link}
                      fontSize={['12px', '12px', '15px']}
                      fontWeight={'semibold'}
                      color={'#878787'}
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