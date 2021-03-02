import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from '../../../components/SignupForm';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
}));

const EventSignup = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <SignupForm />
      </div>
    </div>
  )
}

export default EventSignup;