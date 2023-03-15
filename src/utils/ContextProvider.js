import { useState } from "react";
import { ModalContext } from "./ModalContext";

const ContextProvider = ({ children }) => {
  const [walletModalvisibility, setModalvisibility] = useState(false);
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [metamaskModal, setMetamaskModal] = useState(false);

  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility);
  };

  const shareModalHandle = (e) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };

  const handleMetamaskModal = () => {
    setModalvisibility(!walletModalvisibility);
    setMetamaskModal(!metamaskModal);
  };

  return (
    <ModalContext.Provider
      value={{
        walletModalHandle,
        walletModalvisibility,
        shareModalVisibility,
        shareModalHandle,
        metamaskModal,
        handleMetamaskModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
