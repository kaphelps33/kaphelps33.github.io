function createForm() {
  const form = document.createElement("form");
  form.id = "intro-form";

  form.innerHTML = `
    <fieldset>
      <legend>Build Your Own Intro Page</legend>
      <label for="name">Name:</label>
      <input type="text" id="name" required><br>

      <label for="mascot">Mascot:</label>
      <input type="text" id="mascot" required><br>

      <label for="image">Image:</label>
      <input type="file" id="image" accept=".png, .jpg" required><br>

      <label for="image-caption">Image Caption:</label>
      <input type="text" id="image-caption" required><br>

      <label for="personal-background">Personal Background:</label>
      <input type="text" id="personal-background" required><br>

      <label for="professional-background">Professional Background:</label>
      <input type="text" id="professional-background" required><br>

      <label for="academic-background">Academic Background:</label>
      <input type="text" id="academic-background" required><br>

      <label for="webdev-background">Background in Web Development:</label>
      <input type="text" id="webdev-background" required><br>

      <label for="computer-platform">Primary Computer Platform:</label>
      <input type="text" id="computer-platform" required><br>

      <label for="courses">Courses currently taking:</label>
      <div id="course-inputs"></div>
      <button type="button" onclick="addCourse()">Add Course</button><br>

      <label for="funny-thing">Funny thing?</label>
      <input type="text" id="funny-thing"><br>

      <label for="anything-else">Anything else?</label>
      <input type="text" id="anything-else"><br>

      <input type="checkbox" id="agreement" required>
      <label for="agreement">I understand that what is on this page is not password protected and I will not put anything here that I don’t want publicly available.</label><br>

      <input type="submit" value="Submit">
      <input type="reset" value="Reset" onclick="resetForm()">
    </fieldset>
  `;

  return form;
}

function resetForm() {
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = "";
  formContainer.appendChild(createForm());
}

function addCourse() {
  const courseInputs = document.getElementById("course-inputs");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "course";
  courseInputs.appendChild(input);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.type = "button";
  deleteButton.onclick = function () {
    courseInputs.removeChild(input);
    courseInputs.removeChild(deleteButton);
  };
  courseInputs.appendChild(deleteButton);
}

function displayData() {
  const formData = {
    name: document.getElementById("name").value,
    mascot: document.getElementById("mascot").value,
    image: document.getElementById("image").files[0],
    imageCaption: document.getElementById("image-caption").value,
    personalBackground: document.getElementById("personal-background").value,
    professionalBackground: document.getElementById("professional-background")
      .value,
    academicBackground: document.getElementById("academic-background").value,
    webDevBackground: document.getElementById("webdev-background").value,
    computerPlatform: document.getElementById("computer-platform").value,
    funnyThing: document.getElementById("funny-thing").value,
    anythingElse: document.getElementById("anything-else").value,
  };

  let courses = document.getElementsByName("course");
  formData.courses = Array.from(courses)
    .map((course) => course.value)
    .filter((course) => course !== "");

  // Create a new display area and fill it with the collected data
  const displayArea = document.createElement("div");
  displayArea.innerHTML = `
    <h2>Your BYO Intro</h2>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Mascot:</strong> ${formData.mascot}</p>
    <p><strong>Image:</strong></p>
    <img src="${URL.createObjectURL(
      formData.image
    )}" alt="Uploaded image" style="max-width: 200px;"/><br>
    <p><strong>Image Caption:</strong> ${formData.imageCaption}</p>
    <p><strong>Personal Background:</strong> ${formData.personalBackground}</p>
    <p><strong>Professional Background:</strong> ${
      formData.professionalBackground
    }</p>
    <p><strong>Academic Background:</strong> ${formData.academicBackground}</p>
    <p><strong>Web Development Background:</strong> ${
      formData.webDevBackground
    }</p>
    <p><strong>Primary Computer Platform:</strong> ${
      formData.computerPlatform
    }</p>
    <p><strong>Funny Thing:</strong> ${formData.funnyThing}</p>
    <p><strong>Anything Else:</strong> ${formData.anythingElse}</p>
    <p><strong>Courses Currently Taking:</strong> ${
      formData.courses.length > 0 ? formData.courses.join(", ") : "None"
    }</p>
  `;

  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = "";
  formContainer.appendChild(displayArea);

  const resetLink = document.createElement("a");
  resetLink.textContent = "Reset";
  resetLink.href = "#";
  resetLink.onclick = resetForm;
  displayArea.appendChild(resetLink);
}

document.getElementById("intro-form").onsubmit = function (event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    alert("Please fill out all required fields.");
  } else {
    event.preventDefault();
    displayData();
  }
};

document.getElementById("form-container").appendChild(createForm());
