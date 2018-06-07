var mentorsSectionHeader = '<hr>' +
            '<h3>List of mentors</h3>';
            
var mentorsTableStructure = "<table class=\"table\">" + 
            ' <thead class="thead-dark">' + 
            '   <tr>' +
            '     <th scope="col"></th>' +
            '     <th scope="col">First name</th>' +
            '     <th scope="col">Last name</th>' +
            '     <th scope="col">Email</th>' +
            '     <th scope="col">Login</th>' +
            '     <th scope="col">Classes</th>' +
            '     <th scope="col"></th>' +
            '   </tr>' +
            ' </thead>' +
            ' <tbody>' +
            ' </tbody>' +
            '</table>';


async function createTableFromJson(jsonPath) {
    const mentorsTableDiv = document.getElementById("mentors-table");
    const mentorsJson = await getJsonFromPath(jsonPath);

    if (mentorsJson.mentors.length === 0) {
      return null;
    } 

    mentorsTableDiv.innerHTML = mentorsSectionHeader + mentorsTableStructure;
    addMentorRows(mentorsJson, mentorsTableDiv);
}

async function getJsonFromPath(path) {
    const response = await fetch(path);
    return response.json();
}

function addMentorRows(mentorsJson, mentorsDiv) {
  const mentorsTableBody = mentorsDiv.querySelector("tbody");

  for (let i = 0; i < mentorsJson.mentors.length; i++) {
    const mentor = mentorsJson.mentors[i];

    const filledRow = '<tr>' +
      '  <th scope="row">' + (i+1) + '</th>' +
      '  <td>' + mentor.firstName + '</td>' +
      '  <td>' + mentor.lastName + '</td>' +
      '  <td>' + mentor.email + '</td>' +
      '  <td>' + mentor.login + '</td>' +
      '  <td>' + mentor.classes.map(codecoolClass => codecoolClass.name).join(', ') + '</td>' +
      '  <td class="center-column">' +
      '    <i class="fas fa-pencil-alt" id="open-edit-mentor-modal" onclick="openModal(this.id)"></i>' +
      '    <i class="fas fa-trash-alt" id="open-remove-mentor-modal" onclick="openModal(this.id)"></i>' +
      '  </td>' +
      '</tr>';

      mentorsTableBody.innerHTML += filledRow;
  }
}

createTableFromJson("assets/fake_data/mentors.json");