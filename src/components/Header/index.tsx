import {HStack, chakra, Spacer, Button} from "@chakra-ui/react";
import NEST_LOGO from "../../assets/svg/nest.svg";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const Menu = [
    {name: 'Ecosystem', path: 'ecosystem'},
    {name: 'Developers', path: 'developers'},
    {name: 'Community', path: 'community'},
    {name: 'Learn', path: 'learn'},
  ]

  return (
    <HStack px={['48px']} py={'28px'} spacing={'24px'}>
      <chakra.a href={'/#/'}>
        <chakra.img
          src={NEST_LOGO} alt="NEST Logo" h={'20px'}
          cursor={'pointer'}
        />
      </chakra.a>

      <Spacer/>

      {Menu.map(({name, path}) => (
        <chakra.a
          cursor={'pointer'}
          href={'/#/' + path}
          key={name}
        >
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