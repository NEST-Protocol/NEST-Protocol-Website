---
sidebar_position: 2
---

# How to Mining

Anyone can earn mining rewards by providing quotes on NEST Oracle. Here is the price generation process of NEST Oracle.

![image5](./Images/NEST5.png)

[NEST Oracle API GitHub](https://github.com/NEST-Protocol/NEST-Oracle-V4.0/blob/main/contracts/interfaces/INestBatchMining.sol)

> If a certain token satisfies, over time or if a condition is met, its token balance will be adjusted at each address on the chain. Tokens that meet this condition are then unable to be supported by the NEST Oracle for quotes, and the token cannot be used by the quotation token, pricing token, or mining token.

## Roles

### Miner
Received mining token rewards by providing quotes.

### Arbitrager
Corrected the quotes from the miner and got profit from price spread.

### Channel Opener
Provide the information required for a quote channel in accordance with NEST specifications, open a quote channel, and own the maintenance rights to this quote channel.

### Price Caller
Called the price provided by NEST Oracle. [The documentation of the price-calling](/docs/NEST-Oracle/How-to-Call-Price).

## What is Channel?

The quote channel is the foundation of NEST Oracle and contains all of the information that constitutes the price mechanism.

### Components

- Price Token: the reference token for quotes, usually a mainstream token, e.g. USD
- Price Token Unit: the size of each quote, e.g. 2000 USD
- Quotation Token: the token to be quoted in the channel, a channel can have multiple quotation tokens
- Mining Token: Tokens used to reward miners
- Standard Output: The amount of mined tokens that can be generated from a single block.
- Total Mining Token: Mining tokens need to be provided by the channel opener, and the opener could increase the total mining token amount, and it will reward miners according to the mining speed.
- Attenuation Factor:
  - The standard output decays every year based on the Attenuation Factor, and will not decay after 10 times, after which it will be mined according to the last standard output. For example, 80% means the next year's standard output is 80% of the current year.
  -  The decay is calculated from the channel's initial block, and on the Ethereum mainnet, it is calculated according to 2400000 blocks per year (depending on the speed of different chains).
- Initial Block: The block where the channel is created. This parameter can be used to determine the time when the channel is established on the block, and the decay interval is also calculated from this block number.
- Number of Quotes: The sum of the number of quotes of all quotation tokens in the channel. The number of quotes may be different for different tokens in the same quote channel.
  - Order verification is for a single quotation token. Order verification quotes only increase the number of quotes for the verified quotation token.
  - A quotation token can be added later after the channel is created, and the number of quotations will be less for this quotation token.
- Quotation Fee: The fee to be paid for a quote, usually 0.
- Price Calling Fee: The fee for calling quotations from the NEST Oracle.
- Quotation Frequency: the time interval of the quotation.

![image6](./Images/NEST6.png)

### Definitions

#### Number of Verified Blocks
The number of blocks the quotation needs to wait for verification, which is set globally by NEST, and varies depending on the block generating speed of different chains. The number of Verified Blocks on the Ethereum mainnet is 20.

#### Effective Price
After block verification, the weighted average of the remaining quotation prices within a block.

#### Last Price
The latest effective price of the quotation token.

## Functions

### Quote

#### Start Quote

Miners could start a quote on a particular channel by calling the post function. By calling this function, miners need to provide quotes for the quote pairs in this channel and, at the same time,  deposit the corresponding price token into the contract as the pledge fund.

For example, John wants to start a quote on Channel 0 of Binance Smart Chain(BSC) , since there are 3 quote pairs, PETH/PUSD, PETH/NEST and PETH/PBTC, and the minimum pledge unit is 2,000 PUSD, John needs to pledge at least 6,000 PUSD to start the quote.

```
    /// @dev Post price
    /// @param channelId Target channelId
    /// @param scale Scale of this post. (Which times of unit)
    /// @param equivalents Price array, one to one with pairs
    function post(uint channelId, uint scale, uint[] calldata equivalents) external payable;
```

#### Close Quote

If you do not want to continue quoting, you can call the close function to close the quote, which is equivalent to unfreezing your pledged funds.

```
    /// @notice Close a batch of price sheets passed VERIFICATION-PHASE
    /// @dev Empty sheets but in VERIFICATION-PHASE aren't allowed
    /// @param channelId Target channelId
    /// @param indices Two-dimensional array of sheet indices, first means pair indices, seconds means sheet indices
    function close(uint channelId, uint[][] calldata indices) external;
```

#### Withdraw Fund

Miners could withdraw their funds, including pledged funds and mining rewards, once the quote was closed. In this case, the withdraw function should be used.

```
    /// @dev Withdraw assets
    /// @param tokenAddress Destination token address
    /// @param value The value to withdraw
    function withdraw(address tokenAddress, uint value) external;
```

### Arbitrage

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

### Query

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

### Create Channel

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
