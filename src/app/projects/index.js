import angular from 'angular';

// components
import projectItem from './components/projectItem/projectItem.component';
import projects from './components/projects/projects.component';

// services
import Project from './services/project.service'


export default angular
  .module('app.projects', [])
  .component('projectItem', projectItem)
  .component('projects', projects)
  .service('Project', Project)
;
