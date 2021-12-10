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
import LogoLink from '../../components/LogoLink'
import IconLink from '../../components/IconLink'

import github_icon from '../../assets/images/gihub_icon.svg'
import twitter_icon from '../../assets/images/twitter_icon.svg'
import telegram_icon from '../../assets/images/telegram_icon.svg'
import whitepaper_icon from '../../assets/images/whitepaper_icon.svg'
import github_icon2 from '../../assets/images/gihub_icon_2.svg'
import twitter_icon2 from '../../assets/images/twitter_icon_2.svg'
import telegram_icon2 from '../../assets/images/telegram_icon_2.svg'
import whitepaper_icon2 from '../../assets/images/whitepaper_icon_2.svg'

import logo from '../../assets/images/nest.svg'
import planet3 from '../../assets/images/planet-3.jpg'
import planet2 from '../../assets/images/planet-2.jpg'
import planet1 from '../../assets/images/saturnmap.jpg'
import track from '../../assets/images/track.png'
import logo1 from '../../assets/images/nest-labs.png'
import logo2 from '../../assets/images/crypto.png'
import logo3 from '../../assets/images/iNFT.png'
import logo4 from '../../assets/images/CoFiX.png'
import logo5 from '../../assets/images/winkrypto.png'
import logo6 from '../../assets/images/PARASSET.png'
import logo7 from '../../assets/images/huobi.png'
import logo8 from '../../assets/images/fortube.png'
import logo9 from '../../assets/images/polygon.png'
import logo1_active from '../../assets/images/nest-labs_2.png'
import logo2_active from '../../assets/images/crypto_2.png'
import logo3_active from '../../assets/images/iNFT_2.png'
import logo4_active from '../../assets/images/CoFiX_2.png'
import logo5_active from '../../assets/images/winkrypto_2.png'
import logo6_active from '../../assets/images/PARASSET_2.png'
import logo7_active from '../../assets/images/huobi_2.png'
import logo8_active from '../../assets/images/fortube_2.png'
import logo9_active from '../../assets/images/polygon_2.png'

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
  z-index: 30;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 17px;
    padding: 44px;
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
  grid-template-columns: 1fr;
  grid-gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 160px 140px;
  }
`

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 120px 88px;
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

const Index: React.FC = () => {
  const breakpoint = 768
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const [swiperRef, setSwiperRef] = useState<any>(null)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  const logoList = useMemo(() => {
    return [
      { bg: logo1, hoverBg: logo1_active, link: '#' },
      { bg: logo2, hoverBg: logo2_active, link: 'https://crypto.com/' },
      { bg: logo3, hoverBg: logo3_active, link: 'https://inft.io/' },
      { bg: logo4, hoverBg: logo4_active, link: 'https://cofix.tech/#/swap' },
      { bg: logo5, hoverBg: logo5_active, link: 'https://www.winkrypto.com/' },
      { bg: logo6, hoverBg: logo6_active, link: 'https://www.parasset.top/#/home' },
      { bg: logo7, hoverBg: logo7_active, link: 'https://www.huobi.com/' },
      { bg: logo8, hoverBg: logo8_active, link: 'https://for.tube/' },
      { bg: logo9, hoverBg: logo9_active, link: 'https://polygon.technology/' }
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
      ref.current.rotateZ(-0.02) // speed
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

  return (
    <MainWrapper>
      <Header>
        {width < breakpoint ? (
          <Flex justifyContent="space-between" alignItems="center">
            <NavLink onClick={() => slideTo(0)}>home</NavLink>
            <NavLink onClick={() => slideTo(1)}>data</NavLink>
            <NavLink onClick={() => slideTo(2)}>ecology</NavLink>
            <Button href="https://docs.nestprotocol.org/" target="_blank" rel="noreferrer">
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
                  <Box textAlign="center" mt="40px" fontSize="16px" lineHeight="1.5">
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
                    mt="44px"
                    fontSize="21px"
                    lineHeight="1.5"
                    maxWidth="700px">
                    The NEST Protocol is the most secure oracle to build your next breakthrough DeFi
                    creations
                  </Box>
                </>
              )}
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
                      <Text fontSize="48px" mb="5px" fontWeight="700">
                        56
                      </Text>
                      <Text fontSize="14px">NUMBER OF ORACLE</Text>
                    </Box>
                    <Box>
                      <Text fontSize="48px" mb="5px" fontWeight="700">
                        48.5
                        <Text fontSize="24px" display="inline">
                          M
                        </Text>
                      </Text>
                      <Text fontSize="14px">CUMULATIVE QUOTES</Text>
                    </Box>
                    <Box>
                      <Text fontSize="48px" mb="5px" fontWeight="700">
                        12,463
                      </Text>
                      <Text fontSize="14px">CUMULATIVE CALLS</Text>
                    </Box>
                    <Box>
                      <Text fontSize="48px" mb="5px" fontWeight="700">
                        128.32
                      </Text>
                      <Text fontSize="14px">CUMULATIVE INCOME (ETH)</Text>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box>
                      <Text fontSize="83px" fontWeight="700">
                        56
                      </Text>
                      <Text fontSize="25px">NUMBER OF ORACLE</Text>
                    </Box>
                    <Box>
                      <Text fontSize="83px" fontWeight="700">
                        48.5
                        <Text fontSize="42px" display="inline">
                          M
                        </Text>
                      </Text>
                      <Text fontSize="25px">CUMULATIVE QUOTES</Text>
                    </Box>
                    <Box>
                      <Text fontSize="83px" fontWeight="700">
                        12,463
                      </Text>
                      <Text fontSize="25px">CUMULATIVE CALLS</Text>
                    </Box>
                    <Box>
                      <Text fontSize="83px" fontWeight="700">
                        128.32
                      </Text>
                      <Text fontSize="25px">CUMULATIVE INCOME (ETH)</Text>
                    </Box>
                  </>
                )}
              </DataWrap>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              alignItems="center"
              justifyContent="center"
              width="100%"
              height="100%"
              color="#FFF">
              <Grid>
                {logoList.map(item => (
                  <LogoLink bg={item.bg} hoverBg={item.hoverBg} link={item.link} key={item.bg} />
                ))}
              </Grid>
            </Flex>
          </SwiperSlide>
        </SwiperX>
      </Content>
      <Footer>
        <Flex justifyContent="space-between" color="#FFF">
          <Box>&copy; {new Date().getFullYear()} NEST</Box>
          <Flex>
            {iconList.map(item => (
              <IconLink bg={item.bg} hoverBg={item.hoverBg} link={item.link} key={item.bg} />
            ))}
          </Flex>
        </Flex>
      </Footer>
    </MainWrapper>
  )
}

export default Index
