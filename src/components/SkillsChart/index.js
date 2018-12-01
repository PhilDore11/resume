import React from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Radar } from 'react-chartjs-2';

const styles = () => ({});

const chartColors = {
  red: {
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgb(255, 99, 132, 0.2)',
    pointBackgroundColor: 'rgb(255, 99, 13)',
    pointHoverBorderColor: 'rgb(255, 99, 13)',
  },
  orange: {
    borderColor: 'rgb(255, 159, 64)',
    backgroundColor: 'rgb(255, 159, 64, 0.2)',
    pointBackgroundColor: 'rgb(255, 159, 6)',
    pointHoverBorderColor: 'rgb(255, 159, 6)',
  },
  yellow: {
    borderColor: 'rgb(255, 205, 86)',
    backgroundColor: 'rgb(255, 205, 86, 0.2)',
    pointBackgroundColor: 'rgb(255, 205, 8)',
    pointHoverBorderColor: 'rgb(255, 205, 8)',
  },
  green: {
    borderColor: 'rgb(75, 192, 192)',
    backgroundColor: 'rgb(75, 192, 192, 0.2)',
    pointBackgroundColor: 'rgb(75, 192, 19)',
    pointHoverBorderColor: 'rgb(75, 192, 19)',
  },
  blue: {
    borderColor: 'rgb(54, 162, 235)',
    backgroundColor: 'rgb(54, 162, 235, 0.2)',
    pointBackgroundColor: 'rgb(54, 162, 23)',
    pointHoverBorderColor: 'rgb(54, 162, 23)',
  },
  purple: {
    borderColor: 'rgb(153, 102, 255)',
    backgroundColor: 'rgb(153, 102, 255, 0.2)',
    pointBackgroundColor: 'rgb(153, 102, 25)',
    pointHoverBorderColor: 'rgb(153, 102, 25)',
  },
  grey: {
    borderColor: 'rgb(201, 203, 207)',
    backgroundColor: 'rgb(201, 203, 20, 0.2)',
    pointBackgroundColor: 'rgb(201, 203, 20)',
    pointHoverBorderColor: 'rgb(201, 203, 20)',
  },
};

const chartData = {
  labels: ['NodeJs', 'ReactJs', 'AngularJs', 'JS', 'HTML', 'CSS', 'LESS', 'Webpack', 'JSP'],
  datasets: [
    {
      ...chartColors.red,
      label: 'Lixar I.T.',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      data: [70, 90, 90, 80, 75, 85, 60]
    },
    {
      ...chartColors.blue,
      label: 'Netfore Systems',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      data: [20, 5, 90, 65, 70, 80, 60]
    },
    {
      ...chartColors.orange,
      label: 'DNA13 a CNW Group',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      data: [0, 0, 0, 40, 50, 50, 0, 0]
    },
  ],
};

const chartOptions = {
  responsive: true,
  scale: {
    ticks: {
      min: 0,
      max: 100,
    },
  }
};

const SkillsChart = () => (
  <Radar data={chartData} options={chartOptions} />
);

SkillsChart.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsChart);