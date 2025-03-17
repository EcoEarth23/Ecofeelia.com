
function showSection(section) {
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
    if (section === 'impact') animateBars();
    if (section === 'leaderboard') loadLeaderboard();
}

function animateBars() {
document.querySelectorAll('.progress').forEach(bar => {
let targetWidth = bar.getAttribute('data-width');
bar.style.width = targetWidth;
});
}

function showSection(section) {
document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
document.getElementById(section).style.display = 'block';

if (section === "impact") animateBars();
}

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

function loadLeaderboard() {
    const tbody = document.getElementById("leaderboard-body");
    tbody.innerHTML = "";
    const start = (currentPage - 1) * entriesPerPage;
    const end = start + entriesPerPage;
    leaderboardData.slice(start, end).forEach(entry => {
        const row = `<tr>
            <td>${entry.serial}</td>
            <td>${entry.company}</td>
            <td>${entry.contribution}</td>
            <td>${entry.points}</td>
            <td>${entry.position}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function prevPage() { if (currentPage > 1) { currentPage--; loadLeaderboard(); } }
function nextPage() { if (currentPage * entriesPerPage < leaderboardData.length) { currentPage++; loadLeaderboard(); } }

window.onload = () => showSection('impact');