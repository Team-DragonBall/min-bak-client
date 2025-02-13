document.addEventListener("DOMContentLoaded", function () {
  const sizeBtn = document.querySelector(".layout-sizeBtn");
  const sidebar = document.querySelector(".layout-sidebar");

  sizeBtn.addEventListener("click", function () {
    if (sidebar.style.width === "70px") {
      sidebar.style.width = "200px";
    } else {
      sidebar.style.width = "70px";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const lightBtn = document.querySelector(".layout-lightBtn");
  const body = document.body;

  lightBtn.addEventListener("click", function () {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      lightBtn.classList.replace("fa-sun", "fa-moon");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      lightBtn.classList.replace("fa-moon", "fa-sun");
    }
  });
});
