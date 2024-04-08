function showDropdown() {
  var el = document.getElementById("dropdown");
  if (el.style.display === 'none') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("bars-dropdown");
    var hiddenDiv = document.getElementsByClassName("drop-vertical")[0];
    
    // Add click event listener to the dropdown
    dropdown.addEventListener("click", function() {
      // Check if the div is hidden
      if (hiddenDiv.style.display === "none") {
        // Show the div
        hiddenDiv.style.display = "block";
      } else {
        // Hide the div
        hiddenDiv.style.display = "none";
      }
    });
  });
