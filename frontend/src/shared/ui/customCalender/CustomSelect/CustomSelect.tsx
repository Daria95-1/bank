import {
  Select,
  MenuItem,
  type SxProps,
  type Theme,
  type SelectChangeEvent,
} from '@mui/material'

type CustomSelectProps<T> = {
  value: T;
  options: T[];
  onChange: (value: T) => void;
  sx?: SxProps<Theme>;
};

export const CustomSelect = <T extends string | number>({
  value,
  options,
  onChange,
  sx,
}: CustomSelectProps<T>) => {
  return (
    <Select
      value={value}
      onChange={(e: SelectChangeEvent<T>) => onChange(e.target.value as T)}
      sx={sx}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};
