export default iconsConfig;
function iconsConfig($mdIconProvider) {
  $mdIconProvider
    .icon('remove', './assets/icons/ic_delete_black_24px.svg', 24)
    .icon('add', './assets/icons/ic_note_add_black_24px.svg', 24)
    .icon('filter', './assets/icons/ic_filter_list_black_24px.svg', 24)
    .icon('edit', './assets/icons/ic_mode_edit_black_24px.svg', 24);
}
