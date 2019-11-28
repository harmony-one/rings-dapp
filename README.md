# Harmony Transaction Mixer using Ring Signature dAPP

## Overview
This is an Harmony transaction mixer that ultilizes parts of [CryptoNote](https://cryptonote.org/) to enable zero-knowledge transactions.
Ported from [Heiswap](https://github.com/kendricktan/heiswap-dapp) from Ethureum.

It ulitilizes Ring Signatures and pseudo-stealth addresses to achieve its zero-knowledge properties. 
Ring signatures was only possible on the EVM (gas-wise) due to the recent addition of [EIP198](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-198.md) and [EIP1895](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1895.md).

## Install javascript libs
```bash
$yarn install
```

## Compile smart contract
```bash
$truffle compile
```

## Deploy smart contract to Harmony's testnet 
```bash
$truffle migrate --network testnet --reset


Compiling your contracts...
===========================
> Compiling ./contracts/AltBn128.sol
> Compiling ./contracts/Heiswap.sol
> Compiling ./contracts/LSAG.sol
> Compiling ./contracts/Migrations.sol
> Artifacts written to rings-dapp/build/contracts
> Compiled successfully using:
   - solc: 0.5.8+commit.23d335f2.Emscripten.clang



Migrations dry-run (simulation)
===============================
> Network name:    'testnet-fork'
> Network id:      2
> Block gas limit: 0x66916c


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > block number:        320566
   > block timestamp:     1574972167
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             880.3909513238
   > gas used:            246393
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000492786 ETH

   -------------------------------------
   > Total cost:         0.000492786 ETH


2_contract_deployments.js
=========================

   Replacing 'AltBn128'
   --------------------
   > block number:        320568
   > block timestamp:     1574972170
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             880.3894194658
   > gas used:            738906
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.001477812 ETH


   Linking
   -------
   * Contract: LSAG <--> Library: AltBn128 

   Replacing 'LSAG'
   ----------------
   > block number:        320569
   > block timestamp:     1574972172
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             880.3866150198
   > gas used:            1402223
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.002804446 ETH


   Linking
   -------
   * Contract: Heiswap <--> Library: LSAG 

   Linking
   -------
   * Contract: Heiswap <--> Library: AltBn128 

   Replacing 'Heiswap'
   -------------------
   > block number:        320570
   > block timestamp:     1574972180
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             880.3830287198
   > gas used:            1793150
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.0035863 ETH

   -------------------------------------
   > Total cost:         0.007868558 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.008361344 ETH





Starting migrations...
======================
> Network name:    'testnet'
> Network id:      2
> Block gas limit: 0x66916c


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x40d87259c301c8db1c201d185981eefabfcf289c028b20dd033dc02e6887aa75
   > Blocks: 0            Seconds: 4
   > contract address:    0xbdE7cB47Bea64aAbA91ab0D04589adf6024d44e6
   > block number:        320568
   > block timestamp:     1574972188
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             880.3911827168
   > gas used:            261393
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.000261393 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.000261393 ETH


2_contract_deployments.js
=========================

   Replacing 'AltBn128'
   --------------------
   > transaction hash:    0x1c538254d1cc7bbc08adf2af09b2b0bd435efab035c080a1e67ff656973e7d6f
   > Blocks: 0            Seconds: 4
   > contract address:    0x1A90DcCb1a028E1cb342Bd15Da91fCB346E57240
   > block number:        320570
   > block timestamp:     1574972205
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             880.3904017878
   > gas used:            738906
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.000738906 ETH


   Linking
   -------
   * Contract: LSAG <--> Library: AltBn128 (at address: 0x1A90DcCb1a028E1cb342Bd15Da91fCB346E57240)

   Replacing 'LSAG'
   ----------------
   > transaction hash:    0xf35c84b2f8c152a415d4c3dff5b403daee5acce57a1f0bfbb24dcdd11adcffb5
   > Blocks: 0            Seconds: 4
   > contract address:    0x37a4390d8f8dD34546bd7773ffB5a60c8243F516
   > block number:        320571
   > block timestamp:     1574972213
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             880.3889995648
   > gas used:            1402223
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.001402223 ETH


   Linking
   -------
   * Contract: Heiswap <--> Library: LSAG (at address: 0x37a4390d8f8dD34546bd7773ffB5a60c8243F516)

   Linking
   -------
   * Contract: Heiswap <--> Library: AltBn128 (at address: 0x1A90DcCb1a028E1cb342Bd15Da91fCB346E57240)

   Replacing 'Heiswap'
   -------------------
   > transaction hash:    0xeaf1f5db787a3084b79a14bdf7c211f33b1172abf7fd93b69940bed0ca188d14
   > Blocks: 1            Seconds: 12
   > contract address:    0x71D635824dF8938f0B693Ea2510c1f10C3bC557c
   > block number:        320573
   > block timestamp:     1574972229
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             880.3870414148
   > gas used:            1958150
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.00195815 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.004099279 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.004360672 ETH

```
