import {Stack, Wrap, WrapItem, Text, useMediaQuery} from "@chakra-ui/react";
import React, {useEffect} from "react";

const Data = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const [data, setData] = React.useState({
    userCount: 0,
    position: 0,
    txValue: 0
  })

  const fetchData = async () => {
    const response = await fetch('https://nestdapp.io/nestwebApi/nestFiInfo');
    const d = await response.json();
    if (d?.value) {
      setData(d.value);
      console.log(d.value);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Stack align={"center"} spacing={0}>
      <Wrap maxW={'1000px'} w={'100%'} justify={"space-around"} align={"center"} spacing={'24px'}>
        <WrapItem w={isDesktop ? '300px' : '100%'} justifyContent={"center"}>
          <Stack textAlign={"center"} align={"center"} justify={"center"} spacing={0}>
            <Text fontSize={'33px'} fontWeight={'600'}
                  m={0}>{data.txValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>Total Trading Volume ($NEST)</Text>
          </Stack>
        </WrapItem>
        <WrapItem w={isDesktop ? '300px' : '100%'} justifyContent={"center"}>
          <Stack textAlign={"center"} align={"center"} justify={"center"} spacing={0}>
            <Text fontSize={'33px'} fontWeight={'600'}
                  m={0}>{data.position.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>Open Interest ($NEST)</Text>
          </Stack>
        </WrapItem>
        <WrapItem w={isDesktop ? '300px' : '100%'} justifyContent={"center"}>
          <Stack textAlign={"center"} align={"center"} justify={"center"} spacing={0}>
            <Text fontSize={'33px'} fontWeight={'600'}
                  m={0}>{data.userCount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>Total Users</Text>
          </Stack>
        </WrapItem>
      </Wrap>
    </Stack>
  )
}

export default Data;