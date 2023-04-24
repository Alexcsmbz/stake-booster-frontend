import { FC, useState } from 'react';
import { Header as PHeader } from '../../primitives/header';
import { useUser } from '../../../store';

export const Header: FC = () => {
  const [isModalConnectWallet, setIsModalConnectWallet] = useState(false);
  const { auth } = useUser();

  return (
    <PHeader
      isModalConnectWallet={isModalConnectWallet}
      setIsModalConnectWallet={setIsModalConnectWallet}
      auth={auth}
    />
  );
};
