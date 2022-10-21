import {
  Stack,
  useMediaQuery,
  ChakraProvider,
  chakra,
  HStack,
  Text,
  Link,
  Heading,
  Button,
} from "@chakra-ui/react";
import React from "react";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../chakra";
import TheHeader from "@site/src/components/TheHeader";
import {ChevronRightIcon} from "@chakra-ui/icons";

const About = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  const Banner = () => {
    return (
      <Stack
        align={'center'}
        h={'full'}
        justify={'center'}
        minH={["600px", "615px"]}
        bgImage={isDesktop ? "/image/About/About_bg_1.webp" : "/image/About/Phone_About_bg_1.webp"}
        bgSize={'cover'}
        bgPosition={"center"}
        spacing={0}
        px={'24px'}
      >
        <TheHeader/>
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/About/About_bg_icon_1.webp" : "/image/About/Phone_About_bg_icon.webp"}
          alt={''}
          minH={["600px", "615px"]}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <Stack spacing={["22px", "44px"]} align={"center"} zIndex={1}>
          {isDesktop ? (
            <HStack alignItems={"start"} py={'90px'} spacing={'70px'}>
              <Stack w={'280px'} align={"center"} textAlign={"center"} spacing={'28px'}>
                <chakra.img src={'/image/About/BTC.svg'} alt={'BTC'} w={'40px'}/>
                <Text fontSize={'20px'} fontWeight={'600'}>
                  Creating Informationized<br/>
                  Assets
                </Text>
              </Stack>
              <Stack h={'40px'} align={"center"} justify={"center"}>
                <img src={'/image/About/about_arrow_icon.svg'} alt={''}/>
              </Stack>
              <Stack w={'280px'} align={"center"} textAlign={"center"} spacing={'28px'}>
                <chakra.img src={'/image/About/ETH.png'} alt={'ETH'} w={'24px'} h={'40px'}/>
                <Text fontSize={'20px'} fontWeight={'600'}>
                  Programming with<br/>
                  Informationized Assets
                </Text>
              </Stack>
              <Stack h={'40px'} align={"center"} justify={"center"}>
                <img src={'/image/About/about_arrow_icon.svg'} alt={''}/>
              </Stack>
              <Stack w={'280px'} align={"center"} textAlign={"center"} spacing={'28px'}>
                <chakra.img src={'/image/About/NEST.svg'} alt={''} w={'40px'} h={'40px'}/>
                <Text fontSize={'20px'} fontWeight={'600'}>
                  Programming with<br/>
                  Stochastic Assets
                </Text>
              </Stack>
            </HStack>
          ) : (
            <Stack spacing={'15px'} pt={'50px'}>
              <Stack minW={'200px'} align={"center"} textAlign={"center"} spacing={'10px'}>
                <chakra.img src={'/image/About/BTC.svg'} alt={''} w={'40px'}/>
                <Text fontSize={'12px'} fontWeight={'600'}>
                  Creating Informationized<br/>
                  Assets
                </Text>
              </Stack>
              <Stack h={'70px'} align={"center"} justify={"center"} transform={"rotate(90deg)"}>
                <img src={'/image/About/about_arrow_icon.svg'} alt={''}/>
              </Stack>
              <Stack minW={'200px'} align={"center"} textAlign={"center"} spacing={'10px'}>
                <chakra.img src={'/image/About/ETH.png'} alt={''} w={'24px'} h={'40px'}/>
                <Text fontSize={'12px'} fontWeight={'600'}>
                  Programming with<br/>
                  Informationized Assets
                </Text>
              </Stack>
              <Stack h={'70px'} align={"center"} justify={"center"} transform={"rotate(90deg)"}>
                <img src={'/image/About/about_arrow_icon.svg'} alt={''}/>
              </Stack>
              <Stack minW={'200px'} align={"center"} textAlign={"center"} spacing={'10px'}>
                <chakra.img src={'/image/About/NEST.svg'} alt={''} w={'40px'} h={'40px'}/>
                <Text fontSize={'12px'} fontWeight={'600'}>
                  Programming with<br/>
                  Stochastic Assets
                </Text>
              </Stack>
            </Stack>
          )}
          <HStack spacing={'44px'}>
            <Link color={'#00A0E9'} fontWeight={600} fontSize={15} href={'/about/faqs/'}>
              FAQs <ChevronRightIcon/>
            </Link>
            <Link color={'#00A0E9'} fontWeight={600} fontSize={15} href={'/doc/ennestwhitepaper.pdf'} isExternal>
              Whitepaper <ChevronRightIcon/>
            </Link>
          </HStack>
        </Stack>
      </Stack>
    )
  }

  const Who = () => {
    return (
      <>
        <Stack align={"center"} justify={"center"} bgImage={'/image/About/About_bg_2.webp'}
               textAlign={"center"} bgRepeat={"no-repeat"} bgSize={"cover"} py={'40px'}>
          {isDesktop ? (
            <>
              <Heading fontSize={'33px'} fontWeight={'700'} mb={0}>Who is Behind NEST Protocol</Heading>
              <Text fontWeight={'700'} fontSize={['12px', '15px']}>The NEST protocol is coordinated by the NEST DAO and
                has the following organisation:</Text>
            </>
          ) : (
            <>
              <Heading fontSize={'25px'} fontWeight={'700'} mb={0}>Who is Behind<br/>NEST Protocol</Heading>
              <Text fontWeight={'700'} fontSize={['12px', '15px']}>The NEST protocol is coordinated by the<br/>NEST DAO
                and has the following organisation:</Text>
            </>
          )}
        </Stack>
        {isDesktop ? (
          <>
            <Stack align={"center"} justify={"center"} h={'500px'}>
              <HStack h={'100%'} spacing={'40px'}>
                <Stack w={'500px'} h={'100%'} bgImage={'/image/About/About_NRA_icon.webp'} bgRepeat={"no-repeat"}
                       bgSize={"cover"}>
                </Stack>
                <Stack spacing={'25px'} w={'500px'}>
                  <Heading fontSize={'25px'} fontWeight={'600'} ml={'-260px'} mb={'10px'}>NEST Research Academy
                    (NRA)</Heading>
                  <Text fontSize={'15px'} fontWeight={'600'}>
                    The NRA core is made up of practitioners from<br/>
                    academic and industrial institutions in Europe<br/>
                    and North America, with the goal of providing<br/>
                    technical and theoretical support for new<br/>
                    categories while also maintaining long-term<br/>
                    relationships with Vitalik, the Ether Foundation,<br/>
                    Coindesk, Consensus, and others.
                  </Text>
                  <HStack spacing={'44px'}>
                    <Link color={'#00A0E9'} fontWeight={600} fontSize={15} href={'/about/nra/'}>
                      NRA <ChevronRightIcon/>
                    </Link>
                  </HStack>
                </Stack>
              </HStack>
            </Stack>
            <Stack align={"center"} justify={"center"} h={'500px'}>
              <HStack h={'100%'} spacing={'40px'}>
                <Stack w={'500px'} h={'100%'} bgImage={'/image/About/About_NIB_icon.webp'} bgRepeat={"no-repeat"}
                       bgSize={"cover"}>
                </Stack>
                <Stack spacing={'25px'} w={'500px'}>
                  <Heading fontSize={'25px'} fontWeight={'600'} ml={'-260px'} mb={'10px'}>NEST Influence Block
                    (NIB)</Heading>
                  <Text fontSize={'15px'} fontWeight={'600'}>
                    The main goal of NIB is to spread the new concept,<br/>
                    category,and vision of NEST, provide the public<br/>
                    with narrative logic and communication basis,<br/>
                    and enhance the brand and influence of NEST,<br/>
                    which includes holding various media campaigns,<br/>
                    relationships with Vitalik, the Ether Foundation,<br/>
                    constructing Twitter, TikTok, Telegram, Discord,<br/>
                    and so on, as well as grant and ecological fund<br/>
                    management.
                  </Text>
                  <HStack spacing={'44px'}>
                    <Link color={'#00A0E9'} fontWeight={600} fontSize={15} href={'/blogs/'}>
                      News <ChevronRightIcon/>
                    </Link>
                  </HStack>
                </Stack>
              </HStack>
            </Stack>
            <Stack align={"center"} justify={"center"} h={'500px'}>
              <HStack h={'100%'} spacing={'40px'}>
                <Stack w={'500px'} h={'100%'} bgImage={'/image/About/About_NDA_icon.webp'} bgRepeat={"no-repeat"}
                       bgSize={"cover"}>
                </Stack>
                <Stack spacing={'25px'} w={'500px'}>
                  <Heading fontSize={'25px'} fontWeight={'600'} ml={'-260px'} mb={'10px'}>NEST Developer Alliance
                    (NDA)</Heading>
                  <Text fontSize={'15px'} fontWeight={'600'}>
                    NDA is in charge of the development of core<br/>
                    protocols and peripheral applications, as well<br/>
                    as the creation of developer communities,<br/>
                    such as future hackathons.
                  </Text>
                  <HStack spacing={'44px'}>
                    <Link color={'#00A0E9'} fontWeight={600} fontSize={15} href={'/docs/PVM-Technical-Reference/'}>
                      Developer Docs <ChevronRightIcon/>
                    </Link>
                  </HStack>
                </Stack>
              </HStack>
            </Stack>
            <Stack align={"center"} justify={"center"} h={'500px'}>
              <HStack h={'100%'} spacing={'40px'}>
                <Stack w={'500px'} h={'100%'} bgImage={'/image/About/About_Community_icon.webp'} bgRepeat={"no-repeat"}
                       bgSize={"cover"}>
                </Stack>
                <Stack spacing={'25px'} w={'500px'}>
                  <Heading fontSize={'25px'} fontWeight={'600'} ml={'-260px'} mb={'10px'}>NEST Community</Heading>
                  <Text fontSize={'15px'} fontWeight={'600'}>
                    The NEST Community is primarily responsible<br/>
                    for the community's growth, the promotion of<br/>
                    consensus, and the promotion and management<br/>
                    of the coin-holding population, with the goal of<br/>
                    becoming the industry's largest distributed<br/>
                    community.<br/>
                    <br/>
                    Join NEST Community
                  </Text>
                  <Stack spacing={'20px'}>
                    <HStack spacing={'28px'}>
                      <Button variant={"outline"} aria-label={'twitter'} onClick={() => {
                        window.open('https://twitter.com/nest_protocol/', '_blank');
                      }}>
                        Twitter
                      </Button>
                      <Button aria-label={'telegram'} variant={"outline"} onClick={() => {
                        window.open('https://t.me/nest_chat/', '_blank');
                      }}>
                        Telegram
                      </Button>
                    </HStack>
                    <HStack spacing={'28px'}>
                      <Button aria-label={'discord'} variant={"outline"} onClick={() => {
                        window.open('https://discord.gg/nestprotocol', '_blank');
                      }}>
                        Discord
                      </Button>
                      <Button variant={"outline"} aria-label={'medium'} onClick={() => {
                        window.open('https://nest-protocol-82041.medium.com/', '_blank');
                      }}>
                        Medium
                      </Button>
                    </HStack>
                  </Stack>
                </Stack>
              </HStack>
            </Stack>
          </>
        ) : (
          <Stack px={'24px'} spacing={'40px'} textAlign={"center"}>
            <Stack spacing={'20px'} justify={"center"} h={'350px'} w={'full'} py={'28px'}
                   bgImage={'/image/About/About_NRA_icon.webp'} bgRepeat={"no-repeat"} bgSize={"cover"}>
              <Heading fontSize={'18px'} fontWeight={'600'}>NEST Research Academy (NRA)</Heading>
              <Text fontSize={'12px'} fontWeight={'600'}>
                The NRA core is made up of practitioners from<br/>
                academic and industrial institutions in Europe<br/>
                and North America, with the goal of providing<br/>
                technical and theoretical support for new<br/>
                categories while also maintaining long-term<br/>
                relationships with Vitalik, the Ether Foundation,<br/>
                Coindesk, Consensus, and others.
              </Text>
              <HStack spacing={'44px'} align={"center"} justify={"center"}>
                <Link color={'#00A0E9'} fontWeight={600} fontSize={12} href={'/about/nra/'}>
                  NRA <ChevronRightIcon/>
                </Link>
              </HStack>
            </Stack>
            <Stack spacing={'20px'} justify={"center"} h={'350px'} w={'full'} py={'28px'}
                   bgImage={'/image/About/About_NIB_icon.webp'} bgRepeat={"no-repeat"} bgSize={"cover"}>
              <Heading fontSize={'18px'} fontWeight={'600'} mb={'10px'}>NEST Influence Block (NIB)</Heading>
              <Text fontSize={'12px'} fontWeight={'600'}>
                The main goal of NIB is to spread the new concept,<br/>
                category,and vision of NEST, provide the public<br/>
                with narrative logic and communication basis,<br/>
                and enhance the brand and influence of NEST,<br/>
                which includes holding various media campaigns,<br/>
                relationships with Vitalik, the Ether Foundation,<br/>
                constructing Twitter, TikTok, Telegram, Discord,<br/>
                and so on, as well as grant and ecological fund<br/>
                management.
              </Text>
              <HStack spacing={'44px'} align={"center"} justify={"center"}>
                <Link color={'#00A0E9'} fontWeight={600} fontSize={12} href={'/blogs/'}>
                  News <ChevronRightIcon/>
                </Link>
              </HStack>
            </Stack>
            <Stack spacing={'20px'} justify={"center"} h={'350px'} w={'full'} py={'28px'}
                   bgImage={'/image/About/About_NDA_icon.webp'} bgRepeat={"no-repeat"} bgSize={"cover"}>
              <Heading fontSize={'18px'} fontWeight={'600'} mb={'10px'}>NEST Developer Alliance (NDA)</Heading>
              <Text fontSize={'12px'} fontWeight={'600'}>
                NDA is in charge of the development of core<br/>
                protocols and peripheral applications, as well<br/>
                as the creation of developer communities,<br/>
                such as future hackathons.
              </Text>
              <HStack spacing={'44px'} align={"center"} justify={"center"}>
                <Link color={'#00A0E9'} fontWeight={600} fontSize={12} href={'/docs/PVM-Technical-Reference/'}>
                  Developer Docs <ChevronRightIcon/>
                </Link>
              </HStack>
            </Stack>
            <Stack spacing={'20px'} justify={"center"} h={'350px'} w={'full'} py={'28px'}
                   bgImage={'/image/About/About_Community_icon.webp'} bgRepeat={"no-repeat"} bgSize={"cover"}>
              <Heading fontSize={'18px'} fontWeight={'600'}>NEST Community</Heading>
              <Text fontSize={'12px'} fontWeight={'600'}>
                The NEST Community is primarily responsible<br/>
                for the community's growth, the promotion of<br/>
                consensus, and the promotion and management<br/>
                of the coin-holding population, with the goal of<br/>
                becoming the industry's largest distributed<br/>
                community.<br/>
                <br/>
                Join NEST Community
              </Text>
              <Stack spacing={'20px'} justify={"center"} align={"center"}>
                <HStack spacing={'30px'}>
                  <Button aria-label={'twitter'} variant={"outline"} onClick={() => {
                    window.open('https://twitter.com/nest_protocol/', '_blank');
                  }}>
                    Twitter
                  </Button>
                  <Button aria-label={'telegram'} variant={"outline"} onClick={() => {
                    window.open('https://t.me/nest_chat/', '_blank');
                  }}>
                    Telegram
                  </Button>
                </HStack>
                <HStack spacing={'30px'}>
                  <Button aria-label={'discord'} variant={"outline"} onClick={() => {
                    window.open('https://discord.gg/nestprotocol', '_blank');
                  }}>
                    Discord
                  </Button>
                  <Button aria-label={'medium'} variant={"outline"} onClick={() => {
                    window.open('https://nest-protocol-82041.medium.com/', '_blank');
                  }}>
                    Medium
                  </Button>
                </HStack>
              </Stack>
            </Stack>
          </Stack>
        )}

      </>
    )
  }

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>About | NEST Protocol</title>
      </Head>
      <Stack spacing={isDesktop ? "80px" : "56px"}>
        <React.Suspense fallback={<div></div>}>
          <Banner/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <Who/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <TheFooter/>
        </React.Suspense>
      </Stack>
    </ChakraProvider>
  )
}

export default About;
