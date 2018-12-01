import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';

import { ProfileCard, EmploymentCard, EmploymentTask } from 'components/index';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { blue, grey } from '@material-ui/core/colors';

import employmentData from './employmentData';

const styles = () => ({
  topArea: {
    backgroundColor: blue[400],
    height: 550,
  },
  mainArea: {
    backgroundColor: grey[300],
    borderTop: `1px solid ${grey[500]}`,
    paddingTop: 115,
  },
  taskContainer: {
    padding: 10,
  },
});

const HomeContainer = ({ classes }) => (
  <div>
    <Grid container spacing={24} justify="center" className={classes.topArea}>
      <Grid item xs={12} sm={6}>
        <ProfileCard />
      </Grid>
    </Grid>
    <Grid container className={classes.mainArea}>
      <Grid item xs={12}>
        <VerticalTimeline layout='one-column'>
          {employmentData.map((item) => (
            <VerticalTimelineElement
              date={item.date}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={item.icon} size="lg" />}
            >
              <EmploymentCard title={item.company}>
                {item.projects.map((project) => (
                  <div>
                    <Typography variant="h6" gutterBottom>{project.title}</Typography>
                    <Typography variant="body1" component="span" gutterBottom>{project.description}</Typography>
                    <Grid container spacing={24} justify='center' className={classes.taskContainer}>
                      {project.tasks.map((task) => (
                        <Grid item xs={3}>
                          <EmploymentTask task={task} />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                ))}
              </EmploymentCard>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Grid >
    </Grid >
  </div >
);

HomeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeContainer);
