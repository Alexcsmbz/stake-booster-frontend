import { FC } from 'react';
import { Box } from '../box';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { Route } from '../../../router/routes';
import { Link } from 'react-router-dom';
import { linkLogo, links, root } from './footer.css';

export const Footer: FC = () => {
  return (
    <footer className={root}>
      <Link className={linkLogo} to={Route.home.path}>
        <Logo />
      </Link>
      <Box display="grid" space="lg" className={links}>
        <a
          target="_blank"
          href="https://stakebooster.gitbook.io/untitled/"
          rel="noreferrer"
        >
          Docs
        </a>
        <a href="#">GitHub</a>
        <a
          href="https://twitter.com/stakebooster"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a href="https://t.me/StakeBooster" target="_blank" rel="noreferrer">
          Telegram
        </a>
      </Box>
      <p>© {new Date().getFullYear()} StakeBooster</p>
    </footer>
  );
};
