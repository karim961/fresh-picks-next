import { ReactElement } from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { controlStyle, optionItem } from './styles';
interface SelectProps {
  label: string;
  name: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  control: any;
}

const DropdownSelect = ({
  label,
  name,
  options = [],
  control,
}: SelectProps): ReactElement<SelectProps> => {
  const themeContext = useTheme();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }: any) => {
          return (
            <Select
              options={options}
              placeholder={label}
              onChange={(val) => onChange(val?.label)}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  ...controlStyle(themeContext, state),
                }),
                option: (provider, state) => optionItem(themeContext, state),
              }}
              value={options.find((c: { label: any }) => c.label === value)}
              isSearchable
            />
          );
        }}
      />
    </div>
  );
};

export default DropdownSelect;
