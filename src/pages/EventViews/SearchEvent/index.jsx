import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EventCard from '../../../components/EventCard';
import SearchBars from '../../../components/SearchBars';

const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
    margin: theme.spacing(8),
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '50px',
    fontWeight: 900,
    margin: theme.spacing(4)
  },
}));

const SearchEvent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span>List of Events</span>
      </div>
      <div>
        <SearchBars />
        <EventCard />
      </div>
    </div>
  );
}

export default SearchEvent;