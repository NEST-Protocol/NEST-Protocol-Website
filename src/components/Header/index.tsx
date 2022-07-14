import {HStack, chakra, Spacer, Button, Link} from "@chakra-ui/react";
import NEST_LOGO from "../../assets/svg/nest.svg";
import {useLocation, useNavigate} from "react-router-dom";
import Ecosystem from "../../pages/Ecosystem";
import Community from "../../pages/Community";
import Learn from "../../pages/Learn";
import * as React from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const Menu = [
    {name: 'Ecosystem', path: '/#/ecosystem'},
    {name: 'Developers', path: 'https://docs.nestprotocol.org/'},
    {name: 'Community', path: '/#/community'},
    {name: 'Learn', path: '/#/learn'},
  ]

  return (
    <HStack px={['48px']} py={'28px'} spacing={'24px'} position={'fixed'} w={'full'}>
      <chakra.img
        src={NEST_LOGO} alt="NEST Logo" h={'20px'}
        cursor={'pointer'}
        onClick={() => navigate('/')}
      />

      <Spacer/>

      {Menu.map(({name, path}) => (
        <Link
          key={name}
          cursor={'pointer'}
          href={path}
          style={{ textDecoration: path.includes('https') ? '' : 'none' }}
          isExternal={path.includes('https')}
          color={location.pathname === path.slice(2) ? '#EAAA00' : '#000'}
        >
          {name}
        </Link>
      ))}

      <Button>
        Start Building
      </Button>
    </HStack>
  );
}

export default Header;