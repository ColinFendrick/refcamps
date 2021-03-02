import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  useHistory
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      backgroundColor: 'teal',
      color: 'white',
      fontWeight: 700,
      fontSize: '20px',
      letterSpacing: '2px',
      textTransform: 'capitalize'
    },
  },
}));

const Buttons = () => {
  const classes = useStyles();
  let history = useHistory();

  const submitEvent = () => {
    history.push("/submitEvent");
  }
  
  const searchEvent = () => {
    history.push("/searchEvent");
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={submitEvent}>I need referees</Button>
      <Button variant="contained" onClick={searchEvent}>I'm looking to referee</Button>
    </div>
  );
}

export default Buttons;