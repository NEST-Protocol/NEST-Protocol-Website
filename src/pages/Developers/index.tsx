import { HStack, Stack, useMediaQuery, Text, Divider, Button } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css/github-markdown-light.css'
import { useLocation, useNavigate } from 'react-router-dom'
import {Helmet} from "react-helmet";
import * as React from "react";

const Developers = () => {
  const [md, setMd] = useState('')
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const menu = [
    {
      title: 'Overview',
      children: [
        {
          title: 'What is NEST?',
          pathname: '/docs/overview.md'
        }
      ]
    },
    {
      title: 'Guild',
      children: [
        {
          title: 'Set Up Local Environment',
          pathname: '/docs/Guide/Set-Up-Local-Environment.md'
        }
      ]
    },
    {
      title: 'Technical Reference',
      children: [
        {
          title: 'NEST Probability Virtual Machine',
          pathname: '/docs/Technical-Reference/NEST-Probability-Virtual-Machine.md'
        },
        {
          title: 'NEST Oracle',
          pathname: '/docs/Technical-Reference/NEST-Oracle.md'
        },
        {
          title: 'Contract Deployment',
          pathname: '/docs/Technical-Reference/Contract-Deployment.md'
        },
        {
          title: 'Error Codes',
          pathname: '/docs/Technical-Reference/Error-Codes.md'
        }
      ]
    }
  ]
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/docs') {
      navigate('/docs/overview.md')
    }
  }, [location.pathname])

  const fetchMd = useCallback(async () => {
    if (location.pathname.replace('/docs', '') !== '') {
      fetch('https://raw.githubusercontent.com/NEST-Protocol/NEST-Docs/test' + location.pathname)
        .then(res => res.text())
        .then(text => {
          setMd(text)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }, [location.pathname])

  useEffect(() => {
    fetchMd()
  }, [fetchMd])

  return (
    <Stack w={'full'} align={'center'} px={['24px', '48px']}>
      <Helmet>
        <title>NEST Developers</title>
      </Helmet>
      <HStack
        maxW={'1440px'}
        w={'full'}
        align={'start'}
        spacing={'48px'}
        justifyContent={'space-between'}
      >
        {isDesktop && (
          <Stack
            minW={'300px'}
            maxW={'300px'}
            py={'24px'}
            position={'sticky'}
            top={'88px'}
            fontSize={'15px'}
            spacing={'24px'}
          >
            <HStack>
              <Button
                w={'150px'}
                fontWeight={600}
                variant={'outline'}
                onClick={() => {
                  window.open('https://github.com/NEST-Protocol/', '_blank')
                }}
              >
                Github
              </Button>
            </HStack>
            <Divider />
            {menu.map(item => (
              <Stack key={item.title}>
                <Text fontWeight={600} color={'#003232'}>
                  {item.title}
                </Text>
                {item.children.map(child => (
                  <Text
                    _hover={{ color: '#EAAA00' }}
                    color={location.pathname === child.pathname ? '#EAAA00' : '#003232'}
                    fontWeight={location.pathname === child.pathname ? 600 : 400}
                    key={child.title}
                    cursor={'pointer'}
                    onClick={() => {
                      navigate(child.pathname)
                    }}
                  >
                    {child.title}
                  </Text>
                ))}
              </Stack>
            ))}
          </Stack>
        )}
        <Stack minW={['full', '768px']} maxW={['full', '768px']} pt={'112px'} minH={'50vh'}>
          <ReactMarkdown children={md} remarkPlugins={[remarkGfm]} className={'markdown-body'} />
        </Stack>

        {isDesktop && (
          <Stack
            minW={'300px'}
            maxW={'300px'}
            py={'24px'}
            position={'sticky'}
            top={'88px'}
            fontSize={'15px'}
            spacing={'24px'}
          >
            <Text
              _hover={{ color: '#EAAA00' }}
              fontSize={'15px'}
              color={'#003232'}
              cursor={'pointer'}
              fontWeight={'600'}
              onClick={() => {
                window.open(
                  'https://github.com/NEST-Protocol/NEST-Docs/blob/test' + location.pathname,
                  '_blank'
                )
              }}
            >
              Edit on GitHub
            </Text>
          </Stack>
        )}
      </HStack>
    </Stack>
  )
}

export default Developers
