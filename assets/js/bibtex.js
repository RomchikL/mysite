document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btn-bibtex").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const bib = btn.getAttribute("data-bib");

      const modal = document.createElement("div");
      modal.classList.add("bibtex-modal");

      modal.innerHTML = `
        <div class="bibtex-content">
          <pre>${bib}</pre>
          <button class="copy-btn">Copy</button>
        </div>
      `;

      document.body.appendChild(modal);

      // Закрытие кликом вне блока
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.remove();
        }
      });

      // Кнопка Copy
      const copyBtn = modal.querySelector(".copy-btn");
      copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(bib).then(() => {
          copyBtn.textContent = "Copied!";
          setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
        });
      });
    });
  });
});
