// Ambil elemen berdasarkan ID yang sudah disinkronkan dengan HTML
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav = document.getElementById('mainNav'); // Menggunakan ID 'mainNav' pada elemen <nav>

// Fungsi untuk toggle menu navigasi
function toggleMenu() {
    // Tambahkan atau hapus kelas 'active'
    mainNav.classList.toggle('active');
}

// Tambahkan event listener ke tombol hamburger
hamburgerBtn.addEventListener('click', toggleMenu);

// Opsional: Tutup menu saat salah satu tautan diklik (berguna di mobile)
mainNav.addEventListener('click', (e) => {
    // Cek apakah elemen yang diklik adalah <a>
    if (e.target.tagName === 'A') {
        // Hapus kelas 'active' untuk menutup menu
        mainNav.classList.remove('active');
    }
});

console.log("Script website Hari Guru berhasil dimuat dan menu hamburger siap!");
