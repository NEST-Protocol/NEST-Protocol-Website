import {Button, HStack, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import React from "react";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Who = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Stack align={"center"} justify={"center"} bgImage={'/image/About/About_bg_2.jpg'}
             textAlign={"center"} bgRepeat={"no-repeat"} bgSize={"cover"} py={'40px'}>
        { isDesktop ? (
          <>
            <Text fontSize={'33px'} fontWeight={'700'} mb={0}>Who is Behind NEST Protocol</Text>
            <Text fontWeight={'700'} fontSize={['12px', '15px']}>The NEST protocol is coordinated by the NEST DAO and has the following organisation:</Text>
          </>
        ) : (
          <>
            <Text fontSize={'25px'} fontWeight={'700'} mb={0}>Who is Behind<br/>NEST Protocol</Text>
            <Text fontWeight={'700'} fontSize={['12px', '15px']}>The NEST protocol is coordinated by the<br/>NEST DAO and has the following organisation:</Text>
          </>
        ) }
      </Stack>
      { isDesktop ? (
        <>
          <Stack align={"center"} justify={"center"} h={'500px'}>
            <HStack h={'100%'} spacing={'40px'}>
              <Stack w={'500px'} h={'100%'} bgImage={'/image/About/About_NRA_icon.png'} bgRepeat={"no-repeat"} bgSize={"cover"}>
              </Stack>
              <Stack spacing={'25px'} w={'500px'}>
                <Text fontSize={'25px'} fontWeight={'600'} ml={'-260px'} mb={'10px'}>NEST Research Academy (NRA)</Text>
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
                  <Link color={'#00A0E9'} fontWeight={600} fontSize={15} href={'/about/nra'}>
                    NRA <ChevronRightIcon/>
                  </Link>
                </HStack>
              </Stack>
            </HStack>
          </Stack>
          <Stack align={"center"} justify={"center"} h={'500px'}>
            <HStack h={'100%'} spacing={'40px'}>
              <Stack w={'500px'} h={'100%'} bgImage={'/image/About/About_NIB_icon.png'} bgRepeat={"no-repeat"} bgSize={"cover"}>
              </Stack>
              <Stack spacing={'25px'} w={'500px'}>
                <Text fontSize={'25px'} fontWeight={'600'} ml={'-260px'} mb={'10px'}>NEST Influence Block (NIB)</Text>
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
                  <Link color={'#00A0E9'} fontWeight={600} fontSize={15} href={'/news'}>
                    News <ChevronRightIcon/>
                  </Link>
                </HStack>
              </Stack>
            </HStack>
          </Stack>
          <Stack align={"center"} justify={"center"} h={'500px'}>
            <HStack h={'100%'} spacing={'40px'}>
              <Stack w={'500px'} h={'100%'} bgImage={'/image/About/About_NDA_icon.png'} bgRepeat={"no-repeat"} bgSize={"cover"}>
              </Stack>
              <Stack spacing={'25px'} w={'500px'}>
                <Text fontSize={'25px'} fontWeight={'600'} ml={'-260px'} mb={'10px'}>NEST Developer Alliance (NDA)</Text>
                <Text fontSize={'15px'} fontWeight={'600'}>
                  NDA is in charge of the development of core<br/>
                  protocols and peripheral applications, as well<br/>
                  as the creation of developer communities,<br/>
                  such as future hackathons.
                </Text>
                <HStack spacing={'44px'}>
                  <Link color={'#00A0E9'} fontWeight={600} fontSize={15} href={'/docs/Concept/What-is-NEST'}>
                    Developer Docs <ChevronRightIcon/>
                  </Link>
                </HStack>
              </Stack>
            </HStack>
          </Stack>
          <Stack align={"center"} justify={"center"} h={'500px'}>
            <HStack h={'100%'} spacing={'40px'}>
              <Stack w={'500px'} h={'100%'} bgImage={'/image/About/About_Community_icon.png'} bgRepeat={"no-repeat"} bgSize={"cover"}>
              </Stack>
              <Stack spacing={'25px'} w={'500px'}>
                <Text fontSize={'25px'} fontWeight={'600'} ml={'-260px'} mb={'10px'}>NEST Community</Text>
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
                    <Button variant={"outline"} onClick={() => {
                      window.open('https://twitter.com/nest_protocol/', '_blank');
                    }}>
                      Twitter
                    </Button>
                    <Button variant={"outline"} onClick={() => {
                      window.open('https://t.me/nest_chat/', '_blank');
                    }}>
                      Telegram
                    </Button>
                  </HStack>
                  <HStack spacing={'28px'}>
                    <Button variant={"outline"} onClick={() => {
                      window.open('', '_blank');
                    }}>
                      Discord
                    </Button>
                    <Button variant={"outline"} onClick={() => {
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
          <Stack spacing={'20px'} justify={"center"} h={'350px'} w={'full'} py={'28px'} bgImage={'/image/About/About_NRA_icon.png'} bgRepeat={"no-repeat"} bgSize={"cover"}>
            <Text fontSize={'18px'} fontWeight={'600'}>NEST Research Academy (NRA)</Text>
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
              <Link color={'#00A0E9'} fontWeight={600} fontSize={12} href={'/about/nra'}>
                NRA <ChevronRightIcon/>
              </Link>
            </HStack>
          </Stack>
          <Stack spacing={'20px'} justify={"center"} h={'350px'} w={'full'} py={'28px'} bgImage={'/image/About/About_NIB_icon.png'} bgRepeat={"no-repeat"} bgSize={"cover"}>
            <Text fontSize={'18px'} fontWeight={'600'} mb={'10px'}>NEST Influence Block (NIB)</Text>
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
              <Link color={'#00A0E9'} fontWeight={600} fontSize={12} href={'/news'}>
                News <ChevronRightIcon/>
              </Link>
            </HStack>
          </Stack>
          <Stack spacing={'20px'} justify={"center"} h={'350px'} w={'full'} py={'28px'} bgImage={'/image/About/About_NDA_icon.png'} bgRepeat={"no-repeat"} bgSize={"cover"}>
            <Text fontSize={'18px'} fontWeight={'600'} mb={'10px'}>NEST Developer Alliance (NDA)</Text>
            <Text fontSize={'12px'} fontWeight={'600'}>
              NDA is in charge of the development of core<br/>
              protocols and peripheral applications, as well<br/>
              as the creation of developer communities,<br/>
              such as future hackathons.
            </Text>
            <HStack spacing={'44px'} align={"center"} justify={"center"}>
              <Link color={'#00A0E9'} fontWeight={600} fontSize={12} href={'/docs/Concept/What-is-NEST'}>
                Developer Docs <ChevronRightIcon/>
              </Link>
            </HStack>
          </Stack>
          <Stack spacing={'20px'} justify={"center"} h={'350px'} w={'full'} py={'28px'} bgImage={'/image/About/About_Community_icon.png'} bgRepeat={"no-repeat"} bgSize={"cover"}>
            <Text fontSize={'18px'} fontWeight={'600'}>NEST Community</Text>
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
                <Button variant={"outline"} onClick={() => {
                  window.open('https://twitter.com/nest_protocol/', '_blank');
                }}>
                  Twitter
                </Button>
                <Button variant={"outline"} onClick={() => {
                  window.open('https://t.me/nest_chat/', '_blank');
                }}>
                  Telegram
                </Button>
              </HStack>
              <HStack spacing={'30px'}>
                <Button variant={"outline"} onClick={() => {
                  window.open('https://discord.gg/C6fCtZE2', '_blank');
                }}>
                  Discord
                </Button>
                <Button variant={"outline"} onClick={() => {
                  window.open('https://nest-protocol-82041.medium.com/', '_blank');
                }}>
                  Medium
                </Button>
              </HStack>
            </Stack>
          </Stack>
        </Stack>
      ) }

    </>
  )
}

export default Who;