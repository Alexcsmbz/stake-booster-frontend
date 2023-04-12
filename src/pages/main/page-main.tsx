import { Box } from '../../components/primitives/box';
import { Input } from '../../components/primitives/input/input';
import { Radio } from '../../components/primitives/radio/radio';
import { StakingPanel } from '../../components/primitives/staking-panel/staking-panel';
import { Tag } from '../../components/primitives/tag/tag';
import {
  radioContainer,
  root,
  searchPanel,
  tagsContainer,
} from './page-main.css';

export const PageMain = () => {
  return (
    <Box adaptiveHPaddings>
      <main className={root}>
        <h1>Non-custodial platform where you can do more with your money</h1>
        <p>Earn rewards with better boost</p>
        <Box className={tagsContainer}>
          <Tag name="TVL" value="$1,245,370" />
          <Tag name="TOTAL REVENUE" value="$245,890" />
          <Tag name="TOTAL REVENUE" value="$245,890" />
          <Tag name="WX STAKED" value="$300,245,890" />
          <Tag name="WX STAKED" value="$300,245,890" />
          <Tag name="NSBT STAKED" value="245,890" />
          <Tag name="SURF STAKED" value="300,000" />
          <Tag name="gNSBT" value="3,245,370" />
          <Tag name="gNSBT" value="3,245,370" />
          <Tag name="gWX" value="3,245,370" />
        </Box>
        <p>
          Optimise your yield across various protocols with the StakeBooster and
          SBT rewards
        </p>
        <div className={searchPanel}>
          <Input style={{ justifySelf: 'start' }} placeholder="Search..." />
          <div className={radioContainer}>
            <Radio id="All" name="currency" checked value="All" />
            <Radio id="Neutrino" name="currency" value="Neutrino" />
            <Radio disabled id="WX" value="WX" />
            <Radio disabled id="SWOP" value="SWOP" />
            <Radio disabled id="USD" value="USD" />
            <Radio disabled id="WAVES" value="WAVES" />
            <Radio disabled id="BTC" value="BTC" />
          </div>
        </div>
        <StakingPanel />
      </main>
    </Box>
  );
};
