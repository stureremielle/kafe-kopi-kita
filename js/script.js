document.addEventListener("DOMContentLoaded", function () {
  // === Fitur Filter Menu (hanya aktif di menu.html) ===
  if (window.location.pathname.endsWith("menu.html")) {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Update active state
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        menuItems.forEach((item) => {
          const category = item.getAttribute("data-category");
          if (filterValue === "all" || category === filterValue) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });

    // Aktifkan tombol "Semua" saat halaman dimuat
    document.querySelector('.filter-btn[data-filter="all"]').click();
  }

  // === Legacy test (opsional, bisa dihapus nanti) ===
  const button = document.getElementById("test-btn");
  const demo = document.getElementById("demo");
  if (button && demo) {
    button.addEventListener("click", function () {
      demo.textContent = "✅ JavaScript berhasil! Interaksi aktif.";
      demo.style.color = "#2e7d32";
    });
  }

  console.log("Script dimuat — JS siap untuk halaman ini.");
});
