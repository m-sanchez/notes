import modalController from '../components/noteModal/noteModal.controller';

export function notesService($rootScope, persistenceService, $mdDialog, $mdToast, $q, $document) {
  /* @ngInject */

  return {
    openModal,
    getNotes,
    updateNote,
    updateNotes,
    addNote,
    getCategories,
    updateCategories,
    addCategory,
    deleteNote,
    showToast,
    subscribe,
    notify
  };

  function addCategory(category) {
    const categories = persistenceService.getStorage('msCategories') || [];
    categories.push(category);
    this.updateCategories(categories);
    this.showToast('Category ' + category + 'created');
    return categories;
  }
  function getCategories() {
    return persistenceService.getStorage('msCategories') || [];
  }
  function updateCategories(categories) {
    return persistenceService.setStorage('msCategories', categories);
  }
  function addNote(note) {
    const notes = persistenceService.getStorage('msNotes') || [];
    notes.push(note);
    this.updateNotes(notes);
    this.showToast('New note created');
    return notes;
  }
  function getNotes() {
    return persistenceService.getStorage('msNotes') || [];
  }
  function updateNote(index, note) {
    const notes = this.getNotes();
    notes[index] = note;
    this.updateNotes(notes);
    this.showToast('Note updated');
  }
  function updateNotes(notes) {
    persistenceService.setStorage('msNotes', notes);
    this.notify();
  }
  function deleteNote(index) {
    const notes = this.getNotes();
    notes.splice(index, 1);
    this.updateNotes(notes);
    this.showToast('Note deleted');
  }
  function openModal($event, note) {
    const defer = $q.defer();
    $mdDialog.show({
      controller: modalController,
      controllerAs: '$ctrl',
      template: require('../components/noteModal/noteModal.tpl.html'),
      parent: angular.element($document.body),
      targetEvent: $event,
      locals: {
        note
      },
      clickOutsideToClose: true
    })
      .then(newNote => {
        defer.resolve(newNote);
      }, () => {
        defer.resolve();
      });
    return defer.promise;
  }
  function showToast(message) {
    $mdToast.show(
      $mdToast.simple()
        .textContent(message)
        .position('top right')
        .hideDelay(500)
    );
  }
  function subscribe(element, callback) {
    const handler = $rootScope.$on('notes-updated', () => {
      callback(element);
    });
    element.$scope.$on('$destroy', handler);
  }

  function notify() {
    $rootScope.$emit('notes-updated');
  }
}
