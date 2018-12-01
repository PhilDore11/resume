import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';

import { SkillsChart } from 'components';

const styles = () => ({
  card: {
    margin: 10,
  }
});

const SkillsCard = ({ classes }) => (
  <Card className={classes.card}>
    <CardHeader title='Skills' />
    <Divider />
    <CardContent>
      <SkillsChart />
    </CardContent>
  </Card>
);

SkillsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsCard);