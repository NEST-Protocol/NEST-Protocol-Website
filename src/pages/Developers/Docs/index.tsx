import {HStack, Stack, Text} from '@chakra-ui/react'
import {useCallback, useEffect, useState} from "react";
import MarkdownPreview from '@uiw/react-markdown-preview';

const Docs = () => {
  const [md, setMd] = useState('');

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
        <Stack w={'280px'} py={'24px'} position={"fixed"} zIndex={'10'} fontWeight={500} fontSize={'sm'}>
        </Stack>
        <Stack maxW={'1440px'} pt={'24px'} pl={'360px'} pr={'120px'} overflow={"scroll"}>
          <MarkdownPreview
            source={md}
            rehypeRewrite={(node, index, parent) => {
              // @ts-ignore
              if (node.tagName === "a" && parent && /^h(1|2|3|4|5|6)/.test(parent.tagName)) {
                const child0 = parent.children[0]
                // @ts-ignore
                child0.properties.href = child0.properties.href.replace('\#' , '/#/developers/docs/?s=')
                parent.children = [child0, parent.children[1]];
                console.log(parent.children)
              }
            }}
            onScroll={(e) => {
              // @ts-ignore
              console.log(e.target.scrollTop)}
            }
          />
        </Stack>
      </HStack>
    </Stack>
  )
}

export default Docs