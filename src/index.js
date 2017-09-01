// libraries
import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';

// config
import routesConfig from './app/config/routes.config';
import iconsConfig from './app/config/icons.config';

// components
import {main} from './app/components/main';
import {header} from './app/components/header';
import {notes} from './app/components/notes';
import {note} from './app/components/note';
import {categorySelector} from './app/components/categorySelector';
import {footer} from './app/components/footer';

// services
import {notesService} from './app/services/notes.service';
import {persistenceService} from './app/services/persistence.service';

// styles
import './index.less';

// Bootstrapping app
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
  .component('msNotesFooter', footer)
  .factory('notesService', notesService)
  .factory('persistenceService', persistenceService);
