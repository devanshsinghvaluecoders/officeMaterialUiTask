import { TextField } from '@mui/material';
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
