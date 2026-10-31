
const modal = document.getElementById("modal");

function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

function checkAccount() {
  const userID = document.getElementById("userID").value.trim();
  const message = document.getElementById("message");

  if (!userID) {
    message.textContent = "Silakan masukkan USER ID terlebih dahulu.";
    return;
  }

  message.textContent =
    "USER ID berhasil dimasukkan. Ini hanya simulasi tampilan, bukan konfirmasi saldo atau transfer.";

  document.getElementById("spin").textContent = "0";
  document.getElementById("konek").textContent = "0";
  document.getElementById("hasil").textContent = "0";
}
