import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faCalendar, faCode, faUserTie, faComments } from '@fortawesome/free-solid-svg-icons';

export default [{
  icon: faBriefcase,
  company: 'Lixar I.T.',
  date: '2016 - present',
  projects: [{
    title: 'Jazz Aviation',
    description: 'Design and build an automated solution to replace the current annual manual Crew Schedule and Vacation Bidding Process by developing a web-based software solution to automate this process using the existing business rules and requirements set out by Jazz Technical Services',
    tasks: [{
      icon: faCalendar,
      description: 'Lead frontend team in daily scums and weekly sprint planning meetings'
    }, {
      icon: faAngular,
      description: 'Design web solution using AngularJS',
    }, {
      icon: faCode,
      description: 'Integrate with backend team APIs',
    }, {
      icon: faUserTie,
      description: 'Support and lead User Acceptance Tests (UATs) with client stakeholders',
    }, {
      icon: faComments,
      description: 'Performed interviews for front-end developers to grow the team from the ground up',
    }],
  }, {
    title: 'Victory Air',
    description: 'Design and build a web application to schedule flights, enable crew members to see their flights (crew pad) and allow customers to manage the passengers for their flights (Credentialing)',
    tasks: [{
      icon: faCalendar,
      description: 'Lead frontend team in daily scums and weekly sprint planning meetings'
    }, {
      icon: faAngular,
      description: 'Design web solution using AngularJS',
    }, {
      icon: faCode,
      description: 'Integrate with backend team APIs',
    }, {
      icon: faUserTie,
      description: 'Support and lead User Acceptance Tests (UATs) with client stakeholders',
    }, {
      icon: faComments,
      description: 'Performed interviews for front-end developers to grow the team from the ground up',
    }],
  }],
}];