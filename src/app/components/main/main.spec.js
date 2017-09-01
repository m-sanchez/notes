import angular from 'angular';
import 'angular-mocks';
import {main} from './index';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/components/main/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the header and footer', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('ms-notes-header').length).toEqual(1);
    expect(element.find('ms-notes-footer').length).toEqual(1);
  }));
});
