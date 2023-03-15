import { useModal } from "../../../utils/ModalContext";
import { useMoralis } from "react-moralis";
import WalletModalStyleWrapper from "./WalletModal.style";

const WalletModal = () => {
  const { walletModalHandle } = useModal();
  const { authenticate } = useMoralis();

  const handleMetamask = async (e) => {
    e.preventDefault()
    await authenticate({ signingMessage: "Connect to Pepa ERC Dapp", chainId: 1 })
      .then(async function (res) {
        console.log(res?.get("ethAddress"));
        walletModalHandle()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleWalletConnect = async (e) => {
    e.preventDefault()
    await authenticate({ provider: "walletconnect", signingMessage: "Connect to Pepa ERC Dapp", chainId: 1 })
      .then(async function (res) {
        console.log(res?.get("ethAddress"));
        walletModalHandle()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <p>
                Please select a wallet to connect to Pepa's dApp
              </p>
              <button onClick={() => walletModalHandle()}>
                x
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <a href="# " onClick={(e) => handleMetamask(e)}>                 
                  MetaMask
                  <span>
                    
                  </span>
                </a>
                <a href="# " onClick={(e) => handleWalletConnect(e)}>
                  WalletConnect
                  <span>
                    
                  </span>
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
