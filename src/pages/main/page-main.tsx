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
  stakingPanelBackground,
  stakingPanelLayout,
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
import {
  claimedInfoContainer,
  header as stakingPanelHeader,
  headerInfo as stakingPanelHeaderInfo,
  tr,
} from '../../components/primitives/staking-panel/staking-panel.css';
import { useEffect, useState } from 'react';
import { ModalIntroduction } from '../../components/modals/introduction';
import { ReactComponent as Xtn } from '../../assets/icons/xtn.svg';
import { unitParser } from '../../utils/unit-parser';
import { useInfo, useUser } from '../../store/store';

export const PageMain = () => {
  const [isModalIntroduction, setIsModalIntroduction] = useState(false);
  const [action, setAction] = useState<'Stake' | 'Unstake'>('Stake');
  const [amount, setAmount] = useState(0);
  const { updateInfo, ...info } = useInfo((state) => state);
  const { updateUserInfo, auth, ...userInfo } = useUser((state) => state);

  const onSendTx = async () => {
    if (action === 'Stake' && amount > 0) {
      try {
        await KeeperWallet.signAndPublishTransaction({
          type: 16,
          data: {
            dApp: process.env.REACT_APP_BOOSTER_CONTRACT as string,
            call: {
              function: 'stake',
              args: [],
            },
            payment: [
              {
                assetId: process.env.REACT_APP_SURF_ASSET_ID as string,
                amount: unitParser.to(amount, 6),
              },
            ],
          },
        });
      } catch (e) {
        console.error(e);
      }
    }

    if (action === 'Unstake' && amount > 0) {
      try {
        await KeeperWallet.signAndPublishTransaction({
          type: 16,
          data: {
            dApp: process.env.REACT_APP_BOOSTER_CONTRACT as string,
            call: {
              function: 'applyForPendingWithdraw',
              args: [
                {
                  type: 'integer',
                  value: unitParser.to(amount, 6),
                },
              ],
            },
            payment: [],
          },
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const onClaimSurf = async () => {
    try {
      await KeeperWallet.signAndPublishTransaction({
        type: 16,
        data: {
          dApp: process.env.REACT_APP_BOOSTER_CONTRACT as string,
          call: {
            function: 'claimSurf',
            args: [],
          },
          payment: [],
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onClaimRewards = async () => {
    try {
      await KeeperWallet.signAndPublishTransaction({
        type: 16,
        data: {
          dApp: process.env.REACT_APP_BOOSTER_CONTRACT as string,
          call: {
            function: 'claim',
            args: [],
          },
          payment: [],
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    updateInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (auth?.address) updateUserInfo(auth.address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const totalRevenueWaves = Number(
    Number(unitParser.from(info.totalRevenueWaves, 6)).toFixed(2)
  );

  const totalRevenueWX = Number(
    Number(unitParser.from(info.totalRevenueWX, 6)).toFixed(2)
  );

  const totalRevenueXtn = Number(
    Number(unitParser.from(info.totalRevenueXtn, 6)).toFixed(2)
  );

  const gNsbt = Number(unitParser.from(info.gNsbt, 6)).toFixed(2);

  const totalSurfStaked = unitParser.from(info.totalSurfStaked, 6);

  return (
    <Box adaptiveHPaddings>
      <main className={root}>
        <h1>Non-custodial platform where you can do more with your money</h1>
        <p style={{ marginBottom: 47 }}>Earn rewards with better boost</p>
        <Box className={tagsContainer}>
          <Tag name="TVL" value="0" />
          <Tag name="TOTAL REVENUE" value="0" />
          <Tag name="WX STAKED" value={totalRevenueWX} />
          <Tag name="NSBT STAKED" value="0" />
          <Tag name="SURF STAKED" value={totalSurfStaked} />
          <Tag name="gNSBT" value={gNsbt} />
          <Tag name="gWX" value="0" />
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
        <Box
          display="grid"
          direction="vertical"
          space="xl"
          className={stakingPanelBackground}
        >
          <div>
            <div className={stakingPanelHeader} style={{ gap: 10 }}>
              <div />
              <div
                className={stakingPanelHeaderInfo}
                style={{ paddingBottom: 18 }}
              >
                <p>Already claimed</p>
                <p>Unclaimed</p>
                <p>My deposits</p>
                <p>APR</p>
                <p>TVL</p>
              </div>
            </div>
            <StakingPanel expand userInfo={userInfo} name="SURF Booster">
              <div className={stakingPanelLayout}>
                <Box
                  direction="vertical"
                  display="grid"
                  justifyContent="stretch"
                  className={controlsContainer}
                >
                  <Box display="grid" justifyContent="stretch">
                    <Radio
                      id="Stake"
                      checked={action === 'Stake'}
                      onChange={(e) => setAction(e.target.value as 'Stake')}
                      value="Stake"
                      name="action"
                    />
                    <Radio
                      id="Unstake"
                      checked={action === 'Unstake'}
                      onChange={(e) => setAction(e.target.value as 'Unstake')}
                      value="Unstake"
                      name="action"
                    />
                  </Box>
                  <Input
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                  <Button onClick={onSendTx}>{action}</Button>
                  {action === 'Unstake' && (
                    <Button buttonType="secondary" onClick={onClaimSurf}>
                      Claim
                    </Button>
                  )}
                </Box>
                <div className={tilesContainer}>
                  <Tile name="Already claimed" value="0" />
                  <Tile name="Unclaimed" value="0" />
                  <Tile name="My deposits" value="0" />
                  <Tile name="APR" value="160%" />
                  <Tile name="TVL" value="1,384k" />
                </div>
                <div>
                  <p style={{ marginBottom: 35 }}>
                    Stake your SURF tokens and make regular daily auto-arbitrage
                    with boosted gNSBT
                  </p>
                  <button
                    onClick={() => setIsModalIntroduction(true)}
                    className={buttonAsLink}
                  >
                    Strategy description
                  </button>
                  <table className={table}>
                    <tbody>
                      <tr>
                        <td>Total SURF Staked:</td>
                        <td>{}</td>
                      </tr>
                      <tr>
                        <td>Total earning:</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>gNSBT:</td>
                        <td>{gNsbt}</td>
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
                      <tr className={tr} style={{ height: 25 }}></tr>
                      <tr className={tr} style={{ height: 25 }}></tr>
                      <tr className={tr}>
                        <td>Already claimed:</td>
                        <td>0</td>
                      </tr>
                      <tr className={tr}>
                        <td>Unclaimed:</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <Box
                    display="grid"
                    direction="vertical"
                    space="md"
                    className={claimedInfoContainer}
                  >
                    <p>Already claimed: 0</p>
                    <p>Unclaimed: 0</p>
                  </Box>
                  <Box
                    className={tokensContainer}
                    display="grid"
                    direction="vertical"
                  >
                    <Box display="grid">
                      <Waves width={16} height={16} />
                      <p>Waves: {totalRevenueWaves}</p>
                    </Box>
                    <Box display="grid">
                      <Wx width={16} height={16} />
                      <p>WX: {totalRevenueWX}</p>
                    </Box>
                    <Box display="grid">
                      <Vires width={16} height={16} />
                      <p>Vires: 0</p>
                    </Box>
                    <Box display="grid">
                      <Xtn width={16} height={16} />
                      <p>XTN: {totalRevenueXtn}</p>
                    </Box>
                    <Box display="grid">
                      <Usdt width={16} height={16} />
                      <p>USDT: 0</p>
                    </Box>
                  </Box>
                  <Box
                    display="grid"
                    direction="vertical"
                    justifyContent="stretch"
                  >
                    <Button onClick={onClaimRewards} buttonType="secondary">
                      Claim rewards
                    </Button>
                  </Box>
                </div>
              </div>
            </StakingPanel>
          </div>
          <StakingPanel expand={false} name="NSBT Booster (soon)" />
          <StakingPanel expand={false} name="USDT / XTN (soon)" />
        </Box>
      </main>
      {isModalIntroduction && (
        <ModalIntroduction
          isOpen={isModalIntroduction}
          onClose={() => setIsModalIntroduction(false)}
        />
      )}
    </Box>
  );
};
