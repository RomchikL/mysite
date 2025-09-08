document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".btn-bibtex").forEach(function(e){e.addEventListener("click",function(){const s=e.getAttribute("data-bib"),t=document.createElement("div");t.classList.add("bibtex-modal"),t.innerHTML=`
        <div class="bibtex-content">
          <pre>${s}</pre>
          <button class="copy-btn">Copy</button>
        </div>
      `,document.body.appendChild(t),t.addEventListener("click",function(e){e.target===t&&t.remove()});const n=t.querySelector(".copy-btn");n.addEventListener("click",function(){navigator.clipboard.writeText(s).then(()=>{n.textContent="Copied!",setTimeout(()=>n.textContent="Copy",1500)})})})})})