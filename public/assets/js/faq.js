// Get all elements with class "accordian-box__header"
var accordianHeaders = document.querySelectorAll(".accordian-box__header");

// Add click event listeners to each "accordian-box__header"
accordianHeaders.forEach(function(header) {
  header.addEventListener("click", function() {
    // Remove the "active" class from all elements with class "accordian-box__header"
    var activeHeaders = document.querySelectorAll(".accordian-box__header.active");
    activeHeaders.forEach(function(activeHeader) {
      activeHeader.classList.remove("active");
    });

    // Slide up all elements with class "accordian-box__body"
    var accordianBodies = document.querySelectorAll(".accordian-box__body");
    accordianBodies.forEach(function(body) {
      body.style.display = "none";
    });

    // Add the "active" class to the clicked header
    this.classList.add("active");

    // Slide toggle the next "accordian-box__body" of the clicked header
    var nextBody = this.nextElementSibling;
    if (nextBody.classList.contains("accordian-box__body")) {
      if (nextBody.style.display === "none" || nextBody.style.display === "") {
        nextBody.style.display = "block";
      } else {
        nextBody.style.display = "none";
      }
    }
  });
});
