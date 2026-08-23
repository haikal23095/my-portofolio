document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('#project-filters .nav-link');
    const projectItems = document.querySelectorAll('.project-item');

    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // 1. Hapus kelas active dari semua link
            filterLinks.forEach(l => l.classList.remove('active'));
            // 2. Tambah kelas active ke link yang diklik
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // 3. Logika Filter
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block'; // Tampilkan
                    // Tambahkan animasi fade in sederhana
                    item.style.opacity = '0';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.display = 'none'; // Sembunyikan
                }
            });
        });
    });
});