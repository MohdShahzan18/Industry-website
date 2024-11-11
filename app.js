const texts = ["or Caps & Closures", "Electroplating Rectifier"];
  let index = 0;

  setInterval(() => {
      index = (index + 1) % texts.length;
      document.getElementById('text').textContent = texts[index];
  }, 1500); 