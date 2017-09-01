class notesController {
  constructor(notesService, $state, $scope) {
    /** @ngInject */
    this.$state = $state;
    this.notesService = notesService;
    this.$scope = $scope;
  }

  $onInit() {
    this.loadNotes();
    this.notesService.subscribe(this, this.loadNotes);
  }
  updateCategories() {
    this.notesService.updateCategories(this.categories);
  }

  loadNotes(element) {
    const self = element || this;
    self.categories = self.notesService.getCategories();
    self.allNotes = self.notesService.getNotes();
    if (self.$state.params.category) {
      self.notes = self.allNotes.filter(note => {
        return note.category === self.$state.params.category;
      });
    } else {
      self.notes = self.allNotes;
    }
  }
  newNote($event) {
    const self = this;
    this.notesService.openModal($event).then(note => {
      if (note) {
        self.$state.go('app.notes', {});
        self.notes = self.notesService.addNote(note);
      }
    });
  }
}
export default notesController;
