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

// hamburger

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('header-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// live flight

const VATSIM_CID = 1480399;
const VATSIM_API = "https://data.vatsim.net/v3/vatsim-data.json";
const DESTS = {
  KMIA: { lat: 25.79325, lon: -80.29056 },
  SKBO: { lat: 4.70159,  lon: -74.14695 },
  OTHH: { lat: 25.27306, lon: 51.60806 },
  SBGR: { lat: -23.43556, lon: -46.47306 }
};

function haversineNM(lat1, lon1, lat2, lon2) {
  const R = 3440.065;
  const toRad = d => d * Math.PI / 180;

  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) ** 2;

  return 2 * R * Math.asin(Math.sqrt(a));
}

async function checkVatsimStatus() {
  try {
    const res = await fetch(VATSIM_API, { cache: "no-store" });
    const data = await res.json();

    const isFlying = data.pilots?.some(p => p.cid === VATSIM_CID);

    const icon = document.querySelector(
      'a[href="https://vatsim-radar.com/?pilot=1480399"] i'
    );

    if (!icon) return;

    if (isFlying) {
      icon.classList.add("vatsim-live-icon");
    } else {
      icon.classList.remove("vatsim-live-icon");
      icon.style.color = "";
    }
  } catch (e) {
    console.error("VATSIM check failed", e);
  }
}

checkVatsimStatus();
setInterval(checkVatsimStatus, 60000);

const tooltip = document.getElementById("vatsim-tooltip");

async function updateTooltipData() {
  try {
    const res = await fetch(VATSIM_API, { cache: "no-store" });
    const data = await res.json();

    const pilot = data.pilots?.find(p => p.cid === VATSIM_CID);
    if (!pilot || !pilot.flight_plan) return null;

    const dep = pilot.flight_plan.departure || "-";
    const arr = (pilot.flight_plan.arrival || "").trim().toUpperCase();
    const alt = Math.round(pilot.altitude || 0);
    const gs = Math.round(pilot.groundspeed || 0);
    const cs = pilot.callsign || "-";
    const ac = pilot.flight_plan.aircraft_short || "-";
    const dest = DESTS[arr];

    let eta = "-";

    if (dest && gs > 30) {
      const dist = haversineNM(
        pilot.latitude,
        pilot.longitude,
        dest.lat,
        dest.lon
      );

      const min = Math.round(dist / gs * 60);
      const h = Math.floor(min / 60);
      const m = min % 60;
      eta = `${h}:${m.toString().padStart(2, "0")}`;
    }

    return `${cs} ${ac} ${dep} ${arr} ${alt} ${gs} ${eta}`;
  } catch (e) {
    console.error("VATSIM tooltip fetch error", e);
    return null;
  }
}

// show tooltip on hover
document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector('a[href="https://vatsim-radar.com/?pilot=1480399"] i');
  const tooltip = document.getElementById("vatsim-tooltip");

  if (!icon || !tooltip) return;

  icon.addEventListener("mouseenter", async () => {
    const text = await updateTooltipData();
    if (text) {
      tooltip.textContent = text;
      const rect = icon.getBoundingClientRect();
      tooltip.style.left = rect.left + rect.width / 2 + "px";
      tooltip.style.top = rect.top - 30 + "px";
      tooltip.style.opacity = 1;
    }
  });

  icon.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
  });
});

