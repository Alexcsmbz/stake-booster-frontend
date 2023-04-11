import { FC, useState } from 'react';
import { Header as PHeader } from '../../primitives/header';

export const Header: FC = () => {
  const [authData, setAuthData] = useState<WavesKeeper.IAuthResponse>();

  const connectWallet = async () => {
    const auth = await KeeperWallet.auth({ data: `${new Date().getTime()}` });
    setAuthData(auth);
  };

  return <PHeader auth={authData} onConnectWalletClick={connectWallet} />;
};
