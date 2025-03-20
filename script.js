function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
function logout() {
            window.location.href = "https://google.com";
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
             a.download = "Eco_certificate.pdf";
             document.body.appendChild(a);
             a.click();
             document.body.removeChild(a);
         }
 window.open(certificateUrl, "_blank");

        
        // Leaderboard Data (Example)


let currentPage = 1;
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
 }

// Load the first page on window load
window.onload = () => {
    showSection('impact'); // Show default section
    loadLeaderboard(); // Load leaderboard data
};


