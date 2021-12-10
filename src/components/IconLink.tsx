import styled from '@emotion/styled'

type Props = {
  bg: string
  hoverBg: string
  link: string
}

const LinkIcon = styled.a<{ bg: string; hoverBg: string }>`
  width: 20px;
  height: 20px;
  margin-left: 14px;
  background: url(${props => props.bg}) center center / cover no-repeat;

  &:hover {
    background: url(${props => props.hoverBg}) center center / cover no-repeat;
  }

  display: block;

  @media (min-width: 768px) {
    width: 26px;
    height: 26px;
    margin-left: 24px;
  }
`

const IconLink: React.FC<Props> = ({ bg, hoverBg, link }) => {
  return <LinkIcon bg={bg} hoverBg={hoverBg} href={link} target="_blank" rel="noreferrer" />
}

export default IconLink
