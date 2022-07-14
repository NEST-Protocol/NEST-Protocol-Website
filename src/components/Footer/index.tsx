import {Link, Stack, Text, HStack} from "@chakra-ui/react";

const Footer = () => {
  return (
    <HStack px={['48px']} py={'80px'} align={"start"}>
      <Stack spacing={'48px'} w={'full'}>
        <Text fontSize={'15px'} fontWeight={'bold'} color={'#003232'}>
          Developers
        </Text>
        <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={'15px'}>
          <Link>
            Docs
          </Link>
          <Link>
            Github
          </Link>
          <Link>
            Set up local environment
          </Link>
          <Link>
            Developer support
          </Link>
        </Stack>
      </Stack>
      <Stack spacing={'48px'} w={'full'}>
        <Text fontSize={'15px'} fontWeight={'bold'} color={'#003232'}>
          Ecosystem
        </Text>
        <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={'15px'}>
          <Link>
            Explore applications
          </Link>
        </Stack>
      </Stack>
      <Stack spacing={'48px'} w={'full'}>
        <Text fontSize={'15px'} fontWeight={'bold'} color={'#003232'}>
          Community
        </Text>
        <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={'15px'}>
          <Link>
            Online communities
          </Link>
        </Stack>
      </Stack>
      <Stack spacing={'48px'} w={'full'}>
        <Text fontSize={'15px'} fontWeight={'bold'} color={'#003232'}>
          Learn
        </Text>
        <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={'15px'}>
          <Link>
            What is NEST
          </Link>
          <Link>
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
      <Stack spacing={'48px'} w={'full'}>
        <Text fontSize={'15px'} fontWeight={'bold'} color={'#003232'}>
          Market price
        </Text>
        <Stack spacing={'16px'} color={'#7d7d7d'} fontWeight={'semibold'} fontSize={'15px'}>
          <Text>Power by crypto.com</Text>
          <Text color={'#434344'} fontSize={'14px'} fontWeight={'bold'} textAlign={"end"}>@2022 NEST</Text>
        </Stack>
      </Stack>
    </HStack>
  )
}

export default Footer;