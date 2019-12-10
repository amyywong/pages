//create variable and get element from CSS
//then create eventlisten to add action

var body = document.getElementById('body');
body.addEventListener('click', addImg);

function addImg(event) {
  //create img
  //add an image
  //set position of the image based on mouse posiiton

  var newImg = document. createElement('img');
  newImg.src = "eventimages/karaface.jpg";
  var x = event.pageX;
  var y = event.pageY;
  newImg.style.left = x + "px";
  newImg.style.top = y + "px";
  newImg.classList.add('img');
  body.appendChild(newImg);

}
