import { FC, ReactElement } from 'react';
import { root } from './staking-panel.css';
import { Box } from '../box';

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
        <p style={{ textAlign: 'center' }}>{name}</p>
        {children}
      </Box>
    </div>
  );
};
