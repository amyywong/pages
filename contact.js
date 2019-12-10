function makeCircles(){
for (i = 0; i <20; i++){
  var circles = document.createElement("div");
  circles.style.left = Math.random() * 800 + "px";
  circles.style.top = Math.random() * 1500 + "px";
  circles.classList.add("circles");
  circles.id = i;

  var container = document.getElementById('container');
  container.appendChild(circles);
  }
}
makeCircles();
