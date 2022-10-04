---
sidebar_position: 2
---

# NEST Oracle technical reference

**NEST Oracle is a truly decentralized oracle**. 
You can have an overview about [app](https://channel.nestprotocol.org/) and
[the mechanism and advantages](https://nestprotocol.org/docs/Concept/NEST-Oracle) of NEST Oracle, and check the [whitepaper](https://www.nestprotocol.org/doc/ennestwhitepaper.pdf) to learn more. 

## How to Mining

**Anyone can earn mining rewards by providing quotes on NEST Oracle.** Here is the price generation process of NEST Oracle.

![image5](./Images/NEST5.png)

[NEST Oracle API GitHub](https://github.com/NEST-Protocol/NEST-Oracle-V4.0/blob/main/contracts/interfaces/INestBatchMining.sol)

> If a certain token satisfies, over time or if a condition is met, its token balance will be adjusted at each address on the chain. Tokens that meet this condition are then unable to be supported by the NEST Oracle for quotes, and the token cannot be used by the quotation token, pricing token, or mining token.

### Roles

- **Miner**: Received mining token rewards by providing quotes.

- **Arbitrager**: Corrected the quotes from the miner and got profit from price spread.

- **Channel Opener**: Provide the information required for a quote channel in accordance with NEST specifications, open a quote channel, and own the maintenance rights to this quote channel.

- **Price Caller**: Called the price provided by NEST Oracle..

### What is Channel?

The quote channel is the foundation of NEST Oracle and contains all of the information that constitutes the price mechanism.

#### Components

- **Price Token**: the reference token for quotes, usually a mainstream token, e.g. USD
- **Price Token Unit**: the size of each quote, e.g. 2000 USD
- **Quotation Token**: the token to be quoted in the channel, a channel can have multiple quotation tokens
- **Mining Token**: Tokens used to reward miners
- **Standard Output**: The amount of mined tokens that can be generated from a single block.
- **Total Mining Token**: Mining tokens need to be provided by the channel opener, and the opener could increase the total mining token amount, and it will reward miners according to the mining speed.
- **Attenuation Factor**:
  - The standard output decays every year based on the Attenuation Factor, and will not decay after 10 times, after which it will be mined according to the last standard output. For example, 80% means the next year's standard output is 80% of the current year.
  -  The decay is calculated from the channel's initial block, and on the Ethereum mainnet, it is calculated according to 2400000 blocks per year (depending on the speed of different chains).
- **Initial Block**: The block where the channel is created. This parameter can be used to determine the time when the channel is established on the block, and the decay interval is also calculated from this block number.
- **Number of Quotes**: The sum of the number of quotes of all quotation tokens in the channel. The number of quotes may be different for different tokens in the same quote channel.
  - Order verification is for a single quotation token. Order verification quotes only increase the number of quotes for the verified quotation token.
  - A quotation token can be added later after the channel is created, and the number of quotations will be less for this quotation token.
- **Quotation Fee**: The fee to be paid for a quote, usually 0.
- **Price Calling Fee**: The fee for calling quotations from the NEST Oracle.
- **Quotation Frequency**: the time interval of the quotation.

![image6](./Images/NEST6.png)

#### Definitions

- **Number of Verified Blocks**

The number of blocks the quotation needs to wait for verification, which is set globally by NEST, and varies depending on the block generating speed of different chains. The number of Verified Blocks on the Ethereum mainnet is 20.

- **Effective Price**

After block verification, the weighted average of the remaining quotation prices within a block.

- **Last Price**

The latest effective price of the quotation token.

### Functions

#### Quote

- **Start Quote**

Miners could start a quote on a particular channel by calling the post function. By calling this function, miners need to provide quotes for the quote pairs in this channel and, at the same time,  deposit the corresponding price token into the contract as the pledge fund.

For example, John wants to start a quote on Channel 0 of Binance Smart Chain(BSC) , since there are 3 quote pairs, PETH/PUSD, PETH/NEST and PETH/PBTC, and the minimum pledge unit is 2,000 PUSD, John needs to pledge at least 6,000 PUSD to start the quote.

```
    /// @dev Post price
    /// @param channelId Target channelId
    /// @param scale Scale of this post. (Which times of unit)
    /// @param equivalents Price array, one to one with pairs
    function post(uint channelId, uint scale, uint[] calldata equivalents) external payable;
```

- **Close Quote**

If you do not want to continue quoting, you can call the close function to close the quote, which is equivalent to unfreezing your pledged funds.

```
    /// @notice Close a batch of price sheets passed VERIFICATION-PHASE
    /// @dev Empty sheets but in VERIFICATION-PHASE aren't allowed
    /// @param channelId Target channelId
    /// @param indices Two-dimensional array of sheet indices, first means pair indices, seconds means sheet indices
    function close(uint channelId, uint[][] calldata indices) external;
```

- **Withdraw Fund**

Miners could withdraw their funds, including pledged funds and mining rewards, once the quote was closed. In this case, the withdraw function should be used.

```
    /// @dev Withdraw assets
    /// @param tokenAddress Destination token address
    /// @param value The value to withdraw
    function withdraw(address tokenAddress, uint value) external;
```

#### Arbitrage

If there is a discrepancy between the current quote and the "real price",  and considering arbitrage cost, it is still profitable. Then, arbitragers could call the take function, and trade the token at the current quote,  and at the same time, they must pledge funds and start a new quote. Other arbitragers could also arbitrage on this new quote by trading in the pledge funds pool. If the price is not the "real price" of the market, miners will take the loss for their misquotes.

```
    /// @notice Call the function to buy TOKEN/NTOKEN from a posted price sheet
    /// @dev bite TOKEN(NTOKEN) by ETH,  (+ethNumBal, -tokenNumBal)
    /// @param channelId Target price channelId
    /// @param pairIndex Target pairIndex. When take token0, use pairIndex direct, or add 65536 conversely
    /// @param index The position of the sheet in priceSheetList[token]
    /// @param takeNum The amount of biting (in the unit of ETH), realAmount = takeNum * newTokenAmountPerEth
    /// @param newEquivalent The new price of token (1 ETH : some TOKEN), here some means newTokenAmountPerEth
    function take(uint channelId, uint pairIndex, uint index, uint takeNum, uint newEquivalent) external payable;
```

#### Query

NEST Oracle has provided many query APIs, for miners and arbitragers to build their strategies.

Return all the opened quotes of specific quote pair:

```
    /// @dev List sheets by page
    /// @param channelId Target channelId
    /// @param pairIndex Target pairIndex
    /// @param offset Skip previous (offset) records
    /// @param count Return (count) records
    /// @param order Order. 0 reverse order, non-0 positive order
    /// @return List of price sheets
    function list(
        uint channelId, 
        uint pairIndex, 
        uint offset, 
        uint count, 
        uint order
    ) external view returns (PriceSheetView[] memory);
```

Return the balance of the contract:

```
    /// @dev View the number of assets specified by the user
    /// @param tokenAddress Destination token address
    /// @param addr Destination address
    /// @return Number of assets
    function balanceOf(address tokenAddress, address addr) external view returns (uint);
```

Return the estimated quote reward if start a quote now:

```
    /// @dev Estimated mining amount
    /// @param channelId Target channelId
    /// @return Estimated mining amount
    function estimate(uint channelId) external view returns (uint);
```

Return the information of channel:

```
    /// @dev Get channel information
    /// @param channelId Target channelId
    /// @return Information of channel
    function getChannelInfo(uint channelId) external view returns (PriceChannelView memory);
```

Return the number of blocks between the current quote and last quote.

This data could be used to calculate the total rewards of the current quote:

- Current Block Rewards = Standard Output*The Number of Blocks Between Current Quote and Last Quote
- Current Quote Rewards = Current Block Rewards * The Number of Current Quotes/Total Number of Quotes in Current Block

```
    /// @dev Query the quantity of the target quotation
    /// @param channelId Target channelId
    /// @param index The index of the sheet
    /// @return minedBlocks Mined block period from previous block
    /// @return totalShares Total shares of sheets in the block
    function getMinedBlocks(
        uint channelId,
        uint index
    ) external view returns (uint minedBlocks, uint totalShares);
```

#### Create Channel

The price channel can be created either by building via NEST oracle website or by calling the open channel API.

The open function should be used to create a price channel.

```
    /// @dev Open price channel
    /// @param token0 Address of token0, use to mensuration, 0 means eth
    /// @param unit Unit of token0
    /// @param reward Reward token address
    /// @param tokens Target tokens
    /// @param config Channel configuration
    function open(
        address token0, 
        uint96 unit, 
        address reward, 
        address[] calldata tokens,
        ChannelConfig calldata config
    ) external;
```

After creating the price channel, the channel opener could modify the parameters of this channel.

```
    /// @dev Modify channel configuration
    /// @param channelId Target channelId
    /// @param config Channel configuration
    function modify(uint channelId, ChannelConfig calldata config) external;
```

The channel opener could also increase or decrease the volume of total mining tokens.

```
    /// @dev Increase vault to channel
    /// @param channelId Target channelId
    /// @param vault Total to increase
    function increase(uint channelId, uint128 vault) external payable;
    
    /// @dev Decrease vault from channel
    /// @param channelId Target channelId
    /// @param vault Total to decrease
    function decrease(uint channelId, uint128 vault) external;
```

The quotation fees and price calling fees generated on the channel all belong to channel opener,  channel opener could call pay function to withdraw these funds.

```
    /// @dev Pay
    /// @param channelId Target channelId
    /// @param to Address to receive
    /// @param value Amount to receive
    function pay(uint channelId, address to, uint value) external;
}
```



## How to Call Price

Anyone can call the prices in NEST oracle. The NEST oracle prices can be called by the following steps:

1. Calling the corresponding price contract
2. Calling the functions in the contract

### Definitions

- **ChannelId and TokenPair Index**

Anyone can create an oracle channel. A channel could have multiple token pair prices for quotation, and these token pairs all have the same base currency. The token pair index refers to the tokenPair price on the channel. It is similar to a two-dimensional array that locates the price by channelId and pairIndex.

- **Price Calling Fee**

Each call of the contract needs a calling fee. This calling fee is decided by the administrator of the channel. Currently, the calling fee of channel 0 is zero.

| Network  | Fee  |
| -------- | ---- |
| Ethereum | 0ETH |
| BNB      | 0BNB |

- **Triggered Price and Last Price**

The effective price on NEST oracle can be updated in three ways:

1. Post a new price.
2. Verify the current price and post a new price.
3. Close the current price.

If the effective price is updated, which is the most common case, the triggered price and the last price are the same. However, if the effective price is not updated, then, the last price is the most recent effective price, and the triggered price is the price just before this last price. The difference between the triggered price and the last price is the triggered price requires less gas consumption.

![image1](./Images/NEST1.png)

- **Price Token and Price Token Unit**

Price token unit is the minimum collateral amount for a price quote. Each channel has its own Price token and Price token unit, please check it before calling.

[Channel Information Website](https://channel.nestprotocol.org/)

- **Front-end Display Prices**

NEST oracle provides price data dominated in Price Token Unit. Users should convert this price to the normal price format for front-end display.

For example, ETH is the quotation token, the NEST oracle will provide the ETH price data as "800000000000000000", having 18 zeros, which means 2000 USDT = 0.8ETH, and convert to the normal price format should be 1 ETH = 2500 USDT.

![image2](./Images/NEST2.png)

### Price Contracts

The NEST oracle provides token pair prices on ETH and BSC chains.

- **Ethereum**

| Network | Contract Address                           |
| ------- | ------------------------------------------ |
| Mainnet | 0xE544cF993C7d477C7ef8E91D28aCA250D135aa03 |
| Rinkeby | 0xc08e6a853241b9a08225eecf93f3b279fa7a1be7 |

- **BNB**

| Network | Contract Address                           |
| ------- | ------------------------------------------ |
| BNB     | 0x09CE0e021195BA2c1CDE62A8B187abf810951540 |
| Test    | 0xF2f9E62f52389EF223f5Fa8b9926e95386935277 |

### Functions

The following functions in the contract can be used not only to look up prices, but also to make strategies for mining.

- **Get the Latest Triggered Price**

The NEST price is a weighted average of all prices in the same block. New quotes and close operations trigger the calculation of prices that are already in effect earlier, while volatility and historical average prices are calculated.

```
function triggeredPrice(
    uint channelId,
    uint[] calldata pairIndices,
    address payback
) external payable returns (uint[] memory prices);
```

| input       | type    | instruction                                                                                    |
| ----------- | ------- | ---------------------------------------------------------------------------------------------- |
| channelId   | uint    | Target channelId                                                                               |
| pairIndices | uint[]  | Array of pair indices                                                                          |
| payback     | address | Address to receive refund                                                                      |
| output      | type    | instruction                                                                                    |
| prices      | uint[]  | Price array, i _ 2 is the block where the ith price is located, and i _ 2 + 1 is the ith price |

- **Get Full Information of the Latest Triggered Price**

Get the latest triggered price and average price volatility information.

```
function triggeredPriceInfo(
    uint channelId,
    uint[] calldata pairIndices,
    address payback
) external payable returns (uint[] memory prices);
```

| input       | type    | instruction               |
| ----------- | ------- | ------------------------- |
| channelId   | uint    | Target channelId          |
| pairIndices | uint[]  | Array of pair indices     |
| payback     | address | Address to receive refund |

| output | type   | instruction                                                                                                                                                        |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| prices | uint[] | Price array, i _ 4 is the block where the ith price is located, i _ 4 + 1 is the ith price, i _ 4 + 2 is the ith average price and i _ 4 + 3 is the ith volatility |

- **Find Historical Prices**

Find the effective price on the target historical block, and if there is no price on the target block, find the previous effective price.

```
function findPrice(
    uint channelId,
    uint[] calldata pairIndices,
    uint height,
    address payback
) external payable returns (uint[] memory prices);
```

| input       | type    | instruction               |
| ----------- | ------- | ------------------------- |
| channelId   | uint    | Target channelId          |
| pairIndices | uint[]  | Array of pair indices     |
| height      | uint    | Destination block number  |
| payback     | address | Address to receive refund |

| output | type   | instruction                                                                                    |
| ------ | ------ | ---------------------------------------------------------------------------------------------- |
| prices | uint[] | Price array, i _ 2 is the block where the ith price is located, and i _ 2 + 1 is the ith price |

- **Get the Effective Prices List**

Get the historical effective prices list, users could customise the number of prices returned.

```
function lastPriceList(
    uint channelId,
    uint[] calldata pairIndices,
    uint count,
    address payback
) external payable returns (uint[] memory prices);
```

| input       | type    | instruction                               |
| ----------- | ------- | ----------------------------------------- |
| channelId   | uint    | Target channelId                          |
| pairIndices | uint[]  | Array of pair indices                     |
| count       | uint    | The number of prices needs to be returned |
| payback     | address | Address to receive refund                 |

| output | type   | instruction                                                                                             |
| ------ | ------ | ------------------------------------------------------------------------------------------------------- |
| prices | uint[] | Result array, I _ count _ 2 to (i + 1) _ count _ 2 - 1 are the price results of group I quotation pairs |

- **Return the Last Price and Triggered Price**

Return the last price list and the triggered price information.

```
function lastPriceListAndTriggeredPriceInfo(
    uint channelId,
    uint[] calldata pairIndices,
    uint count,
    address payback
) external payable returns (uint[] memory prices);
```

| input       | type    | instruction                               |
| ----------- | ------- | ----------------------------------------- |
| channelId   | uint    | Target channelId                          |
| pairIndices | uint[]  | Array of pair indices                     |
| count       | uint    | The number of prices needs to be returned |
| payback     | address | Address to receive refund                 |

| output | type   | instruction                                                                                                                                                    |
| ------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| prices | uint[] | Return the quotation pair's prices and information, which are the last price list, triggered price block number, triggered price, average price and volatility |

- **Off-Chain Price Calls**

For some scenarios, it may be necessary to call prices off the chain, the off-chain price calling could use the functions in the following link.

[https://etherscan.io/address/0xE544cF993C7d477C7ef8E91D28aCA250D135aa03#readProxyContract](https://etherscan.io/address/0xE544cF993C7d477C7ef8E91D28aCA250D135aa03#readProxyContract)

The correspondence between the off-chain call functions and the on-chain call functions is as follows.

| Off-Chain Function                 | On-Chain Function                                  |
| ---------------------------------- | -------------------------------------------------- |
| triggeredPrice                     | Get the Latest Triggered Price                     |
| triggeredPriceInfo                 | Get Full Information of the Latest Triggered Price |
| findPrice                          | Find Historical Prices                             |
| lastPriceList                      | Get the Effective Prices List                      |
| lastPriceListAndTriggeredPriceInfo | Return the Last Price and Triggered Price          |

### API Calls Examples

The following examples use the ethereum rinkeby test network.

 Contract:0xc08e6a853241b9a08225eecf93f3b279fa7a1be7
 
 ChannelId:0
 
 Fee:0

| Token | Address                                    | PairIndex |
| ----- | ------------------------------------------ | --------- |
| HBTC  | 0xaE73d363Cb4aC97734E07e48B01D0a1FF5D1190B | 0         |
| ETH   | 0x0000000000000000000000000000000000000000 | 1         |
| NEST  | 0xE313F3f49B647fBEDDC5F2389Edb5c93CBf4EE25 | 2         |

- **Use Instant Price**

```
    // Query latest 2 price
    function _lastPriceList(
        TokenConfig memory tokenConfig,
        uint fee,
        address payback
    ) internal returns (uint[] memory prices) {

        // -----GET NEST PRICE-----
        prices = INestBatchPrice2(NEST_OPEN_PRICE).lastPriceList {
            value: fee
        } (uint(tokenConfig.channelId), _pairIndices(uint(tokenConfig.pairIndex)), 2, payback);
        // -----GET NEST PRICE-----

        prices[1] = _toUSDTPrice(prices[1]);
        prices[3] = _toUSDTPrice(prices[3]);
    }

    // Query latest price
    function _latestPrice(
        TokenConfig memory tokenConfig,
        uint fee,
        address payback
    ) internal returns (uint oraclePrice) {

        // -----GET NEST PRICE-----
        uint[] memory prices = INestBatchPrice2(NEST_OPEN_PRICE).lastPriceList {
            value: fee
        } (uint(tokenConfig.channelId), _pairIndices(uint(tokenConfig.pairIndex)), 1, payback);
        // -----GET NEST PRICE-----

        oraclePrice = _toUSDTPrice(prices[1]);
    }

    // Find price by blockNumber
    function _findPrice(
        TokenConfig memory tokenConfig,
        uint blockNumber,
        uint fee,
        address payback
    ) internal returns (uint oraclePrice) {

        // -----GET NEST PRICE-----
        uint[] memory prices = INestBatchPrice2(NEST_OPEN_PRICE).findPrice {
            value: fee
        } (uint(tokenConfig.channelId), _pairIndices(uint(tokenConfig.pairIndex)), blockNumber, payback);
        // -----GET NEST PRICE-----

        oraclePrice = _toUSDTPrice(prices[1]);
    }
```

- **Use the Average Price**

```
    /// @dev Get price
    /// @param token mortgage asset address
    /// @param uToken underlying asset address
    /// @param payback return address of excess fee
    /// @return tokenPrice Mortgage asset price(2000U = ? token)
    /// @return pTokenPrice PToken price(2000U = ? pToken)
    function getPriceForPToken(
        address token, 
        address uToken,
        address payback
    ) public payable override returns (
        uint256 tokenPrice, 
        uint256 pTokenPrice
    ) {
        if(uToken == address(USDT_ADDRESS)) {
            uint256[] memory pricesIndex = new uint256[](1);
            pricesIndex[0] = addressToPriceIndex[token];

            // -----GET NEST PRICE-----
            uint256[] memory prices = _nestBatchPlatform.triggeredPriceInfo{value:msg.value}(CHANNELID, pricesIndex, payback);
            // -----GET NEST PRICE-----

            require(prices[2] > 0, "Log:PriceController:!avg");
            return(prices[2], BASE_USDT_AMOUNT);
        } else {
            uint256[] memory pricesIndex = new uint256[](2);
            pricesIndex[0] = addressToPriceIndex[token];
            pricesIndex[1] = addressToPriceIndex[uToken];

            // -----GET NEST PRICE-----
            uint256[] memory prices = _nestBatchPlatform.triggeredPriceInfo{value:msg.value}(CHANNELID, pricesIndex, payback);
            // -----GET NEST PRICE-----

            require(prices[2] > 0 && prices[6] > 0, "Log:PriceController:!avg");
            return(prices[2], prices[6]);
        }
    }

```

- **Decrease Price Fluctuations**

Sometimes the market prices fluctuate wildly . There are some precautions to decrease the unwanted sharply fluctuations. For example, stop trading when the deviation between instant price and the average price is beyond a certain threshold.

```
    /// @dev Query latest price info
    /// @param tokenAddress Target address of token
    /// @param payback As the charging fee may change, it is suggested that the caller pay more fees, 
    /// and the excess fees will be returned through this address
    /// @return blockNumber Block number of price
    /// @return priceEthAmount Oracle price - eth amount
    /// @return priceTokenAmount Oracle price - token amount
    /// @return avgPriceEthAmount Avg price - eth amount
    /// @return avgPriceTokenAmount Avg price - token amount
    /// @return sigmaSQ The square of the volatility (18 decimal places)
    function latestPriceInfo(address tokenAddress, address payback) 
    external 
    payable 
    override
    returns (
        uint blockNumber, 
        uint priceEthAmount,
        uint priceTokenAmount,
        uint avgPriceEthAmount,
        uint avgPriceTokenAmount,
        uint sigmaSQ
    ) {

        // -----GET NEST PRICE-----
        (
            blockNumber, 
            priceTokenAmount,
            ,//uint triggeredPriceBlockNumber,
            ,//uint triggeredPriceValue,
            avgPriceTokenAmount,
            sigmaSQ
        ) = INestPriceFacade(NEST_PRICE_FACADE).latestPriceAndTriggeredPriceInfo { 
            value: msg.value 
        } (tokenAddress, payback);
        // -----GET NEST PRICE-----
        
        _checkPrice(priceTokenAmount, avgPriceTokenAmount);
        priceEthAmount = 1 ether;
        avgPriceEthAmount = 1 ether;
    }
```


## Oracle Contract Address

Contract deployment addresses are as follows:

### Ethereum Mainnet

|Name|Interfaces|Address|
|---|---|---|
|nest|IERC20|0x04abEdA201850aC0124161F037Efd70c74ddC74C|
|usdt|IERC20|0xdAC17F958D2ee523a2206206994597C13D831ec7|
|hbtc|IERC20|0x0316EB71485b0Ab14103307bf65a021042c6d380|
|pusd|IERC20|0xCCEcC702Ec67309Bc3DDAF6a42E9e5a6b8Da58f0|
|nestGovernance|INestGovernance|0xA2eFe217eD1E56C743aeEe1257914104Cf523cf5|
|nestBatchPlatform2|INestBatchMining, INestBatchPriceView, INestBatchPrice2|0xE544cF993C7d477C7ef8E91D28aCA250D135aa03|

### BNB Smart Chain Mainnet
|Name|Interfaces|Address|
|---|---|---|
|nest|IERC20|0x98f8669F6481EbB341B522fCD3663f79A3d1A6A7|
|hbtc|IERC20|0x9b2689525e07406D8A6fB1C40a1b86D2cd34Cbb2|
|pusd|IERC20|0x556d8bF8bF7EaAF2626da679Aa684Bac347d30bB|
|nestGovernance|INestGovernance|0x7b5ee1Dc65E2f3EDf41c798e7bd3C22283C3D4bb|
|nestBatchPlatform2|INestBatchMining, INestBatchPriceView, INestBatchPrice2|0x09CE0e021195BA2c1CDE62A8B187abf810951540|


## Error Codes
### NestBatchMining.sol

|Code|Meaning|
|---|---|
|NOM:unit must > 0|This error occurs when the price token unit is 0 when opening a quote channel.|
|NOM:token can't equal token0|This error occurs when opening a quote channel or adding a new quote token to an existing quote channel where there is a quote token with the same address as the price token.|
|NOM:token reiterated|This error occurs when opening a quote channel or adding a new quote token to an existing quote channel where there is a quote token with the same address as another quote coin.|
|NOM:not opener|This error occurs when attempting to add quote token, modify configurations, or transfer the opener's rights with an account that does not have opener rights.|
|NOM:vault error|This error occurs when the mining token is ETH ( or BNB on the BSC) and when transferring the mining token into the channel, the number of tokens specified is not the same as the ETH (or BNB) transferred in.|
|NOM:!scale|The original quote (not the verifier quote) has a size limit of 1(i.e. the quote requires a quote token with the same number of price token units) and this error occurs when the user transfers a quote amount other than 1.|
|NOM:!equivalent|This error occurs when there is a quoted token's quantity is 0 in the quote.|
|NM:!takeNum|This error occurs when the verifier order size is 0.|
|NM:!state|This error occurs when the target quote has been verified.|
|NOM:!fee|This error occurs when the amount of ETH (or BNB) transferred is not equal to the amount required.|
|NM:!miner|This error occurs when attempting to close multiple quotes but the owner of these quotes does not belong to one address. |
|NOM:!opener|This error occurs when an attempt is made to dictate ETH (or BNB) in the quote channel using an account that does not have the opener rights.|
|NM:!accounts|This error occurs when there are too many user accounts which exceed 2^32 (approximately 4 billion).|
|NBM:can't convert to uint96|The contract uses uint96 to represent the ETH (or BNB) gain of the channel and this error occurs when the amount of gain exceeds the maximum range represented by uint96 (79,228,162,514.26434 ETH).|
