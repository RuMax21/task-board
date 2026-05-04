import type { FormFieldProps } from './types';
import styles from './FormField.module.scss';

export function FormField({ label, error, ...inputProps }: FormFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        type="text"
        {...inputProps}
      />
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
}
