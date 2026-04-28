import type { FormSelectProps } from './types';

export function FormSelect({
  label,
  options,
  ...props
}: FormSelectProps): React.ReactNode {
  return (
    <div>
      <label>{label}</label>
      <select {...props}>
        {options.map(element => (
          <option key={element.value} value={element.value}>
            {element.label}
          </option>
        ))}
      </select>
    </div>
  );
}
