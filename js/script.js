
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.textContent = open ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      });
    });
  }

  const topButton = document.querySelector(".back-to-top");
  const toggleTopButton = () => {
    if (!topButton) return;
    topButton.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", toggleTopButton, { passive: true });
  toggleTopButton();

  if (topButton) {
    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const form = document.querySelector(".contact-form form");
  const message = document.querySelector(".form-message");
  if (form && message) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      message.style.display = "block";
      message.textContent = "感谢您的留言！我们会尽快与您联系。";
      form.reset();
    });
  }

  // Subtle reveal animation for cards.
  const items = document.querySelectorAll(".service-card,.product-card,.country,.stat");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    items.forEach(item => {
      item.style.opacity = "0";
      item.style.transform = "translateY(14px)";
      item.style.transition = "opacity .55s ease, transform .55s ease";
      observer.observe(item);
    });
  }
});
