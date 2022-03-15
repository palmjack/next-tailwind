import type { FC } from 'react';
import classnames from 'classnames';
import { Controller } from 'react-hook-form';

import FormHint from 'components/forms/FormHint';
import FormLabel from 'components/forms/FormLabel';
import type { IFormRadioProps } from 'components/forms/types';

const FormRadio: FC<IFormRadioProps> = ({
  name,
  label,
  hint,
  options,
  defaultValue = false,
  className,
  labelClassName,
  wrapperClassName
}) => {
  return (
    <div className={classnames('mb-4', wrapperClassName)}>
      <div className="d-flex">
        <FormLabel htmlFor={name} text={label} className={labelClassName} inline />
        <Controller
          name={name}
          defaultValue={defaultValue}
          render={({ field: { value, onChange, onBlur, ref } }) => {
            return (
              <>
                {options.map((option, id) => (
                  <div key={id}>
                    <input
                      id={`radio-${name}-${option.value}`}
                      className={classnames('h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300', className)}
                      type="radio"
                      checked={value === option.value}
                      disabled={option.disabled}
                      ref={ref}
                      onChange={() => onChange(option.value)}
                      onBlur={onBlur}
                    />
                    <FormLabel htmlFor={`radio-${name}-${option.value}`} text={option.label} className="ml-3" inline />
                  </div>
                ))}
              </>
            );
          }}
        />
      </div>
      {!!hint && <FormHint text={hint} />}
    </div>
  );
};

export default FormRadio;
