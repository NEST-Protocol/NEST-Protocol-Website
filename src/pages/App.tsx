import * as React from 'react'
import {
  Button,
  HStack,
  VStack,
  Text,
  Heading,
  Spacer,
  Link,
  Box,
  SimpleGrid,
  MenuList,
  MenuButton,
  MenuItem,
  Menu, useBoolean
} from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import nest from '../assets/svg/nest.svg'
import nest_labs from '../assets/svg/nestlabs.svg'
import fort from '../assets/svg/FORT.svg'
import fort2 from '../assets/svg/FORT2.svg'
import cofix from '../assets/svg/cofix.svg'
import cofix2 from '../assets/svg/cofix2.svg'
import parasset from '../assets/svg/parasset.svg'
import parasset2 from '../assets/svg/parasset2.svg'
import binance from '../assets/svg/BSC.svg'
import coinbase from '../assets/svg/coinbase.svg'
import SENSITIVITY from '../assets/svg/SENSITIVITY_icon.svg'
import ACCURACY from '../assets/svg/ACCURACY_icon.svg'
import VALIDATION from '../assets/svg/VALIDATION_icon.svg'
import FLEXIBILITY from '../assets/svg/FLEXIBILITY_icon.svg'
import ANTI_ATTACK from '../assets/svg/ANTI-ATTACK_icon.svg'
import Github from '../assets/svg/github_icon.svg'
import Whitepaper from '../assets/svg/whitepaper_icon.svg'
import SecurityReport from '../assets/svg/security_icon.svg'
import Right1 from '../assets/svg/RIGHT_1_icon.svg'
import Right2 from '../assets/svg/RIGHT_2_icon.svg'
import huobi from '../assets/svg/huobi.svg'
import crypto from '../assets/svg/Crypto com.svg'
import hotbit from '../assets/svg/hotbit.svg'
import coinone from '../assets/svg/coinone.svg'
import okex from '../assets/svg/OKEx Blockdream Ventures.svg'
import fbg from '../assets/svg/FBG.svg'
import kernal from '../assets/svg/Kernel Ventures.svg'
import ybb from '../assets/svg/YBB.svg'
import au21 from '../assets/svg/AU21.svg'
import ld from '../assets/svg/LD Capital.svg'
import ceras from '../assets/svg/Ceras ventures.svg'
import sevenOclock from "../assets/svg/7 O'Clock.svg"
import catchervc from '../assets/svg/Catchervc.svg'
import kyros from '../assets/svg/Kyros.svg'
import award1 from '../assets/svg/award1_icon.svg'
import award2 from '../assets/svg/award2_icon.svg'
import award3 from '../assets/svg/award3_icon.svg'
import Twitter from '../assets/svg/twitter_icon.svg'
import Telegram from '../assets/svg/telegram_icon.svg'
import Medium from '../assets/svg/medium_icon.svg'
import { useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'
import arms from '../assets/img/机械臂.png'
import twitterImg from '../assets/img/Twitter.png'
import telegramImg from '../assets/img/Telegram.png'
import mediumImg from '../assets/img/Medium.png'
import youtubeImg from '../assets/img/youtube.png'
import new1 from '../assets/img/news 1.png'
import new2 from '../assets/img/news 2.png'
import new3 from '../assets/img/news 3.png'
import new4 from '../assets/img/news 4.png'
import header from '../assets/img/header.png'
import defilive from '../assets/svg/difilive_logo.svg'
import deepchain from '../assets/svg/deepchain.svg'
import blockster from '../assets/svg/Blockster.svg'
import winkrypto from '../assets/svg/winkrypto.svg'
import whatcoin from '../assets/svg/WhatsCoin.svg'
import polynetwork from '../assets/svg/polynetwork.svg'
import fortube from '../assets/svg/Fortube.svg'
import husd from '../assets/svg/HUSD.svg'
import inft from '../assets/svg/iNFT.svg'
import pacific from '../assets/svg/Pacific.svg'
import radomnetwork from '../assets/svg/Radom.svg'
import shoppingio from '../assets/svg/Shopping.svg'
import Price from '../assets/svg/Price_icon.svg'
import header_phone from '../assets/img/header_phone.png'

export const App = () => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
  const aboutRef = useRef(null)
  const dataRef = useRef(null)
  const ecologyRef = useRef(null)
  const communityRef = useRef(null)
  const newsRef = useRef(null)
  const [page, setPage] = useState(0)
  const [showMore, setShowMore] = useBoolean(false)

  const next = (ref: any) => {
    if (ref) {
      window.scrollTo(0, ref.current.offsetTop || 0)
    }
  }

  const menu = [
    { label: 'About NEST', ref: aboutRef },
    { label: 'Data', ref: dataRef },
    { label: 'Ecology', ref: ecologyRef },
    { label: 'Community', ref: communityRef },
    { label: 'News', ref: newsRef }
  ]

  const technologyLinks = [
    { label: 'Github', icon: Github, link: 'https://github.com/NEST-Protocol' },
    {
      label: 'Price Facade',
      icon: Price,
      link: 'https://github.com/NEST-Protocol/NEST-Oracle-V3.6/blob/main/docs/INestPriceFacade.md'
    },
    {
      label: 'Whitepaper',
      icon: Whitepaper,
      link: 'https://nestprotocol.org/doc/ennestwhitepaper.pdf'
    },
    {
      label: 'Security Report',
      icon: SecurityReport,
      link: 'https://github.com/NEST-Protocol/NEST-Oracle-V3.6/blob/main/docs/PeckShield-Audit-Report-NestV3.6.pdf'
    }
  ]

  const socialLinks = [
    { label: 'Twitter', icon: Twitter, link: 'https://twitter.com/nest_protocol' },
    { label: 'Telegram', icon: Telegram, link: 'https://t.me/nest_chat' },
    { label: 'Medium', icon: Medium, link: 'https://nest-protocol-82041.medium.com/' }
  ]

  return (
    <VStack w={'full'} spacing={0}>
      <Box position={'absolute'} zIndex={0} w={"full"}>
        { isLargerThan480 ? (
          <img
            src={header}
            alt={''}
            style={{ display: 'block', width: '100%', height: '1600px' }}
          />
        ) : (
          <img
            src={header_phone}
            alt={''}
            style={{ display: 'block', width: '100%', height: '820px' }}
          />
        ) }
      </Box>
      <VStack id={'menu+index'} bg={'#FBEECC'} w={'full'} px={['22px', '22px', '44px']} py={'27px'}>
        <HStack id={'menu'} justifyContent={'space-between'} w={'full'}>
          <Box>
            <img src={nest} alt={'nest'} />
          </Box>
          {isLargerThan1024 ? (
            <HStack>
              {menu.map(item => (
                <Button key={item.label} variant={'ghost'} onClick={() => next(item.ref)}>
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => {
                  window.open('https://channel.nestprotocol.org/')
                }}
              >
                Developers
              </Button>
            </HStack>
          ) : (
            <Menu>
              <MenuButton as={Button} variant={'ghost'} fontSize={'36px'} w={'36px'}>
                <HamburgerIcon />
              </MenuButton>
              <MenuList zIndex={11} borderRadius={'12px'}>
                {menu.map(item => (
                  <MenuItem key={item.label} fontWeight={'semibold'} onClick={() => next(item.ref)}>
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          )}
        </HStack>
        <VStack
          id={'page1'}
          alignItems={'start'}
          w={'full'}
          spacing={'40px'}
          pt={['80px', '80px', '140px']}
          zIndex={10}
          pb={'60px'}
        >
          <VStack alignItems={'start'} w={'full'} spacing={'22px'}>
            {isLargerThan480 ? (
              <Heading fontSize={['30px', '30px', '50px']}>Truly Decentralized Oracle</Heading>
            ) : (
              <VStack alignItems={'start'} w={'full'} spacing={0}>
                <Heading fontSize={['30px', '30px', '50px']}>Truly</Heading>
                <Heading fontSize={['30px', '30px', '50px']}>Decentralized</Heading>
                <Heading fontSize={['30px', '30px', '50px']}>Oracle</Heading>
              </VStack>
            )}
            <Heading fontSize={['30px', '30px', '50px']}>
              No Nodes No Auditing Free Quotation
            </Heading>
            {isLargerThan480 ? (
              <Heading fontSize={['30px', '30px', '50px']}>On-Chain Verification</Heading>
            ) : (
              <VStack alignItems={'start'} w={'full'} spacing={0}>
                <Heading fontSize={['30px', '30px', '50px']}>On-Chain</Heading>
                <Heading fontSize={['30px', '30px', '50px']}>Verification</Heading>
              </VStack>
            )}
          </VStack>
          <HStack pb={'20px'} w={'full'} justifyContent={isLargerThan480 ? 'start' : 'center'}>
            <Button
              height={isLargerThan480 ? '36px' : '48px'}
              width={isLargerThan480 ? '' : '60%'}
              onClick={() => {
                window.open('https://repurchase.nestprotocol.org/')
              }}
            >
              DAPP Web
            </Button>
          </HStack>

          <SimpleGrid columns={[3, 3, 3, 6]} spacing={'44px'}>
            {[
              { id: 'nest_labs', src: nest_labs, link: '#' },
              { id: 'fort', src: fort, link: 'https://fortprotocol.com' },
              { id: 'cofix', src: cofix, link: 'https://cofix.tech' },
              { id: 'parasset', src: parasset, link: 'https://home.parasset.top' },
              { id: 'binance', src: binance, link: 'https://www.binance.com/' },
              { id: 'coinbase', src: coinbase, link: 'https://www.coinbase.com' }
            ].map(item => (
              <Link key={item.id} isExternal href={item.link}>
                <img src={item.src} alt={item.id} />
              </Link>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
      <VStack
        id={'what is a nest nest oracle'}
        zIndex={10}
        w={'full'}
        px={['22px', '22px', '44px']}
        pt={['40px', '40px', '80px']}
        ref={aboutRef}
      >
        <Box mb={['40px', '40px', '80px']} w={'full'}>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            What Is A NEST Oracle
          </Heading>
        </Box>
        <AspectRatio w={['full', 'full', '720px']} ratio={16 / 9} borderRadius={'12px'} overflow={"hidden"} bg={"black"}>
          <iframe title="naruto" src="https://www.youtube.com/embed/-c7A2CjoJ8E" allowFullScreen />
        </AspectRatio>
      </VStack>
      <VStack
        id={'impeccable technical architecture'}
        w={'full'}
        px={['22px', '22px', '44px']}
        pt={['40px', '40px', '80px']}
      >
        <Box w={'full'} mb={['40px', '40px', '80px']}>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            Impeccable technical
          </Heading>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            Architecture
          </Heading>
        </Box>
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={['22px', '22px', '44px']} pb={'44px'}>
          {[
            { id: 'SENSITIVITY', logo: SENSITIVITY, desc: 'Respond to market price quickly' },
            { id: 'ACCURACY', logo: ACCURACY, desc: 'Reflect the real market price' },
            { id: 'VALIDATION', logo: VALIDATION, desc: 'Any third party with no threshold' },
            { id: 'FLEXIBILITY', logo: FLEXIBILITY, desc: 'Free to entry or exit' },
            { id: 'ANTI-ATTACK', logo: ANTI_ATTACK, desc: 'High cost to tamper the price' }
          ].map(item => (
            <Box key={item.id}>
              {isLargerThan480 ? (
                <VStack
                  w={'220px'}
                  h={'220px'}
                  borderRadius={'12px'}
                  alignItems={'start'}
                  p={'22px'}
                  justifyContent={'center'}
                  spacing={'22px'}
                  boxShadow={'0 0 45px 5px #E5E5E5'}
                  border={'1px solid #EEEEEE'}
                >
                  <img src={item.logo} alt={item.id} />
                  <Text fontWeight={600} fontSize={'15px'}>
                    {item.id}
                  </Text>
                  <Text color={'#878787'} fontSize={'15px'} fontWeight={600} height={'40px'}>
                    {item.desc}
                  </Text>
                </VStack>
              ) : (
                <HStack
                  w={'full'}
                  spacing={'24px'}
                  border={'1px solid #EEEEEE'}
                  boxShadow={'0px 0px 45px 5px #E5E5E5'}
                  borderRadius={'12px'}
                  p={'27px'}
                >
                  <img src={item.logo} alt={item.id} />
                  <VStack alignItems={'start'}>
                    <Text fontWeight={600} fontSize={'15px'}>
                      {item.id}
                    </Text>
                    <Text color={'#878787'} fontSize={'15px'} fontWeight={600}>
                      {item.desc}
                    </Text>
                  </VStack>
                </HStack>
              )}
            </Box>
          ))}
        </SimpleGrid>
        <SimpleGrid
          columns={2}
          spacingY={['12px', '22px']}
          spacingX={['22px', '22px', '48px']}
          pb={'27px'}
        >
          {technologyLinks.map(item => (
            <Link isExternal href={item.link} key={item.label}>
              <HStack spacing={0}>
                <Box mr={['10px', '10px', '22px']} w={'44px'} h={'44px'}>
                  <img src={item.icon} alt={item.label} />
                </Box>
                <Box>
                  <Text fontSize={['12px', '12px', '15px']} fontWeight={'semibold'}>
                    {item.label}
                  </Text>
                </Box>
                <Spacer />
                <Box pl={['0px', '0px','14px']} maxW={['20px', '20px', '44px']} maxH={['20px', '20px', '44px']}>
                  <img src={Right2} alt={'right'} />
                </Box>
              </HStack>
            </Link>
          ))}
        </SimpleGrid>
        <HStack pb={'20px'} w={'full'} justifyContent={'center'}>
          <Button
            variant={'outline'}
            w={isLargerThan480 ? '' : '60%'}
            height={isLargerThan480 ? '36px' : '48px'}
            onClick={() => window.open('https://channel.nestprotocol.org/')}
          >
            Developers
          </Button>
        </HStack>
      </VStack>
      <VStack
        id={'rapidly growing data'}
        w={'full'}
        px={['22px', '22px', '44px']}
        pt={['40px', '40px', '80px']}
        ref={dataRef}
      >
        <Box w={'full'} mb={['40px', '40px', '80px']}>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            Rapidly Growing Data
          </Heading>
        </Box>
        <SimpleGrid columns={[2, 2, 3]} spacing={['20px', '30px', '60px']}>
          {[
            { label: '60', desc: 'Number of oracle' },
            { label: '539,929', desc: 'Cumulative quotes' },
            { label: '10', desc: 'Number of apps called' },
            { label: '50,729', desc: 'Cumulative calls' },
            { label: '1.35M', desc: 'Current income (USDT)' },
            { label: '109.40M', desc: 'Cumulative income (USDT)' }
          ].map(item => (
            <VStack key={item.desc} alignItems={'start'}>
              <Text fontWeight={'bold'} fontSize={['30px', '41px']} lineHeight={'55px'}>
                {item.label}
              </Text>
              <Text fontWeight={600} fontSize={['12px', '12px', '15px']} color={'#878787'}>
                {item.desc}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
      <VStack
        id={'huge ecosystem'}
        w={'full'}
        px={['22px', '22px', '44px']}
        pt={['40px', '40px', '80px']}
        ref={ecologyRef}
      >
        <Box w={'full'} mb={['40px', '40px', '80px']}>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            Huge Ecosystem
          </Heading>
        </Box>
        <SimpleGrid columns={[1, 2, 3, 3]} spacing={['22px', '22px', '44px']} pb={'44px'}>
          {[
            {
              label: 'DeFi',
              logo: fort2,
              desc: 'Perpetual future contracts and European options',
              link: 'https://fortprotocol.com'
            },
            {
              label: 'Dex',
              logo: cofix2,
              desc: '$NEST liquidity available',
              link: 'https://cofix.tech'
            },
            {
              label: 'Leding',
              logo: parasset2,
              desc: 'Collateral $NEST to mint PETH, PUSD, PBTC, etc',
              link: 'https://home.parasset.top'
            }
          ].map(item => (
            <Box key={item.desc}>
              {isLargerThan480 ? (
                <VStack
                  w={'240px'}
                  border={'1px solid #EEEEEE'}
                  boxShadow={'0px 0px 45px 5px #E5E5E5'}
                  spacing={'30px'}
                  alignItems={'start'}
                  p={'44px'}
                  borderRadius={'12px'}
                >
                  <Text fontWeight={'bold'} fontSize={'17px'}>
                    {item.label}
                  </Text>
                  <img src={item.logo} alt={item.label} />
                  <Text fontSize={'15px'} fontWeight={600} color={'#878787'} height={'60px'}>
                    {item.desc}
                  </Text>
                  <Link isExternal href={item.link}>
                    <img src={Right1} alt={'right'} />
                  </Link>
                </VStack>
              ) : (
                <VStack
                  w={'full'}
                  border={'1px solid #EEEEEE'}
                  boxShadow={'0px 0px 45px 5px #E5E5E5'}
                  spacing={'12px'}
                  alignItems={'start'}
                  p={'27px'}
                  borderRadius={'12px'}
                >
                  <Text fontWeight={'bold'} fontSize={'17px'}>
                    {item.label}
                  </Text>
                  <HStack w={'full'}>
                    <img src={item.logo} alt={item.label} />
                    <Spacer />
                    <Link isExternal href={item.link}>
                      <img src={Right1} alt={'right'} />
                    </Link>
                  </HStack>
                  <Text fontSize={'15px'} fontWeight={600} color={'#878787'}>
                    {item.desc}
                  </Text>
                </VStack>
              )}
            </Box>
          ))}
        </SimpleGrid>
        <SimpleGrid
          columns={[2, 2, 4, 4]}
          spacingX={'60px'}
          spacingY={'40px'}
          w={isLargerThan480 ? '' : '80%'}
        >
          {[
            { id: 'nest_labs', src: nest_labs, link: '#' },
            { id: 'coinbase', src: coinbase, link: 'https://www.coinbase.com' },
            { id: 'huobi', src: huobi, link: 'https://www.huobi.com/' },
            { id: 'crypto.com', src: crypto, link: 'https://crypto.com/' },
            { id: 'hotbit', src: hotbit, link: 'https://www.hotbit.io/' },
            { id: 'coinone', src: coinone, link: 'https://coinone.co.kr/' },
            { id: 'okex', src: okex, link: 'https://www.okx.com' },
            { id: 'fbg', src: fbg, link: 'https://twitter.com/fbgcapital' },
            { id: 'kernel', src: kernal, link: 'https://www.kernel-ventures.com/' },
            { id: 'ybb', src: ybb, link: 'https://www.ybb.io/' },
            { id: 'kyros', src: kyros, link: 'https://kyros.ventures/' },
            { id: 'au21', src: au21, link: 'https://au21.capital/' },
            { id: 'ld', src: ld, link: 'https://ldcap.com/' },
            { id: 'ceras', src: ceras, link: 'https://www.cerasventures.com/' },
            {
              id: '7oclocklabs',
              src: sevenOclock,
              link: 'https://www.7oclockcapital.com/community.htm'
            },
            { id: 'catchervc', src: catchervc, link: 'https://catchervc.chaincatcher.com/' },
            { id: 'defilive', src: defilive, link: 'https://www.defilive.xyz/' },
            { id: 'deepchain', src: deepchain, link: 'https://www.dcnews.io/' },
            { id: 'blockster', src: blockster, link: 'https://blockster.com/' },
            { id: 'winkrypto', src: winkrypto, link: 'https://www.winkrypto.com/' },
            { id: 'whatcoin', src: whatcoin, link: 'https://www.whatscoin.com/' },
            { id: 'binance', src: binance, link: 'https://www.binance.com/' },
            { id: 'polynetwork', src: polynetwork, link: 'https://poly.network/' },
            { id: 'fortube', src: fortube, link: 'https://for.tube/' },
            { id: 'husd', src: husd, link: 'https://www.stcoins.com/' },
            { id: 'inft', src: inft, link: 'https://inft.io/' },
            { id: 'pacific', src: pacific, link: 'https://pacific.one/#/' },
            { id: 'radomnetwork', src: radomnetwork, link: 'https://www.radom.network/' },
            { id: 'shoppingio', src: shoppingio, link: 'https://shopping.io/' }
          ]
            .filter((item, index) => Math.floor(index / 16) === page)
            .map(item => (
              <Link
                key={item.id}
                isExternal
                href={item.link}
                w={'160px'}
                h={['24px', '24px', '36px']}
              >
                <img
                  src={item.src}
                  alt={item.id}
                  style={{ height: isLargerThan480 ? '36px' : '18px' }}
                />
              </Link>
            ))}
        </SimpleGrid>
        <HStack py={'12px'} spacing={'-12px'}>
          {[0, 1].map(item => (
            <Button key={item} onClick={() => setPage(item)} variant={'ghost'}>
              <Box
                w={'10px'}
                h={'10px'}
                bg={page === item ? '#EAAA00' : 'null'}
                border={page === item ? 'null' : '1px solid #878787'}
                borderRadius={'full'}
              />
            </Button>
          ))}
        </HStack>
      </VStack>
      <VStack
        id={"join nest's global community"}
        w={'full'}
        px={['22px', '22px', '44px']}
        pt={['40px', '40px', '80px']}
        ref={communityRef}
      >
        <Box w={'full'} mb={['40px', '40px', '80px']}>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            Join NEST's Global
          </Heading>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            Community
          </Heading>
        </Box>
        <SimpleGrid columns={2} spacing={['22px', '22px', '44px']}>
          {[
            {
              label: 'Twitter',
              bg: twitterImg,
              link: 'https://twitter.com/nest_protocol'
            },
            {
              label: 'Telegram',
              bg: telegramImg,
              link: 'https://t.me/nest_chat'
            },
            {
              label: 'Medium',
              bg: mediumImg,
              link: 'https://nest-protocol-82041.medium.com/'
            },
            {
              label: 'YouTube',
              bg: youtubeImg,
              link: 'https://www.youtube.com/channel/UC9o8XQ9GGrQFs5x6WYnh9mQ'
            }
          ].map(item => (
            <VStack
              key={item.label}
              borderRadius={'12px'}
              spacing={0}
              w={['full', 'full', '308px']}
              border={'1px solid #EEEEEE'}
              boxShadow={'0px 0px 45px 5px #E5E5E5'}
              overflow={'hidden'}
            >
              <Box w={'full'} h={'full'}>
                <img src={item.bg} alt={item.label} />
              </Box>
              <HStack
                h={'full'}
                p={['12px', '12px', '22px']}
                justifyContent={'space-between'}
                w={'full'}
                alignItems={'center'}
              >
                <Text fontSize={['12px', '12px', '17px']} fontWeight={600}>
                  {item.label}
                </Text>
                <Link isExternal href={item.link}>
                  {isLargerThan480 ? (
                    <img src={Right1} alt={'right'} />
                  ) : (
                    <img src={Right1} alt={'right'} height={'24px'} width={'24px'} />
                  )}
                </Link>
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
      <VStack
        id={'join the nest unicorn'}
        w={'full'}
        px={['22px', '22px', '44px']}
        pt={['40px', '40px', '80px']}
      >
        <Box w={'full'} mb={['40px', '40px', '80px']}>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            Join the NEST Unicorn
          </Heading>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            Rewards Program
          </Heading>
        </Box>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={['22px', '22px', '44px']}>
          {[
            {
              label: 'Top Oracle miner',
              icon: award1,
              number: '$3,000',
              desc: '3 projects or individuals who open new oracle channels or participate in quote mining will be distributed $1,000 eac',
              link: 'https://docs.google.com/forms/d/1_0BN03Zo0UeBt9aJVthdQNOdKo7c-yLjXP7Uf4G3Uqg/edit'
            },
            {
              label: 'Excellent Oracle Use-case',
              icon: award2,
              number: '$4,000',
              desc: 'Awards will be distributed according to the proportion of NEST oracle calling counts (until the end of the competition), which could be validated on chain',
              link: 'https://docs.google.com/forms/d/1_0BN03Zo0UeBt9aJVthdQNOdKo7c-yLjXP7Uf4G3Uqg/edit'
            },
            {
              label: 'Most innovative projects',
              icon: award3,
              number: '$3,000',
              desc: '3 most innovative projects will be distributed $1,000 each, whether in DeFi, NFT, GameFi, SocialFi, Metaverse,or Web3',
              link: 'https://docs.google.com/forms/d/1_0BN03Zo0UeBt9aJVthdQNOdKo7c-yLjXP7Uf4G3Uqg/edit'
            }
          ].map(item => (
            <VStack
              key={item.label}
              w={isLargerThan480 ? '308px' : 'full'}
              p={['22px', '22px', '44px']}
              border={'1px solid #EEEEEE'}
              alignItems={isLargerThan480 ? 'start' : 'center'}
              spacing={['11px', '11px', '22px']}
              boxShadow={'0px 0px 45px 5px #E5E5E5'}
              borderRadius={'12px'}
              cursor={"pointer"}
              onClick={()=>{
                window.open(item.link)
              }}
            >
              <img src={item.icon} alt={item.label} />
              <Text fontSize={'17px'} fontWeight={'bold'}>
                {item.number}
              </Text>
              <Text fontSize={['12px', '12px', '15px']} fontWeight={'bold'}>
                {item.label}
              </Text>
              <Text
                fontSize={['12px', '12px', '15px']}
                fontWeight={600}
                color={'#878787'}
                textAlign={isLargerThan480 ? 'start' : 'center'}
              >
                {item.desc}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
      <VStack id={'coming soon so stay tuned'} w={'full'} pt={['40px', '40px', '80px']}>
        <Box w={'full'} mb={'40px'} px={['22px', '22px', '44px']}>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            Coming Soon So Stay
          </Heading>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            Tuned
          </Heading>
        </Box>
        <VStack alignItems={'start'} w={'full'} justifyContent={'center'}>
          <img src={arms} style={{ background: '#FBEECC', padding: '44px 0' }} alt={'arms'} />
          <VStack
            position={'absolute'}
            w={'full'}
            alignItems={'center'}
            textAlign={'start'}
            justifyContent={'center'}
          >
            <VStack alignItems={'start'}>
              {['NEST GRANT', 'NEST ECO-FUND', 'NEST Research', 'NEST DAO', 'NEST ABC'].map(
                item => (
                  <Text
                    key={item}
                    fontSize={['12px', '12px', '25px']}
                    fontWeight={600}
                    color={'#878787'}
                  >
                    {item}
                  </Text>
                )
              )}
            </VStack>
          </VStack>
        </VStack>
      </VStack>

      <VStack
        id={'news'}
        w={'full'}
        px={['22px', '22px', '44px']}
        pt={['40px', '40px', '80px']}
        pb={['16px', '16px', '120px']}
        ref={newsRef}
        spacing={0}
      >
        <Box w={'full'} mb={['40px', '40px', '80px']}>
          <Heading fontSize={['30px', '30px', '50px']} w={'full'}>
            News
          </Heading>
        </Box>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={['22px', '22px', '44px']} pb={'27px'}>
          {[
            {
              label: 'NEST Oracle Special Awards in KCC',
              bg: new1,
              desc: 'NEST Foundation will pro vide awards, advisory sessions, and integration support to Kucoin Community Chain (KCC) developers',
              link: 'https://www.newsbtc.com/press-releases/nest-oracle-special-awards-in-kcc-unicorn-contest/'
            },
            {
              label: 'NEST Oracle Special Awards in MAP',
              bg: new2,
              desc: 'Chain (KCC) developers  vide awards, advisory sessions, and integration support to MAP developers',
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
            .filter((item, index) => (showMore ? true : index < 3))
            .map(item => (
              <VStack
                key={item.label}
                w={isLargerThan480 ? '308px' : 'full'}
                spacing={0}
                border={'1px solid #EEEEEE'}
                boxShadow={'0px 0px 45px 5px #E5E5E5'}
                borderRadius={'12px'}
                overflow={'hidden'}
              >
                <Box>
                  <img src={item.bg} alt={item.label} style={{ objectFit: 'cover' }} />
                </Box>
                <VStack
                  w={'full'}
                  px={['22px', '22px', '44px']}
                  py={'22px'}
                  spacing={'8px'}
                  alignItems={isLargerThan480 ? 'center' : 'start'}
                  justifyContent={"start"}
                >
                  <Link isExternal href={item.link}>
                    <Text fontSize={'15px'} fontWeight={'bold'}>
                      {item.label}
                    </Text>
                  </Link>
                  <Text
                    fontSize={['12px', '12px', '15px']}
                    fontWeight={600}
                    color={'#878787'}
                  >
                    {item.desc}
                  </Text>
                </VStack>
              </VStack>
            ))}
        </SimpleGrid>
        <HStack pb={'20px'} w={'full'} justifyContent={'center'}>
          <Button
            variant={'outline'}
            minW={'132px'}
            w={isLargerThan480 ? '' : '60%'}
            onClick={() => {
              setShowMore.toggle()
            }}
            height={isLargerThan480 ? '36px' : '48px'}
          >
            {showMore ? 'Less' : 'More'}
          </Button>
        </HStack>
      </VStack>
      <HStack
        id={'footer'}
        w={'full'}
        px={['22px', '22px', '44px']}
        py={['36px', '36px', '90px']}
        bg={'#FBEECC'}
        spacing={'20px'}
      >
        {isLargerThan480 ? (
          <HStack alignItems={'start'} w={'full'} h={'full'}>
            <VStack alignItems={'start'} w={'240px'}>
              <Text fontWeight={'bold'}>App</Text>
              <br />
              <Link isExternal href={'https://channel.nestprotocol.org/'}>
                <Text fontWeight={'semibold'}>Developers</Text>
              </Link>
              <Link isExternal href={'https://repurchase.nestprotocol.org/'}>
                <Text fontWeight={'semibold'}>DAPP Web</Text>
              </Link>
            </VStack>
            <VStack alignItems={'start'} w={'240px'}>
              <Text fontWeight={'bold'}>Community</Text>
              <br />
              <VStack spacing={'20px'} alignItems={'start'}>
                {socialLinks.map(item => (
                  <Link key={item.label} isExternal href={item.link}>
                    <HStack spacing={'20px'}>
                      <img src={item.icon} alt={item.label} />
                      <Text fontSize={'15px'} fontWeight={600}>
                        {item.label}
                      </Text>
                    </HStack>
                  </Link>
                ))}
              </VStack>
            </VStack>
            <VStack alignItems={'start'} w={'240px'}>
              <Text fontWeight={'bold'}>Technology</Text>
              <br />
              <VStack spacing={'20px'} alignItems={'start'}>
                {technologyLinks.map(item => (
                  <Link key={item.label} isExternal href={item.link}>
                    <HStack spacing={'20px'}>
                      <img src={item.icon} alt={item.label} />
                      <Text fontSize={'15px'} fontWeight={600}>
                        {item.label}
                      </Text>
                    </HStack>
                  </Link>
                ))}
              </VStack>
            </VStack>
            <Spacer />
            <VStack h={'300px'}>
              <Spacer />
              <Text fontWeight={'bold'} fontSize={'14px'}>
                ©2022 NEST
              </Text>
            </VStack>
          </HStack>
        ) : (
          <VStack alignItems={'start'} spacing={'60px'} w={'full'}>
            <VStack alignItems={'start'} w={'240px'}>
              <Text fontWeight={'bold'}>App</Text>
              <br />
              <Text fontWeight={'semibold'}>Developers</Text>
              <Text fontWeight={'semibold'}>DAPP Web</Text>
            </VStack>
            <HStack w={'full'} alignItems={'start'}>
              <VStack alignItems={'start'}>
                <Text fontWeight={'bold'}>Community</Text>
                <br />
                <VStack spacing={'20px'} alignItems={'start'}>
                  {socialLinks.map(item => (
                    <Link key={item.label} isExternal href={item.link}>
                      <HStack spacing={'20px'}>
                        <img src={item.icon} alt={item.label} height={'22px'} width={'22px'} />
                        <Text fontSize={'15px'} fontWeight={600}>
                          {item.label}
                        </Text>
                      </HStack>
                    </Link>
                  ))}
                </VStack>
              </VStack>
              <Spacer />
              <VStack alignItems={'start'}>
                <Text fontWeight={'bold'}>Technology</Text>
                <br />
                <VStack spacing={'20px'} alignItems={'start'}>
                  {technologyLinks.map(item => (
                    <Link key={item.label} isExternal href={item.link}>
                      <HStack spacing={'20px'}>
                        <img src={item.icon} alt={item.label} height={'22px'} width={'22px'} />
                        <Text fontSize={'15px'} fontWeight={600}>
                          {item.label}
                        </Text>
                      </HStack>
                    </Link>
                  ))}
                </VStack>
              </VStack>
            </HStack>
            <VStack>
              <Spacer />
              <Text fontWeight={'bold'} fontSize={'14px'}>
                ©2022 NEST
              </Text>
            </VStack>
          </VStack>
        )}
      </HStack>
    </VStack>
  )
}
