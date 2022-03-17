import type { FC } from 'react';
import classNames from 'classnames';

export type TCustomButtonVariant = keyof typeof customButtonVariants;

interface IProps {
  text: string;
  variant: TCustomButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

const customButtonVariants = {
  primary:
    'text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
  secondary:
    'text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
  danger:
    'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
  outline:
    'text-blue-600 border border-blue-600 hover:text-blue-800 hover:border-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
} as const;

const CustomButton: FC<IProps> = ({ text, type = 'button', variant, className, onClick }) => {
  return (
    <button type={type} className={classNames(customButtonVariants[variant], className)} onClick={onClick}>
      {text}
    </button>
  );
};
export default CustomButton;
