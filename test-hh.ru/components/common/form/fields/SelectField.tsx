import { useField } from "react-final-form";
import {
  TextField as MaterialTextField,
  TextFieldProps as MaterialTextFieldProps,
  Select,
  SelectProps as MaterialSelectProps,
  InputLabel,
  FormControl
} from "@material-ui/core";

type SelectProps = MaterialSelectProps & { name: string };

export const SelectField = ({ name, label, children, ...restProps }: SelectProps) => {
  const { input, meta } = useField(name);

  return (
    <FormControl >
      <InputLabel htmlFor="native-simple">{label}</InputLabel>
      <Select
        {...input} 
        {...restProps}
        inputProps={{
          id: 'native-simple',
        }}
      >
        {children}
      </Select>
    </FormControl>
  );
};
