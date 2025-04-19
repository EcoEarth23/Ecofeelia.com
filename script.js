function toggleMenu() {
   const nav = document.querySelector('.nav');
   const menuToggle = document.getElementById('menuToggle');
   const isOpen = nav.style.display === 'flex';

   if (isOpen) {
      nav.style.display = 'none';
      menuToggle.classList.remove('close');
   } else {
      nav.style.display = 'flex';
      menuToggle.classList.add('close');
   }
}


function logout() {
   window.location.href = "http://client-dashboard.infinityfreeapp.com/";
}

function showSection(section) {
   const loader = document.getElementById('loader-overlay');
   const menuToggle = document.getElementById('menuToggle');

   // Show loader
   loader.style.display = 'flex';

   // Hide all sections immediately
   document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));

   // Reset progress bars instantly if impact section is selected
   if (section === 'impact') {
      document.querySelectorAll('.progress').forEach(bar => {
         bar.style.transition = "none";
         bar.style.width = "0";
      });
   }

   // After 2s loader delay
   setTimeout(() => {
      loader.style.display = 'none';

      const target = document.getElementById(section);
      target.classList.add('active');

      // Animate progress bars after section is shown
      if (section === 'impact') {
         setTimeout(() => {
            document.querySelectorAll('.progress').forEach(bar => {
               const targetWidth = bar.getAttribute('data-width');
               bar.style.transition = "width 1.5s ease-in-out";
               bar.style.width = targetWidth;
            });
         }, 100); // slight delay to trigger transition
      }

      // Auto-close nav on small screens
      if (window.innerWidth <= 768) {
         document.querySelector('.nav').style.display = 'none';
         menuToggle.classList.remove('close');
      }

   }, 2000); // Loader delay
}

// On page load
window.onload = () => showSection('impact');


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

const members = [{
      name: "Cybersecurity NXXT",
      points: 1650,
      logo: "https://cybersecurity-nxxt.com/assets/images/logo.svg"
   },
   {
      name: "BHEL",
      points: 1520,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Bharat_Heavy_Electricals_Limited_logo.svg/1024px-Bharat_Heavy_Electricals_Limited_logo.svg.png"
   },
   {
      name: "Zacco",
      points: 1480,
      logo: "https://www.zacco.com/wp-content/themes/zacco22/icons/zacco_logo_ny.svg"
   },
   {
      name: "George Russell",
      points: 1320,
      logo: "driver4.jpg"
   },
   {
      name: "Lando Norris",
      points: 1280,
      logo: "driver5.jpg"
   },
   {
      name: "Carlos Sainz",
      points: 1250,
      logo: "driver6.jpg"
   },
   {
      name: "Fernando Alonso",
      points: 1200,
      logo: "driver7.jpg"
   },
   {
      name: "Sergio Pérez",
      points: 1190,
      logo: "driver8.jpg"
   },
   {
      name: "Valtteri Bottas",
      points: 1160,
      logo: "driver9.jpg"
   },
   {
      name: "Kevin Magnussen",
      points: 1120,
      logo: "driver10.jpg"
   }
];

let currentPage = 0;
const itemsPerPage = 5;

function displayLeaderboard() {
   const leaderboardContainer = document.querySelector(".leaderboard");
   leaderboardContainer.innerHTML = "";

   // Sort members by points
   members.sort((a, b) => b.points - a.points);

   const start = currentPage * itemsPerPage;
   const end = start + itemsPerPage;
   const paginatedMembers = members.slice(start, end);

   // Create leaderboard entries
   paginatedMembers.forEach((member, index) => {
      const globalIndex = start + index;

      const entry = document.createElement("div");
      entry.className = "leaderboard-entry";
      entry.style.animationDelay = `${index * 0.2}s`;

      // Add rankings and badges
      if (globalIndex === 0) entry.classList.add("");
      else if (globalIndex === 1) entry.classList.add("");
      else if (globalIndex === 2) entry.classList.add("");

      const badge = document.createElement("span");
      badge.classList.add("");

      if (globalIndex === 0) {
         badge.classList.add("");
         badge.textContent = "";
      } else if (globalIndex === 1) {
         badge.classList.add("");
         badge.textContent = "";
      } else if (globalIndex === 2) {
         badge.classList.add("");
         badge.textContent = "";
      }

      const logo = document.createElement("img");
      logo.src = member.logo;
      logo.alt = member.name;
      logo.className = "driver-logo";

      const rank = document.createElement("span");
      rank.className = "rank";
      rank.textContent = `#${globalIndex + 1}`;

      const name = document.createElement("span");
      name.className = "name";
      name.textContent = member.name;

      const points = document.createElement("span");
      points.className = "points";
      points.textContent = member.points;

      const rankContainer = document.createElement("div");
      rankContainer.className = "rank-container";
      rankContainer.appendChild(logo);
      rankContainer.appendChild(rank);

      entry.appendChild(rankContainer);
      entry.appendChild(name);
      entry.appendChild(points);
      if (globalIndex < 3) entry.appendChild(badge);

      leaderboardContainer.appendChild(entry);
   });

   document.getElementById("prevBtn").disabled = currentPage === 0;
   document.getElementById("nextBtn").disabled = (currentPage + 1) * itemsPerPage >= members.length;
}

// Previous button functionality
document.getElementById("prevBtn").addEventListener("click", () => {
   if (currentPage > 0) {
      currentPage--;
      displayLeaderboard();
   }
});

// Next button functionality
document.getElementById("nextBtn").addEventListener("click", () => {
   if ((currentPage + 1) * itemsPerPage < members.length) {
      currentPage++;
      displayLeaderboard();
   }
});

// Initially display the leaderboard


window.onload = () => {
   showSection('impact');
   displayLeaderboard(); // Ensures first page is shown
};
