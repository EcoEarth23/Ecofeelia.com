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
            bar.style.width = targetWidth;
        });
    }
}

// Show default section
window.onload = () => showSection('impact');

function downloadCertificate() {
            const certificateURL = "https://drive.google.com/file/d/1D7viF1ToTfiTztDFM8t6X4Onf6i2pwZV/view?usp=sharing";
            const a = document.createElement("a");
            a.href = certificateURL;
            a.download = "Eco_certificate.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
window.open(certificateUrl, "_blank");
        
        // Leaderboard Data (Example)
const leaderboardData = [
    { rank: 1, company: "GreenTech", contribution: 1000, points: 250 },
    { rank: 2, company: "EcoLife", contribution: 900, points: 230 },
    { rank: 3, company: "Nature Co.", contribution: 850, points: 220 },
    { rank: 4, company: "Planet Savers", contribution: 800, points: 210 },
    { rank: 5, company: "Sustainable Works", contribution: 750, points: 200 },
    { rank: 6, company: "EcoFuture", contribution: 700, points: 190 },
    { rank: 7, company: "GreenWave", contribution: 680, points: 185 },
    { rank: 8, company: "BioPlanet", contribution: 650, points: 180 },
    { rank: 9, company: "Earth Warriors", contribution: 620, points: 175 },
    { rank: 10, company: "EcoRise", contribution: 600, points: 170 },
    { rank: 11, company: "SaveNature", contribution: 580, points: 165 },
    { rank: 12, company: "RecycleForce", contribution: 550, points: 160 },
    { rank: 13, company: "EcoGuard", contribution: 530, points: 155 },
    { rank: 14, company: "Planet Protectors", contribution: 500, points: 150 },
    { rank: 15, company: "EarthCare", contribution: 480, points: 145 },
];

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
            <td>${entry.serial No}</td>
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


