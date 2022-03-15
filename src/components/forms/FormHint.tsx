import type { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  text: string;
  className?: string;
}

const FormHint: FC<IProps> = ({ text, className }) => (
  <small className={classNames('mt-1 block text-xs text-gray-600', className)}>{text}</small>
);

export default FormHint;
