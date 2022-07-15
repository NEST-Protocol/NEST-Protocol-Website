import {Link, Stack, Text, HStack, useMediaQuery, chakra} from "@chakra-ui/react";
import BG_URL from "../../assets/webp/Footer_bg.webp";

const Footer = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Stack px={['24px', '48px']} py={'80px'} w={"full"} align={"center"} bgImage={BG_URL} bgSize={"cover"}>
        <HStack maxW={'1440px'} w={'full'} align={"start"}>
          <Stack spacing={'44px'} w={'full'} minW={'200px'}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Ecosystem
            </Text>
            <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
              <Link style={{textDecoration: 'none'}} href={'/#/ecosystem'}>
                Explore applications
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={'44px'} w={'full'} minW={'200px'}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Developers
            </Text>
            <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
              <Link href={'https://docs.nestprotocol.org'}>
                Docs
              </Link>
              <Link href={'https://github.com/NEST-Protocol/'}>
                Github
              </Link>
              <Link>
                Set up local environment
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={'44px'} w={'full'} minW={'200px'}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Community
            </Text>
            <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
              <Link style={{textDecoration: 'none'}} href={'/#/community'}>
                Online communities
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={'44px'} w={'full'} minW={'200px'}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Learn
            </Text>
            <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
              <Link style={{textDecoration: 'none'}} href={'/#/learn'}>
                What is NEST
              </Link>
              {/*<Link style={{textDecoration: 'none'}}>*/}
              {/*  Use cases*/}
              {/*</Link>*/}
              {/*<Link>*/}
              {/*  NEST whitepaper*/}
              {/*</Link>*/}
              <Link style={{textDecoration: 'none'}} href={'/#/learn'}>
                Blogs
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={7} w={'full'} minW={'500px'}>
            <Text pl={4} fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Market price
            </Text>
            <chakra.div
              id="crypto-widget-CoinList"
              data-transparent="true"
              data-design="classic"
              data-coin-ids="2204"
              h={'120px'}
            ></chakra.div>
            <Text color={'#003232'} fontSize={'14px'} fontWeight={'bold'} textAlign={"end"}>©2022 NEST</Text>
          </Stack>
        </HStack>
      </Stack>
    )
  } else {
    return (
      <Stack px={'24px'} py={'56px'} spacing={'32px'}>
        <HStack>
          <Stack spacing={'32px'} w={'full'}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Ecosystem
            </Text>
            <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
              <Link href={'/#/ecosystem'}>
                Explore applications
              </Link>
            </Stack>
          </Stack>
        </HStack>
        <HStack align={"start"}>
          <Stack spacing={'32px'} w={'full'}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Developers
            </Text>
            <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
              <Link href={'https://docs.nestprotocol.org/'}>
                Docs
              </Link>
              <Link href={'https://github.com/NEST-Protocol'}>
                Github
              </Link>
              <Link>
                Set up local environment
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={'32px'} w={'full'}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Community
            </Text>
            <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
              <Link style={{textDecoration: 'none'}}>
                Online communities
              </Link>
            </Stack>
          </Stack>
        </HStack>
        <HStack align={"start"}>
          <Stack spacing={'32px'} w={'full'}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
              Learn
            </Text>
            <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
              <Link style={{textDecoration: 'none'}}>
                What is NEST
              </Link>
              {/*<Link style={{textDecoration: 'none'}}>*/}
              {/*  Use cases*/}
              {/*</Link>*/}
            </Stack>
          </Stack>
          <Stack spacing={'32px'} w={'full'}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'} opacity={0}>
              Learn
            </Text>
            <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
              {/*<Link>*/}
              {/*  NEST whitepaper*/}
              {/*</Link>*/}
              <Link style={{textDecoration: 'none'}} href={'/#/learn'}>
                Blogs
              </Link>
            </Stack>
          </Stack>
        </HStack>
        <Stack spacing={'32px'}>
          <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
            Market price
          </Text>
          <chakra.div
            id="crypto-widget-CoinList"
            data-transparent="true"
            data-design="classic"
            data-coin-ids="2204"
            w={"full"}
          ></chakra.div>
        </Stack>
        <Text color={'#7D7D7D'} fontSize={'12px'} fontWeight={'semibold'}>©2022 NEST</Text>
      </Stack>
    )
  }
}

export default Footer;