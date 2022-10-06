import {Stack, ChakraProvider, useMediaQuery, Text, Link, HStack, useDisclosure, SlideFade} from "@chakra-ui/react";
import React from "react";
import TheFooter from "@site/src/components/TheFooter";
import Head from "@docusaurus/Head";
import theme from "../../../chakra";
import TheHeader from "@site/src/components/TheHeader";
import {ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon} from "@chakra-ui/icons";

const Faqs = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  const Banner = () => {
    return (
      <Stack
        align={'center'}
        h={'full'}
        justify={'center'}
        minH={['60px', '88px']}
        bgImage={isDesktop ? "/image/FAQs/FAQ_bg_top.webp" : "/image/FAQs/Phone_FAQ_nav_bg.webp"}
        bgSize={'cover'}
        bgPosition={"center"}
        spacing={0}
        px={'24px'}
      >
        <TheHeader/>
      </Stack>
    )
  }

  const Content = () => {
    const nest_concepts = [
      {q: "What is NEST?",
        a: <Text>NEST Protocol creatively introduces random information flow with a decentralized oracle and tokenizes
          random information flow through the OMM (omnipotent market maker) mechanism, generating many stochastic assets.
          The NEST PVM (probabilistic virtual machine), based on basic functions, can program stochastic assets, which
          applies to a large number of real-world scenarios. An inherent cost mechanism ensures the system supply
          converges, resulting in a new universal coin with an innate price appreciation logic. The NEST coin provides a
          whole new development tool and is a creative new asset for the blockchain world.<br/><br/>Check the <Link rel={'alternate'} hrefLang={'en'}
            href={'/doc/ennestwhitepaper.pdf'} isExternal textDecoration={"underline"}>whitepaper</Link> for more detail.</Text>
      },
      {
        q: "What is Truly Decentralized Gaming Oracle?", a: `If any part of the decentralized system is centralized, the entire system is said to be centralized. Only a truly decentralized oracle can develop truly decentralized applications or assets. The NEST oracle is completely open and free of charge, allowing miners and arbitrageurs to verify prices based on gaming, and it solves the on-chain price problem via a decentralized incentive scheme. 
    
This oracle's core principle is 1) quote mining. 2) Two-way choice 3) the price chain 4) BETA coefficient, and so on. Participants in the overall system include miners, verifiers, and price callers. The oracle incentivizes miners through the quote mining mechanism and verifiers through two-way options to participate in on-chain price verification. The price chain and the BETA coefficient are designed to prevent potential malicious attacks. The oracle is also an open oracle, anyone can open any price pair on the oracle, mainly containing the opening module, oracle track, quote pair setting, collateral, bilateral asset quotes, price validation, price invocation, and other modules.
`
      },
      {
        q: "What is Omnipotent Market Maker (OMM)?", a: `The system is deflationary, and the holder becomes the overall risk taker as OMM shifts from trading between people to trading between all people and contracts. Unlike the popular mechanism, automated market makers (AMMs), and even the majority of market makers we are familiar with (both on and off-chain), OMM never acts as an intermediary or alternate between the two sides of a transaction, but always acts as the sole seller. All system participants are buyers who interact independently with the OMM, which can generate various probabilistic assets desired by traders based on two characteristics: infinite liquidity and complete probability space. 
    
The trader gets that probabilistic asset by paying a definite cost (at least equal to the expected value of the probabilistic asset) or gets another probabilistic asset by destroying a probabilistic asset with a higher expected value. The OMM clears the market with each trader. This is why OMM is referred to as “omnipotent”. Based on the law of large numbers, OMM can aggregate all trades, eliminate individual system shocks, achieve system deflation, and distribute risk among token holders.`
      },
      {
        q: "What is Probabilistic Virtual Machine (PVM)?", a: `PVM is a class of virtual machine structures based on a library of basic functions that allow a developer to assemble as many applications as he wants - similar to EVM programming.

NEST inherits Ethereum's genes. The essence of EVM is that each program is a combination of some base code that can be invoked by paying a certain amount of gas. The revenue of each product on PVM can be seen as a linear combination of some base revenue functions that can be obtained by paying a certain cost (i.e., the discounted value of this revenue). PVM’s underlying logic is identical to that of EVM, which means that all EVM development can be implemented on PVM.

NEST is not just a simple replica of Ethereum. Compared to Ethereum, PVM is able to provide the computation of random variables in the complete probability space. Any risk-return pair can be expressed exactly within PVM. This means that PVM has a larger development space than EVM. Participants can get various tokenized return distributions from PVM by paying gas fees with NEST. This will greatly simplify the development process of many products, where the original complex logic is reduced to a function transformation of random variables. Further, because all developers on NEST follow the unified standard of PVM, this provides great convenience for interoperability and integration among projects, which is extremely important for the development of the whole ecology.
`
      },
      {
        q: "What is Infinite Liquidity Model (ILM)?", a: `The CeFi and DeFi projects’ settlement capacity today is generally limited by their liquidity caps. ILM, the infinite liquidity model, means that NEST does not have a pool of funds and does not require collateralized assets, and is therefore truly unlimited liquidity. 

At the micro level, OMM trades and settles with each participant individually, and ILM fully satisfies all of an individual's legitimate settlement needs in the form of additional tokens issued by the system. Each individual can reach an equilibrium with the system through his or her rational choice to maximize individual utility. 

At the macro level, OMM games with each individual, reducing liquidity when the system "gains" and increasing liquidity when the system "loses". At the summation level, based on the law of large numbers, when OMM games with enough people, the total supply of NEST will be deflationary. Specifically, a probabilistic asset, X, in the NEST ecology needs to have an acquisition cost greater than or equal to the expected return of X, E(X); the PVM is based on the programming of X, i.e., X -> F(X), which must also satisfy that the expected return of X, E(X), is greater than or equal to the expected return of F(X), E(F(X)). Thus NEST expects total supply to be volatile and decreasing in the long run, with fluctuations floating depending on the second-order variance management as well as the level of thick-tail management.
`
      },
      {
        q: "What is Stochastic Coin?", a: `NEST has creatively proposed a stochastic coin. The coins participate in the system in a way that they are distributed according to the probability of a random variable until a given moment, but then become a definite number according to the expected distribution by a certain block. This participation can be either of data or of value. For example, when the random variable is equal to some deterministic value x, the corresponding address has x units of NEST, and this value-based connection is called tokenization of the random variable. Stochastic coins provide a unifying tool for the many projects on the chain that involves randomness of return. It provides great convenience for the development of projects and the integration between projects.
`
      },
      {
        q: "What is Universal Coin?", a: `ONE NEST ONE COIN is much more than just a general dissemination slogan. The unified token offers the possibility of convenient collaboration across projects. No matter what kind of financial product (trading, lending, etc.), or even GameFi or NFT, through the diversity of their product forms, the essence is the tokenization of stochastic information flows. 
    
Given that PVM supports random variables and their programming in the full probability space, the stochastic information corresponding to all the above-mentioned on-chain products can be uniformly priced through the NEST token. This completely changes the current problem of at least one token for one protocol in the on-chain world and the need for token exchange between protocols to avoid wasting arithmetic resources. It can also circumvent the problem of developing a project while operating a new unit of value, allowing developers to focus on application development rather than token liquidity operation, providing great convenience for project development. With the widespread use of PVM, various applications no longer need to build their own tokens to get an economic exchange value, which is mainly reflected in the risk-return structure of the swap. The universal coin has the possibility to realize various economic relationships and economic exchanges.`
      },
    ]
    const trading_relates = [
      {
        q: "Which Centralized exchange can I buy NEST on?",
        a: <Text>1. Huobi Global: <Link rel={'alternate'} hrefLang={'en'} href={" https://www.huobi.com/"} isExternal> https://www.huobi.com/</Link><br/>
          2. Gate.io：<Link rel={'alternate'} hrefLang={'en'} href="https://www.gate.io/tw" isExternal>https://www.gate.io/tw</Link><br/>
          3. Coinone：<Link rel={'alternate'} hrefLang={'en'} href={"https://coinone.co.kr/"} isExternal>https://coinone.co.kr/</Link><br/>
          4. Bibox：<Link rel={'alternate'} hrefLang={'en'} href={"https://www.bibox.pro/"} isExternal>https://www.bibox.pro/</Link><br/>
          5. MXC：<Link rel={'alternate'} hrefLang={'en'} href={"https://www.mxc.ai/"} isExternal>https://www.mxc.ai/</Link><br/>
          6. Hotbit：<Link rel={'alternate'} hrefLang={'en'} href={"https://www.hotbit.pro/"} isExternal>https://www.hotbit.pro/</Link><br/>
          7. Jubi: <Link rel={'alternate'} hrefLang={'en'} href={"https://www.jbex.com/"} isExternal>https://www.jbex.com/</Link><br/>
          8. Hoo: <Link rel={'alternate'} hrefLang={'en'} href={"https://hoo.com/"} isExternal>https://hoo.com/</Link><br/>
          9. CoinW: <Link rel={'alternate'} hrefLang={'en'} href={"https://www.coinw.com/"} isExternal>https://www.coinw.com/</Link><br/>
          10. Dcoin: <Link rel={'alternate'} hrefLang={'en'} href={"https://dcoin.co/"} isExternal>https://dcoin.co/</Link><br/>
          11. ZT Global：<Link rel={'alternate'} hrefLang={'en'} href={"https://www.ztb.com/"} isExternal>https://www.ztb.com/</Link><br/>
          12. AEX：<Link rel={'alternate'} hrefLang={'en'} href={"https://www.aex.com/"} isExternal>https://www.aex.com/</Link><br/>
          13. BKEX：<Link rel={'alternate'} hrefLang={'en'} href={"https://www.bkex.com/"} isExternal>https://www.bkex.com/</Link><br/>
          14. Dsdaq：<Link rel={'alternate'} hrefLang={'en'} href={"https://www.dsdaq.com/"} isExternal>https://www.dsdaq.com/</Link><br/>
          15. Pionex：<Link rel={'alternate'} hrefLang={'en'} href={"https://www.pionex.com/en-US/"} isExternal>https://www.pionex.com/en-US/</Link><br/>
          16. CoFiX：<Link href={"https://bsc.cofix.tech/#/swap"} isExternal>https://bsc.cofix.tech/#/swap</Link><br/>
        </Text>
      },
      {
        q: "Which Decentralized exchange can I buy NEST on?",
        a: <Text>CoFiX: <Link rel={'alternate'} hrefLang={'en'} isExternal href={"https://bsc.cofix.tech/#/swap"}>https://bsc.cofix.tech/#/swap</Link><br/>
          Uniswap: <Link href={"https://app.uniswap.org/#/swap?chain=mainnet"} rel={'alternate'} hrefLang={'en'}
                         isExternal>https://app.uniswap.org/#/swap?chain=mainnet</Link><br/>
          PancakeSwap: <Link href={"https://pancakeswap.finance/swap"} isExternal>https://pancakeswap.finance/swap</Link></Text>
      },
      {
        q: "How to convert NEST tokens from BSC to Ethereum?",
        a: <Text>NEST token cross-chain tutorial：<Link
          href={"https://nest-protocol-82041.medium.com/cross-chain-bridge-tutorial-c8a9eae85e8b"}
          isExternal>https://nest-protocol-82041.medium.com/cross-chain-bridge-tutorial-c8a9eae85e8b</Link></Text>
      },
    ]
    const contract_issues = [
      {
        q: "What is the NEST project contact address?", a: `BSC Chain:
nestOptions: 0x12858F7f24AA830EeAdab2437480277E92B0723a
nestFutures: 0x8e32C33814271bD64D5138bE9d47Cd55025074CD
nestProbability: 0xCA52f25f37d213CeD3dDE81a539e64464dEa8f3C
nestBuybackPool: 0x8AA36CF9CD7e88b63F32c53C66BFaDd409367B2f

Ethereum Mainnet:
nestOptions: 0x10F7f08A278e495CBCa66388A2400fF0deFe3122
nestFutures: 0x0E48e068958b3E683a664FB81697F7046f83C3A8
nestProbability: 0x0ef5A21Aa062BA49c9c429b256d618d68FD2e008
nestBuybackPool: 0x7b65629A811eBB0d6CC99bDc4d1d606f8F707125
`
      },
      {
        q: "What is the contract address of the NEST token?", a: `Ethereum: 0x04abeda201850ac0124161f037efd70c74ddc74c
BNB: 0x98f8669f6481ebb341b522fcd3663f79a3d1a6a7
`
      },
    ]

    return (
      <Stack w={'100%'} align={"center"} px={['24px', '48px']} spacing={0} pb={'24px'}>
        <Stack maxW={'1440px'} w={'100%'} hidden={!isDesktop}>
          <HStack fontWeight={'600'}>
            <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} color={'#00A0E9'} href={'/about/'}>About</Link>
            <ChevronRightIcon color={'#00A0E9'}/>
            <Link rel={'alternate'} hrefLang={'en'} fontSize={'15px'} color={'#00A0E9'} href={'/about/faqs/'}>FAQs</Link>
          </HStack>
        </Stack>
        <HStack maxW={'1048px'} w={'100%'} align={"start"} spacing={['0px', '30px']}>
          <Stack w={'150px'} hidden={!isDesktop}>
          </Stack>
          <Stack maxW={'688px'} w={'100%'} spacing={'10px'}>
            {!isDesktop && (
              <ChevronLeftIcon fontSize={"40px"} ml={'-10px'} onClick={() => {
                window.location.pathname = "/about/"
              }}/>
            )}
            <Text fontSize={'25px'} fontWeight={'600'} mb={0}>Answers About NEST</Text>
            <Text fontSize={'14px'} fontWeight={'700'} mb={0} pl={'20px'} id={"nest-concepts"}>NEST Concepts</Text>
            {nest_concepts.map(({q, a}) => (
              <FAQItem q={q} a={a} key={q}/>
            ))}
            <Text fontSize={'15px'} fontWeight={'700'} mb={0} pl={'20px'} id={"trading-related"}>Trading Related</Text>
            {trading_relates.map(({q, a}) => (
              <FAQItem q={q} a={a} key={q}/>
            ))}
            <Text fontSize={'15px'} fontWeight={'700'} mb={0} pl={'20px'} id={"contract-issues"}>Contract Issues</Text>
            {contract_issues.map(({q, a}) => (
              <FAQItem q={q} a={a} key={q}/>
            ))}
          </Stack>
          <Stack w={'150px'} pt={'64px'} position={"sticky"} hidden={!isDesktop} top={0}>
            <Text fontSize={'15px'} fontWeight={'700'} mb={0}>Sections</Text>
            <Stack spacing={0} fontSize={'15px'} fontWeight={'500'}>
              <Link rel={'alternate'} hrefLang={'en'} href={'#nest-concepts'} color={"#003232"}>NEST Concepts</Link>
              <Link rel={'alternate'} hrefLang={'en'} href={'#trading-related'} color={"#003232"}>Trading Related</Link>
              <Link rel={'alternate'} hrefLang={'en'} href={'#contract-issues'} color={"#003232"}>Contract Issues</Link>
            </Stack>
          </Stack>
        </HStack>
      </Stack>
    )
  }

  const FAQItem = ({q, a}) => {
    const {isOpen, onToggle} = useDisclosure()

    return (
      <>
        <HStack h={'48px'} bgImage={"/image/FAQs/FAQ.webp"} px={'20px'} align={"center"} borderRadius={'10px'}
                onClick={onToggle} cursor={"pointer"} bgSize={"cover"} bgRepeat={"no-repeat"}
                justify={"space-between"}>
          <Text fontSize={'13px'} fontWeight={'500'}>{q}</Text>
          {isOpen ? <ChevronDownIcon/> : <ChevronUpIcon/>}
        </HStack>
        <SlideFade in={isOpen} hidden={!isOpen}>
          <Text fontSize={'13px'} px={'20px'} fontWeight={'500'} whiteSpace={"break-spaces"}>{a}</Text>
        </SlideFade>
      </>
    )
  }

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>FAQs | NEST Protocol</title>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      <Stack spacing={'24px'}>
        <React.Suspense fallback={<div></div>}>
          <Banner/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <Content/>
        </React.Suspense>
        <React.Suspense fallback={<div></div>}>
          <TheFooter/>
        </React.Suspense>
      </Stack>
    </ChakraProvider>
  )
}

export default Faqs;
