---
sidebar_position: 3
---

# Error Codes

## NestFutures.sol

|Code|Meaning|
|---|---|
|NF:too much tokenConfigs|This error occurs when the cumulative number of registered tokens exceeds 65535. Only governance rights are available, this interface is not available to normal users.|
|NF:exists|Open futures supported leverage, including call and put directions. This error occurs when futures with the same token, same leverage ratio and same direction are already registered. This interface is only available for governance usage, not available to normal users.|
|NF:not exist|This error occurs when the futures attempt to be bought, sold or liquidated but the futures position does not exist.|
|NF:at least 50 NEST|This error occurs when the number of NEST is less than 50 when buying futures.|
|NF:lever must greater than 1|This error occurs when attempting to liquidate futures with a leverage ratio not greater than 1.|
|NF:lever too large|This error occurs when attempting to open a futures product with a leverage ratio over 2^32 (in the application the highest futures' leverage ratio is x5)|
|NF:can't convert to uint128|This error occurs when attempting to transform to uint128 for a value that exceeds the maximum range that can be represented by uint128. The user's futures balance exceeding this range will result in this error.|

## NestOptions.sol

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

## NestProbability.sol

|Code|Meaning|
|---|---|
|NP:n or m not valid|NEST quantity threshold [0.0001, 1000.0000], multiplier threshold [1.0000, 100.0000], this error occurs when the user rolls the prize with parameters that are not within the threshold.|
|NP:different owner|This error occurs when the rewards of the roll do not belong to the same address.|
|NP:!hashBlock|This error occurs when the claim block number is not greater than the roll block number.|

## NestVault.sol

|Code|Meaning|
|---|---|
|NV: exceeded allowance|This error occurs when the Options, Futures and Roll modules have set the maximum number of NSET that can be won on a single trade (10 million for Options and Futures, and 100,000 for Roll).|

---

Note: The error codes listed above does not list all possible errors

1. Error messages in common libraries referenced by the contract are not listed, e.g. TransferHelper.
2. Arithmetic overflow is not listed, e.g. divided by 0 errors.
3. External causes are not listed, e.g. out of gas, unspecified interface (such as transferring to a non-ERC20 address)


