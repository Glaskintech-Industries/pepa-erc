import { useState } from "react";
import { useModal } from "../../../utils/ModalContext";
import Moralis from "moralis-v1";
import { useMoralis } from "react-moralis";
import WalletModalStyleWrapper from "./WalletModal.style";

const WalletModal = () => {
  const { walletModalHandle } = useModal();
  // const { authenticate } = useMoralis();

  // const handleMetamask = async (e) => {
  //   e.preventDefault()
  //   await authenticate({ signingMessage: "Connect to Pepa ERC Dapp", chainId: 1 })
  //     .then(async function (res) {
  //       console.log(res?.get("ethAddress"));
  //       walletModalHandle()
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  // const handleWalletConnect = async (e) => {
  //   e.preventDefault()
  //   await authenticate({ provider: "walletconnect", signingMessage: "Connect to Pepa ERC Dapp", chainId: 1 })
  //     .then(async function (res) {
  //       console.log(res?.get("ethAddress"));
  //       walletModalHandle()
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  const { authenticate, enableWeb3 } = useMoralis();
  const [authError, setAuthError] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleAuth = async (provider) => {
    try {
      setAuthError(null);
      setIsAuthenticating(true);

      // Enable web3 to get user address and chain
      await enableWeb3({ throwOnError: true, provider });
      const { account, chainId } = Moralis;

      if (!account) {
        throw new Error(
          "Connecting to chain failed, as no connected account was found"
        );
      }
      if (!chainId) {
        throw new Error(
          "Connecting to chain failed, as no connected chain was found"
        );
      }

      // Get message to sign from the auth api
      const { message } = await Moralis.Cloud.run("requestMessage", {
        address: account,
        chain: parseInt(chainId, 16),
        network: "evm",
      });

      // Authenticate and login via parse
      await authenticate({
        signingMessage: message,
        throwOnError: true,
      });
    } catch (error) {
      setAuthError(error);
    } finally {
      setIsAuthenticating(false);
      walletModalHandle();
    }
  };

  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <p>Please select a wallet to connect to Pepa's dApp</p>
              <button onClick={() => walletModalHandle()}>x</button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <a href="# " onClick={(e) => handleAuth("metamask")}>
                  MetaMask
                  <span></span>
                </a>
                <a href="# " onClick={(e) => handleAuth("walletconnectk")}>
                  WalletConnect
                  <span></span>
                </a>
              </div>
              <div className="modal_bottom_text">
                By connecting your wallet, you agree to our
                <a href="# ">Terms of Service</a>
                <a href="# ">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  );
};

export default WalletModal;
