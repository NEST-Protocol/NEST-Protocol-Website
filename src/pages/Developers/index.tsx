import {HStack, Stack, useMediaQuery} from '@chakra-ui/react'
import {useCallback, useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkNav from 'markdown-navbar';
import 'github-markdown-css/github-markdown-light.css';
import './navbar.css';

const Developers = () => {
  const [md, setMd] = useState('');
  const [isDesktop] = useMediaQuery('(min-width: 768px)');

  const fetchMd = useCallback(async () => {
    fetch('https://raw.githubusercontent.com/NEST-Protocol/NEST-Docs/test/README.md')
      .then(res => res.text())
      .then(text => {
        setMd('\n' + text)
      })
  }, []);

  useEffect(() => {
    fetchMd()
  }, [fetchMd])

  return (
    <Stack w={'full'} align={"center"} px={['24px', '48px']}>
      <HStack maxW={'1440px'} w={"full"} align={"start"}>
        { isDesktop && (
          <Stack minW={'300px'} py={'24px'} position={"sticky"} top={'82px'}>
            <MarkNav
              source={md}
              ordered={false}
              updateHashAuto={false}
              headingTopOffset={100}
              declarative={true}
            />
          </Stack>
        ) }
        <Stack maxW={['full', '768px']} pt={'24px'}>
          <ReactMarkdown  children={md} remarkPlugins={[remarkGfm]} className={'markdown-body'}/>
        </Stack>
      </HStack>
    </Stack>
  )
}

export default Developers