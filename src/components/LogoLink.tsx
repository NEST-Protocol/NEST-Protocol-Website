import styled from '@emotion/styled'
import { Flex } from 'rebass'

type Props = {
  bg: string
  hoverBg: string
  link: string
}

const LogoIcon = styled.a<{ bg: string; hoverBg: string }>`
  width: auto;
  height: 30px;
  background: url(${props => props.bg}) center center / contain no-repeat;
  display: block;

  &:hover {
    background: url(${props => props.hoverBg}) center center / contain no-repeat;
  }

  @media (min-width: 768px) {
    height: 44px;
  }

  img {
    width: auto;
    height: 30px;
    opacity: 0;

    @media (min-width: 768px) {
      height: 44px;
    }
  }
`

const LogoLink: React.FC<Props> = ({ bg, hoverBg, link }) => {
  return (
    <LogoIcon bg={bg} hoverBg={hoverBg} href={link} target="_blank" rel="noreferrer">
      <Flex justifyContent="center">
        <img src={bg} alt="logo" />
      </Flex>
    </LogoIcon>
  )
}

export default LogoLink
