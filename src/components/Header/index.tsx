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
import {useLocation, useNavigate} from 'react-router-dom'
import * as React from 'react'
import {HamburgerIcon} from '@chakra-ui/icons'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const {isOpen, onOpen, onClose} = useDisclosure()

  const Menu = [
    {name: 'Ecosystem', pathname: 'ecosystem'},
    {name: 'Developers', pathname: 'docs'},
    {name: 'Community', pathname: 'community'},
    {name: 'Learn', pathname: 'learn'}
  ]

  return (
    <Stack
      position={'absolute'}
      top={0}
      w={'full'}
      align={'center'}
      bgSize={'cover'}
      overflow={'hidden'}
      zIndex={10}
      spacing={0}
    >
      <HStack
        maxW={'1440px'}
        w={'full'}
        px={['24px', '48px']}
        py={'24px'}
        spacing={'24px'}>
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

        <Spacer/>

        {isDesktop &&
          Menu.map(({name, pathname}) => (
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
              window.open('https://finance.nestprotocol.org/#/win', '_blank')
            }}
          >
            Trade
          </Button>
        )}

        {!isDesktop && (
          <>
            <Button onClick={onOpen} fontSize={'36px'} alignItems={'end'} p={0} variant={'ghost'}>
              <HamburgerIcon/>
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
                  _active={{bg: 'none'}}
                  _hover={{bg: 'none'}}
                  pt={'14px'}
                  px={'11px'}
                />
                <ModalBody p={'22px'}>
                  <VStack alignItems={'center'} pt={'100px'} spacing={'120px'}>
                    <VStack spacing={'17px'}>
                      {Menu.map(({name, pathname}) => (
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
                        window.open('https://finance.nestprotocol.org/#/win', '_blank')
                      }}
                    >
                      Trade
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
