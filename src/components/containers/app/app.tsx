import { Router } from '../../../router';
import { themeClass } from '../../../themes/main.css';
import cx from 'classnames';
import './app.css';
import { font } from './app.css';
import { Header } from '../header';

export const App = () => {
  return (
    <div className={cx(themeClass, font)}>
      <Header />
      <Router />
    </div>
  );
};
