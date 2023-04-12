import { FC } from 'react';
import { root } from './staking-panel.css';
import { Radio } from '../radio/radio';
import { Input } from '../input/input';
import { Button } from '../button';
import { Box } from '../box';

export const StakingPanel: FC = () => {
  return (
    <div className={root}>
      <Box
        display="grid"
        direction="vertical"
        space="xxl"
        justifyContent="stretch"
      >
        <p>SURF Booster</p>
        <Box display="grid" direction="vertical" justifyContent="stretch">
          <Box display="grid" justifyContent="stretch">
            <Radio checked value="Stake" name="action" />
            <Radio value="Unstake" name="action" />
          </Box>
          <Input />
          <Button>Stake</Button>
        </Box>
      </Box>
    </div>
  );
};
