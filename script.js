document.getElementById("comment-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener el comentario y la valoración
  const commentText = document.getElementById("comment-text").value;
  const rating = document.getElementById("rating").value;

  // Crear un nuevo elemento para el comentario
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  // Añadir el comentario y la valoración al nuevo elemento
  commentElement.innerHTML = `
      <p>${commentText}</p>
      <p>Valoración: ${rating} estrellas</p>
  `;

  // Añadir el nuevo comentario al contenedor
  document.getElementById("comments-container").appendChild(commentElement);

  // Limpiar el formulario
  document.getElementById("comment-form").reset();
});
