import { ReactElement } from 'react';

export type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
  width?: number;
  className?: string;
};

export type ModalProps = Pick<Props, 'isOpen' | 'onClose'>;
