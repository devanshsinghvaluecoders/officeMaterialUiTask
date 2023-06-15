import {
  Autocomplete,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useWarning = makeStyles(() => ({
//   success: {
//     margin: '10px 0px',
//     '& label': {
//       color: green[900],
//     },
//     '& label.Mui-focused': {
//       color: green[700],
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: green[700],
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: green[700],
//       },
//       '&:hover fieldset': {
//         borderColor: green[700],
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: green[700],
//       },
//     },
//   },
//   warn: {
//     margin: '10px 0px',
//     '& label': {
//       color: yellow[900],
//     },
//     '& label.Mui-focused': {
//       color: yellow[900],
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: yellow[900],
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: yellow[900],
//       },
//       '&:hover fieldset': {
//         borderColor: yellow[900],
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: yellow[900],
//       },
//     },
//   },
//   danger: {
//     margin: '10px 0px',
//     '& label': {
//       color: red[900],
//     },
//     '& label.Mui-focused': {
//       color: red[700],
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: red[700],
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: red[700],
//       },
//       '&:hover fieldset': {
//         borderColor: red[700],
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: red[700],
//       },
//     },
//   },
//   default: {
//     margin: '10px 0px',
//     '& label': {
//       color: blue[900],
//     },
//     '& label.Mui-focused': {
//       color: blue[900],
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: blue[900],
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: blue[900],
//       },
//       '&:hover fieldset': {
//         borderColor: blue[900],
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: blue[900],
//       },
//     },
//   },
// }));
export const renderTextField = ({
  label,
  input,
  outlineType,
  value,
  customError,

  meta: { touched, invalid, error, warning },
  ...custom
}) => {
  // const classes = useWarning();
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
        // className={classes[outlineType]}
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
        // classes={clasess[outlineType]}
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
            // variant='standard'
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
