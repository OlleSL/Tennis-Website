document.addEventListener('DOMContentLoaded', () => {
  // Optional demo button logic
  const clickBtn = document.getElementById("clickMe");
  if (clickBtn) {
    clickBtn.addEventListener("click", function () {
      document.getElementById("message").textContent = "You clicked the button!";
    });
  }

  // Newsletter Modal Logic
  const openBtn = document.getElementById('openNewsletter');
  const closeBtn = document.getElementById('closeNewsletter');
  const modal = document.getElementById('newsletterModal');

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // ✅ Burger Menu Logic (placed *outside* of modal logic)
  const burger = document.getElementById('burger');
  const burgerMenu = document.getElementById('burgerMenu');

  if (burger && burgerMenu) {
    burger.addEventListener('click', () => {
      burgerMenu.classList.toggle('show');
    });

    // Optional: click outside to close
    window.addEventListener('click', (e) => {
      if (!burger.contains(e.target) && !burgerMenu.contains(e.target)) {
        burgerMenu.classList.remove('show');
      }
    });
  }

});
