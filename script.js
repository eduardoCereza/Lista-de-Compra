const input = document.getElementById("newItem")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("list")
const item = document.querySelector(".item")

addBtn.addEventListener("click", (event) => {

    event.preventDefault();
    list.innerHTML = `        
    <div class="item">
          <label class="check" title="Concluir">
            <input type="checkbox" />
          </label>
          <div class="label" id="name">${input.value}</div>
          <button class="trash" title="Remover">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 3h6l1 2h4v2H4V5h4l1-2Z" fill="currentColor" opacity=".6" />
              <path d="M7 9h10l-1 12H8L7 9Z" stroke="currentColor" stroke-width="1.6" opacity=".8" />
              <path d="M10 12v6M14 12v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".9" />
            </svg>
          </button>
        </div>
`


})
