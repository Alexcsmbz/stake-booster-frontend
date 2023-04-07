/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../../../router/routes';
import { links, mobileLinks, root } from './header.css';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { Box } from '../box';
import { Button } from '../button';

export const Header: FC = () => (
  <header className={root}>
    <Box display="grid" justifyContent="space-between" alignItems="center">
      <Link to={Route.home.path}>
        <Logo />
      </Link>
      <nav>
        <Box display="grid" space="xxl" alignItems="center">
          <span className={links}>
            <Box display="grid" space="xxl" alignItems="center">
              <a href="#">Governance</a>
              <a
                href="https://stakebooster.gitbook.io/untitled/"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </a>
            </Box>
          </span>
          <Button>Connect wallet</Button>
        </Box>
      </nav>
    </Box>
    <span className={mobileLinks}>
      <Box display="grid" space="xxl" alignItems="center">
        <a href="#">Governance (soon)</a>
        <a
          href="https://stakebooster.gitbook.io/untitled/"
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </a>
      </Box>
    </span>
  </header>
);
