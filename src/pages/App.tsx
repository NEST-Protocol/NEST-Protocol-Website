import * as React from "react"
import {
  Button,
  HStack,
  VStack, Text, Heading, Spacer, Link, Box, SimpleGrid, MenuList, MenuButton, MenuItem, Menu,
} from "@chakra-ui/react"
import {AspectRatio} from '@chakra-ui/react'
import nest from "../assets/svg/nest.svg"
import nest_labs from "../assets/svg/nestlabs.svg"
import fort from "../assets/svg/FORT.svg"
import fort2 from "../assets/svg/FORT2.svg"
import cofix from "../assets/svg/cofix.svg"
import cofix2 from "../assets/svg/cofix2.svg"
import parasset from "../assets/svg/parasset.svg"
import parasset2 from "../assets/svg/parasset2.svg"
import binance from "../assets/svg/BSC.svg"
import coinbase from "../assets/svg/coinbase.svg"
import SENSITIVITY from "../assets/svg/SENSITIVITY_icon.svg"
import ACCURACY from "../assets/svg/ACCURACY_icon.svg"
import VALIDATION from "../assets/svg/VALIDATION_icon.svg"
import FLEXIBILITY from "../assets/svg/FLEXIBILITY_icon.svg"
import ANTI_ATTACK from "../assets/svg/ANTI-ATTACK_icon.svg"
import Github from "../assets/svg/github_icon.svg"
import Whitepaper from "../assets/svg/whitepaper_icon.svg"
import SecurityReport from "../assets/svg/security_icon.svg"
import Right1 from "../assets/svg/RIGHT_1_icon.svg"
import Right2 from "../assets/svg/RIGHT_2_icon.svg"
import huobi from "../assets/svg/huobi.svg"
import crypto from "../assets/svg/Crypto com.svg"
import hotbit from "../assets/svg/hotbit.svg"
import coinone from "../assets/svg/coinone.svg"
import okex from "../assets/svg/OKEx Blockdream Ventures.svg"
import fbg from "../assets/svg/FBG.svg"
import kernal from "../assets/svg/Kernel Ventures.svg"
import ybb from "../assets/svg/YBB.svg"
import au21 from "../assets/svg/AU21.svg"
import ld from "../assets/svg/LD Capital.svg"
import ceras from "../assets/svg/Ceras ventures.svg"
import sevenOclock from "../assets/svg/7 O'Clock.svg"
import catchervc from "../assets/svg/Catchervc.svg"
import kyros from "../assets/svg/Kyros.svg"
import award1 from "../assets/svg/award1_icon.svg"
import award2 from "../assets/svg/award2_icon.svg"
import award3 from "../assets/svg/award3_icon.svg"
import Twitter from "../assets/svg/twitter_icon.svg"
import Telegram from "../assets/svg/telegram_icon.svg"
import Medium from "../assets/svg/medium_icon.svg"
import { useMediaQuery } from '@chakra-ui/react'
import {HamburgerIcon} from "@chakra-ui/icons";


