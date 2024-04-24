document.addEventListener("DOMContentLoaded", function() {
  const downloadBtn = document.querySelector(".download-cv-btn");

  downloadBtn.addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "KoketjoMothapoCV.pdf";
    link.download = "KoketjoMothapoCV.pdf";
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


