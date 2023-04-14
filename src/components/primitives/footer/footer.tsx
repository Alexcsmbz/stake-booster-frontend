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
        <a href="#">Docs</a>
        <a href="#">GitHub</a>
        <a href="#">Twitter</a>
        <a href="#">Telegram</a>
      </Box>
      <p>© {new Date().getFullYear()} StakeBooster</p>
    </footer>
  );
};
