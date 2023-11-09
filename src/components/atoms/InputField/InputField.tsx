import {
  FormControl,
  InputLabel,
  OutlinedInput,
  type OutlinedInputProps
} from '@mui/material';

export function InputField(props: OutlinedInputProps) {
  const { label } = props;

  const id = label ? Math.random().toString() : undefined;

  return (
    <FormControl>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <OutlinedInput {...props} id={label ? id : undefined} />
    </FormControl>
  );
}
