import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

const eventListings = [
  { host: 'Kathleen McGlynn', event: 'Official Whistle' },
  { host: 'Andrea Osborne', event: 'StripeLife' },
  { host: 'Paul Packard', event: 'Midsummer Night Madness' },
];

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4),
  },
}));

const SearchBars = () => {
  const classes = useStyles();
  const options = eventListings.map((option) => {
    const firstLetter = option.host[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <div className={classes.search}>
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.host}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search By Host" variant="outlined"  />}
    />
    </div>
  );
}

export default SearchBars;
