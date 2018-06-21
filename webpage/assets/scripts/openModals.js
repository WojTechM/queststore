function openAddModal(buttonId) {
  var modalFilePath;

  switch (buttonId) {
    case "open-add-mentor-modal":
      modalFilePath = "assets/modals/add_mentor_modal.html";
      break;
    case "open-add-class-modal":
      modalFilePath = "assets/modals/add_class_modal.html";
      break;
    case "open-add-level-modal":
      modalFilePath = "assets/modals/add_level_modal.html";
      break;
  }
  
  var element = document.getElementById("common-modal").querySelector(".modal-content");

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        element.innerHTML = this.responseText;
        $('#common-modal').modal('show');
      }
      if (this.status == 404) {
        element.innerHTML = "Page not found.";
      }
    }
  } 
  request.open("GET", modalFilePath, true);
  request.send();
  
  return;
}

async function openModal(buttonId, button) {
  var modalFilePath;
  var fillingFunction;

  var element = document.getElementById("common-modal").querySelector(".modal-content");

  var entityId = button.dataset.id;

  switch (buttonId) {
    case "open-edit-mentor-modal":
      modalFilePath = "assets/modals/edit_mentor_modal.html";
      break;
    case "open-remove-mentor-modal":
      modalFilePath = "assets/modals/remove_mentor_modal.html";
      break;
    case "open-edit-class-modal":
      modalFilePath = "assets/modals/edit_class_modal.html";
      break;
    case "open-remove-class-modal":
      modalFilePath = "assets/modals/remove_class_modal.html";
      break;
    case "open-edit-level-modal":
      element.innerHTML = await addFilledEditLevelModal(entityId);
      break;
    case "open-remove-level-modal":
      element.innerHTML = await addRemoveLevelModal(entityId);
      break;
  }
  
  $('#common-modal').modal('show');
  
  return;
}

async function addFilledEditLevelModal(id) {
  var levelData = await getJsonFromPath("http://127.0.0.1:8080/levels/" + id);
  var levelData = levelData.levels[0];

  var filledModal = 
  '<div class="modal-header">' +
  '  <h5 class="modal-title">Edit level</h5>' +
  '  <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
  '    <span aria-hidden="true">&times;</span>' +
  '  </button>' +
  '</div>' +
  '<div class="modal-body">' +
  '   <form id="editLevelForm" data-id="' + levelData.id + '" onsubmit="return handleEditLevelForm(this)">' +
  '    <div class="form-group">' +
  '      <label for="codecool-class-name">Level name</label>' +
  '      <input type="text" class="form-control" id="codecool-class-name" name="name" value="' 
            + levelData.name + '" placeholder="Enter level name">' +
  '      <small class="form-text text-muted">Required field</small>' +
  '    </div>' +
  '    <div class="form-group">' +
  '      <label for="codecool-class-name">Experience threshold</label>' +
  '      <input type="number" class="form-control" id="codecool-class-threshold" name="threshold" value="' 
            + levelData.threshold + '" placeholder="Enter experience threshold">' +
  '      <small class="form-text text-muted">Required field</small>' +
  '    </div>' +
  '      <div class="modal-footer">' +
  '        <button type="submit" class="btn btn-success">Save changes</button>' +
  '        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>' +
  '      </div>' +
  '  </form>' +
  '</div>';

  return filledModal;
}

async function addRemoveLevelModal(id) {
  var levelData = await getJsonFromPath("http://127.0.0.1:8080/levels/" + id);
  var levelData = levelData.levels[0];

  var filledModal =
  '<div class="modal-header">' +
  '  <h5 class="modal-title">Remove level</h5>' +
  '  <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
  '    <span aria-hidden="true">&times;</span>' +
  '  </button>' +
  '</div>' +
  '<div class="modal-body">' +
  '  <p>Are you sure you want to delete ' + levelData.name + '</p>' +
  '</div>' +
  '<div class="modal-footer">' +
  '  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
  '  <button type="submit" class="btn btn-danger" data-id="' + levelData.id + '" onclick="deleteLevel(this); javascript:window.location.reload()">Delete</button>' +
  '</div>'; 

  return filledModal;
}