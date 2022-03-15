import { useRef } from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Controller } from 'react-hook-form';

import FormHint from 'components/forms/FormHint';
import FormLabel from 'components/forms/FormLabel';
import type { IFormSelectProps } from 'components/forms/types';
import CustomSelect from 'components/shared/customSelect/CustomSelect';

const FormSelect: FC<IFormSelectProps> = ({
  name,
  label,
  options,
  isMulti = false,
  isSearchable = false,
  disabled = false,
  hint,
  defaultValue = null,
  wrapperClassName,
  labelClassName
}) => {
  const prevSelectValue = useRef<string | null | undefined>();
  return (
    <div className={classnames('mb-4', wrapperClassName)}>
      {label && <FormLabel htmlFor={name} text={label} className={labelClassName} />}

      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, ref, onBlur, onChange } }) => {
          // trigger onBlur validation when value changes
          if (prevSelectValue.current !== value && value) onBlur();
          prevSelectValue.current = value;

          // if isMulti === true then value is typeof Array<string>
          //   const hasValue = Array.isArray(value) ? value.length > 0 : !!value;

          // update CustomSelect value with currentSelected
          const currentSelected = Array.isArray(value)
            ? options.filter((option) => value.includes(option.value))
            : options.find((option) => option.value === value);

          return (
            <CustomSelect
              inputRef={ref}
              name={name}
              value={currentSelected ?? null} // set null if undefined to reset the CustomSelect value
              disabled={disabled}
              isMulti={isMulti}
              isSearchable={isSearchable}
              options={options}
              onMenuClose={onBlur}
              handleChange={(option) => onChange(Array.isArray(option) ? option.map((o) => o.value) : option.value)}
            />
          );
        }}
      />
      {!!hint && <FormHint text={hint} />}
    </div>
  );
};

export default FormSelect;
