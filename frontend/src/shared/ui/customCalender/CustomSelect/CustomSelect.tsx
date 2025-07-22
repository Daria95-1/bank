type CustomSelectProps<T> = {
  value: T;
  options: T[];
  onChange: (value: T) => void;
};

export const CustomSelect = <T extends string | number>({ value, options, onChange }: CustomSelectProps<T>) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as T)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
