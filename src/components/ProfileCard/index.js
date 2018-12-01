import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';

import { Grid, Card, CardContent, CardActions, IconButton, Typography } from '@material-ui/core';

import { grey } from '@material-ui/core/colors';

import avatar from './philippe_dore_avatar.png';

const styles = () => ({
  root: {
    position: 'relative',
    top: 50,
  },
  media: {
    position: 'relative',
    display: 'block',
    margin: 'auto',
    borderRadius: '100%',
    border: `1px solid ${grey[500]}`,
    zIndex: 2,
  },
  card: {
    position: 'relative',
    top: -60,
    zIndex: 1,
  },
});

const ProfileCard = ({ classes }) => (
  <div className={classes.root}>
    <img
      alt="Philippe Dore"
      className={classes.media}
      src={avatar}
      title="Philippe Dore"
    />
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Philippe Doré</Typography>
        <Typography variant="h6" gutterBottom>Senior Javascript Developer</Typography>
        <Typography variant="body1" component="span">
          Software Engineering graduate with in-depth knowledge and experience in agile software methodologies and UI/UX design and implementation. With my passion for UI/UX and my background in software design and implementation, I am well suited for customer facing roles.
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Grid container justify="flex-end">
          <Grid item>
            <IconButton aria-label="Facebook" onClick={() => window.location = 'https://www.facebook.com/doreWebDesign/'}>
              <FontAwesomeIcon icon={faFacebook} />
            </IconButton>
            <IconButton aria-label="LinkedIn" onClick={() => window.location = 'https://www.linkedin.com/in/philippedore11/'}>
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton aria-label="Send Email" onClick={() => window.location = 'mailto:philippe.dore.11@gmail.com'}>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  </div>
);

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);