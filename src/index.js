const form = document.getElementById("ugc-form");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy-btn");
const presetSelect = document.getElementById("preset");
const themeToggleBtn = document.getElementById("theme-toggle");

const presets = {
  storyselling_produk: {
    kategori: "storyselling produk",
    tujuan: "jualan + bangun trust",
    tone: "santai WA, relate",
    visual: "talking head + B-roll",
    durasi: "15-30 detik",
    cta: "cek keranjang sekarang",
  },
  edukasi_ai: {
    kategori: "edukasi AI",
    tujuan: "naikin trust + followers",
    tone: "simple & smart",
    visual: "screen record + talking head",
    durasi: "30 detik",
    cta: "follow buat tips lain",
  },
  review_fashion: {
    kategori: "review produk fashion",
    tujuan: "jualan + social proof",
    tone: "jujur, santai",
    visual: "close up detail + POV dipakai",
    durasi: "7–15 detik",
    cta: "cek warna & ukuran",
  },
};

presetSelect.addEventListener("change", () => {
  const p = presets[presetSelect.value];
  if (!p) return;

  document.getElementById("kategori").value = p.kategori;
  document.getElementById("tujuan").value = p.tujuan;
  document.getElementById("tone").value = p.tone;
  document.getElementById("visual").value = p.visual;
  document.getElementById("durasi").value = p.durasi;
  document.getElementById("cta").value = p.cta;
});

themeToggleBtn.addEventListener("click", () => {
  const body = document.body;
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
  themeToggleBtn.textContent =
    body.dataset.theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const prompt = `
Kamu adalah creative director UGC + scriptwriter market Indonesia.
Bahasa: santai kayak chat WA, simple, nggak bertele-tele.

BRIEF:
Niche: ${niche.value}
Kategori: ${kategori.value}
Tujuan: ${tujuan.value}
Target Audience: ${audience.value}
Masalah: ${masalah.value}
Pesan inti: ${pesan.value}
Durasi: ${durasi.value}
Visual: ${visual.value}
Tone: ${tone.value}
CTA: ${cta.value}

TUGAS:
Buatkan paket konten lengkap:

1) IDE KONTEN (1–2 kalimat)

2) HOOK (3 pilihan kuat, max 9 kata)

3) SCRIPT VIDEO (format per baris pendek)
- Sesuai kategori: STORYSELLING → Masalah → Penemuan → Transformasi → CTA

4) BREAKDOWN SHOT VISUAL (min 4 shot)

5) CAPTION (pendek & medium)

6) PROMPT AI video (deskripsi mood, lighting, kamera)
`;

  output.value = prompt;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value).then(() => {
    copyBtn.textContent = "✔ Tersalin";
    setTimeout(() => (copyBtn.textContent = "Copy ke Clipboard"), 1500);
  });
});
