import {HStack, Stack} from '@chakra-ui/react'
import {useCallback, useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkNav from 'markdown-navbar';
import 'github-markdown-css/github-markdown.css';
import './navbar.css';
import {useNavigate} from "react-router-dom";

const Docs = () => {
  const [md, setMd] = useState('');
  const navigate = useNavigate()

  const fetchMd = useCallback(async () => {
    fetch('https://raw.githubusercontent.com/NEST-Protocol/NEST-Docs/test/README.md')
      .then(res => res.text())
      .then(text => {
        setMd(text)
      })
  }, []);

  useEffect(() => {
    fetchMd()
  }, [fetchMd])

  return (
    <Stack maxW={'full'} align={"center"} px={['24px', '48px']}>
      <HStack maxW={'1440px'} w={"full"} align={"start"}>
        <Stack w={'280px'} py={'24px'} position={"fixed"} fontWeight={500} fontSize={'sm'}>
          <MarkNav
            source={md}
            ordered={false}
            updateHashAuto={false}
            headingTopOffset={100}
            declarative={true}
          />
        </Stack>
        <Stack maxW={'1440px'} pt={'24px'} pl={'360px'} pr={'120px'}>
          <ReactMarkdown children={md} remarkPlugins={[remarkGfm]} className={'markdown-body'}/>
        </Stack>
      </HStack>
    </Stack>
  )
}

export default Docs