import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Card, CardContent, Avatar, Typography } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = () => ({
  card: {
    height: '100%',
  },
  taskDescription: {
    textAlign: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
  },
});

const EmployementTask = ({ classes, task }) => (
  <Card className={classes.card}>
    <CardContent>
      <Grid container spacing={24} justify='center'>
        <Grid item>
          <Avatar className={classes.avatar}><FontAwesomeIcon icon={task.icon} size="lg" /></Avatar>
        </Grid>
        <Grid item className={classes.taskDescription}>
          <Typography variant="body1" component="span">{task.description}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

EmployementTask.propTypes = {
  classes: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployementTask);