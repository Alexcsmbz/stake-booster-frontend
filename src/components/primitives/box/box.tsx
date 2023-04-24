import { CSSProperties, FC, ReactNode } from 'react';
import {
  adaptivePaddings,
  align,
  block,
  flow,
  gap,
  grid,
  justify,
} from './box.css';
import cx from 'classnames';
import { Space } from '../../../themes/main.css';

type Props = {
  children: ReactNode;
  className?: string;
  direction?: keyof typeof flow;
  space?: Space;
  alignItems?: keyof typeof align;
  adaptiveHPaddings?: boolean;
  vPaddings?: Space;
  justifyContent?: keyof typeof justify;
  display?: CSSProperties['display'];
  onClick?: () => void;
};

export const Box: FC<Props> = ({
  direction = 'horizontal',
  space = 'xs',
  alignItems = 'start',
  adaptiveHPaddings = false,
  justifyContent = 'start',
  display = 'block',
  children,
  className,
  vPaddings,
  onClick,
}) => {
  const displayGrid = display === 'grid';

  return (
    <div
      onClick={onClick}
      className={cx(
        displayGrid ? flow[direction] : '',
        displayGrid ? gap[space] : '',
        displayGrid ? align[alignItems] : '',
        displayGrid ? justify[justifyContent] : '',
        {
          [adaptivePaddings]: adaptiveHPaddings,
          [grid]: displayGrid,
          [block]: display === 'block',
        },
        className
      )}
    >
      {children}
    </div>
  );
};
