function save_options() {
  var showLabels = document.getElementById('show_labels').checked;
  chrome.storage.sync.set({
    showLabels: showLabels,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Preferences saved!';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}


function restore_options() {
  // Defaults
  chrome.storage.sync.get({
    showLabels: true
  }, function(data) {
    document.getElementById('show_labels').checked = data.showLabels;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);