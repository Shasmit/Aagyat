var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("title");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


const showPoems= document.querySelector('#poems');
const showAbout = document.querySelector('#aboutme');
const aboutSection = document.querySelector('#about-section')
const poemsSection = document.querySelector('#skills-section')


showPoems.addEventListener('click', () => {
  poemsSection.style.display = 'block';
  aboutSection.style.display = 'none';
}
)

showAbout.addEventListener('click', () => {
  poemsSection.style.display = 'none';
  aboutSection.style.display = 'block';
}
)