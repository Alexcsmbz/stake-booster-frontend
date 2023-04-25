import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { root, size, type } from './button.css';
import cx from 'classnames';

type Props = {
  children: ReactNode;
  buttonSize?: keyof typeof size;
  buttonType?: keyof typeof type;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = memo(
  ({
    children,
    className,
    buttonSize = 'medium',
    buttonType = 'primary',
    ...props
  }) => (
    <button
      className={cx(root, className, size[buttonSize], type[buttonType])}
      {...props}
    >
      {children}
    </button>
  )
);
