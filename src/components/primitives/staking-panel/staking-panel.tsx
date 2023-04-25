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
import { unitParser } from '../../../utils/unit-parser';

export const StakingPanel: FC<{
  name: string;
  userInfo?: { totalSurfStaked: number };
  children?: ReactElement;
}> = ({ children, name, userInfo }) => {
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
            <p>
              {userInfo?.totalSurfStaked
                ? unitParser.from(userInfo?.totalSurfStaked, 6)
                : 0}
            </p>
            <p>0</p>
            <p>0</p>
          </div>
          <Minus className={expandIcon} />
        </div>
        {children}
      </Box>
    </div>
  );
};
