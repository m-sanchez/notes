class categorySelectorController {
  constructor(notesService, $mdDialog, $document, $timeout) {
    this.$mdDialog = $mdDialog;
    this.notesService = notesService;
    this.categories = notesService.getCategories();
    this.$document = $document;
    this.$timeout = $timeout;
  }
  addCategory(category) {
    const self = this;
    this.categories = this.notesService.addCategory(category);
    this.searchText = '';
    this.$timeout(() => {
      self.searchText = category;
    });
  }
  querySearch(query) {
    return query ? this.categories.filter(this.createFilterFor(query)) : this.categories;
  }
  createFilterFor(query) {
    const lowercaseQuery = angular.lowercase(query);
    return state => {
      return (state.indexOf(lowercaseQuery) === 0);
    };
  }
}
export default categorySelectorController;
