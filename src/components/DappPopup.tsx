import styled from '@emotion/styled'
import { useState } from 'react'
import { Flex, Box } from 'rebass'

const Wrap = styled.div`
  padding-bottom: 20px;
  position: relative;
`

const DappButton = styled.div`
  width: 200px;
  height: 48px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border: 2px solid currentColor;
  border-radius: 24px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #eaaa00;
    border: 2px solid currentColor;
  }

  @media (min-width: 768px) {
    width: 202px;
    height: 44px;
    font-size: 17px;
    border-radius: 22px;
  }
`

const DappPopupWrap = styled(Flex)`
  width: 180px;
  height: 80px;
  padding: 0 10px;
  background: #ffffff;
  border-radius: 16px;
  position: absolute;
  top: 58px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  color: #718bb1;

  a {
    color: #718bb1;
    text-decoration: none;
  }

  @media (min-width: 768px) {
   top: 50px;
  }
`

const DappPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <Wrap onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
      <DappButton>NEST DAPP</DappButton>
      {showPopup ? (
        <DappPopupWrap alignItems="center" justifyContent="space-evenly" flexDirection="column">
          <Box>
            <a href="https://nestdapp.io/">nest dapp web</a>
          </Box>
          <Box width="100%" height="1px" backgroundColor="#DCDCDC"></Box>
          <Box>
            <a href="https://nestdapp.io/download/nest.html">download dapp</a>
          </Box>
        </DappPopupWrap>
      ) : null}
    </Wrap>
  )
}

export default DappPopup
