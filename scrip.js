bt = document.getElementById("bt");
nav_links = document.querySelector(".nav-links");
nav_of = document.querySelector(".nav-of");

bt.onclick = function() {
    nav_links.style.display = "flex";
    nav_of.style.display = "block";
}

nav_of.onclick = function() {
    nav_links.style.display = "none";
    nav_of.style.display = "none";
}
