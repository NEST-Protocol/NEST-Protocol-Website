import styled from '@emotion/styled'
import { Flex } from 'rebass'

type Props = {
  bg: string
  hoverBg: string
  link: string
}

const LogoIcon = styled.a<{ bg: string; hoverBg: string }>`
  width: auto;
  height: 0.3rem;
  background: url(${props => props.bg}) center center / contain no-repeat;
  display: block;

  &:hover {
    background: url(${props => props.hoverBg}) center center / contain no-repeat;
  }

  @media (min-width: 768px) {
    max-height: 40px;
    height: 0.2rem;
  }

  img {
    width: auto;
    height: 0.3rem;
    opacity: 0;

    @media (min-width: 768px) {
      max-height: 40px;
      height: 0.2rem;
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
