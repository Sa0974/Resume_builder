var form = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var profileTitle = document.getElementById("profileTitle").value;
    var description = document.getElementById("description").value;
    var skills = document.getElementById("skills").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var projects = document.getElementById("projects").value;
    var contact = document.getElementById("contact").value;
    // Generate resume HTML
    var resumeHTML = "\n        <h3>".concat(firstName, " ").concat(lastName, "</h3>\n        <p><strong>").concat(profileTitle, "</strong></p>\n        <p>").concat(description, "</p>\n\n        <h4>Skills:</h4>\n        <p>").concat(skills, "</p>\n\n        <h4>Education:</h4>\n        <p>").concat(education, "</p>\n\n        <h4>Experience:</h4>\n        <p>").concat(experience, "</p>\n\n        <h4>Projects:</h4>\n        <p>").concat(projects, "</p>\n\n        <h4>Contact Info:</h4>\n        <p>").concat(contact, "</p>\n    ");
    // Insert the generated resume into the output div
    resumeOutput.innerHTML = resumeHTML;
});
