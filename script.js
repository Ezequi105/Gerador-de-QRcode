const input = document.querySelector("input");
const qrcode = document.querySelector("#qrcode");

document.getElementById("generateButton").addEventListener("click", () => {
  genQRCode();
});

function genQRCode() {
  // Sua lógica para gerar o QR Code aqui
  console.log("QR Code gerado!");
};


function genQRCode() {
  if (!input.value) return;

  qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  
// Show the download button
downloadButton.style.display = "inline";

// Set up the download link
downloadButton.href = qrCodeUrl;
downloadButton.download = "qrcode.png";
}

// Event listener for download button
downloadButton.addEventListener("click", () => {
const link = document.createElement('a');
link.href = qrcode.src;
link.download = 'qrcode.png';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
});