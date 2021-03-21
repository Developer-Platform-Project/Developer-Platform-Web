import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles, withStyles } from '@material-ui/core';

const StyledCheckbox = withStyles({
  root: {
    color: '#a9c5eb',
    paddingRight: '8px',
    margin: 0,
    '&$checked': {
      color: '#2b80f2',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    height: '46px',
    margin: '0px',
    padding: '0px',
    alignItems: 'center',
  },
  textField: {
    '& div:first-child': {
      display: 'flex',
      width: '100%',
      height: '48px',
      margin: '0px',
      padding: '0px',
      alignItems: 'center',
      backgroundColor: '#edf5ff',
      '& input': {
        marginLeft: '8px',
        fontSize: '14px',
      },
      '& .MuiAutocomplete-endAdornment': {
        '& button' : {
          color: '#2b80f2',
        }
      },
    },
    '& label.Mui-focused': {
      color: '#2b80f2',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#a9c5eb',
        borderRadius: '4px',
      },
      '&:hover fieldset': {
        borderColor: '#2b80f2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2b80f2',
      },
    },
  },
})

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function StyledSelector({letOptions, placeholder, onChange, SelectedOption}) {
  const classes = useStyles();

  return (
    <>
      <Autocomplete
        value={letOptions.find(v => v.value === SelectedOption) || null}
        className={classes.root}
        onChange={onChange}
        options={letOptions}
        getOptionLabel={(option) => option.value}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <StyledCheckbox 
              icon={icon}
              checkedIcon={checkedIcon}
              checked={selected}
              size='small'
            />
            {option.value}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" className={classes.textField} placeholder={placeholder} />
        )}
      />
    </>
  );
}