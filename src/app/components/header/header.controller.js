class headerController {
  constructor($state) {
    this.$state = $state;
  }
  openMenu($mdMenu, ev) {
    if (this.$state.params.category) {
      this.currentFilter = this.$state.params.category;
      this.filterApplied = true;
    }
    $mdMenu.open(ev);
  }
  filter() {
    this.$state.go('app.notes', {category: this.currentFilter});
  }
  clearFilter() {
    this.currentFilter = null;
    this.$state.go('app.notes', {category: null});
  }
}
export default headerController;
