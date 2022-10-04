---
sidebar_position: 1
---

# PVM Technical Reference

NEST [PVM](https://nestprotocol.org/docs/Concept/PVM) offers a variety of contract functions based on probabilistic assets, with which developers can quickly build their own DeFi, NFT, and GameFi projects. You can check [dapp](https://finance.nestprotocol.org/) and the [whitepaper](https://www.nestprotocol.org/doc/ennestwhitepaper.pdf) to learn more about it.

The contract functions already available are futures, options. 


This article is divided into 3 parts：
- [Contract details](https://nestprotocol.org/docs/PVM-Technical-Reference#contract)
- [Contract Address](https://nestprotocol.org/docs/PVM-Technical-Reference#contract-address)
- [Error Codes](https://nestprotocol.org/docs/PVM-Technical-Reference#error-codes)


## Contract details

### Futures

The Futures contract includes four functions:
- [Buy futures](https://nestprotocol.org/docs/PVM-Technical-Reference#buy-futures)
- [Sell futures](https://nestprotocol.org/docs/PVM-Technical-Reference#sell-future)
- [Futures Liquidation](https://nestprotocol.org/docs/PVM-Technical-Reference#futures-liquidation)
- [Get futures index](https://nestprotocol.org/docs/PVM-Technical-Reference#get-futures-index)

#### Buy Futures

The Buy Futures function allows users to buy a future product with the specific leverage ratio, direction and amount, without a trading fee. Users could open a future position of ETH/USDT or BTC/USDT directly through their wallet. The market price of futures is provided by the NEST oracle.

Futures' open price will be slightly different from the price provided by the NEST oracle, as the mechanism of the decentralized oracle will result in a little time lag between market price and the oracle price, thus, a certain amount of risk compensation is added to the futures' open price. For example, for long positions, the open price will be slightly higher than the price quoted by the NEST oracle.

```
    function buy(
        address tokenAddress,
        uint lever,
        bool orientation,
        uint nestAmount
    ) external payable override
```

|Input|type|Detail|
|---|---|---|
|tokenAddress|address|Target token address, 0 means eth|
|lever|uint|Lever of future|
|orientation|bool|true: call, false: put|
|nestAmount|uint|Amount of paid NEST|

#### Sell Future

When already having a NEST futures position, users could use the sell function to sell a futures position of any amount. Of course, the amount sold could not exceed the position held.

```
    function sell(uint index, uint amount) external payable override
```

|Input|type|Detail|
|---|---|---|
|index|uint|Index of future|
|amount|uint|Amount to sell|

#### Futures Liquidation

Futures contracts are cleared using a position-by-position mechanism, which means that each position in a futures contract is cleared independently. When the margin on a futures contract position falls below the liquidation price, a liquidator will liquidate it. Anyone can become a liquidator of NEST and the liquidator receives the residual value of the contract after it has been liquidated.

The liquidation price of a futures contract is calculated as follows.

NEST futures are using the isolated margin mode, which means each futures position is liquidated independently. When the margin on a futures position falls below the liquidation price, the liquidator will liquidate it. Anyone could become the liquidator of NEST and the liquidator receives the residual value of the contract after it has been liquidated.

The liquidation price of a futures contract is calculated as follows.

![image4](./Images/NEST4.png)

- P0: Futures open price
- L: Leverage ratio
- C: Liquidation rate
- T: Position holding time
- u: Risk free rate in NEST network

```
    function settle(uint index, address[] calldata addresses) external payable override
```

|Input|type|Detail|
|---|---|---|
|index|uint|Index of future|
|addresses|address[]|Target addresses|

#### Get Futures Index

Futures index contains leverage and direction information of the futures contract, and it can be used as an input parameter in other functions.

```
    function getFutureInfo(
        address tokenAddress, 
        uint lever,
        bool orientation
    ) external view override returns (FutureView memory)
```

|Input|type|Detail|
|---|---|---|
|tokenAddress|address|Target token address, 0 means eth|
|lever|uint|Lever of future|
|orientation|bool|true: call, false: put|

|Output|type|Detail|
|---|---|---|
|index|uint|future index|
|tokenAddress|address|Target token address, 0 means eth|
|lever|uint|Lever of future|
|orientation|bool|true: call, false: put|

### Options

Options contracts include four functions:
- [Buy options](https://nestprotocol.org/docs/PVM-Technical-Reference#buy-options)
- [Exercise options](https://nestprotocol.org/docs/PVM-Technical-Reference#exercise-option)
- [Sell options](https://nestprotocol.org/docs/PVM-Technical-Reference#sell-option)
- [Find options](https://nestprotocol.org/docs/PVM-Technical-Reference#find-the-options)

#### Buy Options

NEST provides infinite European options for users. Users could buy a NEST option without any commission. Most options market markers only have several expiry dates and strike amounts for users to choose, but NEST options ' expiry date and strike price are set by the user, which is much more flexible.

```
    function open(
        address tokenAddress,
        uint strikePrice,
        bool orientation,
        uint exerciseBlock,
        uint nestAmount
    ) external payable override
```

|Input|type|Detail|
|---|---|---|
|tokenAddress|address|Target token address, 0 means eth|
|strikePrice|uint|The exercise price set by the user. During settlement, the system will compare the current price of the subject matter with the exercise price to calculate the user's profit and loss|
|orientation|bool|true: call, false: put|
|exerciseBlock|uint|After reaching this block, the user will exercise manually, and the block will be recorded in the system using the block number|
|nestAmount|uint|Amount of paid NEST|

#### Exercise Option

When there is already an option position and the option has expired, the user can choose to exercise the option at any subsequent time if the final payoff is greater than 0

```
    function exercise(uint index, uint amount) external payable override
```

|Input|type|Detail|
|---|---|---|
|index|uint|Index of option|
|amount|uint|Amount of option to exercise|

#### Sell Option

When there is already an option position and the option has not expired, the user could call the sell function and sell the option to the NEST network, and thereby receive an immediate gain.

```
    function sell(uint index, uint amount) external payable override
```

|Input|type|Detail|
|---|---|---|
|index|uint|Index of option|
|amount|uint|Amount of option to sell|

#### Find the Options

The find function allows users to find the options order data for a specific address.

```
    function find(
        uint start, 
        uint count, 
        uint maxFindCount, 
        address owner
    ) external view override returns (OptionView[] memory optionArray)
```

|Input|type|Detail|
|---|---|---|
|start|uint|Given the order index of the address, and it will return all the options bought after this given order.|
|count|uint|Maximum number of records returned|		
|maxFindCount|uint|Find records at most|
|owner|address|Target address|

|Output|type|Detail|
|---|---|---|
|index|uint|Option index|
|tokenAddress|address|address Target token address, 0 means eth|
|strikePrice|uint|The price set by the user. The system will compare the current price with the strike price to calculate the user's profit and loss|
|orientation|bool|True: call, False: put|
|exerciseBlock|uint|After reaching this block, the user will exercise manually, and the block will be recorded in the system using the block number|
|balance|uint|Option shares|
|owner|address|Target address|

## Contract Address

NEST Contract deployment addresses are as follows:

### Ethereum Mainnet

|Contract|Contract Address|
|---|---|
|nestOptions|0x10F7f08A278e495CBCa66388A2400fF0deFe3122|
|nestFutures|0x0E48e068958b3E683a664FB81697F7046f83C3A8|
|nestBuybackPool|0x7b65629A811eBB0d6CC99bDc4d1d606f8F707125|


### BNB Smart Chain Mainnet
|Contract|Contract Address|
|---|---|
|nestOptions|0x12858F7f24AA830EeAdab2437480277E92B0723a|
|nestFutures|0x8e32C33814271bD64D5138bE9d47Cd55025074CD|
|nestBuybackPool|0x8AA36CF9CD7e88b63F32c53C66BFaDd409367B2f|

## Error Codes

### NestFutures.sol

|Code|Meaning|
|---|---|
|NF:too much tokenConfigs|This error occurs when the cumulative number of registered tokens exceeds 65535. Only governance rights are available, this interface is not available to normal users.|
|NF:exists|Open futures supported leverage, including call and put directions. This error occurs when futures with the same token, same leverage ratio and same direction are already registered. This interface is only available for governance usage, not available to normal users.|
|NF:not exist|This error occurs when the futures attempt to be bought, sold or liquidated but the futures position does not exist.|
|NF:at least 50 NEST|This error occurs when the number of NEST is less than 50 when buying futures.|
|NF:lever must greater than 1|This error occurs when attempting to liquidate futures with a leverage ratio not greater than 1.|
|NF:lever too large|This error occurs when attempting to open a futures product with a leverage ratio over 2^32 (in the application the highest futures' leverage ratio is x5)|
|NF:can't convert to uint128|This error occurs when attempting to transform to uint128 for a value that exceeds the maximum range that can be represented by uint128. The user's futures balance exceeding this range will result in this error.|

### NestOptions.sol

|Code|Meaning|
|---|---|
|NO:too much tokenRegistrations|This error occurs when the cumulative number of registered tokens exceeds 65535. Only governance rights are available, this interface is not available to normal users.|
|NO:at maturity|This error occurs when the block number has not reached the expiry date's block number.|
|NO:not owner|This error occurs when trying to sell an option whose owner is not the account that initiated the trade.|
|NO:can't convert to 64bits|This error occurs when the user specifies a strike block that is too large, resulting in the product of volatility and time exceeding 0x6F05B59D3B2000000000000000000000000.|
|NO:can't convert to int128|This error can occur when the intermediate result is too large (larger than the maximum value that can be represented by int128) when calculating the option price (value).  This could result from a large strike block, a big gap between the option strike price and the current price.|
|NO:can't convert to uint|The ABDKMath64x64 library is referenced when calculating options and the intermediate results may logically be negative. To avoid underflow errors, this error will occur when calculating option prices with negative numbers.|
|NO:can't convert to uint112|This error occurs when attempting to transform to uint112 for a value that exceeds the maximum range that can be represented by uint112. When the user option balance exceeds this range, it will occur.|
|NO:exerciseBlock too small|This error occurs when the interval between the strike block number and the current block number is too small (should be more than one month in time approximately) when buying options or estimating option prices.|
|NO:!accounts|This exception occurs when the number of users participating in the option exceeds 2^32 (approximately 4 billion) and there are too many user accounts.|

### NestVault.sol

|Code|Meaning|
|---|---|
|NV: exceeded allowance|This error occurs when the Options and Futures modules have set the maximum number of NSET that can be won on a single trade (10 million for Options and Futures).|

---

Note: The error codes listed above does not list all possible errors

1. Error messages in common libraries referenced by the contract are not listed, e.g. TransferHelper.
2. Arithmetic overflow is not listed, e.g. divided by 0 errors.
3. External causes are not listed, e.g. out of gas, unspecified interface (such as transferring to a non-ERC20 address)
