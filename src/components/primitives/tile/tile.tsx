import { FC } from 'react';
import { Box } from '../box';
import { root } from './tile.css';

export const Tile: FC<{ name: string; value: string }> = ({ name, value }) => {
  return (
    <div className={root}>
      <Box direction="vertical" display="grid">
        <p>{name}</p>
        <p>{value}</p>
      </Box>
    </div>
  );
};
