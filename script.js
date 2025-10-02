//  Toggle Dark/Light Theme
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

//  Search Filter
document.getElementById("searchBar").addEventListener("keyup", function () {
  let input = this.value.toLowerCase();
  let courses = document.querySelectorAll(".course-card");

  courses.forEach(course => {
    let title = course.getAttribute("data-title").toLowerCase();
    if (title.includes(input)) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
});

//  Bookmark Courses
function bookmarkCourse(courseName) {
  let list = document.getElementById("bookmarkList");

  // Avoid duplicates
  if (![...list.children].some(li => li.textContent === courseName)) {
    let li = document.createElement("li");
    li.textContent = courseName;
    list.appendChild(li);
  }
}
