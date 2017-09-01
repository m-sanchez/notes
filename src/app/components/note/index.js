import controller from './note.controller';
export const note = {
  template: require('./note.html'),
  controller,
  bindings: {
    myModel: '=',
    itemIndex: '<'
  }
};
