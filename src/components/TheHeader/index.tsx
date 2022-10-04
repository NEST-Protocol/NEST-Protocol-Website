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
  useDisclosure, Link,
} from '@chakra-ui/react'
import * as React from 'react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {useLocation} from '@docusaurus/router';

const TheHeader = () => {
  const [isPhone] = useMediaQuery('(max-width: 768px)')
  const {isOpen, onOpen, onClose} = useDisclosure()
  const location = useLocation();

  const menu = [
    {name: 'NEST Fi', pathname: '/nest-fi'},
    {name: 'Developers', pathname: '/developers'},
    {name: 'Doc', pathname: '/docs/PVM-Technical-Reference'},
    {name: 'Blog', pathname: '/blogs'},
    {name: 'About', pathname: '/about'}
  ]

  return (
    <Stack
      position={'absolute'}
      top={0}
      w={'100%'}
      align={'center'}
      bgSize={'cover'}
      overflow={'hidden'}
      zIndex={10}
      spacing={0}
      px={['24px', '48px']}
      h={['60px', '88px']}
      alignItems={"center"}
      justify={"center"}
    >
      <HStack
        maxW={'1920px'}
        w={'100%'}
        spacing={'24px'}>
        <chakra.img
          src={"/img/logo.svg"}
          alt=""
          h={'20px'}
          cursor={'pointer'}
          onClick={() => {
            window.location.pathname = '/'
          }}
        />

        <Spacer/>

        {!isPhone &&
          menu.map(({name, pathname}) => (
            <Link
              key={name}
              cursor={'pointer'}
              aria-label={name}
              href={pathname}
              variant={"ghost"}
              fontSize={'15px'}
              color={location.pathname.includes(pathname) ? '#EAAA00' : '#003232'}
              fontWeight={location.pathname.includes(pathname) ? '700' : '500'}
            >
              {name}
            </Link>
          ))}

        {!isPhone && (
          <Button
            minW={'120px'}
            variant={"solid"}
            aria-label={'App'}
            color={'#003232'}
            borderRadius={'full'}
            bg={'#EAAA00'}
            onClick={() => {
              window.open('https://finance.nestprotocol.org/', '_blank')
            }}
          >
            App
          </Button>
        )}

        {isPhone && (
          <>
            <Button onClick={onOpen} fontSize={'36px'} alignItems={'end'} p={0} variant={"ghost"} _active={{bg: null}}
                    _hover={{bg: null}} aria-label={'menu'}>
              <HamburgerIcon/>
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              blockScrollOnMount={false}
              returnFocusOnClose={false}
              size={'full'}
            >
              <ModalContent>
                <ModalCloseButton
                  size={'36px'}
                  mt={'14px'}
                  mx={'11px'}
                />
                <ModalBody p={'22px'}>
                  <VStack alignItems={'center'} pt={'100px'} spacing={'120px'}>
                    <VStack spacing={'17px'}>
                      {menu.map(({name, pathname}) => (
                        <Button
                          key={name}
                          aria-label={name}
                          color={location.pathname.includes(pathname) ? '#EAAA00' : '#003232'}
                          fontWeight={location.pathname.includes(pathname) ? 'bold' : '600'}
                          variant={'ghost'}
                          fontSize={'25px'}
                          _active={{bg: null}}
                          _hover={{bg: null}}
                          p={0}
                          onClick={() => {
                            window.location.pathname = pathname
                            onClose()
                          }}
                        >
                          {name}
                        </Button>
                      ))}

                    </VStack>
                    <Button
                      variant={'solid'}
                      aria-label={'App'}
                      bg={'#EAAA00'}
                      borderRadius={'full'}
                      _active={{bg: null}}
                      _hover={{bg: null}}
                      minH={'44px'}
                      px={'70px'}
                      minW={'120px'}
                      onClick={() => {
                        window.open('https://finance.nestprotocol.org/', '_blank')
                      }}
                    >
                      App
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

export default TheHeader
