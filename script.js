const tableRow = document.querySelectorAll(".projects___container");
const eye = document.querySelectorAll(".eye");
const details = document.querySelectorAll(".projects___details");

for (let i = 0; i < tableRow.length; i++) {
  tableRow[i].addEventListener("click", () => {
    eye[i].classList.toggle("xi-eye-o");
    eye[i].classList.toggle("xi-eye-off-o");
    details[i].classList.toggle("active");
  });
}

const leftBtn = document.querySelectorAll(".left");
const rightBtn = document.querySelectorAll(".right");
const control = document.querySelectorAll(".control");

for (let i = 0; i < leftBtn.length; i++) {

  const imageBox = leftBtn[i].parentElement;
  const image = imageBox.querySelectorAll("img");

  for (let x = 0; x < image.length; x++) {
    const indicator = document.createElement("div");
    control[i].appendChild(indicator);
    control[i].firstChild.classList.add("active");
    indicator.classList.add("indicator");
  }

  const indicator = control[i].querySelectorAll(".indicator");
  
  let count = 0;
  let tr = 0;
  
  rightBtn[i].addEventListener("click", () => {
    if (count === image.length - 1) {
      count = image.length - 1;
    } else {
      indicator[count].classList.toggle("active");
      count = count + 1;
      tr = count * 100;
      indicator[count].classList.toggle("active");
      image[count].style.transform = `translateX(-${tr}%)`;
    }

    if (count === image.length - 1) {
      return null;
    } else {
      image[count + 1].style.transform = `translateX(-${tr}%)`;
    }

    console.log(count);
  });

  leftBtn[i].addEventListener("click", () => {
    indicator[count].classList.toggle("active");

    count = count - 1;
    if (count <= 0) {
      count = 0;
    }

    indicator[count].classList.toggle("active");

    image[count].style.transform = `translateX(-${count * 100}%)`;
    image[count + 1].style.transform = `translateX(-${count * 100}%)`;
    console.log(count);
  });
}
