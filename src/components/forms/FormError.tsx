import type { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  text?: string;
}

const FormError: FC<IProps> = ({ text }) => {
  return <p className={classNames('mt-2 text-sm text-pink-600', { invisible: !text, visible: !!text })}>{text}</p>;
};

export default FormError;
