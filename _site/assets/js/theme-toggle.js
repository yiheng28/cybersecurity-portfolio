(function () {
    const root = document.documentElement;
    const button = document.getElementById("theme-toggle");
  
    // Read the visitor's saved theme.
    const savedTheme = localStorage.getItem("portfolio-theme");
  
    // Use the saved theme, or light mode by default.
    const initialTheme =
      savedTheme === "dark" ? "dark" : "light";
  
    root.setAttribute("data-theme", initialTheme);
  
    function updateButton(theme) {
      if (!button) return;
  
      if (theme === "dark") {
        button.textContent = "☀";
        button.setAttribute("aria-label", "Switch to light mode");
        button.setAttribute("title", "Switch to light mode");
      } else {
        button.textContent = "☾";
        button.setAttribute("aria-label", "Switch to dark mode");
        button.setAttribute("title", "Switch to dark mode");
      }
    }
  
    updateButton(initialTheme);
  
    // Switch theme when the visitor clicks the button.
    if (button) {
      button.addEventListener("click", function () {
        const currentTheme =
          root.getAttribute("data-theme");
  
        const newTheme =
          currentTheme === "dark" ? "light" : "dark";
  
        root.setAttribute("data-theme", newTheme);
  
        localStorage.setItem("portfolio-theme", newTheme);
  
        updateButton(newTheme);
      });
    }
  })();
  