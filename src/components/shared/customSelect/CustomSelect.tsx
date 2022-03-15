import type { PropsWithChildren } from 'react';
import { useRef } from 'react';
import type { RefCallBack } from 'react-hook-form';
import Select from 'react-select';
import type { OnChangeValue } from 'react-select/dist/declarations/src';
import type { FormatOptionLabelMeta } from 'react-select/dist/declarations/src/Select';

export type SelectOption<T> = {
  value: T;
  label: string;
};

interface IProps<P> {
  name: string;
  options: ReadonlyArray<SelectOption<P>>;
  value?: OnChangeValue<SelectOption<P>, boolean> | null;
  defaultValue?: OnChangeValue<SelectOption<P>, boolean>;
  className?: string;
  ariaLabel?: string;
  icon?: JSX.Element;
  disabled?: boolean;
  isMulti: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  openMenuOnFocus?: boolean;
  hideSelectedOptions?: boolean;
  placeholder?: React.ReactNode;
  inputRef?: RefCallBack;
  onFocus?: () => void;
  onBlur?: () => void;
  handleChange: (selectedOption: SelectOption<P> | SelectOption<P>[]) => void;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  formatOptionLabel?: (option: SelectOption<P>, labelMeta?: FormatOptionLabelMeta<SelectOption<P>>) => JSX.Element;
}

const CustomSelect = <P,>(props: PropsWithChildren<IProps<P>>): JSX.Element => {
  const {
    options,
    value,
    defaultValue,
    name,
    ariaLabel,
    isMulti,
    openMenuOnFocus = false,
    isSearchable = false,
    isClearable = false,
    hideSelectedOptions,
    placeholder = '',
    inputRef,
    onFocus,
    onBlur,
    handleChange,
    onMenuOpen,
    onMenuClose,
    formatOptionLabel
  } = props;
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const selectId = `select-${name}`;

  const extendedHandleChange = (selectedOption: OnChangeValue<SelectOption<P>, boolean>): void => {
    handleChange(selectedOption as SelectOption<P>);
  };

  const extendedOnMenuOpen = (): void => {
    selectContainerRef.current?.classList.add('is-focused');
    onMenuOpen?.();
  };

  const extendedOnMenuClose = (): void => {
    selectContainerRef.current?.classList.remove('is-focused');
    onMenuClose?.();
  };

  return (
    <div ref={selectContainerRef} aria-label={ariaLabel || 'Lista rozwijana'}>
      <Select
        instanceId={selectId}
        ref={inputRef}
        value={value}
        name={selectId}
        captureMenuScroll={false}
        defaultValue={defaultValue}
        closeMenuOnSelect={isMulti ? false : true}
        blurInputOnSelect={isMulti ? false : true}
        hideSelectedOptions={hideSelectedOptions}
        tabSelectsValue={false}
        formatOptionLabel={formatOptionLabel}
        onFocus={onFocus}
        onBlur={onBlur}
        onMenuOpen={extendedOnMenuOpen}
        onMenuClose={extendedOnMenuClose}
        onChange={extendedHandleChange}
        placeholder={placeholder}
        inputId={selectId}
        isMulti={isMulti}
        isClearable={isClearable}
        openMenuOnFocus={openMenuOnFocus}
        isSearchable={isSearchable}
        options={options}
        isDisabled={options.length === 1}
      />
    </div>
  );
};

export default CustomSelect;
