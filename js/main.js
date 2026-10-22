/* Mobile-Navigation + Kleinigkeiten – vanilla JS, keine Abhängigkeiten. */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });

    // Menü nach Klick auf einen Link schließen (Mobile).
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Menü öffnen");
      }
    });
  }

  // Jahr im Footer automatisch setzen.
  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }
})();
