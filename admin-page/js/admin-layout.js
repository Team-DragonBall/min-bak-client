document.addEventListener("DOMContentLoaded", function () {
  const sizeBtn = document.querySelector(".layout-sizeBtn");
  const sidebar = document.querySelector(".layout-sidebar");
  const lightBtn = document.querySelector(".layout-lightBtn");
  const body = document.body;

  function getCookie(name) {
    const matches = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : null;
  }

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  const sidebarState = getCookie("sidebar");
  if (sidebarState) {
    sidebar.style.width = sidebarState;
  }

  const themeState = getCookie("theme");
  if (themeState) {
    body.classList.add(themeState);
    lightBtn.classList.add(themeState === "dark" ? "fa-moon" : "fa-sun");
  } else {
    body.classList.add("light");
    lightBtn.classList.add("fa-moon");
  }

  sizeBtn.addEventListener("click", function () {
    if (sidebar.style.width === "200px") {
      sidebar.style.width = "70px";
      setCookie("sidebar", "70px", 7);
    } else {
      sidebar.style.width = "200px";
      setCookie("sidebar", "200px", 7);
    }
  });

  lightBtn.addEventListener("click", function () {
    if (body.classList.contains("dark")) {
      body.classList.replace("dark", "light");
      lightBtn.classList.replace("fa-sun", "fa-moon");
      setCookie("theme", "light", 7);
    } else {
      body.classList.replace("light", "dark");
      lightBtn.classList.replace("fa-moon", "fa-sun");
      setCookie("theme", "dark", 7);
    }
  });
});