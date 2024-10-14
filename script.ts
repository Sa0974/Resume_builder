const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;

// Log to confirm the download button is accessible


// Event listener for the form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const profileTitle = (document.getElementById("profileTitle") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const projects = (document.getElementById("projects") as HTMLTextAreaElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;

    // Generate resume HTML
    const resumeHTML = `
        <h3>${firstName} ${lastName}</h3>
        <p><strong>${profileTitle}</strong></p>
        <p>${description}</p>

        <h4>Skills:</h4>
        <p>${skills}</p>

        <h4>Education:</h4>
        <p>${education}</p>

        <h4>Experience:</h4>
        <p>${experience}</p>

        <h4>Projects:</h4>
        <p>${projects}</p>

        <h4>Contact Info:</h4>
        <p>${contact}</p>
    `;

    // Insert the generated resume into the output div
    resumeOutput.innerHTML = resumeHTML;
});


