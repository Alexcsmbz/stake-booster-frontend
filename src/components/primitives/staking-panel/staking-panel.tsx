import { FC, ReactElement } from 'react';
import {
  expandIcon,
  header,
  headerInfo,
  root,
  title,
} from './staking-panel.css';
import { Box } from '../box';
import { ReactComponent as Minus } from '../../../assets/icons/minus.svg';

export const StakingPanel: FC<{ name: string; children?: ReactElement }> = ({
  children,
  name,
}) => {
  return (
    <div className={root}>
      <Box
        display="grid"
        direction="vertical"
        space="xxl"
        justifyContent="stretch"
      >
        <div className={header}>
          <p className={title}>{name}</p>
          <div className={headerInfo}>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>160%</p>
            <p>1,384k</p>
          </div>
          <Minus className={expandIcon} />
        </div>
        {children}
      </Box>
    </div>
  );
};
