// Función para abrir el modal con una imagen específica
function openModal(imagePath) {
    console.log("Abrir modal con:", imagePath); // Esto te ayudará a verificar si la función se activa correctamente
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";  
    modalImg.src = imagePath;        
  }
  
  
  // Función para cerrar el modal
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";    // Ocultar el modal
  }
  
  // Cerrar el modal si el usuario hace clic fuera de la imagen
  window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  