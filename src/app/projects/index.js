import angular from 'angular';

// components
import techItem from './components/projectItem/projectItem.component';
import techs from './components/project/project.component';

// services
import Tech from './services/project.service'


export default angular
  .module('app.projects', [])
  .component('projectItem', projectItem)
  .component('projects', projects)
  .service('Project', Project)
;
