import { FC } from 'react';
import { root } from './tag.css';

export const Tag: FC<{ name: string; value: string | number }> = ({
  name,
  value,
}) => (
  <div className={root}>
    {name}: {value}
  </div>
);
