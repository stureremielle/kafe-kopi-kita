document.addEventListener("DOMContentLoaded", function () {
  // === Fitur Filter Menu (hanya aktif di menu.html) ===
  if (window.location.pathname.endsWith("menu.html")) {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-card");

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

  // === Reservation Form Handling ===
  if (window.location.pathname.endsWith("reservasi.html")) {
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
      reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('phone', document.getElementById('phone').value);
        formData.append('date', document.getElementById('date').value);
        formData.append('time', document.getElementById('time').value);
        formData.append('guests', document.getElementById('guests').value);
        formData.append('requests', document.getElementById('specialRequest').value);
        
        fetch('php/reserve.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Reservasi berhasil! Terima kasih atas pemesanan Anda.');
                reservationForm.reset();
                displayReservations(); // Refresh the list
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting your reservation.');
        });
      });
      
      // Load reservations on page load
      displayReservations();
    }
  }
  
  // Function to display reservations
  function displayReservations() {
    const container = document.getElementById('reservationListContainer');
    if (!container) return;
    
    // Fetch reservations from the PHP backend
    fetch('php/reserve.php')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const reservations = data.reservations;
          
          // Only show the 5 most recent reservations
          const recentReservations = reservations.slice(0, 5);
          
          if (recentReservations.length === 0) {
            container.innerHTML = '<p>Belum ada reservasi yang dibuat.</p>';
            return;
          }
          
          container.innerHTML = '';
          recentReservations.forEach(reservation => {
            const reservationElement = document.createElement('div');
            reservationElement.className = 'reservation-item fade-in';
            reservationElement.innerHTML = `
              <h4>${reservation.name}</h4>
              <p><strong>Tanggal:</strong> ${formatDate(reservation.reservation_date)} | <strong>Waktu:</strong> ${reservation.reservation_time}</p>
              <p><strong>Jumlah Tamu:</strong> ${getGuestText(reservation.num_guests)}</p>
              ${reservation.special_requests ? `<p><strong>Permintaan Khusus:</strong> ${reservation.special_requests}</p>` : ''}
            `;
            container.appendChild(reservationElement);
          });
        } else {
          container.innerHTML = '<p>Error loading reservations.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching reservations:', error);
        container.innerHTML = '<p>Error loading reservations.</p>';
      });
  }
  
  // Helper function to format date
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  }
  
  // Helper function to get guest text
  function getGuestText(guestValue) {
    const guestMap = {
      '1': '1 Orang',
      '2': '2 Orang',
      '3': '3 Orang',
      '4': '4 Orang',
      '5-10': '5-10 Orang',
      '10+': 'Lebih dari 10 Orang'
    };
    return guestMap[guestValue] || guestValue;
  }

  // === Scroll Animations ===
  function handleScrollAnimations() {
    const elements = document.querySelectorAll('.feature-card, .menu-card, .reservation-item, .promotion-card');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('fade-in');
      }
    });
  }
  
  // Add scroll event listener for animations
  window.addEventListener('scroll', handleScrollAnimations);
  
  // Run once on page load
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(handleScrollAnimations, 100); // Small delay to ensure elements are loaded
  });


});
