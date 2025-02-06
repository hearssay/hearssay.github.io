// images
window.onload = function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("show");
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex - 1].classList.add("show");
        setTimeout(showSlides, 10000); // Change image every 10 seconds
    }
};


// analytics
(function() {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-DDSX5278LJ";
    document.head.appendChild(gaScript);

    gaScript.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DDSX5278LJ');
    };
})();


// zulu
function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
    var x = new Date()
    var x1 = x.toISOString().slice(11, 19) + ' z'
    document.getElementById('ct').innerHTML = x1;
    tt = display_c();
}

// Initialize on page load
window.onload = display_c;

// charts
// Total Hours by Aircraft
const hoursCtx = document.getElementById('hoursByAircraft').getContext('2d');
  new Chart(hoursCtx, {
    type: 'bar',
    data: {
      labels: ['B77W', 'B77L', 'B738', 'B38M', 'A20N', 'A320', 'A35K'],
      datasets: [{
        label: 'Hours by aircraft',
        data: [2770.94, 178.96, 404.12, 47.81, 540.21, 7.55, 520.95],
        backgroundColor: '#79beff',
        borderColor: '#79beff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // PIREPs by airline
  const pirepsByAirlineCtx = document.getElementById('pirepsByAirline').getContext('2d');
  new Chart(pirepsByAirlineCtx, {
    type: 'bar',
    data: {
      labels: ['FDX', 'QTR', 'AAL', 'UAE', 'DAL'],
      datasets: [{
        label: 'PIREPs by airline',
        data: [25, 261, 185, 32, 27],
        backgroundColor: '#79beff',
        borderColor: '#79beff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Hours by airline
  const hoursByAirlineCtx = document.getElementById('hoursByAirline').getContext('2d');
  new Chart(hoursByAirlineCtx, {
    type: 'bar',
    data: {
      labels: ['FDX', 'QTR', 'AAL', 'UAE', 'DAL'],
      datasets: [{
        label: 'Hours by airline',
        data: [116.17, 2453.40, 1298.20, 153.79, 65.71],
        backgroundColor: '#79beff',
        borderColor: '#79beff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Top 10 most visited airports
  const topTenAirportsCtx = document.getElementById('topTenAirports').getContext('2d');
  new Chart(topTenAirportsCtx, {
    type: 'bar',
    data: {
      labels: ['OTHH', 'SBGR', 'KMIA', 'SKBO', 'FACT', 'DGAA', 'KSEA', 'LFPO', 'KDEN', 'LFPG'],
      datasets: [{
        label: 'Top 10 Visited Airports',
        data: [197, 162, 155, 150, 45, 39, 31, 25, 20, 15],
        backgroundColor: '#79beff',
        borderColor: '#79beff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Pireps by Aircraft
  const pirepsByAircraftCtx = document.getElementById('pirepsByAircraft').getContext('2d');
  new Chart(pirepsByAircraftCtx, {
    type: 'bar',
    data: {
      labels: ['B77W', 'B77L', 'B738', 'B38M', 'A20N', 'A320', 'A35K'],
      datasets: [{
        label: 'PIREPs by aircraft',
        data: [297, 22, 132, 11, 125, 2, 48],
        backgroundColor: '#79beff',
        borderColor: '#79beff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Total Hours by Network
  const networkCtx = document.getElementById('hoursByNetwork').getContext('2d');
  new Chart(networkCtx, {
    type: 'bar',
    data: {
      labels: ['VATSIM', 'IVAO', 'Off-network'],
      datasets: [{
        label: 'Hours by network',
        data: [4289.71, 344.67, 10.10],
        backgroundColor: [
          '#79beff',  // Light Blue
          '#87CEFA',  // Light Sky Blue
          '#B0E0E6'  // Powder Blue
          //'#AFEEEE'   // Pale Turquoise
        ]
      }]
    },
    options: {
      responsive: true
    }
  });