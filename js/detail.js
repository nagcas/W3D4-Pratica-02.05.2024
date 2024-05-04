/**
 * Javascript detail.js
 * Database Utenti
 * data: 02.05.2024
 * by Gianluca Chiaravalloti
 */

// console.log("It's working...")


// Viene eseguita nel momento in cui si apre il document
document.addEventListener("DOMContentLoaded", function () {

  // Inizializzo le costanti
  // -----------------------

  // Url della mia API users 
  const url = "https://jsonplaceholder.typicode.com/users/"
  // Recupero la stringa (ID) relativa al post che mi ha portato qua
  const params = new URLSearchParams(window.location.search);
  // Estraggo il valore del parametro "id" e del parametro "username" 
  const id = params.get("id");
  const username = params.get("username");

  // Inizializzo e assegno le variabili ai puntatori del document html
  const h1 = document.getElementsByTagName("h1");
  const userView = document.getElementById("user");

  // Visualizzo nel title del document html il titolo del libro
  document.title = `User - ${username}`;
  
  /**
   * Funzione async/away che richiama la fecth dell'api con id specifico
   * -------------------------------------------------------------------
   */
  async function fetchUser() {
    try {
      let response = await fetch(url+`${id}`);
      
      if (!response.ok) {
        throw new Error("Errore nella richiesta!");
      } 
      let user = await response.json();
      console.log(user);
            
      // Salviamo i dati in localStorage
      localStorage.setItem("user", JSON.stringify(user));

    } catch (error) { 
      console.error("Errore nel fetch");
    }  
  };

  /**
   * Funzione di caricamento dei dati del singolo utente nel local storage
   * ---------------------------------------------------------------------
   */
  function loadUserToLocalStorage() {
    // Assegno alla variavbile user il get alla memoria di local storage
    let user = localStorage.getItem("user");
    // Se il contenuto user esiste nel local storage
    if (user) {
      // Restituisco la stringa user sotto forma di json
      return JSON.parse(user);
    } else {
      // Altrimenti restituisco un oggetto vuoto e stampo il messaggio di avviso
      console.log("Non è stato trovato nessun dato user nel local storage");
      return [];
    }
  };

  /**
   * Funzione async/away per la visualizzazione dei dati user se presenti
   * --------------------------------------------------------------------
   */
  async function viewTabelUser() {
    // Inizializzo la costante user per richiamare la funzione di caricamento dei dati nel local storage
    let user = loadUserToLocalStorage();

    // verifico se la lunghezza della mi stringa è uguale a 0
    if (user.length === 0) {
      await fetchUser();
      user = caricaUserDaLocalStorage();
    }

    // console.log("Stampo su console la mia richiesta API:");

    // Visualizzo il titolo dell'username in h1
    document.querySelector("h1").innerText = `Username - ${username}`;
    
    // Creo un elemento div con i dati dell'user da inserire nel document html
    let content = document.createElement("div");
    content.innerHTML = `
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">Detail</li>
        <li class="list-group-item"><span>Name: </span>${user["name"]}</li>
        <li class="list-group-item"><span>Email: </span>${user["email"]}</li>
        <li class="list-group-item"><span>Phone: </span>${user["phone"]}</li>
        <li class="list-group-item active" aria-current="true">Address</li>
        <li class="list-group-item"><span>City: </span>${user.address["city"]}</li>
        <li class="list-group-item"><span>Street: </span>${user.address["street"]}</li>
        <li class="list-group-item"><span>ZipCode: </span>${user.address["zipcode"]}</li>
      </ul>
    `
    userView.appendChild(content);
  };

  // Chiamo le funzioni per recuperare i dati user dall'API
  fetchUser();
  viewTabelUser();
});