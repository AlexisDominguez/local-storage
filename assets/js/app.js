const listaTweets = document.getElementById("lista-tweets");

//Función para agregar tweets
document.getElementById("formulario").addEventListener("submit", function(e){
   e.preventDefault;

   //Capturar mensaje
   const tweet = document.getElementById("tweet").value;
   const lista = document.createElement("li");
   lista.innerText = tweet;

   //Añadir botón "borrar"
   const botonBorrar = document.createElement("a");
   botonBorrar.innerText = "X";
   botonBorrar.classList = "borrar-tweet";

   //Añadir elementos al DOM
   lista.appendChild(botonBorrar);
   listaTweets.appendChild(lista);
});

//Función para elimitar tweets
document.getElementById("lista-tweets").addEventListener("click", function(e){
   e.preventDefault();

   if(e.target.className === "borrar-tweet"){
      e.target.parentElement.remove();
   }

});