export const App = () => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

  return (
    <VStack w={"full"}>
      <VStack id={"menu+index"} bg={'#FFD789'} w={"full"} p={'27px 45px'}>
        <HStack id={"menu"} justifyContent={"space-between"} w={"full"}>
          <img src={nest} alt={'nest'}/>
          { isLargerThan1024 ? (
            <HStack>
              {[
                {label: "About NEST"},
                {label: "Data"},
                {label: "Ecology"},
                {label: "Community"},
                {label: "News"},
              ].map((item) => (
                <Button key={item.label} variant={"ghost"}>{item.label}</Button>
              ))}
              <Button>Developers</Button>
            </HStack>
          ) : (
            <Menu>
              <MenuButton as={Button} variant={'ghost'} fontSize={'36px'}>
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                {[
                  {label: "About NEST"},
                  {label: "Data"},
                  {label: "Ecology"},
                  {label: "Community"},
                  {label: "News"},
                ].map((item)=>(
                  <MenuItem fontWeight={'bold'}>{item.label}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          ) }
        </HStack>
        <VStack id={"page1"} alignItems={"start"} w={"full"} spacing={"60px"} pt={["80px", "80px", "140px"]} pb={"60px"}>
          <Box alignItems={"start"} w={"full"}>
            <Heading fontSize={["4xl", "4xl", "5xl"]}>Truly Decentralized Oracle</Heading>
            <Heading fontSize={["4xl", "4xl", "5xl"]}>No Nodes No Auditing Free Quotation</Heading>
            <Heading fontSize={["4xl", "4xl", "5xl"]}>On-Chain Verification</Heading>
          </Box>
          <Button isFullWidth={!isLargerThan480}>
            DAPP Web
          </Button>
          <SimpleGrid columns={[3, 3, 3, 6]} spacing={"44px"}>
            {[
              {id: "nest_labs", src: nest_labs, link: "#"},
              {id: "fort", src: fort, link: "https://fortprotocol.com"},
              {id: "cofix", src: cofix, link: "https://cofix.tech"},
              {id: "parasset", src: parasset, link: "https://home.parasset.top"},
              {id: "binance", src: binance, link: "https://www.binance.com/"},
              {id: "coinbase", src: coinbase, link: "https://www.coinbase.com"},
            ].map((item) => (
              <Link key={item.id} isExternal href={item.link}>
                <img src={item.src} alt={item.id}/>
              </Link>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
      <VStack id={"what is a nest nest oracle"} w={"full"} px={'45px'} pt={['60px', '60px', '100px']}>
        <Box mb={['60px', '60px', '100px']} w={"full"}>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>What Is A NEST Oracle</Heading>
        </Box>
        <AspectRatio w={['full','full', '720px']} ratio={16 / 9} bg={"red"}>
          <iframe
            title='naruto'
            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
            allowFullScreen
          />
        </AspectRatio>
      </VStack>
      <VStack id={"impeccable technical architecture"} w={"full"} px={'45px'} pt={['60px', '60px', '100px']}>
        <Box w={"full"} mb={['60px', '60px', '100px']}>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>Impeccable technical</Heading>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>Architecture</Heading>
        </Box>
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={'44px'} pb={"44px"}>
          {[
            {id: "SENSITIVITY", logo: SENSITIVITY, desc: "Respond to market price quickly"},
            {id: "ACCURACY", logo: ACCURACY, desc: "Reflect the real market price"},
            {id: "VALIDATION", logo: VALIDATION, desc: "Any third party with no threshold"},
            {id: "FLEXIBILITY", logo: FLEXIBILITY, desc: "Free to entry or exit"},
            {id: "ANTI-ATTACK", logo: ANTI_ATTACK, desc: "High cost to tamper the price"},
          ].map((item) => (
            <>
              { isLargerThan480 ? (
                <VStack key={item.id} w={"220px"} h={"220px"} borderRadius={"12px"}
                        alignItems={"start"} p={"22px"} justifyContent={"center"} spacing={"22px"}
                        boxShadow={"0 0 45px 5px #E5E5E5"} border={"1px solid #EEEEEE"}>
                  <img src={item.logo} alt={item.id}/>
                  <Text fontWeight={600} fontSize={"15px"}>{item.id}</Text>
                  <Text color={"#878787"} fontSize={"15px"} fontWeight={600}>{item.desc}</Text>
                </VStack>
              ) : (
                <HStack key={item.id} w={"full"} spacing={'24px'} border={'1px solid #EEEEEE'}
                        boxShadow={'0px 0px 45px 5px #E5E5E5'} borderRadius={'12px'} p={'27px'}>
                  <img src={item.logo} alt={item.id}/>
                  <VStack alignItems={"start"}>
                    <Text fontWeight={600} fontSize={"15px"}>{item.id}</Text>
                    <Text color={"#878787"} fontSize={"15px"} fontWeight={600}>{item.desc}</Text>
                  </VStack>
                </HStack>
              ) }
            </>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 3]} spacing={["12px",  "90px"]} pb={"27px"}>
          {[
            {id: "Github", logo: Github, link: ""},
            {id: "Whitepaper", logo: Whitepaper, link: ""},
            {id: "Security Report", logo: SecurityReport, link: ""},
          ].map((item) => (
            <Link isExternal href={item.link}>
              <HStack spacing={["11px", "11px", "22px"]}>
                <img src={item.logo} alt={item.id}/>
                <Text fontSize={"15px"} fontWeight={"semibold"}>{item.id}</Text>
                <img src={Right2} alt={"right"}/>
              </HStack>
            </Link>
          ))}
        </SimpleGrid>
        <Button variant={"outline"}>
          Developers
        </Button>
      </VStack>
      <VStack id={"rapidly growing data"} w={"full"} px={'45px'} pt={['60px', '60px', '100px']}>
        <Box w={"full"} mb={['60px', '60px', '100px']}>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>Rapidly Growing Data</Heading>
        </Box>
        <SimpleGrid columns={[1, 1, 3]} spacing={"74px"}>
          {[
            {label: '60', desc: "Number of oracle"},
            {label: '539,929', desc: "Cumulative quotes"},
            {label: '10', desc: "Number of apps called"},
            {label: '50,729', desc: "Cumulative calls"},
            {label: '1.35M', desc: "Current income (USDT)"},
            {label: '109.40M', desc: "Cumulative income (USDT)"},
          ].map((item) => (
            <VStack key={item.desc} alignItems={"start"} w={"280px"}>
              <Text fontWeight={"bold"} fontSize={"42px"}>{item.label}</Text>
              <Text fontWeight={600} fontSize={"15px"} color={"#878787"}>{item.desc}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
      <VStack id={"huge ecosystem"} w={"full"} px={'45px'} pt={['60px', '60px', '100px']}>
        <Box w={"full"} mb={['60px', '60px', '100px']}>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>Huge Ecosystem</Heading>
        </Box>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={'44px'} pb={"44px"}>
          {[
            { label: 'DeFi', logo: fort2, desc: 'Perpetual future contracts and European options', link: 'https://fortprotocol.com' },
            { label: 'Dex', logo: cofix2, desc: '$NEST liquidity available', link: 'https://cofix.tech' },
            { label: 'Leding', logo: parasset2, desc: 'Collateral $NEST to mint PETH, PUSD, PBTC, etc', link: 'https://home.parasset.top' },
          ].map((item) => (
            <>
              { isLargerThan480 ? (
                <VStack w={"240px"} border={'1px solid #EEEEEE'} boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'30px'}
                        alignItems={"start"} p={'44px'} borderRadius={'12px'}>
                  <Text fontWeight={'bold'} fontSize={'17px'}>{item.label}</Text>
                  <img src={item.logo} alt={item.label}/>
                  <Text fontSize={'15px'} fontWeight={600} color={'#878787'} height={'60px'}>{item.desc}</Text>
                  <Link isExternal href={item.link}>
                    <img src={Right1} alt={"right"}/>
                  </Link>
                </VStack>
              ) : (
                <VStack w={"full"} border={'1px solid #EEEEEE'} boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'12px'}
                        alignItems={"start"} p={'27px'} borderRadius={'12px'}>
                  <Text fontWeight={'bold'} fontSize={'17px'}>{item.label}</Text>
                  <HStack w={"full"}>
                    <img src={item.logo} alt={item.label}/>
                    <Spacer/>
                    <Link isExternal href={item.link}>
                      <img src={Right1} alt={"right"}/>
                    </Link>
                  </HStack>
                  <Text fontSize={'15px'} fontWeight={600} color={'#878787'}>{item.desc}</Text>
                </VStack>
              ) }
            </>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={[2, 3, 3, 3, 4]} spacingX={"60px"} spacingY={"40px"}>
          {[
            {id: "nest_labs", src: nest_labs, link: "#"},
            {id: "coinbase", src: coinbase, link: "https://www.coinbase.com"},
            {id: "huobi", src: huobi, link: '' },
            {id: "crypto.com", src: crypto, link: '' },
            {id: "hotbit", src: hotbit, link: '' },
            {id: "coinone", src: coinone, link: '' },
            {id: "okex", src: okex, link: '' },
            {id: "fbg", src: fbg, link: '' },
            {id: "kernel", src: kernal, link: '' },
            {id: "ybb", src: ybb, link: '' },
            {id: "kyros", src: kyros, link: '' },
            {id: "au21", src: au21, link: '' },
            {id: "ld", src: ld, link: '' },
            {id: "ceras", src: ceras, link: '' },
            {id: "7oclocklabs", src: sevenOclock, link: '' },
            {id: "catchervc", src: catchervc, link: '' },
            // {id: "binance", src: binance, link: "https://www.binance.com/"},
          ].map((item)=>(
            <Link key={item.id} isExternal href={item.link} w={'160px'} h={['24px', '24px', '36px']}>
              <img src={item.src} alt={item.id} style={{ height: isLargerThan480 ? '36px' : '18px' }}/>
            </Link>
          ))}
        </SimpleGrid>
      </VStack>
      <VStack id={"join nest's global community"} w={"full"} px={'45px'} pt={['60px', '60px', '100px']}>
        <Box w={'full'} mb={['60px', '60px', '100px']}>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>Join NEST's Global</Heading>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>Community</Heading>
        </Box>
        <SimpleGrid columns={[1, 1, 2, 2, 4]} spacing={'44px'}>
          {[
            { label: 'Twitter', bg: '', link: '' },
            { label: 'Telegram', bg: '', link: '' },
            { label: 'Medium', bg: '', link: '' },
            { label: 'YouTube', bg: '', link: '' },
          ].map((item)=>(
            <VStack key={item.label} borderRadius={'12px'} w={'308px'} h={'308px'} border={"1px solid #EEEEEE"}
                    boxShadow={'0px 0px 45px 5px #E5E5E5'}>
              <img src={item.bg} alt={item.label} style={{ width: '308px', height: '198px' }}/>
              <HStack p={'44px'} justifyContent={"space-between"} w={"full"} alignItems={"center"}>
                <Text fontSize={'17px'} fontWeight={600}>{item.label}</Text>
                <img src={Right1} alt={'right'}/>
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
      <VStack id={"join the nest unicorn"} w={"full"} px={'45px'} pt={['60px', '60px', '100px']}>
        <Box w={"full"} mb={['60px', '60px', '100px']}>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>Join the NEST Unicorn</Heading>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>Rewards Program</Heading>
        </Box>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={'44px'}>
          {[
            { label: 'Top Oracle miner', icon: award1, number: '$3,000', desc: '3 projects or individuals who open new oracle channels or participate in quote mining will be distributed $1,000 eac' },
            { label: 'Excellent Oracle Use-case', icon: award2, number: '$4,000', desc: 'Awards will be distributed according to the proportion of NEST oracle calling counts (until the end of the competition), which could be validated on chain ' },
            { label: 'Most innovative projects', icon: award3, number: '$3,000', desc: '3 most innovative projects will be distributed $1,000 each, whether in DeFi, NFT, GameFi, SocialFi, Metaverse,or Web3' },
          ].map((item)=>(
            <VStack key={item.label} w={'308px'} p={'44px'} border={'1px solid #EEEEEE'} alignItems={"start"} spacing={'22px'}
                    boxShadow={'0px 0px 45px 5px #E5E5E5'} borderRadius={'12px'}>
              <img src={item.icon} alt={item.label}/>
              <Text fontSize={'17px'} fontWeight={"bold"}>{item.number}</Text>
              <Text fontSize={'15px'} fontWeight={"bold"}>{item.label}</Text>
              <Text fontSize={'15px'} fontWeight={600} color={'#878787'}>{item.desc}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
      <VStack id={"coming soon so stay tuned"} w={"full"} p={'100px 45px'}>
        <Box w={'full'} mb={'40px'}>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>Coming Soon So Stay</Heading>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>Tuned</Heading>
        </Box>
      </VStack>
      <VStack id={"news"} w={"full"} p={'80px 45px'}>
        <Box w={"full"} mb={['60px', '60px', '100px']}>
          <Heading fontSize={["4xl", "4xl", "5xl"]} w={"full"}>News</Heading>
        </Box>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={'44px'} pb={"27px"}>
          {[
            { label: 'NEST Oracle Special Awards in KCC', bg: '', desc: 'NEST Foundation will pro vide awards, advisory sessions, and integration support to Kucoin Community Chain (KCC) developers' },
            { label: 'NEST Oracle Special Awards in MAP', bg: '', desc: 'Chain (KCC) developers  vide awards, advisory sessions, and integration support to MAP developers' },
            { label: 'What is NEST, a decentralized price oracle network?', bg: '', desc: 'NEST is one of the projects that is developing the techn ology to provide this Oracle service in a decentralized way' },
          ].map((item)=>(
            <VStack key={item.label} w={'308px'} border={'1px solid #EEEEEE'} boxShadow={'0px 0px 45px 5px #E5E5E5'} borderRadius={'12px'}>
              <img src={item.bg} alt={item.label} style={{ width: '308px', height: '106px' }}/>
              <VStack w={"full"} p={'26px 44px'}>
                <Text fontSize={'15px'} fontWeight={"bold"}>{item.label}</Text>
                <Text fontSize={'15px'} fontWeight={600} color={'#878787'}>{item.desc}</Text>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
        <Button variant={"outline"} w={'132px'}>
          More
        </Button>
      </VStack>
      <HStack id={"footer"} w={"full"} p={'36px 45px'} bg={'#FFD789'} spacing={'20px'}>
        { isLargerThan1024 ? (
          <>
            <VStack alignItems={"start"} w={'240px'} h={'240px'}>
              <Text fontWeight={"bold"}>App</Text>
              <br/>
              <Text fontWeight={"semibold"}>Developers</Text>
              <Text fontWeight={"semibold"}>DAPP Web</Text>
            </VStack>
            <VStack alignItems={"start"} w={'240px'} h={'240px'}>
              <Text fontWeight={"bold"}>Community</Text>
              <br/>
              <VStack spacing={'20px'} alignItems={"start"}>
                {[
                  { label: 'Twitter', icon: Twitter, link: '' },
                  { label: 'Telegram', icon: Telegram, link: '' },
                  { label: 'Medium', icon: Medium, link: '' },
                ].map((item)=>(
                  <Link key={item.label} isExternal href={item.link}>
                    <HStack spacing={'20px'}>
                      <img src={item.icon} alt={item.label}/>
                      <Text fontSize={'15px'} fontWeight={600}>{item.label}</Text>
                    </HStack>
                  </Link>
                ))}
              </VStack>
            </VStack>
            <VStack alignItems={"start"} w={'240px'} h={'240px'}>
              <Text fontWeight={"bold"}>Technology</Text>
              <br/>
              <VStack spacing={'20px'} alignItems={"start"}>
                {[
                  { label: 'Github', icon: Github, link: '' },
                  { label: 'Whitepaper', icon: Whitepaper, link: '' },
                  { label: 'Security Report', icon: SecurityReport, link: '' },
                ].map((item)=>(
                  <Link key={item.label} isExternal href={item.link}>
                    <HStack spacing={'20px'}>
                      <img src={item.icon} alt={item.label}/>
                      <Text fontSize={'15px'} fontWeight={600}>{item.label}</Text>
                    </HStack>
                  </Link>
                ))}
              </VStack>
            </VStack>
            <Spacer/>
            <VStack h={'240px'}>
              <Spacer/>
              <Text fontWeight={"bold"} fontSize={'14px'}>©2022 NEST</Text>
            </VStack>
          </>
        ) : (
          <VStack alignItems={"start"} spacing={'60px'}>
            <VStack alignItems={"start"} w={'240px'}>
              <Text fontWeight={"bold"}>App</Text>
              <br/>
              <Text fontWeight={"semibold"}>Developers</Text>
              <Text fontWeight={"semibold"}>DAPP Web</Text>
            </VStack>
            <HStack>
              <VStack alignItems={"start"} w={'240px'}>
                <Text fontWeight={"bold"}>Community</Text>
                <br/>
                <VStack spacing={'20px'} alignItems={"start"}>
                  {[
                    { label: 'Twitter', icon: Twitter, link: '' },
                    { label: 'Telegram', icon: Telegram, link: '' },
                    { label: 'Medium', icon: Medium, link: '' },
                  ].map((item)=>(
                    <Link key={item.label} isExternal href={item.link}>
                      <HStack spacing={'20px'}>
                        <img src={item.icon} alt={item.label}/>
                        <Text fontSize={'15px'} fontWeight={600}>{item.label}</Text>
                      </HStack>
                    </Link>
                  ))}
                </VStack>
              </VStack>
              <VStack alignItems={"start"} w={'240px'}>
                <Text fontWeight={"bold"}>Technology</Text>
                <br/>
                <VStack spacing={'20px'} alignItems={"start"}>
                  {[
                    { label: 'Github', icon: Github, link: '' },
                    { label: 'Whitepaper', icon: Whitepaper, link: '' },
                    { label: 'Security Report', icon: SecurityReport, link: '' },
                  ].map((item)=>(
                    <Link key={item.label} isExternal href={item.link}>
                      <HStack spacing={'20px'}>
                        <img src={item.icon} alt={item.label}/>
                        <Text fontSize={'15px'} fontWeight={600}>{item.label}</Text>
                      </HStack>
                    </Link>
                  ))}
                </VStack>
              </VStack>
            </HStack>
            <VStack >
              <Spacer/>
              <Text fontWeight={"bold"} fontSize={'14px'}>©2022 NEST</Text>
            </VStack>
          </VStack>
        ) }
      </HStack>
    </VStack>
  )
}

