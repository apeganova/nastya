import angular from 'angular';

import about from './components/about/about.component'
import userInfo from './components/userInfo/userInfo.component'
import userSkills from './components/userSkills/userSkills.component'
import userProjects from './components/userProjects/userProjects.component'
import projectTaskItem from './components/projectTaskItem/projectTaskItem.component'
import Employee from './services/about.service.js'

export default angular
  .module('app.about', [])
  .component('about', about)
  .component('userInfo', userInfo)
  .component('userSkills', userSkills)
  .component('userProjects', userProjects)
  .component('projectTaskItem', projectTaskItem)
  .service('Employee', Employee)
;
