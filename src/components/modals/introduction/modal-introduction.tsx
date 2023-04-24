import { FC } from 'react';
import { ModalBase } from '../base/modal-base';
import { ModalProps } from '../base/modal-base.types';
import { content, root } from './modal-introduction.css';

export const ModalIntroduction: FC<ModalProps> = (props) => {
  return (
    <ModalBase {...props} title="Introduction" className={root}>
      <div className={content}>
        <p style={{ marginBottom: 20 }}>
          SURF Booster is designed for SURF maxi users who want to hold the SURF
          token for the long term and maximize their profits through the
          accumulation of gNSBT and regular arbitrage.
        </p>
        <p style={{ marginBottom: 30 }}>
          The SURF Booster accepts only SURF deposits. SURFs are immediately
          sent to staking in the Neutrino Protocol, increasing gNSBT.
        </p>
        <p>
          <b>SURF Booster users receive income from several sources:</b>
          <ul>
            <li>- Native staking SURF</li>
            <li>- Income from Neutrino arbitrage</li>
            <li>
              - HODL fee, which is charged to users who leave the protocol
            </li>
          </ul>
        </p>
      </div>
    </ModalBase>
  );
};
