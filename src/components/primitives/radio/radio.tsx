import { FC, InputHTMLAttributes } from 'react';
import { label, root } from './radio.css';
import cx from 'classnames';

export type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string };

export const Radio: FC<Props> = (props) => (
  <>
    <input className={cx(root, props.className)} type="radio" {...props} />
    <label style={props.style} className={label} htmlFor={props.id}>
      {props.value}
    </label>
  </>
);
