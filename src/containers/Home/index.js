import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Divider } from '@material-ui/core';

import ProfileCard from 'components/ProfileCard';

import { blue } from '@material-ui/core/colors';

const styles = (theme) => ({
  topArea: {
    backgroundColor: blue[500],
    height: 600,
  },
  mainArea: {
    backgroundColor: theme.palette.background.default,
  }
});

const HomeContainer = ({ classes }) => (
  <div>
    <Grid container spacing={24} justify="center" className={classes.topArea}>
      <Grid item xs={12} sm={6}>
        <ProfileCard />
      </Grid>
    </Grid>
    <Divider />
    <Grid container spacing={24} justify="center" className={classes.mainArea}>
      <Grid item>
        Main Content
      </Grid>
    </Grid>
  </div>
);

HomeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeContainer);
