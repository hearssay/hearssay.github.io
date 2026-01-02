// charts

  // Hours by airline
  const hoursByAirlineCtx = document.getElementById('hoursByAirline').getContext('2d');
  new Chart(hoursByAirlineCtx, {
    type: 'bar',
    data: {
      labels: ['QTR', 'AAL', 'CMA'],
      datasets: [{
        label: 'Hours by airline',
        data: [2710.88, 1674.62, 1083.42],
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
        data: [198, 196, 190, 180, 68],
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
        y: { min: 175, beginAtZero: false }
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
      data: [3577.33, 1074.00, 817.58],
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
  const data2025 = [780.55,138.60,54.98,319.05]; 
  const data2026 = [6.32,0.00,0.00,0.00];

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
          hidden: true,
        },
        {
          label: '2022',
          data: data2022,
          borderColor: 'rgb(75, 149, 192)',
          hidden: true,
        },
        {
          label: '2023',
          data: data2023,
          borderColor: 'rgb(102, 255, 230)',
          hidden: true,
        },
        {
          label: '2024',
          data: data2024,
          borderColor: 'rgb(64, 255, 175)',
          hidden: true,
        },
        {
          label: '2025',
          data: data2025,
          borderColor: 'rgb(139, 208, 240)',
          hidden: true,
        },
        {
          label: '2026',
          data: data2026,
          borderColor: 'rgb(255, 153, 255)',
          hidden: false,
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
