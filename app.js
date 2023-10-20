let header = document.querySelector("header");

let aLink = document.querySelectorAll("header nav ul li a");
console.log(aLink);

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(0,122,167,0.8)";
    header.style.boxShadow = "1px 1px 2px 1px rgb(250, 250, 250)";
    header.style.color = "white";

    aLink.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    aLink.forEach((a) => {
      a.style.color = "#09777d";
    });
  }
});
