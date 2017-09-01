
class addNoteController {
  constructor($mdDialog, note) {
    if (note === null) {
      this.newNote = true;
      this.note = {content: '', category: null};
    } else {
      this.note = angular.copy(note);
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
