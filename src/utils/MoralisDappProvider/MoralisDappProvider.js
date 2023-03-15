/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import MoralisDappContext from "./context";
//import axios from "axios";

function MoralisDappProvider({ children }) {
  const { web3, Moralis, user, isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();
  const [walletAddress, setWalletAddress] = useState();
  const [chainId, setChainId] = useState();
  const [tokenPrice, setTokenPrice] = useState(undefined);
  const Web3Api = useMoralisWeb3Api();

  const tokenDecimals = 9;
  const tokenAddress = "0x577fee283e776eec29c9e4d258431982780a38a8"
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  const fetchTokenPrice = async () => {    
    await sleep(1000)
    await Web3Api.token.getTokenPrice({  
      address: tokenAddress,
      chain: "eth",
      exchange: "Uniswapv2"
      })
      .then(data => {
      console.log(data)
      setTokenPrice(data)
      })
    }

    useEffect(() => {
      // Ensure Web3Api is loaded before fetching token price
     if (Web3Api && tokenPrice ===  undefined) {
      setTokenPrice(0)
      fetchTokenPrice();
    }
    }, [Web3Api]);
    
    useEffect(() => {
    Moralis?.onChainChanged(function (chain) {
      setChainId(chain);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setChainId(web3?.givenProvider?.chainId));
  useEffect(
    () => setWalletAddress(web3?.givenProvider?.selectedAddress || user?.get("ethAddress")),
    [web3, user]
  );

  return (
    <MoralisDappContext.Provider value={{ walletAddress, chainId, tokenAddress, tokenPrice, tokenDecimals }}>
      {children}
    </MoralisDappContext.Provider>
  );
}

function useMoralisDapp() {
  const context = React.useContext(MoralisDappContext);
  if (context === undefined) {
    throw new Error("useMoralisDapp must be used within a MoralisDappProvider");
  }
  return context;
}

export { MoralisDappProvider, useMoralisDapp };
