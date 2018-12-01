import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Card, CardContent, Typography } from '@material-ui/core';

const styles = () => ({
});

const EmployementCard = ({ classes, title, children }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      {children}
    </CardContent>
  </Card>
);

EmployementCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default withStyles(styles)(EmployementCard);