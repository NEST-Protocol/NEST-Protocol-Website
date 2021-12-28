import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { Flex, Box, Text } from 'rebass'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Mousewheel } from 'swiper'
import LogoLink from './components/LogoLink'
import IconLink from './components/IconLink'
import DappPopup from './components/DappPopup'

import github_icon from './assets/images/gihub_icon.svg'
import twitter_icon from './assets/images/twitter_icon.svg'
import telegram_icon from './assets/images/telegram_icon.svg'
import whitepaper_icon from './assets/images/whitepaper_icon.svg'
import github_icon2 from './assets/images/gihub_icon_2.svg'
import twitter_icon2 from './assets/images/twitter_icon_2.svg'
import telegram_icon2 from './assets/images/telegram_icon_2.svg'
import whitepaper_icon2 from './assets/images/whitepaper_icon_2.svg'

import logo from './assets/images/nest.svg'
import planet3 from './assets/images/planet-3.jpg'
import planet2 from './assets/images/planet-2.jpg'
import planet1 from './assets/images/saturnmap.jpg'
import track from './assets/images/track.png'

import logo1 from './assets/images/logos/7_OClock_labs_logo_white.svg'
import logo1_active from './assets/images/logos/7_OClock_labs_logo.svg'
import logo4 from './assets/images/logos/AU21_Logo_white.svg'
import logo4_active from './assets/images/logos/AU21_Logo.svg'
import logo5 from './assets/images/logos/coinone_logo_white.svg'
import logo5_active from './assets/images/logos/coinone_logo.svg'
import logo6 from './assets/images/logos/Blockster_logo_white.png'
import logo6_active from './assets/images/logos/Blockster_logo.png'
import logo7 from './assets/images/logos/BSC_logo_white.svg'
import logo7_active from './assets/images/logos/BSC_logo.svg'
import logo8 from './assets/images/logos/Catchervc_logo_white.svg'
import logo8_active from './assets/images/logos/Catchervc_logo.svg'
import logo9 from './assets/images/logos/Ceras_logo_white.svg'
import logo9_active from './assets/images/logos/Ceras_logo.svg'
import logo10 from './assets/images/logos/CoFiX_logo_white.svg'
import logo10_active from './assets/images/logos/CoFiX_logo.svg'
import logo12 from './assets/images/logos/coinbase_logo_white.svg'
import logo12_active from './assets/images/logos/coinbase_logo.svg'
import logo13 from './assets/images/logos/Crypto_logo_white.png'
import logo13_active from './assets/images/logos/Crypto_logo.png'
import logo14 from './assets/images/logos/deepchain_logo_white.svg'
import logo14_active from './assets/images/logos/deepchain_logo.svg'
import logo15 from './assets/images/logos/difilive_logo_white.svg'
import logo15_active from './assets/images/logos/difilive_logo.svg'
import logo16 from './assets/images/logos/FBG_logo_white.png'
import logo16_active from './assets/images/logos/FBG_logo.png'
import logo17 from './assets/images/logos/Fortube_logo_white.svg'
import logo17_active from './assets/images/logos/Fortube_logo.svg'
import logo18 from './assets/images/logos/hedge_logo_white.svg'
import logo18_active from './assets/images/logos/hedge_logo.svg'
import logo19 from './assets/images/logos/hotbit_logo_white.svg'
import logo19_active from './assets/images/logos/hotbit_logo.svg'
import logo21 from './assets/images/logos/huobi_logo_white.svg'
import logo21_active from './assets/images/logos/huobi_logo.svg'
import logo22 from './assets/images/logos/HUSD_logo_white.svg'
import logo22_active from './assets/images/logos/HUSD_logo.svg'
import logo23 from './assets/images/logos/iNFT_logo_white.png'
import logo23_active from './assets/images/logos/iNFT_logo.png'
import logo24 from './assets/images/logos/Kernel_Ventures_logo_white.png'
import logo24_active from './assets/images/logos/Kernel_Ventures_logo.png'
import logo25 from './assets/images/logos/Kyros_logo_white.svg'
import logo25_active from './assets/images/logos/Kyros_logo.svg'
import logo26 from './assets/images/logos/LDC_logo_white.svg'
import logo26_active from './assets/images/logos/LDC_logo.svg'
import logo28 from './assets/images/logos/nestlabs_logo_white.svg'
import logo28_active from './assets/images/logos/nestlabs_logo.svg'
import logo29 from './assets/images/logos/OKEx_Blockdream_Ventures_logo_white.svg'
import logo29_active from './assets/images/logos/OKEx_Blockdream_Ventures_logo.svg'
import logo30 from './assets/images/logos/Pacific_Logo_white.png'
import logo30_active from './assets/images/logos/Pacific_Logo.png'
import logo31 from './assets/images/logos/Parasset_logo_white.svg'
import logo31_active from './assets/images/logos/Parasset_logo.svg'
import logo33 from './assets/images/logos/Radom_logo_white.svg'
import logo33_active from './assets/images/logos/Radom_logo.svg'
import logo34 from './assets/images/logos/Shopping.io_Logo_white.png'
import logo34_active from './assets/images/logos/Shopping.io_Logo.png'
import logo35 from './assets/images/logos/winkrypto_logo_white.svg'
import logo35_active from './assets/images/logos/winkrypto_logo.svg'
import logo36 from './assets/images/logos/YBB_logo_white.png'
import logo36_active from './assets/images/logos/YBB_logo.png'
import logo37 from './assets/images/logos/WhatsCoin_LOGO_white.svg'
import logo37_active from './assets/images/logos/WhatsCoin_LOGO.svg'
import logo38 from './assets/images/logos/polynetwork_logo_white.svg'
import logo38_active from './assets/images/logos/polynetwork_logo.svg'

// install Swiper modules
SwiperCore.use([Mousewheel])
interface Props extends Swiper {
  onSwiper?: any
}
const SwiperX: React.FC<Props> = props => {
  return <Swiper {...props}>{props.children}</Swiper>
}

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
`

const Header = styled.header`
  width: 100%;
  position: fixed;
  padding: 24px 12px;
  top: 0;
  left: 0;
  z-index: 30;

  @media (min-width: 768px) {
    padding: 24px 44px;
  }
`

const NavLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #eaaa00;
  }

  @media (min-width: 768px) {
    font-size: 17px;
    margin-right: 40px;
  }
`

const Logo = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    background: url(${logo}) center center / cover no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 88px;
    height: 28px;
  }
`

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  padding: 24px 20px;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  z-index: 15;
  font-size: 14px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 17px;
    padding: 44px;
  }
`

const FooterLinks = styled(Flex)`
  position: fixed;
  bottom: 20px;
  right: 24px;
  z-index: 30;

  @media (min-width: 768px) {
    bottom: 44px;
    right: 44px;
  }
`

const Content = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`

const Button = styled.a`
  width: 120px;
  height: 32px;
  background: #eaaa00;
  border-radius: 16px;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 176px;
    height: 40px;
    border-radius: 20px;
    font-size: 17px;
  }
`

const DataWrap = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 160px 0.2rem;
  }
`

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem 0.3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.3rem 0.1rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.4rem 0.1rem;
    padding: 0 0.5rem;
  }
