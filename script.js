
const modal = document.getElementById("modal");

const hadiah = [
  20000,
  30000,
  40000,
  50000,
  100000
];

let selectedReward = 0;

function openModal() {
  modal.classList.add("show");

  document.getElementById("checkSection").style.display = "block";
  document.getElementById("rewardSection").style.display = "none";
  document.getElementById("message").textContent = "";
}

function closeModal() {
  modal.classList.remove("show");
}

function checkAccount() {
  const userID = document.getElementById("userID").value.trim();
  const message = document.getElementById("message");

  if (!userID) {
    message.textContent = "Silakan masukkan USER ID terlebih dahulu!";
    return;
  }

  // Mengacak nominal hadiah simulasi
  const randomIndex = Math.floor(Math.random() * hadiah.length);
  selectedReward = hadiah[randomIndex];

  // Menampilkan nominal
  document.getElementById("rewardAmount").textContent =
    "Rp" + selectedReward.toLocaleString("id-ID");

  // Mengubah tampilan popup
  document.getElementById("checkSection").style.display = "none";
  document.getElementById("rewardSection").style.display = "block";

  message.textContent = "Hasil simulasi berhasil ditampilkan!";
}

function claimReward() {
  window.location.href = "https://gajahmainbola.com/";
}
