import {HStack, Stack, useMediaQuery, Text, Divider, Button} from '@chakra-ui/react'
import {useCallback, useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import 'github-markdown-css/github-markdown-light.css';

const Developers = () => {
  const [md, setMd] = useState('');
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  const menu = [
    {
      title: 'Overview',
      children: [
        {
          title: 'What is NEST?',
          uri: 'https://raw.githubusercontent.com/NEST-Protocol/NEST-Docs/test/docs/overview.md'
        },
      ]
    },
    {
      title: 'Guild',
      children: [
        {
          title: 'Set Up Local Environment',
          uri: 'https://raw.githubusercontent.com/NEST-Protocol/NEST-Docs/test/docs/Guide/Set-Up-Local-Environment.md'
        },
      ]
    },
    {
      title: 'Technical Reference',
      children: [
        {
          title: 'NEST Probability Virtual Machine',
          uri: 'https://raw.githubusercontent.com/NEST-Protocol/NEST-Docs/test/docs/Technical-Reference/NEST-Probability-Virtual-Machine.md'
        },
        {
          title: 'NEST Oracle',
          uri: 'https://raw.githubusercontent.com/NEST-Protocol/NEST-Docs/test/docs/Technical-Reference/NEST-Oracle.md'
        },
        {
          title: 'Contract Deployment',
          uri: 'https://raw.githubusercontent.com/NEST-Protocol/NEST-Docs/test/docs/Technical-Reference/Contract-Deployment.md'
        },
        {
          title: 'Error Codes',
          uri: 'https://raw.githubusercontent.com/NEST-Protocol/NEST-Docs/test/docs/Technical-Reference/Error-Codes.md'
        },
      ]
    },
  ]
  const [target, setTarget] = useState<{ title: string, uri: string }>(menu[0].children[0]);

  const fetchMd = useCallback(async () => {
    if (target.uri) {
      fetch(target.uri)
        .then(res => res.text())
        .then(text => {
          setMd(text)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }, [target]);

  useEffect(() => {
    fetchMd()
  }, [fetchMd])

  return (
    <Stack w={'full'} align={"center"} px={['24px', '48px']}>
      <HStack maxW={'1440px'} w={"full"} align={"start"} spacing={'48px'}>
        {isDesktop && (
          <Stack minW={'300px'} maxW={'300px'} py={'24px'} position={"sticky"} top={'82px'} fontSize={'15px'}
                 spacing={'24px'} overflow={"scroll"}
          >
            <Button
              fontWeight={600}
              variant={"outline"}
              onClick={() => {
                window.open('https://github.com/NEST-Protocol/', '_blank')
              }}
            >
              Github
            </Button>
            <Divider/>
            {menu.map((item => (
              <Stack key={item.title}>
                <Text fontWeight={600}>{item.title}</Text>
                {item.children.map(child => (
                  <Text
                    color={target.uri === child.uri ? '#EAAA00' : '#003232'}
                    fontWeight={target.uri === child.uri ? 600 : 400}
                    key={child.title}
                    cursor={"pointer"}
                    onClick={() => {
                      setTarget({
                        title: child.title,
                        uri: child.uri
                      })
                    }}
                  >{child.title}</Text>
                ))}
              </Stack>
            )))}
          </Stack>
        )}
        <Stack maxW={['full', '768px']} pt={'112px'} minH={'50vh'}>
          <ReactMarkdown children={md} remarkPlugins={[remarkGfm]} className={'markdown-body'}/>
        </Stack>
      </HStack>
    </Stack>
  )
}

export default Developers