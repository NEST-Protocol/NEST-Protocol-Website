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
    { name: 'Ecosystem', pathname: 'ecosystem' },
    { name: 'Developers', pathname: 'docs' },
    { name: 'Community', pathname: 'community' },
    { name: 'Learn', pathname: 'learn' }
  ]

  return (
    <Stack
      px={['24px', '48px']}
      py={'24px'}
      position={'fixed'}
      w={'full'}
      align={'center'}
      bgImage={scrollY > 90 || location.pathname.includes('/docs') ? BG_URL : ''}
      bgSize={'cover'}
      overflow={'hidden'}
      zIndex={'10'}
    >
      <HStack maxW={'1440px'} w={'full'} spacing={'24px'}>
        <chakra.img
          src={NEST_LOGO}
          alt="NEST Logo"
          h={'20px'}
          cursor={'pointer'}
          onClick={() => {
            navigate('/')
            window.scrollTo(0, 0)
          }}
        />

        <Spacer />

        {isDesktop &&
          Menu.map(({ name, pathname }) => (
            <Button
              variant={'ghost'}
              key={name}
              cursor={'pointer'}
              onClick={() => {
                navigate(pathname)
                window.scrollTo(0, 0)
              }}
              color={location.pathname.includes(pathname) ? '#EAAA00' : '#003232'}
              fontWeight={location.pathname.includes(pathname) ? 'bold' : '500'}
            >
              {name}
            </Button>
          ))}

        {isDesktop && (
          <Button
            onClick={() => {
              navigate('/docs/Guide/Set-Up-Local-Environment.md')
              window.scrollTo(0, 0)
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
                      {Menu.map(({ name, pathname }) => (
                        <Button
                          key={name}
                          color={location.pathname.includes(pathname) ? '#EAAA00' : '#003232'}
                          fontWeight={location.pathname.includes(pathname) ? 'bold' : '600'}
                          variant={'ghost'}
                          fontSize={'25px'}
                          p={0}
                          onClick={() => {
                            if (pathname.includes('https')) {
                              window.open(pathname)
                            } else {
                              navigate(pathname)
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
                        navigate('/docs/Guide/Set-Up-Local-Environment.md')
                        onClose()
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
