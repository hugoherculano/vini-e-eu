const listaUser = document.querySelector(".lista");
const modal = document.querySelector(".modal-child");

fetch('http://localhost:8000/users')
    .then(response => {
      return response.json()
    })
    .then(data => {

      const { users } = data;

      users.map((item) => {

        const li = document.createElement("li");
        li.setAttribute("class", "card");

        const h2 = document.createElement("h2");
        h2.innerText = `${item.nome}`;
        const span = document.createElement("span");
        span.innerText = `${item.conta}`;

        li.appendChild(h2);
        li.appendChild(span);
        
        li.addEventListener("click", (e) => {
          modal.innerHTML = "";
          const h2M = document.createElement("h2");
          h2M.innerText = `${item.nome}`;
          const spanM = document.createElement("span");
          spanM.innerText = `${item.conta}`;

          modal.appendChild(h2M);
          modal.appendChild(spanM);
        })

        listaUser.appendChild(li);

      });
    });