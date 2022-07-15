import {Link, Stack, Text, HStack, Box, useMediaQuery, chakra} from "@chakra-ui/react";

const Footer = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <HStack px={'48px'} py={'80px'} align={"start"}>
        <Stack spacing={'48px'} w={'full'}>
          <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
            Ecosystem
          </Text>
          <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
            <Link style={{textDecoration: 'none'}}>
              Explore applications
            </Link>
          </Stack>
        </Stack>
        <Stack spacing={'48px'} w={'full'}>
          <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
            Developers
          </Text>
          <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
            <Link>
              Docs
            </Link>
            <Link>
              Github
            </Link>
            <Link style={{textDecoration: 'none'}}>
              Set up local environment
            </Link>
            <Link>
              Developer support
            </Link>
          </Stack>
        </Stack>
        <Stack spacing={'48px'} w={'full'}>
          <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
            Community
          </Text>
          <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
            <Link style={{textDecoration: 'none'}}>
              Online communities
            </Link>
          </Stack>
        </Stack>
        <Stack spacing={'48px'} w={'full'}>
          <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
            Learn
          </Text>
          <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
            <Link style={{textDecoration: 'none'}}>
              What is NEST
            </Link>
            <Link style={{textDecoration: 'none'}}>
              Use cases
            </Link>
            <Link>
              NEST whitepaper
            </Link>
            <Link>
              Blogs
            </Link>
          </Stack>
        </Stack>
        <Stack spacing={'48px'} minW={'600px'}>
          <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
            Market price
          </Text>
          <chakra.div
            id="crypto-widget-CoinList"
            data-transparent="true"
            data-design="classic"
            data-coin-ids="2204"
            h={'120px'}
            w={'600px'}
            bg={"red"}
          ></chakra.div>
          <Text color={'#434344'} fontSize={'14px'} fontWeight={'bold'} textAlign={"end"}>©2022 NEST</Text>
        </Stack>
      </HStack>
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
              <Link style={{textDecoration: 'none'}}>
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
              <Link>
                Docs
              </Link>
              <Link>
                Github
              </Link>
              <Link style={{textDecoration: 'none'}}>
                Set up local environment
              </Link>
              <Link>
                Developer support
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
              <Link style={{textDecoration: 'none'}}>
                Use cases
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={'32px'} w={'full'}>
            <Text fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'} opacity={0}>
              Learn
            </Text>
            <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={['12px', '15px']}>
              <Link>
                NEST whitepaper
              </Link>
              <Link>
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
            h={'90px'}
          ></chakra.div>
        </Stack>
        <Text color={'#7D7D7D'} fontSize={'12px'} fontWeight={'semibold'}>©2022 NEST</Text>
      </Stack>
    )
  }
}

export default Footer;