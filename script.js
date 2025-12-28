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

  // Hours by airline
  const hoursByAirlineCtx = document.getElementById('hoursByAirline').getContext('2d');
  new Chart(hoursByAirlineCtx, {
    type: 'bar',
    data: {
      labels: ['QTR', 'AAL', 'CMA'],
      datasets: [{
        label: 'Hours by airline',
        data: [2703.20, 1674.62, 1035.25],
        backgroundColor: '#79beff',
        borderColor: '#79beff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Hours by airline'
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // most visited airports
  const topTenAirportsCtx = document.getElementById('topTenAirports').getContext('2d');
  new Chart(topTenAirportsCtx, {
    type: 'bar',
    data: {
      labels: ['OTHH', 'KMIA', 'SBGR', 'SKBO', 'LFPO'],
      datasets: [{
        label: 'Top 10 Visited Airports',
        data: [198, 192, 190, 178, 64],
        backgroundColor: '#79beff',
        borderColor: '#79beff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Most Visited Airports'
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: { min: 60, beginAtZero: false }
      }
    }
  });

  // Total Hours by Aircraft
const hoursCtx = document.getElementById('hoursByAircraft').getContext('2d');
new Chart(hoursCtx, {
  type: 'bar',
  data: {
    labels: ['B77W', 'B77L', 'B738'],
    datasets: [{
      label: 'Hours by aircraft',
      data: [3569.65, 1025.83, 817.58],
      backgroundColor: '#79beff',
      borderColor: '#79beff',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Hours by aircraft'
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Hours over quarters and years
  const months = ['Q1', 'Q2', 'Q3', 'Q4'];
  const data2021 = [0, 16.02, 753.95, 65.48];
  const data2022 = [180.07, 327.22, 0, 2.67];
  const data2023 = [0.85, 0, 429.83, 715.08];
  const data2024 = [264.98, 211.25, 649.37, 552.65];
  const data2025 = [780.55,138.60,54.98,269.52]; // Only partial data

  // Monthly Line Chart
  const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
  const monthlyChart = new Chart(monthlyCtx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: '2021',
          data: data2021,
          borderColor: 'rgb(54, 208, 235)',
          fill: false,
        },
        {
          label: '2022',
          data: data2022,
          borderColor: 'rgb(75, 149, 192)',
          fill: false,
        },
        {
          label: '2023',
          data: data2023,
          borderColor: 'rgb(102, 255, 230)',
          fill: false,
        },
        {
          label: '2024',
          data: data2024,
          borderColor: 'rgb(64, 255, 175)',
          fill: false,
        },
        {
          label: '2025',
          data: data2025,
          borderColor: 'rgb(139, 208, 240)',
          fill: false,
        },
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Hours by quarter and year"
        },
        legend: {
          position: 'right',
           labels: {
          boxWidth: 10,
          padding: 5,
        }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Hours'
          }
        }
      },
      elements: {
        line: {
          tension: 0.273 // smooth the line be setting tension default is 0
        }
      }
    }
  });

fetch("https://snowy-water-1747.san-e33.workers.dev/")
  .then(r => r.json())
  .then(d => {
    document.getElementById("vatsim-hours").textContent =
      Number(d.pilot).toFixed(2);
  });
