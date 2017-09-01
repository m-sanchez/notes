import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';

import routesConfig from './app/config/routes.config';
import iconsConfig from './app/config/icons.config';

import {main} from './app/components/main';
import {header} from './app/components/header';
import {notes} from './app/components/notes';
import {note} from './app/components/note';
import {categorySelector} from './app/components/categorySelector';
import {footer} from './app/components/footer';

const services = require.context('./', true, /\.service.js$/);

import './index.less';
const MODULE_NAME = 'app';
const DEPENDENCIES = ['ngMaterial', 'ui.router'];

angular
  .module(MODULE_NAME, DEPENDENCIES)
  .config(routesConfig)
  .config(iconsConfig)
  .component('app', main)
  .component('msNotesHeader', header)
  .component('msNotesCategorySelector', categorySelector)
  .component('msNotes', notes)
  .component('msNote', note)
  .component('msNotesFooter', footer);
services.keys().forEach(key => {
  angular.module(MODULE_NAME).factory(services(key).name, services(key));
});

