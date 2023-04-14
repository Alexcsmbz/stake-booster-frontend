import { Box } from '../../components/primitives/box';
import { Input } from '../../components/primitives/input/input';
import { Radio } from '../../components/primitives/radio/radio';
import { StakingPanel } from '../../components/primitives/staking-panel/staking-panel';
import { Tag } from '../../components/primitives/tag/tag';
import {
  description,
  radioContainer,
  root,
  searchPanel,
  tagsContainer,
} from './page-main.css';
import {
  buttonAsLink,
  controlsContainer,
  table,
  tilesContainer,
  tokensContainer,
} from './page-main.css';
import { ReactComponent as Waves } from '../../assets/icons/waves.svg';
import { ReactComponent as Wx } from '../../assets/icons/wx.svg';
import { ReactComponent as Vires } from '../../assets/icons/vires.svg';
import { ReactComponent as Usdt } from '../../assets/icons/usdt.svg';
import { Button } from '../../components/primitives/button';
import { Tile } from '../../components/primitives/tile';

export const PageMain = () => {
  return (
    <Box adaptiveHPaddings>
      <main className={root}>
        <h1>Non-custodial platform where you can do more with your money</h1>
        <p style={{ marginBottom: 47 }}>Earn rewards with better boost</p>
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
        <p className={description}>
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
        <Box display="grid" direction="vertical" space="xl">
          <StakingPanel name="SURF Booster">
            <Box display="grid" direction="vertical" justifyContent="stretch">
              <Box
                direction="vertical"
                display="grid"
                justifyContent="stretch"
                className={controlsContainer}
              >
                <Box display="grid" justifyContent="stretch">
                  <Radio checked value="Stake" name="action" />
                  <Radio value="Unstake" name="action" />
                </Box>
                <Input />
                <Button>Stake</Button>
              </Box>
              <div className={tilesContainer}>
                <Tile name="Already claimed" value="0" />
                <Tile name="Unclaimed" value="0" />
                <Tile name="My deposits" value="0" />
                <Tile name="APR" value="160%" />
                <Tile name="TVL" value="1,384k" />
              </div>
              <p style={{ marginBottom: 35 }}>
                Stake your SURF tokens and make regular daily auto-arbitrage
                with boosted gNSBT
              </p>
              <button className={buttonAsLink}>Strategy description</button>
              <table className={table}>
                <tbody>
                  <tr>
                    <td>Total SURF Staked:</td>
                    <td>300,245,890</td>
                  </tr>
                  <tr>
                    <td>Total earning:</td>
                    <td>$3,400</td>
                  </tr>
                  <tr>
                    <td>gNSBT:</td>
                    <td>3,245,370</td>
                  </tr>
                  <tr>
                    <td>Deposit contract:</td>
                    <td>
                      <a href="#">link</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Rewards contract:</td>
                    <td>
                      <a href="#">link</a>
                    </td>
                  </tr>
                  <tr>
                    <td>1 sSURF = 1 SURF</td>
                  </tr>
                  <tr style={{ height: 25 }}></tr>
                  <tr style={{ height: 25 }}></tr>
                  <tr>
                    <td>Already claimed:</td>
                    <td>$758</td>
                  </tr>
                  <tr>
                    <td>Unclaimed:</td>
                    <td>$758</td>
                  </tr>
                </tbody>
              </table>
              <Box
                className={tokensContainer}
                display="grid"
                direction="vertical"
              >
                <Box display="grid">
                  <Waves />
                  <p>Waves: 0.01</p>
                </Box>
                <Box display="grid">
                  <Wx />
                  <p>WX: 32</p>
                </Box>
                <Box display="grid">
                  <Vires />
                  <p>Vires: 1</p>
                </Box>
                <Box display="grid">
                  <Usdt />
                  <p>USDT: 15</p>
                </Box>
              </Box>
              <Button>Claim rewards</Button>
            </Box>
          </StakingPanel>
          <StakingPanel name="NSBT Booster (soon)" />
          <StakingPanel name="USDT / XTN (soon)" />
        </Box>
      </main>
    </Box>
  );
};
