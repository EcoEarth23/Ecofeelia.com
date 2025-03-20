function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
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
const leaderboardData = [
    { serial: 1, company: "Company A", contribution: "100kg", points: 120, position: 1 },
    { serial: 2, company: "Company B", contribution: "90kg", points: 110, position: 2 },
    { serial: 3, company: "Company C", contribution: "85kg", points: 100, position: 3 },
    { serial: 4, company: "Company D", contribution: "80kg", points: 95, position: 4 },
    { serial: 5, company: "Company E", contribution: "75kg", points: 90, position: 5 },
    { serial: 6, company: "Company F", contribution: "70kg", points: 85, position: 6 },
    { serial: 7, company: "Company G", contribution: "65kg", points: 80, position: 7 },
    { serial: 8, company: "Company H", contribution: "60kg", points: 75, position: 8 },
    { serial: 9, company: "Company I", contribution: "55kg", points: 70, position: 9 },
    { serial: 10, company: "Company J", contribution: "50kg", points: 65, position: 10 },
    { serial: 11, company: "Company K", contribution: "45kg", points: 60, position: 11 },
    { serial: 12, company: "Company L", contribution: "40kg", points: 55, position: 12 },
    { serial: 13, company: "Company M", contribution: "35kg", points: 50, position: 13 },
    { serial: 14, company: "Company N", contribution: "30kg", points: 45, position: 14 },
    { serial: 15, company: "Company O", contribution: "25kg", points: 40, position: 15 }
];

function loadLeaderboard() {
    const tbody = document.getElementById("leaderboard-body");
    tbody.innerHTML = ""; // Clear previous rows

    const start = (currentPage - 1) * entriesPerPage;
    const end = Math.min(start + entriesPerPage, leaderboardData.length);
    const paginatedData = leaderboardData.slice(start, end);

    paginatedData.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.serial}</td>
            <td>${entry.company}</td>
            <td>${entry.contribution}</td>
            <td>${entry.points}</td>
            <td>${entry.position}</td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById("page-number").textContent = `Page ${currentPage}`;

    // Disable buttons when at the limits
    document.getElementById("prev-button").disabled = currentPage === 1;
    document.getElementById("next-button").disabled = currentPage * entriesPerPage >= leaderboardData.length;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        loadLeaderboard();
    }
}

function nextPage() {
    if ((currentPage * entriesPerPage) < leaderboardData.length) {
        currentPage++;
        loadLeaderboard();
    }
}

// Load the first page when the script runs
document.addEventListener("DOMContentLoaded", loadLeaderboard);


// Load the first page on window load
window.onload = () => {
    showSection('impact'); // Show default section
    loadLeaderboard(); // Load leaderboard data
};


