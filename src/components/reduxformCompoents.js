import {
  Autocomplete,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

export const renderTextField = ({
  label,
  input,
  outlineType,
  value,
  customError,

  meta: { touched, invalid, error, warning },
  ...custom
}) => {
  return (
    <div>
      <TextField
        variant='outlined'
        label={label}
        placeholder={label}
        error={(touched && invalid) || customError}
        helperText={(touched && error) || warning}
        {...input}
        {...custom}
      />
    </div>
  );
};
export const renderSelectField = ({
  input,
  fullWidth,
  variant,
  label,
  outlineType,
  style,
  meta: { touched, error },
  children,
  GenerateError,
  values,
  ...custom
}) => {
  return (
    <FormControl
      style={style}
      fullWidth={fullWidth}
      error={(touched && error) || GenerateError}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        variant={variant}
        label={label}
        {...input}
        {...custom}
        inputProps={{
          name: input.name,
          id: 'color-native-simple',
        }}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};
export const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};
export const renderAutoCompleteField = ({
  label,
  input,
  outlineType,
  meta: { touched, invalid, error },
  options,
  GenerateError,
}) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option}
      {...input}
      onChange={(e, v) => {
        input.onChange(v);
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            error={(touched && invalid) || GenerateError}
            helperText={touched && error}
            label={label}
            variant='outlined'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        );
      }}
    />
  );
};
