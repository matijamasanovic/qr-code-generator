let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");
let qrName = document.querySelector("#qrName");
let qrError = document.querySelector("#qrError");

function generateQR() {
  if (qrText.value === "") {
    qrError.innerText = "You need to enter url!";
  } else {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;

    qrImage.style.border = "2px solid gray";

    qrName.innerText = qrText.value;
    qrError.innerText = "";
  }
}
