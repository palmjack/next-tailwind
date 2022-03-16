import type { FC } from 'react';
import classnames from 'classnames';
import classNames from 'classnames';
import { Controller, useFormState } from 'react-hook-form';

import FormError from 'components/forms/FormError';
import FormHint from 'components/forms/FormHint';
import FormLabel from 'components/forms/FormLabel';
import type { IFormFileProps } from 'components/forms/types';

const FormFile: FC<IFormFileProps> = ({ name, label, hint, className, labelClassName, wrapperClassName, ...props }) => {
  const { errors } = useFormState({ name });
  const fieldError = errors[name];

  return (
    <div className={classnames('mb-4', wrapperClassName)}>
      <FormLabel htmlFor={name} text={label} className={labelClassName} />
      <Controller
        name={name}
        render={({ field: { ref, onChange, onBlur } }) => (
          <div>
            <span className="sr-only">Choose file</span>
            <input
              {...props}
              id={name}
              name={name}
              type="file"
              className={classNames(
                'block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100',
                className
              )}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
        )}
      />
      {!!fieldError && <FormError text="error" />}
      {!!hint && <FormHint text={hint} />}
    </div>
  );
};

export default FormFile;
