function orderFood(menu) {
  const phone = "6281234567890"; // GANTI dengan nomor WhatsApp kamu
  const message = `Halo, saya mau pesan ${menu}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

