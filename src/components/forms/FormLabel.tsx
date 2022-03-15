import type { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  htmlFor: string;
  text: string;
  inline?: boolean;
  className?: string;
}

const FormLabel: FC<IProps> = ({ htmlFor, text, inline = false, className }) => (
  <label
    htmlFor={htmlFor}
    className={classNames(
      'mb-2 text-sm font-medium text-gray-900 dark:text-gray-300',
      className,
      inline ? 'inline-block' : 'block'
    )}
  >
    {text}
  </label>
);

export default FormLabel;
