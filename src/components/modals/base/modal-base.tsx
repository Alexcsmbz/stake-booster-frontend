import { FC } from 'react';
import { Box } from '../../primitives/box';
import { ReactComponent as Cross } from '../../../assets/icons/plus.svg';
import { root, titleStyles } from './modal-base.css';
import { Props } from './modal-base.types';
import cx from 'classnames';
import { theme } from '../../../themes/main.css';

export const ModalBase: FC<Props> = ({
  title,
  isOpen,
  onClose,
  children,
  width,
  className,
}) => {
  return isOpen ? (
    <div style={width ? { width } : {}} className={cx(root, className)}>
      <Box display="grid" alignItems="center" justifyContent="space-between">
        <p className={titleStyles}>{title}</p>
        <Cross
          stroke={theme.color.black}
          cursor="pointer"
          onClick={onClose}
          style={{ transform: 'rotate(45deg)' }}
        />
      </Box>
      {children}
    </div>
  ) : null;
};
