import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
    justifyContent: 'center',
  },
  title: {
    alignContent: 'center',
    margin: theme.spacing(8),
    textAlign: 'center',
    lineHeight: '30px'
  },
  formControl: {
    '& .MuiOutlinedInput-root': {
      width: 300,
      justifyContent: 'center',
      borderRadius: '25px',
      margin: theme.spacing(1),
    },
    '& label#outlined-basic-label': {
      padding: '3%'
    },
    '& .MuiFormControl-root': {
      alignItems: 'center'
    }
  },
  select: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }
}));

const SignupForm = () => {
  const classes = useStyles();

  const [level, setLevel] = React.useState('');
  const [checked, setChecked] = React.useState(true);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handleLevel = (event) => {
    setLevel(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span>You're signing up for:</span>
        <h2>Official Whistle</h2>
        <div>
          June 25, 2021 - June 28, 2021
        </div>
        <span>Hosted By Kathleen McGlynn</span>
      </div>
      <div className={classes.formControl}>
        <FormControl autoComplete="off">
          <div>
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          </div>
          <div>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Phone" variant="outlined" />
          </div>
        </FormControl>
      </div>
      <div className={classes.select}>
        <FormControl autoComplete="off">
          <InputLabel id="demo-simple-select-label">Experience Level</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={level}
            onChange={handleLevel}
            style={{width: 250}}
          >
            <MenuItem value="High School">High School</MenuItem>
            <MenuItem value="Junior College">Junior College</MenuItem>
            <MenuItem value="Division 1, 2 or 3">Division 1, 2 or 3</MenuItem>
            <MenuItem value="Pro">Pro</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* <div>
        <FormControlLabel
          control={<Checkbox checked={alldates} onChange={handleChecked} name="alldates" />}
          label="All Dates"
        />
      </div> */}
    </div>
  )
}

export default SignupForm;
