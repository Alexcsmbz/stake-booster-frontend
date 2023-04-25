import { FC, useEffect } from 'react';
import { ModalBase } from '../base/modal-base';
import { ModalProps } from '../base/modal-base.types';
import {
  activeButton,
  activeWallet,
  button,
  content,
  root,
  wallet,
} from './modal-connect-wallet.css';
import { Box } from '../../primitives/box';
import { ReactComponent as Keeper } from '../../../assets/icons/keeper.svg';
import { useUser } from '../../../store';

export const ModalConnectWallet: FC<ModalProps> = (props) => {
  const { auth, setAuth } = useUser((state) => state);

  const connectWallet = async () => {
    const auth = await KeeperWallet.auth({ data: `${new Date().getTime()}` });
    setAuth(auth);
  };

  useEffect(() => {
    if (auth) props.onClose();
  }, [props, auth]);

  return (
    <ModalBase {...props} title="Connect wallet" className={root}>
      <div className={content}>
        <Box
          display="grid"
          space="md"
          alignItems="center"
          justifyContent="stretch"
          className={activeWallet}
        >
          <Box
            display="grid"
            space="md"
            alignItems="center"
            justifyContent="space-between"
            onClick={connectWallet}
          >
            <Box display="grid" space="md" alignItems="center">
              <Keeper />
              <span>
                <Box display="grid" justifyContent="space-between">
                  <b>Waves Keeper</b>
                </Box>
              </span>
            </Box>
            <button className={activeButton}>Choose</button>
          </Box>
        </Box>
        <Box
          display="grid"
          alignItems="center"
          justifyContent="space-between"
          className={wallet}
        >
          <b>Waves.Exchange (seed)</b>
          <button className={button}>Soon</button>
        </Box>
        <Box
          display="grid"
          alignItems="center"
          justifyContent="space-between"
          className={wallet}
        >
          <b>Waves.Exchange (email)</b>
          <button className={button}>Soon</button>
        </Box>
      </div>
    </ModalBase>
  );
};
