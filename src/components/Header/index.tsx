import {
  HStack,
  chakra,
  Spacer,
  Button,
  useMediaQuery,
  ModalBody,
  ModalContent,
  VStack,
  Stack,
  Modal,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import NEST_LOGO from '../../assets/svg/nest.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import Ecosystem from '../../pages/Ecosystem'
import Community from '../../pages/Community'
import Learn from '../../pages/Learn'
import * as React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import useScrollPosition from '@react-hook/window-scroll'
import BG_URL from '../../assets/webp/Footer_bg.webp'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const scrollY = useScrollPosition()

  const Menu = [
    { name: 'Ecosystem', path: 'ecosystem' },
    { name: 'Developers', path: 'developers' },
    { name: 'Community', path: 'community' },
    { name: 'Learn', path: 'learn' }
  ]

  return (
    <Stack
      px={['24px', '48px']}
      py={'24px'}
      position={'fixed'}
      w={'full'}
      align={'center'}
      bgImage={scrollY > 90 || location.pathname.includes('/developers') ? BG_URL : ''}
      bgSize={'100% 100%'}
      overflow={'hidden'}
      zIndex={'10'}
    >
      <HStack maxW={'1440px'} w={'full'} spacing={'24px'}>
        <chakra.img
          src={NEST_LOGO}
          alt="NEST Logo"
          h={'20px'}
          cursor={'pointer'}
          onClick={() => navigate('/')}
        />

        <Spacer />

        {isDesktop &&
          Menu.map(({ name, path }) => (
            <Button
              variant={"ghost"}
              key={name}
              cursor={'pointer'}
              onClick={() => {
                navigate(path)
              }}
              color={location.pathname.includes(path) ? '#EAAA00' : '#000'}
              fontWeight={location.pathname.includes(path) ? 'bold' : '500'}
            >
              {name}
            </Button>
          ))}

        {isDesktop && (
          <Button
            onClick={() => {
              navigate('developers#Set%20Up%20Your%20Local%20Environment')
            }}
          >
            Start Building
          </Button>
        )}

        {!isDesktop && (
          <>
            <Button onClick={onOpen} fontSize={'36px'} alignItems={'end'} p={0} variant={'ghost'}>
              <HamburgerIcon />
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              blockScrollOnMount={false}
              returnFocusOnClose={false}
              size={'full'}
            >
              <ModalContent zIndex={20}>
                <ModalCloseButton
                  size={'36px'}
                  _active={{ bg: 'none' }}
                  _hover={{ bg: 'none' }}
                  pt={'14px'}
                  px={'11px'}
                />
                <ModalBody p={'22px'}>
                  <VStack alignItems={'center'} pt={'100px'} spacing={'120px'}>
                    <VStack spacing={'17px'}>
                      {Menu.map(({ name, path }) => (
                        <Button
                          key={name}
                          color={location.pathname.includes(path) ? '#EAAA00' : '#000'}
                          fontWeight={location.pathname.includes(path) ? 'bold' : '500'}
                          variant={'ghost'}
                          fontSize={['17px', '24px']}
                          p={0}
                          onClick={() => {
                            if (path.includes('https')) {
                              window.open(path)
                            } else {
                              navigate(path)
                              onClose()
                            }
                          }}
                        >
                          {name}
                        </Button>
                      ))}
                    </VStack>
                    <Button
                      minH={'44px'}
                      px={'70px'}
                      onClick={() => {
                        navigate('developers#Set%20Up%20Your%20Local%20Environment')
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
  )
}

export default Header
