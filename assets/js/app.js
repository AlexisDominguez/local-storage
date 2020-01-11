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

   //Añadir tweet a Local Storage
   agregarTweetLocalStorage(tweet);
});

//Función para elimitar tweets
document.getElementById("lista-tweets").addEventListener("click", function(e){
   e.preventDefault();
   if(e.target.className === "borrar-tweet"){
      e.target.parentElement.remove();
      borrarTweetsLocalStorage(e.target.parentElement.innerText.toString());
   }
});

//Función para agregar tweets a Local Storage
function agregarTweetLocalStorage(tweet){
   let tweets;
    //Activar función para obtener tweets y guardar nuevos
   tweets = obtenerTweetsLocalStorage()
   tweets.push(tweet);
   //Convertir arreglo a string para que JSON lo pueda leer
   localStorage.setItem("tweets", JSON.stringify(tweets));
}

//Función para leer/obtener los tweets
function obtenerTweetsLocalStorage(){
   let tweets;
   if(localStorage.getItem("tweets") === null){
      tweets = [];
   }else{
      //Conversión del arreglo a JSON
      tweets = JSON.parse(localStorage.getItem("tweets"));
   }
   return tweets;
}

//Función para cargar los tweets del local storage
document.addEventListener("DOMContentLoaded", function(event) {
   let tweets;
   tweets = obtenerTweetsLocalStorage();
   tweets.forEach(function(tweet){
      const lista = document.createElement("li");
      lista.innerText = tweet;

      //Añadir botón "borrar"
      const botonBorrar = document.createElement("a");
      botonBorrar.innerText = "X";
      botonBorrar.classList = "borrar-tweet";

      //Añadir elementos al DOM
      lista.appendChild(botonBorrar);
      listaTweets.appendChild(lista);
   })
});

//Función para eliminar los tweets del local storage
function borrarTweetsLocalStorage(tweet){
   let tweets, tweetBorrar;
   tweetBorrar = tweet.substring(0, tweet.length - 1);//Elimina la "X" de la cadena de caracteres
   tweets = obtenerTweetsLocalStorage();
   tweets.forEach(function(tweet, index){             //Compara el tweet a borrar con el tweet actual
      if(tweetBorrar === tweet){
         tweets.splice(index, 1);                     //Elimina el tweet           

      }
   });
   localStorage.setItem("tweets", JSON.stringify(tweets));
}