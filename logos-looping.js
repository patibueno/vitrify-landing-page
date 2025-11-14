document.addEventListener("DOMContentLoaded", function () {
  const logoFiles = [
    "arton.svg",
    "bside.svg",
    "btg.svg",
    "canal.svg",
    "eqi.svg",
    "fami.svg",
    "ghia.svg",
    "suno.svg",
    "svn.svg",
    "ten.svg",
    "xpto.svg",
  ];

  const logosTrack = document.getElementById("logosTrack");

  function createLogos() {
    for (let i = 0; i < 2; i++) {
      logoFiles.forEach((logoFile) => {
        const logoItem = document.createElement("div");
        logoItem.className = "logo-item";

        const img = document.createElement("img");
        img.className = "logo-svg";
        img.src = `img/clients/${logoFile}`;
        img.alt = logoFile.replace(".svg", "").toUpperCase() + " Logo";

        logoItem.appendChild(img);
        logosTrack.appendChild(logoItem);
      });
    }
  }

  createLogos();

  const track = document.querySelector(".logosTrack");
  let animationFrame;

  function checkPosition() {
    const trackRect = track.getBoundingClientRect();
    const containerRect = document
      .querySelector(".logos-container")
      .getBoundingClientRect();

    if (trackRect.right < containerRect.left) {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";

      track.offsetHeight;

      track.style.transition = "";
    }

    animationFrame = requestAnimationFrame(checkPosition);
  }

  animationFrame = requestAnimationFrame(checkPosition);
});
