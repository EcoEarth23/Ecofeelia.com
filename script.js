function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
function logout() {
            window.location.href = "http://client-dashboard.infinityfreeapp.com/";
        }

function showSection(section) {
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';

    // Close menu after clicking a section (for mobile)
    if (window.innerWidth <= 768) {
        document.querySelector('.nav').style.display = 'none';
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
 //window.open(certificateUrl, target="_blank");

        
        // Leaderboard Data (Example)


/*let currentPage = 1;
 const entriesPerPage = 10;
 
 function loadLeaderboard() {
     const tbody = document.getElementById("leaderboard-body");
     tbody.innerHTML = "";
 
     const start = (currentPage - 1) * entriesPerPage;
     const end = start + entriesPerPage;
     const paginatedData = leaderboardData.slice(start, end);
 
     paginatedData.forEach(entry => {
         const row = `<tr>
             <td>${entry.serial}</td>
             <td>${entry.company}</td>
             <td>${entry.contribution}</td>
             <td>${entry.points}</td>
             <td>${entry.position}</td>
         </tr>`;
         tbody.innerHTML += row;
     });
 
     document.getElementById("page-number").textContent = `Page ${currentPage}`;
 }
 
 function prevPage() {
     if (currentPage > 1) {
         currentPage--;
         loadLeaderboard();
     }
 }
 
 function nextPage() {
     if (currentPage * entriesPerPage < leaderboardData.length) {
         currentPage++;
         loadLeaderboard();
     }
 }*/

//Leader board

    /*const rowsPerPage = 10;
    let currentPage = 1;

    function showPage(page) {
        const table = document.getElementById('leaderboard-body');
        const rows = table.querySelectorAll('tr');
        const totalPages = Math.ceil(rows.length / rowsPerPage);

        // Keep page in bounds
        page = Math.max(1, Math.min(page, totalPages));

        // Hide all rows
        rows.forEach(row => row.style.display = 'none');

        // Show only current page rows
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        for (let i = start; i < end && i < rows.length; i++) {
            rows[i].style.display = '';
        }

        // Update current page
        currentPage = page;
        document.getElementById('page-number').textContent = `Page ${currentPage}`;
    }

    function nextPage() {
        const rows = document.getElementById('leaderboard-body').querySelectorAll('tr');
        const totalPages = Math.ceil(rows.length / rowsPerPage);
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    }

    // Show first page on load
    document.addEventListener('DOMContentLoaded', () => {
        showPage(1);
    });*/

          const rowsPerPage = 5;
  let currentPage = 1;

  function showPage(page) {
    const rows = document.querySelectorAll("#leaderboard-body tr");
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    const pageNumber = document.getElementById("page-number");

    currentPage = Math.max(1, Math.min(page, totalPages));
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    rows.forEach((row, i) => {
      row.style.display = (i >= start && i < end) ? "table-row" : "none";

      // Set position column with emojis
      const positionCell = row.cells[4];
      const globalRank = i + 1;

      if (globalRank === 1) positionCell.textContent = "🥇";
      else if (globalRank === 2) positionCell.textContent = "🥈";
      else if (globalRank === 3) positionCell.textContent = "🥉";
      else positionCell.textContent = `${globalRank}️⃣`;
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


