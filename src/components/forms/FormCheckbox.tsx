import type { FC } from 'react';
import classnames from 'classnames';
import { Controller } from 'react-hook-form';

import FormHint from 'components/forms/FormHint';
import FormLabel from 'components/forms/FormLabel';
import type { IFormCheckboxProps } from 'components/forms/types';

const FormCheckbox: FC<IFormCheckboxProps> = ({
  name,
  label,
  hint,
  defaultChecked = false,
  className,
  labelClassName,
  wrapperClassName,
  disabled
}) => {
  return (
    <div className={classnames('mb-4', wrapperClassName)}>
      <div className="d-flex">
        <Controller
          name={name}
          defaultValue={defaultChecked}
          render={({ field: { ref, onChange, onBlur } }) => (
            <input
              id={name}
              name={name}
              className={classnames(
                'mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:shadow-none focus:outline-none focus:ring-0',
                className
              )}
              disabled={disabled}
              type="checkbox"
              ref={ref}
              onBlur={onBlur}
              onChange={onChange}
            />
          )}
        />
        <FormLabel htmlFor={name} text={label} className={labelClassName} inline />
      </div>
      {!!hint && <FormHint text={hint} />}
    </div>
  );
};

export default FormCheckbox;
