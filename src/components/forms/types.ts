import type { SelectOption } from 'components/shared/customSelect/CustomSelect';

// common types for all fields (control  register are optional due to possible use of FormProvider)
interface ICommonFormFieldProps {
  name: string;
  label: string;
  hint?: string;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

export interface IFormCheckboxProps extends ICommonFormFieldProps {
  defaultChecked?: boolean;
  disabled?: boolean;
}

export interface IFormInputProps extends ICommonFormFieldProps {
  type?: 'text' | 'email' | 'password';
  maxLength?: number;
  showCounter?: boolean;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface IFormTextareaProps extends Omit<IFormInputProps, 'type'> {
  rows: number;
}

export interface IFormRadioProps extends ICommonFormFieldProps {
  options: ReadonlyArray<{
    value: string | boolean;
    label: string;
    disabled?: boolean;
  }>;
  defaultValue?: string | boolean;
  inline?: boolean;
}

export interface IFormSelectProps extends ICommonFormFieldProps {
  disabled?: boolean;
  options: ReadonlyArray<SelectOption<string | boolean | number>>;
  isMulti?: boolean;
  isSearchable?: boolean;
  defaultValue?: string;
}
