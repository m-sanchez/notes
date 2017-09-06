
class addNoteController {
  constructor($mdDialog, note) {
    if (note) {
      this.note = angular.copy(note);
    } else {
      this.newNote = true;
      this.note = {content: '', category: null};
    }
    this.$mdDialog = $mdDialog;
  }
  cancel() {
    this.$mdDialog.cancel();
  }
  create() {
    this.$mdDialog.hide(this.note);
  }
}
export default addNoteController;
