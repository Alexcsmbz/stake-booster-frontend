import { Router } from '../../../router';
import { themeClass } from '../../../themes/main.css';
import cx from 'classnames';
import { Header } from '../header';
import { Footer } from '../../primitives/footer';
import { root } from './app.css';

export const App = () => {
  return (
    <div className={cx(themeClass, root)}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};
