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

  // PIREPs by airline
  const pirepsByAirlineCtx = document.getElementById('pirepsByAirline').getContext('2d');
  new Chart(pirepsByAirlineCtx, {
    type: 'bar',
    data: {
      labels: ['QTR', 'AAL', 'CMA', 'TVF', 'UAE'],
      datasets: [{
        label: 'PIREPs by airline',
        data: [269, 161, 31, 9, 31],
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
          text: 'PIREPs by airline'
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

  // Hours by airline
  const hoursByAirlineCtx = document.getElementById('hoursByAirline').getContext('2d');
  new Chart(hoursByAirlineCtx, {
    type: 'bar',
    data: {
      labels: ['QTR', 'AAL', 'CMA', 'TVF', 'UAE'],
      datasets: [{
        label: 'Hours by airline',
        data: [2623.83, 1179.60, 366.53, 18.53, 150.85],
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

  // Top 5 most visited airports
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
          text: 'Top 5 Visited Airports'
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

// Pireps by Aircraft
const pirepsEl = document.getElementById('pirepsByAircraft');

if (pirepsEl) {
  new Chart(pirepsEl.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['B77W', 'B77L', 'B738'],
      datasets: [{
        label: 'PIREPs by aircraft',
        data: [365, 65, 234],
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
          text: 'PIREPs by aircraft'
        },
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}


  // Total Hours by Aircraft
const hoursCtx = document.getElementById('hoursByAircraft').getContext('2d');
new Chart(hoursCtx, {
  type: 'bar',
  data: {
    labels: ['B77W', 'B77L', 'B738'],
    datasets: [{
      label: 'Hours by aircraft',
      data: [3510.75, 662.12, 810.43],
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

  // Total Hours by Network
  const networkCtx = document.getElementById('hoursByNetwork').getContext('2d');
  new Chart(networkCtx, {
    type: 'bar',
    data: {
      labels: ['VATSIM', 'IVAO', 'Off-network'],
      datasets: [{
        label: 'Hours by network',
        data: [5006.28, 344.67, 10.10],
        backgroundColor: [
          '#79beff',  // Light Blue
          '#87CEFA',  // Light Sky Blue
          '#B0E0E6'  // Powder Blue
          //'#AFEEEE'   // Pale Turquoise
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Hours by network'
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

// Hours over the months and years
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data2021 = [58.44, 41.3, 20.3, 0, 2, 19.2, 280, 369.6, 266.1, 1, 16.1, 24];
  const data2022 = [11.6, 109.1, 58, 259, 18, 36.7, 0, 0, 0, 2, 0.5, 0];
  const data2023 = [0, 0, 0.5, 0, 0, 0, 41, 152, 179.5, 334.3, 257.7, 183.5];
  const data2024 = [155, 101.5, 28.2, 114, 49.5, 18.3, 237.6, 90.1, 209.5, 140.5, 177, 86.5];
  const data2025 = [96.13, 259.73, 424.68, 33.33, null, null, null, null, null, null, null, null]; // Only partial data

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
          text: "Hours by month and year"
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

  // Yearly Bar Chart
  const yearlyData = [1092.16, 494.9, 1148.5, 1408.16, 813.88]; // Totals from the table
  const yearlyLabels = ['2021', '2022', '2023', '2024', '2025'];

  const yearlyCtx = document.getElementById('yearlyChart').getContext('2d');
  const yearlyChart = new Chart(yearlyCtx, {
    type: 'bar',
    data: {
      labels: yearlyLabels,
      datasets: [{
        label: 'Total hours by year',
        data: yearlyData,
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
          text: 'Total hours by year'
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