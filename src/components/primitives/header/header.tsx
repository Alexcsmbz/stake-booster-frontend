/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../../../router/routes';
import { links, mobileLinks, root } from './header.css';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { Box } from '../box';
import { Button } from '../button';
import { ReactComponent as Wallet } from '../../../assets/icons/wallet.svg';
import { shortenAddress } from '../../../utils/shorten-address';
import { ModalConnectWallet } from '../../../components/modals/connect-wallet';
import { theme } from '../../../themes/main.css';

export const Header: FC<{
  auth?: WavesKeeper.IAuthResponse;
  setIsModalConnectWallet: (value: boolean) => void;
  isModalConnectWallet: boolean;
}> = ({ auth, isModalConnectWallet, setIsModalConnectWallet }) => (
  <header className={root}>
    <Box display="grid" justifyContent="space-between" alignItems="center">
      <Link to={Route.home.path}>
        <Logo />
      </Link>
      <nav>
        <Box display="grid" space="xxl" alignItems="center">
          <span className={links}>
            <Box display="grid" space="xxl" alignItems="center">
              <a
                style={{ color: theme.color['gray-4'], cursor: 'not-allowed' }}
                href="#"
              >
                Governance
              </a>
              <a
                href="https://stakebooster.gitbook.io/untitled/"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </a>
            </Box>
          </span>
          {auth ? (
            <Box display="grid" space="sm">
              <Wallet />
              {shortenAddress(auth.address)}
            </Box>
          ) : (
            <Button
              buttonSize="small"
              onClick={() => setIsModalConnectWallet(true)}
            >
              Connect wallet
            </Button>
          )}
        </Box>
      </nav>
    </Box>
    <span className={mobileLinks}>
      <Box display="grid" space="xxl" alignItems="center">
        <a
          style={{ color: theme.color['gray-4'], cursor: 'not-allowed' }}
          href="#"
        >
          Governance (soon)
        </a>
        <a
          href="https://stakebooster.gitbook.io/untitled/"
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </a>
      </Box>
    </span>
    {isModalConnectWallet && (
      <ModalConnectWallet
        isOpen={isModalConnectWallet}
        onClose={() => setIsModalConnectWallet(false)}
      />
    )}
  </header>
);
