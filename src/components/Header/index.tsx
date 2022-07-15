import {
  HStack,
  chakra,
  Spacer,
  Button,
  Link,
  useMediaQuery,
  ModalBody,
  ModalContent,
  VStack, Stack,
  Modal, ModalCloseButton, useDisclosure
} from "@chakra-ui/react";
import NEST_LOGO from "../../assets/svg/nest.svg";
import {useLocation, useNavigate} from "react-router-dom";
import Ecosystem from "../../pages/Ecosystem";
import Community from "../../pages/Community";
import Learn from "../../pages/Learn";
import * as React from "react";
import {HamburgerIcon} from "@chakra-ui/icons";
import useScrollPosition from '@react-hook/window-scroll'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const {isOpen, onOpen, onClose} = useDisclosure()
  const scrollY = useScrollPosition()

  const Menu = [
    {name: 'Ecosystem', path: '/#/ecosystem'},
    {name: 'Developers', path: 'https://docs.nestprotocol.org/'},
    {name: 'Community', path: '/#/community'},
    {name: 'Learn', path: '/#/learn'},
  ]

  return (
    <Stack px={['24px', '48px']} py={'28px'} position={'fixed'} w={'full'} align={"center"}
            bg={scrollY > (isDesktop ? 570 : 450) ? "rgba(200,200,200,0.8)" : ''} zIndex={'10'}>
      <HStack maxW={'1440px'} w={"full"} spacing={'24px'} >
        <chakra.img
          src={NEST_LOGO} alt="NEST Logo" h={'20px'}
          cursor={'pointer'}
          onClick={() => navigate('/')}
        />

        <Spacer/>

        {isDesktop && Menu.map(({name, path}) => (
          <Link
            key={name}
            cursor={'pointer'}
            href={path}
            style={{textDecoration: path.includes('https') ? '' : 'none'}}
            isExternal={path.includes('https')}
            color={location.pathname === path.slice(2) ? '#EAAA00' : '#000'}
          >
            {name}
          </Link>
        ))}

        {isDesktop && (
          <Button
            onClick={() => {
              window.open('https://channel.nestprotocol.org/')
            }}>
            Start Building
          </Button>
        )}

        {!isDesktop && (
          <>
            <Button onClick={onOpen} fontSize={'36px'} alignItems={"end"} p={0} variant={'ghost'}>
              <HamburgerIcon/>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} returnFocusOnClose={false}
                   size={"full"}>
              <ModalContent zIndex={20}>
                <ModalCloseButton size={'36px'} _active={{bg: 'none'}} _hover={{bg: 'none'}} pt={'14px'} px={'11px'}/>
                <ModalBody p={'22px'}>
                  <VStack alignItems={"center"} pt={'100px'} spacing={'120px'}>
                    <VStack spacing={'17px'}>
                      {Menu.map(({name, path}) => (
                        <Button
                          key={name} fontWeight={'semibold'}
                          color={location.pathname === path.slice(2) ? '#EAAA00' : '#000'}
                          variant={'ghost'} fontSize={['17px', '24px']}
                          p={0} onClick={() => {
                          if (path.includes('https')) {
                            window.open(path)
                          } else {
                            window.location.href = path
                            onClose()
                          }
                        }}>
                          {name}
                        </Button>
                      ))}
                    </VStack>
                    <Button
                      minH={'44px'} px={'70px'}
                      onClick={() => {
                        window.open('https://channel.nestprotocol.org/')
                      }}
                    >
                      Start Building
                    </Button>
                  </VStack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )}
      </HStack>
    </Stack>
  );
}

export default Header;