function showTab(tab) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach(function (el) {
    el.style.display = "none";
  });
  // Remove aria-selected from all tabs
  document.querySelectorAll(".tab-link").forEach(function (el) {
    el.setAttribute("aria-selected", "false");
  });
  // Show selected tab content
  document.getElementById(tab).style.display = "block";
  // Set aria-selected on active tab
  document.getElementById("tab-" + tab).setAttribute("aria-selected", "true");
}
