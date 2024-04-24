document.addEventListener("DOMContentLoaded", function() {
  const downloadBtn = document.querySelector(".download-cv-btn");

  downloadBtn.addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "cv.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const linkedinLink = document.querySelector(".linkedin-link");
  const githubLink = document.querySelector(".github-link");

  linkedinLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://www.linkedin.com/in/koketjo-mothapo-220133183/", "_blank");
  });

  githubLink.addEventListener("click", function(event) {
    event.preventDefault();
        window.open("https://github.com/koketso16", "_blank");
  });
});

//document.addEventListener("DOMContentLoaded", function() {
//      const contactForm = document.getElementById("contactForm");
//
//      contactForm.addEventListener("submit", function(event) {
//        event.preventDefault(); // Prevent form submission
//        var formData = new FormData(contactForm);
//
//        fetch("https://formspree.io/f/xwkgarbz", {
//          method: "POST",
//          body: formData
//        })
//        .then(response => response.text())
//        .then(result => {
//          // Display result
//          var messageSentDiv = document.createElement("div");
//          messageSentDiv.textContent = result;
//          messageSentDiv.style.color = result === "Form submitted. Thank you!" ? "green" : "red";
//          contactForm.appendChild(messageSentDiv);
//
//          // Clear the form
//          contactForm.reset();
//
//          // Redirect to home page after 3 seconds
//          setTimeout(function() {
//            window.location.href = "home.html";
//          }, 3000);
//        })
//        .catch(error => {
//          console.error("Error:", error);
//        });
//      });
//    });

