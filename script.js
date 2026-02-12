// Scroll Functions
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function scrollToPricing() {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
}

// Testimonials Data
const testimonials = [
    {
        name: "Andi - Owner Toko Online",
        review: "Traffic website saya naik 300% dalam 6 bulan. Sangat recommended!"
    },
    {
        name: "Sari - Digital Marketing Manager",
        review: "Keyword utama kami berhasil masuk halaman 1 Google dan leads meningkat drastis."
    },
    {
        name: "Budi - CEO Startup",
        review: "Strategi SEO yang terstruktur dan hasilnya nyata meningkatkan revenue."
    }
];

const testimonialContainer = document.getElementById("testimonials");

testimonials.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <p>"${item.review}"</p>
        <strong>${item.name}</strong>
    `;
    testimonialContainer.appendChild(div);
});

// Blog Data
const blogPosts = [
    {
        title: "Apa Itu SEO dan Mengapa Penting?",
        desc: "Pelajari dasar-dasar SEO untuk mengembangkan bisnis online Anda."
    },
    {
        title: "Strategi Riset Keyword Efektif",
        desc: "Panduan menemukan keyword potensial untuk meningkatkan traffic organik."
    },
    {
        title: "Cara Cepat Naik Ranking Google",
        desc: "Tips optimasi website agar cepat masuk halaman pertama."
    }
];

const blogContainer = document.getElementById("blog");

blogPosts.forEach(post => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.desc}</p>
        <button class="btn-primary" style="margin-top:10px;">Baca Selengkapnya</button>
    `;
    blogContainer.appendChild(div);
});

// Contact Form
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
    form.reset();
});
      
