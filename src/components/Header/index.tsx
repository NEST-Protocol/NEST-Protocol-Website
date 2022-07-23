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
  useDisclosure,
  PopoverContent,
  Portal,
  Popover, PopoverTrigger,
} from '@chakra-ui/react'
import NEST_LOGO from '../../assets/svg/nest.svg'
import {useLocation, useNavigate} from 'react-router-dom'
import * as React from 'react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {useState} from "react";

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [showLearn, setShowLearn] = useState(false)

  const menu = [
    {name: 'Ecosystem', pathname: 'ecosystem'},
    {name: 'Developers', pathname: 'docs'},
    {name: 'Community', pathname: 'community'},
  ]

  const learn = [
    {name: 'About NEST', pathname: 'about'},
    // {name: 'NEST Research Academy', pathname: 'research'},
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
          menu.map(({name, pathname}) => (
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
          <Popover orientation={'vertical'} size={'sm'}>
            <PopoverTrigger>
              <Button variant={"ghost"}>Learn</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent borderRadius={'20px'} py={'12px'} w={'260px'}>
                { learn.map(({pathname, name}) => (
                  <Button
                    color={location.pathname.includes(pathname) ? '#EAAA00' : '#003232'}
                    fontWeight={location.pathname.includes(pathname) ? 'bold' : '500'}
                    key={name}
                    variant={'ghost'}
                    onClick={() => {
                      navigate(pathname)
                      window.scrollTo(0, 0)
                    }}
                  >{name}</Button>
                )) }
              </PopoverContent>
            </Portal>
          </Popover>
        ) }

        {isDesktop && (
          <Button
            minW={'120px'}
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
                      {menu.map(({name, pathname}) => (
                        <Button
                          key={name}
                          color={location.pathname.includes(pathname) ? '#EAAA00' : '#003232'}
                          fontWeight={location.pathname.includes(pathname) ? 'bold' : '600'}
                          variant={'ghost'}
                          fontSize={'25px'}
                          p={0}
                          onClick={() => {
                            navigate(pathname)
                            window.scrollTo(0, 0)
                            onClose()
                          }}
                        >
                          {name}
                        </Button>
                      ))}

                      <Button
                        variant={'ghost'}
                        fontSize={'25px'}
                        _active={{ color: '#7D7D7D' }}
                        _hover={{ color: '#7D7D7D' }}
                        color={showLearn ? '#7D7D7D' : '#003232'}
                        fontWeight={'600'}
                        p={0}
                        onClick={() => {
                          setShowLearn(!showLearn)
                        }}
                      >
                        Learn
                      </Button>

                      { showLearn && learn.map(({pathname, name}) => (
                        <Button
                          color={location.pathname.includes(pathname) ? '#EAAA00' : '#003232'}
                          fontWeight={location.pathname.includes(pathname) ? 'bold' : '600'}
                          key={name}
                          fontSize={'20px'}
                          variant={'ghost'}
                          p={0}
                          onClick={() => {
                            navigate(pathname)
                            window.scrollTo(0, 0)
                            onClose()
                          }}
                        >{name}</Button>
                      )) }
                    </VStack>
                    <Button
                      minH={'44px'}
                      px={'70px'}
                      minW={'120px'}
                      onClick={() => {
                        window.open('https://finance.nestprotocol.org/#/futures', '_blank')
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
