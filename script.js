function orderFood(menu) {
  const phone = "62895352505993"; // GANTI ke nomor WhatsApp kamu
  const message = `Halo, saya mau pesan ${menu}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
