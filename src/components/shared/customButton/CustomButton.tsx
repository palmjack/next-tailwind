import type { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  text: string;
  variant: 'primary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

const customButtonVariants: Record<IProps['variant'], string> = {
  primary:
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
  outline:
    'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
};

const CustomButton: FC<IProps> = ({ text, type = 'button', variant, className, onClick }) => {
  return (
    <button type={type} className={classNames(customButtonVariants[variant], className)} onClick={onClick}>
      {text}
    </button>
  );
};
export default CustomButton;
