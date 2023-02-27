import { useWeb3React } from "@web3-react/core";
import { injected } from "../Services/connectors";
// import { ConnectWallet } from "../Redux/actions";
export const useAuth = () => {
  const { activate, deactivate } = useWeb3React();
  // const history = useHistory();

  const login = () => {
    activate(injected);
  };
  const logout = async () => {
    // refreshState();
    deactivate();
  };
  return { login, logout };
};

export default useAuth;
