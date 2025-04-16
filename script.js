function toggleMenu() {
        const nav = document.querySelector('.nav');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    }

    function logout() {
        window.location.href = "http://client-dashboard.infinityfreeapp.com/";
    }

    function showSection(section) {
        const loader = document.getElementById('loader-overlay');
        loader.style.display = 'flex'; // Show loader

        // Hide all sections first
        document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));

        // Delay to show loader
        setTimeout(() => {
            loader.style.display = 'none'; // Hide loader
            document.getElementById(section).classList.add('active'); // Show target section

            // Close nav if mobile
            if (window.innerWidth <= 768) {
                document.querySelector('.nav').style.display = 'none';
            }
        }, 2000); // 2 second delay
    }


    // Animate progress bars
    if (section === 'impact') {
        document.querySelectorAll('.progress').forEach(bar => {
            let targetWidth = bar.getAttribute('data-width');
            bar.style.width = "0"; // Reset before animation
        bar.style.transition = "width 1.5s ease-in-out"; // Smooth animation
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
        });
    }    
}
    /*document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".progress").forEach(bar => {
    const width = bar.getAttribute("data-width");
    if (width) {
      setTimeout(() => {
        bar.style.width = width;
      }, 200); // slight delay to trigger animation
    }
  });
});*/




// Show default section
window.onload = () => showSection('impact');

function downloadCertificate() {
             const certificateURL = "https://drive.google.com/file/d/1ZxXIuPcxA3awVJ4JevtKf1g3WIc4WeSp/view?usp=sharing";    
             const a = document.createElement("a");
             a.href = certificateURL;
             a.target = '_blank';
             a.download = "Eco_certificate.pdf";
             document.body.appendChild(a);
             a.click();
             document.body.removeChild(a);
         }

     //Leader board
    const rowsPerPage = 10;
    let currentPage = 1;

    function showPage(page) {
      const rows = document.querySelectorAll("#leaderboard-body tr");
      const totalPages = Math.ceil(rows.length / rowsPerPage);
      const pageNumber = document.getElementById("page-number");

      currentPage = Math.max(1, Math.min(page, totalPages));
      const start = (currentPage - 1) * rowsPerPage;
      const end = start + rowsPerPage;

      rows.forEach((row, i) => {
        const visibleIndex = i - start;

        row.style.display = (i >= start && i < end) ? "table-row" : "none";

        if (i >= start && i < end) {
          const positionCell = row.cells[4];
          const globalRank = i + 1;

          if (globalRank === 1) {
            positionCell.innerHTML = `🥇`;
          } else if (globalRank === 2) {
            positionCell.innerHTML = `🥈`;
          } else if (globalRank === 3) {
            positionCell.innerHTML = `🥉`;
          } else {
            positionCell.innerHTML = `<span class="position-box">${globalRank}</span>`;
          }
        }
      });

      pageNumber.textContent = `Page ${currentPage}`;
    }

    function prevPage() {
      if (currentPage > 1) showPage(currentPage - 1);
    }

    function nextPage() {
      const rows = document.querySelectorAll("#leaderboard-body tr");
      const totalPages = Math.ceil(rows.length / rowsPerPage);
      if (currentPage < totalPages) showPage(currentPage + 1);
    }

    document.addEventListener("DOMContentLoaded", () => {
      showPage(1);
    });



// Load the first page on window load
window.onload = () => {
    showSection('impact'); // Show default section
    loadLeaderboard(); // Load leaderboard data
};


