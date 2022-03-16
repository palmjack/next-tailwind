import type { FC } from 'react';
import classnames from 'classnames';
import { Controller, useFormState } from 'react-hook-form';

import FormError from 'components/forms/FormError';
import FormHint from 'components/forms/FormHint';
import FormLabel from 'components/forms/FormLabel';
import type { IFormInputProps } from 'components/forms/types';

const FormInput: FC<IFormInputProps> = ({
  name,
  label,
  hint,
  className,
  required,
  defaultValue = '',
  labelClassName,
  wrapperClassName,
  ...props
}) => {
  const { errors } = useFormState({ name });
  const fieldError = errors[name];

  return (
    <div className={classnames('mb-4', wrapperClassName)}>
      <FormLabel htmlFor={name} text={label} className={labelClassName} />
      <Controller
        name={name}
        defaultValue={defaultValue}
        rules={{ required: required ? 'field required' : undefined }}
        render={({ field: { ref, onChange, onBlur } }) => (
          <input
            {...props}
            id={name}
            name={name}
            className={classnames(
              'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500',
              className
            )}
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
      />
      <FormError text={fieldError?.message} />
      {!!hint && <FormHint text={hint} />}
    </div>
  );
};

export default FormInput;
