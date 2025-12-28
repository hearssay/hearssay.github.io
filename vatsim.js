fetch("https://sparkling-mountain-a82b.san-e33.workers.dev/")
  .then(r => {
    if (!r.ok) throw new Error("fetch failed");
    return r.json();
  })
  .then(d => {
    document.getElementById("vatsim-hours").textContent =
      Number(d.pilot).toFixed(2);
  })
  .catch(() => {
    document.getElementById("vatsim-hours").textContent = "n/a";
  });