`

const PlanetWrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

const App: React.FC = () => {
  const breakpoint = 768
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const [swiperRef, setSwiperRef] = useState<any>(null)
  const [counts, setCounts] = useState<any>({})
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  const logoList = useMemo(() => {
    return [
      { bg: logo28, hoverBg: logo28_active, link: '#' },
      { bg: logo10, hoverBg: logo10_active, link: 'https://cofix.tech/#/swap' },
      { bg: logo31, hoverBg: logo31_active, link: 'https://www.parasset.top/#/home' },
      { bg: logo18, hoverBg: logo18_active, link: 'https://www.hedge.red/' },
      { bg: logo12, hoverBg: logo12_active, link: 'https://www.coinbase.com/' },
      { bg: logo21, hoverBg: logo21_active, link: 'https://www.huobi.com/' },
      { bg: logo13, hoverBg: logo13_active, link: 'https://crypto.com/' },
      { bg: logo19, hoverBg: logo19_active, link: 'http://www.hotbit.io/' },
      { bg: logo5, hoverBg: logo5_active, link: 'https://coinone.co.kr/' },
      { bg: logo29, hoverBg: logo29_active, link: 'https://www.okex.com/blockdream-ventures' },
      { bg: logo16, hoverBg: logo16_active, link: 'https://twitter.com/fbgcapital' },
      { bg: logo24, hoverBg: logo24_active, link: 'https://www.kernel-ventures.com/' },
      { bg: logo36, hoverBg: logo36_active, link: 'http://www.ybb.io/' },
      { bg: logo25, hoverBg: logo25_active, link: 'https://kyros.ventures/' },
      { bg: logo4, hoverBg: logo4_active, link: 'https://au21.capital/' },
      { bg: logo26, hoverBg: logo26_active, link: 'https://ldcap.com/' },
      { bg: logo9, hoverBg: logo9_active, link: 'https://www.cerasventures.com/' },
      { bg: logo1, hoverBg: logo1_active, link: 'https://www.7oclockcapital.com/community.htm' },
      { bg: logo8, hoverBg: logo8_active, link: 'https://catchervc.chaincatcher.com/' },
      { bg: logo15, hoverBg: logo15_active, link: 'https://www.defilive.xyz/' },
      { bg: logo14, hoverBg: logo14_active, link: 'http://www.dcnews.io/' },
      { bg: logo6, hoverBg: logo6_active, link: 'https://blockster.com/' },
      { bg: logo35, hoverBg: logo35_active, link: 'https://www.winkrypto.com/' },
      { bg: logo37, hoverBg: logo37_active, link: 'https://www.whatscoin.com/' },
      { bg: logo7, hoverBg: logo7_active, link: 'https://www.binance.org/en/smartChain' },
      { bg: logo38, hoverBg: logo38_active, link: 'https://poly.network' },
      { bg: logo17, hoverBg: logo17_active, link: 'https://for.tube/' },
      { bg: logo22, hoverBg: logo22_active, link: 'https://www.stcoins.com/' },
      { bg: logo23, hoverBg: logo23_active, link: 'https://inft.io/' },
      { bg: logo30, hoverBg: logo30_active, link: 'https://pacific.one/#/' },
      { bg: logo33, hoverBg: logo33_active, link: 'https://www.radom.network/' },
      { bg: logo34, hoverBg: logo34_active, link: 'https://shopping.io/' }
    ]
  }, [])
  const iconList = useMemo(() => {
    return [
      {
        bg: whitepaper_icon,
        hoverBg: whitepaper_icon2,
        link: 'https://nestprotocol.org/doc/ennestwhitepaper.pdf'
      },
      { bg: telegram_icon, hoverBg: telegram_icon2, link: 'https://t.me/nest_chat' },
      { bg: twitter_icon, hoverBg: twitter_icon2, link: 'https://twitter.com/nest_protocol' },
      { bg: github_icon, hoverBg: github_icon2, link: 'https://github.com/NEST-Protocol' }
    ]
  }, [])

  useEffect(() => {
    fetchData()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const Ball = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useTexture(planet1)

    return (
      <mesh {...props} ref={ref}>
        <sphereBufferGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial attach={'material'} map={texture} />
      </mesh>
    )
  }

  const Satellite = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useTexture(planet3)

    useFrame(() => {
      ref.current.rotateZ(-0.01) // speed
    })

    return (
      <mesh ref={ref}>
        <mesh {...props}>
          <sphereBufferGeometry args={[0.3, 64, 64]} />
          <meshStandardMaterial attach={'material'} map={texture} />
        </mesh>
      </mesh>
    )
  }

  const Satellite2 = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useTexture(planet2)

    useFrame(() => {
      ref.current.rotateZ(0.01) // speed
    })

    return (
      <mesh ref={ref}>
        <mesh {...props}>
          <sphereBufferGeometry args={[0.3, 64, 64]} />
          <meshStandardMaterial attach={'material'} map={texture} />
        </mesh>
      </mesh>
    )
  }

  const Track = () => {
    const ref = useRef<THREE.Mesh>(null!)
    const texture = useTexture(track)

    return (
      <mesh castShadow ref={ref}>
        <ringBufferGeometry args={[2.8, 5.5, 32]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    )
  }

  const All = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<THREE.Mesh>(null!)
    useFrame(() => {
      ref.current.rotateZ(-0.001) // speed
    })

    return (
      <mesh {...props} ref={ref}>
        <Track />
        <Ball rotation={[Math.PI / 2, 0, 0]} />
        <Satellite position={[-4.1, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow />
        <Satellite2 position={[5.1, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow />
      </mesh>
    )
  }

  const slideTo = (index: number) => swiperRef.slideTo(index)

  const fetchData = () => {
    fetch('https://nestdapp.io/nestwebApi/nestWebData')
      .then(res => res.json())
      .then(data => {
        setCounts(data.value)
        console.log(data)
      })
      .catch(e => console.log(e))
  }

  const numFormat = (num: any): string => {
    if (!num) return '0'
    num = num.toString().split('.')
    if (num[0].length > 6) {
      num[1] = num[0].slice(-6)
      num[0] = num[0].slice(0, -6)
    }
    var arr = num[0].split('').reverse()
    var res: any = []
    for (var i = 0, len = arr.length; i < len; i++) {
      if (i % 3 === 0 && i !== 0) {
        res.push(',')
      }
      res.push(arr[i])
    }
    res.reverse()
    if (num[1]) {
      res = res.join('').concat('.' + num[1].substr(0, 2))
    } else {
      res = res.join('')
    }
    return res
  }

  return (
    <MainWrapper>
      <Header>
        {width < breakpoint ? (
          <Flex justifyContent="space-between" alignItems="center">
            <NavLink onClick={() => slideTo(0)}>home</NavLink>
            <NavLink onClick={() => slideTo(1)}>data</NavLink>
            <NavLink onClick={() => slideTo(2)}>ecology</NavLink>
            <Button href="https://channel.nestprotocol.org/" target="_blank" rel="noreferrer">
              developers
            </Button>
          </Flex>
        ) : (
          <Flex justifyContent="space-between" alignItems="center">
            <Flex>
              <NavLink onClick={() => slideTo(0)}>home</NavLink>
              <NavLink onClick={() => slideTo(1)}>data</NavLink>
              <NavLink onClick={() => slideTo(2)}>ecology</NavLink>
            </Flex>
            <Logo />
            <Button href="https://docs.nestprotocol.org/" target="_blank" rel="noreferrer">
              developers
            </Button>
          </Flex>
        )}
      </Header>
      <PlanetWrap>
        <Canvas>
          <ambientLight intensity={0.01} />
          <directionalLight color="white" position={[800, 360, 30]} intensity={1.5} />
          <directionalLight color="white" position={[20, 20, 20]} intensity={0.12} castShadow />
          <Suspense fallback={null}>
            <All
              rotation={[-0.7, -0.35, 0]}
              position={width > height ? [-1, -0.5, 1.4] : [-1.5, -1, 0]}
            />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </PlanetWrap>
      <Content>
        <SwiperX
          direction={'vertical'}
          mousewheel={true}
          slidesPerView={'auto'}
          onSwiper={setSwiperRef}>
          <SwiperSlide>
            <Flex
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              width="100%"
              height="100%"
              color="#FFF"
              lineHeight="1">
              {width < breakpoint ? (
                <>
                  <Text fontSize="38px" mb="10px" fontWeight="700">
                    SECURING
                  </Text>
                  <Text fontSize="38px" mb="10px" fontWeight="700">
                    DECENTRALIZED
                  </Text>
                  <Text fontSize="38px" fontWeight="700">
                    ORACLES
                  </Text>
                  <Box textAlign="center" mt="40px" mb="30px" fontSize="16px" lineHeight="1.5">
                    The NEST Protocol is the most secure oracle to build your next breakthrough DeFi
                    creations
                  </Box>
                </>
              ) : (
                <>
                  <Text fontSize="0.56rem" mb="10px" fontWeight="700">
                    SECURING
                  </Text>
                  <Text fontSize="0.56rem" mb="10px" fontWeight="700">
                    DECENTRALIZED
                  </Text>
                  <Text fontSize="0.56rem" fontWeight="700">
                    ORACLES
                  </Text>
                  <Box
                    textAlign="center"
                    my="10px"
                    fontSize="21px"
                    lineHeight="1.5"
                    maxWidth="700px">
                    The NEST Protocol is the most secure oracle to build your next breakthrough DeFi
                    creations
                  </Box>
                </>
              )}
              <DappPopup />
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              width="100%"
              height="100%"
              textAlign="center"
              color="#FFF">
              <DataWrap>
                {width < breakpoint ? (
                  <>
                    <Box>
                      <Text fontSize="0.48rem" mb="5px" fontWeight="700">
                        {numFormat(counts.oracleCount)}
                      </Text>
                      <Text fontSize="0.14rem">NUMBER OF ORACLE</Text>
                    </Box>
                    <Box />
                    <Box />
                    <Box>
                      <Text fontSize="0.48rem" mb="5px" fontWeight="700">
                        {numFormat(counts.quoteCount)}
                      </Text>
                      <Text fontSize="0.14rem">CUMULATIVE QUOTES</Text>
                    </Box>
                    <Box>
                      <Text fontSize="0.48rem" mb="5px" fontWeight="700">
                        {numFormat(counts.appCount)}
                      </Text>
                      <Text fontSize="0.14rem">Number of apps called</Text>
                    </Box>
                    <Box />
                    <Box />
                    <Box>
                      <Text fontSize="0.48rem" mb="5px" fontWeight="700">
                        {numFormat(counts.priceCount)}
                      </Text>
                      <Text fontSize="0.14rem">CUMULATIVE CALLS</Text>
                    </Box>
                    <Box>
                      <Text fontSize="0.48rem" mb="5px" fontWeight="700">
                        {numFormat(counts.currentProfit)}
                        <Text fontSize="63%" display="inline">
                          M
                        </Text>
                      </Text>
                      <Text fontSize="0.14rem">
                        Current income
                        <br />
                        (USDT)
                      </Text>
                    </Box>
                    <Box />
                    <Box />
                    <Box>
                      <Text fontSize="0.48rem" mb="5px" fontWeight="700">
                        {numFormat(counts.totalProfit)}
                        <Text fontSize="63%" display="inline">
                          M
                        </Text>
                      </Text>
                      <Text fontSize="0.14rem">
                        Cumulative income
                        <br />
                        (USDT)
                      </Text>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box>
                      <Text fontSize="83px" fontWeight="700">
                        {numFormat(counts.oracleCount)}
                      </Text>
                      <Text fontSize="25px">NUMBER OF ORACLE</Text>
                    </Box>
                    <Box>
                      <Text fontSize="83px" fontWeight="700">
                        {numFormat(counts.quoteCount)}
                      </Text>
                      <Text fontSize="25px">CUMULATIVE QUOTES</Text>
                    </Box>
                    <Box>
                      <Text fontSize="83px" fontWeight="700">
                        {numFormat(counts.appCount)}
                      </Text>
                      <Text fontSize="25px">Number of apps called</Text>
                    </Box>
                    <Box>
                      <Text fontSize="83px" fontWeight="700">
                        {numFormat(counts.priceCount)}
                      </Text>
                      <Text fontSize="25px">CUMULATIVE CALLS</Text>
                    </Box>
                    <Box>
                      <Text fontSize="83px" fontWeight="700">
                        {numFormat(counts.currentProfit)}
                        <Text fontSize="63%" display="inline">
                          M
                        </Text>
                      </Text>
                      <Text fontSize="25px">Current income(USDT)</Text>
                    </Box>
                    <Box>
                      <Text fontSize="83px" fontWeight="700">
                        {numFormat(counts.totalProfit)}
                        <Text fontSize="63%" display="inline">
                          M
                        </Text>
                      </Text>
                      <Text fontSize="25px">Cumulative income(USDT)</Text>
                    </Box>
                  </>
                )}
              </DataWrap>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
              <Grid>
                {logoList.slice(0, 16).map(item => (
                  <LogoLink bg={item.bg} hoverBg={item.hoverBg} link={item.link} key={item.bg} />
                ))}
              </Grid>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
              <Grid>
                {logoList.slice(16, 32).map(item => (
                  <LogoLink bg={item.bg} hoverBg={item.hoverBg} link={item.link} key={item.bg} />
                ))}
              </Grid>
            </Flex>
          </SwiperSlide>
        </SwiperX>
      </Content>
      <Footer>
        <Box>&copy; {new Date().getFullYear()} NEST</Box>
      </Footer>
      <FooterLinks>
        {iconList.map(item => (
          <IconLink bg={item.bg} hoverBg={item.hoverBg} link={item.link} key={item.bg} />
        ))}
      </FooterLinks>
    </MainWrapper>
  )
}

export default App
