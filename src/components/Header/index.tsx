import {HStack, chakra, Spacer, Button} from "@chakra-ui/react";
import NEST_LOGO from "../../assets/svg/nest.svg";

const Header = () => {
  const Menu = [
    { name: 'Ecosystem', path: '/#/ecosystem' },
    { name: 'Developers', path: '/#/developers' },
    { name: 'Community', path: '/#/community' },
    { name: 'Learn', path: '/#/learn' },
  ]

  return (
    <HStack px={['48px']} py={'28px'} spacing={'24px'}>
      <chakra.a href={'/'}>
        <chakra.img src={NEST_LOGO} alt="NEST Logo" h={'20px'}/>
      </chakra.a>

      <Spacer/>

      {Menu.map(({name, path}) => (
        <chakra.a key={name} href={path}>
          {name}
        </chakra.a>
      ))}

      <Button>
        Start Building
      </Button>
    </HStack>
  );
}

export default Header;