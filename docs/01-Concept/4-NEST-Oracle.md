---
sidebar_position: 4
---


# NEST Oracle

## What is NEST Oracle？
**The NEST oracle is currently the market's only truly decentralized oracle.** check the [whitepaper](https://www.nestprotocol.org/doc/ennestwhitepaper.pdf) to learn more about it.
Unlike the final price generated by the Price feed in the market, it builds a decentralized non-cooperative game network to determine the final price through the mechanism of arbitrage and two-way options. It introduces the random information of decentralized price flow into the chain.

## The advantages of NEST Oracle
Compared with the price feed mechanism, NEST Oracle has the following advantages:
### Decentralized
The NEST oracle is completely open and free of charge, allowing miners and arbitrageurs to verify prices based on non-cooperative game mechanism, and no centralized review or threshold of quotation system is required, and anyone can freely join or leave at any place and at any time. 
### Security and robustness
The NEST oracle enables everyone to change and influence the generation of prices on the chain. At the same time, it makes the price information converge to the equilibrium price under the protection of the mechanism. It takes 51% of the assets in the oracle network to form a price attack. Any price deviation in NEST Oracle will be arbitraged by all validators.

## How does NEST Oracle Work?

![image5](Images/NEST5.png)

### Valuation Asset and Quotation Asset

Each quotation track requires a unified amount of valuation asset and quotation asset. Thus, to participate in the price quotation, the maker needs to provide sufficient quotation asset with the same value as the valuation asset.

> Take the ETH price quotation as one example, where the valuation asset is USDT, and its amount is 2000USDT. In this case, each quotation needs 2000USDT and 2000USDT-worthy ETH.

### Quotation

The quotation participation needs to prepare valuation assets, quotation assets, quotation fees, and collateral assets (the collateral assets of all quotations are currently NEST). Valuation assets, quotation assets, and collateral assets can be used repeatedly in the contract without the need for transferring in every time (to save gas fees).

After the quotation, there will be a 5-minute verification period (practically calculated by block whose generation speed varies among different chains). After the 5-minute verification period, the maker can

1. close the current quotation and start the next one;
2. directly start the next quotation (if the relevant assets are sufficient) and close all of them after multiple quotations (which can save gas fees);
3. withdraw the quotation assets.

### Verification

During the 5-minute verification period of one typical quotation, anyone can question the price and choose to trade either valuation or quotation asset. Suppose all of the quotation asset is traded; in that case, the quotation will not take effect (If only part of the quotation asset is traded, the price will still take effect after the verification period). While trading valuation or quotation assets, a verifier must submit a new quotation with asset scales twice as the just-traded transaction.

> During verification, to issue a new quotation with twice the transaction size is to prevent malicious verification, which may cause the oracle to stop generating prices.

Quotation -> Verified Quotation -> Verified Quotation -> Verified Quotation -> …; One quotation and all subsequently verified quotations (generated based on this quotation) form a so-called price chain. For each of the first four quotation verifications, a verifier must submit a new quotation with valuation, quotation, and collateral assets twice the just-traded transaction size. Afterward, a verifier must double only collateral assets for a new quotation.

> To prevent exogenous funds in the market from attacking the oracle, the protocol allows the verifiers, only four times, to double the sizes of the valuation and quotation assets. This restriction does not apply to the collateral asset since it is endogenous to the system.

### Mining Volume

Mining Volume of Current Block = Mining Volume per Block * Number of Blocks between Last Quotation and Current Quotation

Mining Volume per Quotation = Mining Volume of Current Block / Number of Quotations within Current Block

Mining volume per block will be annually attenuated to a proportion of the previous year. The attenuation lasts for 10 times, after which the mining volume keeps the same amount after the 10th attenuation. The attenuation starts from the initialization of the quotation track. Ethereum is calculated according to 2,400,000 blocks per year (depending on the block generation speed of different chains), and the attenuation proportion of current active quotation track(s) is set as 80%.


