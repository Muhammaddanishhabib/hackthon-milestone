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
    var resumeHTML = "\n\n<h2><b>Resume</b></h2>\n\n<h3>Personal Information</h3>\n\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "</p>\n\n<h3>Education<h3>\n<p>").concat(education, "</p>\n\n<h3>Experiance<h3>\n<p>").concat(experiance, "</p>\n\n<h3>Skills<h3>\n<p>").concat(skills, "</p>\n\n");
    // Display Generted Resume
    if (resumeDisplayElemengt) {
        resumeDisplayElemengt.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
