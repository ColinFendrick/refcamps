import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
    lineHeight: '30px',
    minHeight: '225px',
    boxShadow: '1px 1px 10px #dddddd'
  },
}));

const EventCard = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item lg={4}>
          <Paper className={classes.paper}>
            <h1>Official Whistle</h1>
            <div>
              <span>Hosted By: Kathleen McGlynn</span>
            </div>
            <div>
              <span>June 26, 2021 - June 28, 2021</span>
            </div>
            <div>
              <span>Ventura College, CA<br /></span>
            </div>
            <div>
              <span style={{fontStyle: 'italic'}}>$150 per game</span>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={4}>
          <Paper className={classes.paper}>
            <h1>Stripe</h1>
            <div>
              <span>Hosted By: Andrea Osborne</span>
            </div>
            <div>
              <span>June 26, 2021 - June 28, 2021</span>
            </div>
            <div>
              <span>Palm Springs, CA<br /></span>
            </div>
            <div>
              <span style={{fontStyle: 'italic'}}>$150 per game</span>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={4}>
          <Paper className={classes.paper}>
            <h1>Midsummer Night Madness</h1>
            <div>
              <span>Hosted By: Paul Packard</span>
            </div>
            <div>
              <span>June 26, 2021 - June 28, 2021</span>
            </div>
            <div>
              <span>Hotel Circle, San Diego<br /></span>
            </div>
            <div>
              <span style={{fontStyle: 'italic'}}>$150 per game</span>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default EventCard;