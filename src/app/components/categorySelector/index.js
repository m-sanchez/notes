import controller from './categorySelector.controller';
export const categorySelector = {
  template: require('./categorySelector.html'),
  controller,
  bindings: {
    myModel: '='
  }
};
