let displayScreen = document.getElementById('display')
const forwardButton = document.getElementById('forward')
const backwardButton = document.getElementById('back')
const imgItem = document.getElementById('images')

let imageList = ['./assets/images/pic5.jpg', './assets/images/pic4.jpg', './assets/images/pic1.jpg', './assets/images/pic2.jpg', './assets/images/pic3.jpg']
let currentImageIndex = 0;

// function display(list, result) {
//   for (let i = 0; i < imageList.length; i++) {
//     result = list[i].src % imageList.length
//   }
// }

function renderImages() {
  imgItem.innerHTML = "";
  for (let i = 0; i < imageList.length; i++) {
    //create image element
    let el = document.createElement('img');
    el.src = imageList[i];

    // append to dom
    imgItem.appendChild(el);

    // add event listener to image
    el.addEventListener('click', () => {
      currentImageIndex = i;
      updateMainImage()
    })
  }
}

function updateMainImage() {
  document.getElementById("img1").src = imageList[currentImageIndex]
}

function forward() {
  currentImageIndex = (currentImageIndex + 1) % imageList.length;
  updateMainImage();
}
function bckward() {
  if (currentImageIndex > 0) {
    currentImageIndex = currentImageIndex - 1;
  } else {
    currentImageIndex = 4;
  }
  updateMainImage()
}


function forwardAlone() {
  currentImageIndex = (currentImageIndex + 1) % imageList.length;
  updateMainImage();
  setTimeout("forwardAlone()", 5000)
}



renderImages()
updateMainImage()
// setTimeout('changeImg(imageList[0], imageList)', 1000)

forwardButton.addEventListener('click', forward)
backwardButton.addEventListener('click', bckward)
window.addEventListener('load', forwardAlone)