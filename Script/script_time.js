const date = new Date("2024-02-24 20:00:00");

  function cout() {
    const now = new Date();

    const diference = date - now;

    const day = Math.floor(
        -1 * (diference / (1000 * 60 * 60 * 24)));

    const hour = Math.floor(
      (-1 * (diference / (1000 * 60 * 60)) % 24)
    );

    const minutes = Math.floor(
      (-1 * (diference / (1000 * 60)) % 60)
    );

    const sec = Math.floor(
      (-1 * (diference / 1000) % 60)
    );

    document.querySelector("span.time_script").innerText =
      `${day}d ${hour}h ${minutes}m ${sec}s`;
  }

  setInterval(cout, 1000);

  cout();