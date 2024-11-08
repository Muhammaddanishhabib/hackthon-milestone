// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElemengt = document.getElementById('resume-display');
// Handle form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect Input Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    //  Generate the resume content dynamically
    var resumeHTML = "\n\n<h2><b>Editable Resume</b></h2>\n\n<h3>Personal Information</h3>\n\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n<h3>Education<h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Experiance<h3>\n<p contenteditable=\"true\">").concat(experiance, "</p>\n\n<h3>Skills<h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n\n");
    // Display Generted Resume
    if (resumeDisplayElemengt) {
        resumeDisplayElemengt.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
