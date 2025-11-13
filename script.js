// script.js
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const progress = document.getElementById("progress");
  if (!progress) return;

  const onScroll = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progress.style.width = scrolled + "%";
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});
