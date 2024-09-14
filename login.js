// Credenciales del administrador
const adminUsername = "admin";
const adminPassword = "1234";

// Estado de login
let isAdmin = false;

// Elementos del DOM
const loginModal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const loginForm = document.getElementById("login-form");
const commentsContainer = document.getElementById("comments-container");

// Abrir el modal de login
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

// Cerrar el modal de login
document.querySelector(".close").addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Login del administrador
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === adminUsername && password === adminPassword) {
    isAdmin = true;
    alert("Has iniciado sesión como administrador.");
    loginModal.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    alert("Credenciales incorrectas.");
  }
});

// Logout del administrador
logoutBtn.addEventListener("click", () => {
  isAdmin = false;
  alert("Has cerrado sesión.");
  loginBtn.style.display = "inline-block";
  logoutBtn.style.display = "none";
});

// Agregar comentarios
document.getElementById("comment-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const commentText = document.getElementById("comment-text").value;
  const rating = document.getElementById("rating").value;

  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  commentElement.innerHTML = `
        <p>${commentText}</p>
        <p>Valoración: ${rating} estrellas</p>
        ${isAdmin ? '<button class="delete-btn">Borrar</button>' : ""}
        ${isAdmin ? '<button class="reply-btn">Responder</button>' : ""}
    `;

  // Añadir eventos a los botones solo si es administrador
  if (isAdmin) {
    commentElement.querySelector(".delete-btn").addEventListener("click", () => {
      commentsContainer.removeChild(commentElement);
    });

    commentElement.querySelector(".reply-btn").addEventListener("click", () => {
      const replyText = prompt("Escribe tu respuesta:");
      if (replyText) {
        const replyElement = document.createElement("div");
        replyElement.classList.add("reply");
        replyElement.innerHTML = `<p>Respuesta del administrador: ${replyText}</p>`;
        commentElement.appendChild(replyElement);
      }
    });
  }

  commentsContainer.appendChild(commentElement);
  document.getElementById("comment-form").reset();
});
