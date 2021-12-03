// @ts-ignore

import styled from '@emotion/styled'
import { Flex, Box, Text } from 'rebass'

import bg from '../../assets/images/planet-1.jpg'
import github_icon from '../../assets/images/gihub_icon.svg'
import twitter_icon from '../../assets/images/twitter_icon.svg'
import telegram_icon from '../../assets/images/telegram_icon.svg'

import logo1 from '../../assets/images/nest-labs.png'
import logo2 from '../../assets/images/crypto.png'
import logo3 from '../../assets/images/iNFT.png'
import logo4 from '../../assets/images/CoFiX.png'
import logo5 from '../../assets/images/winkrypto.png'
import logo6 from '../../assets/images/PARASSET.png'
import logo7 from '../../assets/images/huobi.png'
import logo8 from '../../assets/images/fortube.png'
import logo9 from '../../assets/images/polygon.png'

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg}) center center / cover no-repeat;
`

const Header = styled.header`
  width: 100%;
  position: fixed;
  padding: 24px 12px;
  top: 0;
  left: 0;
`

const NavLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #ffffff;

  &:hover {
    color: #eaaa00;
  }
`

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  padding: 24px 20px;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
`

const LinkIcon = styled.a<{ bg: string }>`
  width: 20px;
  height: 20px;
  margin-left: 14px;
  background: url(${props => props.bg}) center center / cover no-repeat;
  display: block;
`

const Content = styled.section`
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
`

const Button = styled.a`
  width: 180px;
  height: 48px;
  background: #eaaa00;
  border-radius: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 60px 30px;

  img {
    width: auto;
    height: 100%;
  }
`

const index: React.FC = () => {
  const logoArr = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]

  return (
    <MainWrapper>
      <Header>
        <Flex justifyContent="space-between">
          <NavLink>home</NavLink>
          <NavLink>data</NavLink>
          <NavLink>ecology</NavLink>
          <NavLink>developers</NavLink>
        </Flex>
      </Header>
      <Content>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          height="100%"
          color="#FFF">
          <Text fontSize="38px" mb="10px" fontWeight="700">
            SECURING
          </Text>
          <Text fontSize="38px" mb="10px" fontWeight="700">
            DECENTRALIZED
          </Text>
          <Text fontSize="38px" fontWeight="700">ORACLES</Text>
          <Box textAlign="center" mt="20px" mb="30px">
            The NEST Protocol is the most secure oracle to build your next breakthrough DeFi
            creations
          </Box>
          <Button>White paper</Button>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          height="100%"
          textAlign="center"
          color="#FFF">
          <Box mb="30px">
            <Text fontSize="48px" mb="5px" fontWeight="700">
              56
            </Text>
            <Text fontSize="14px">NUMBER OF ORACLE</Text>
          </Box>
          <Box mb="30px">
            <Text fontSize="48px" mb="5px" fontWeight="700" display="inline">
              48.5
              <Text fontSize="24px" display="inline">
                M
              </Text>
            </Text>
            <Text fontSize="14px">CUMULATIVE QUOTES</Text>
          </Box>
          <Box mb="30px">
            <Text fontSize="48px" mb="5px" fontWeight="700">
              12,463
            </Text>
            <Text fontSize="14px">CUMULATIVE CALLS</Text>
          </Box>
          <Box mb="30px">
            <Text fontSize="48px" mb="5px" fontWeight="700">
              128.32
            </Text>
            <Text fontSize="14px">CUMULATIVE INCOME (ETH)</Text>
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          height="100%"
          color="#FFF">
          <Grid>
            {logoArr.map(item => (
              <Box height="30px" textAlign="center" key={item}>
                <img src={item} alt="logo" />
              </Box>
            ))}
          </Grid>
        </Flex>
      </Content>
      <Footer>
        <Flex justifyContent="space-between" color="#FFF" fontSize="14px">
          <Box>&copy; 2021 NEST</Box>
          <Flex>
            <LinkIcon
              bg={github_icon}
              href="http://www.baidu.com"
              target="_blank"
              rel="noreferrer"></LinkIcon>
            <LinkIcon
              bg={telegram_icon}
              href="http://www.baidu.com"
              target="_blank"
              rel="noreferrer"></LinkIcon>
            <LinkIcon
              bg={twitter_icon}
              href="http://www.baidu.com"
              target="_blank"
              rel="noreferrer"></LinkIcon>
          </Flex>
        </Flex>
      </Footer>
    </MainWrapper>
  )
}

export default index
