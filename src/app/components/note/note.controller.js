class noteController {
  constructor(notesService, $mdDialog) {
    this.notesService = notesService;
    this.$mdDialog = $mdDialog;
  }
  $onInit() {
    this.note = this.myModel;
  }
  remove($event, index) {
    const self = this;
    const confirm = self.$mdDialog.confirm()
      .title('Deleting note')
      .textContent('Would you like to delete this note?')
      .ariaLabel('Deleting note')
      .targetEvent($event)
      .ok('Delete')
      .cancel('Cancel');
    self.$mdDialog.show(confirm).then(() => {
      this.notesService.deleteNote(index);
    });
  }
  editNote($event, index) {
    const self = this;
    this.notesService.openModal($event, this.note).then(note => {
      if (note) {
        self.notesService.updateNote(index, note);
      }
    });
  }
}
export default noteController;
