/**
 * Javascript index.js
 * Database Utenti
 * data: 02.05.2024
 * by Gianluca Chiaravalloti
 */

// console.log("It's working...");


// Viene eseguita nel momento in cui si apre il document
document.addEventListener("DOMContentLoaded", () => {

  // Inizializzo le costanti
  // -----------------------

  // Url della mia API users 
  const url = "https://jsonplaceholder.typicode.com/users";
  // Inizializzo e assegno le variabili ai puntatori id del document html
  const listUsers = document.getElementById("listUsers");
  const inputSearch = document.getElementById("inputSearch");
  const searchValue = document.getElementById("searchValue");

  /**
   * Funzione async/away che richiama la fecth dell'api dell'elenco users
   * --------------------------------------------------------------------
   */
  async function fetchUsers() {
    try {
      let response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Errore nella richiesta!");
      } 
      let users = await response.json();
      // console.log(users);
      
      // Salviamo i dati in localStorage
      localStorage.setItem("users", JSON.stringify(users));

    } catch (error) { 
      console.error("Errore nel fetch");
    }  
  };

  /**
   * Funzione di caricamento di tutti i dati nel local storage
   * ---------------------------------------------------------
   */
  function loadUsersToLocalStorage() {
    let users = localStorage.getItem("users");
    if (users) {
      return JSON.parse(users);
    } else {
      console.log("Non è stato trovato nessun dati users nel local storage");
      return [];
    }
  };

  /**
    * Funzione async/away per la visualizzazione dei dati users se presenti
    * ---------------------------------------------------------------------
    */
  function viewTabelUsers(users) {
    listUsers.innerHTML = "";
    // console.log("Stampo su console la mia richiesta API:");
    // console.log("Lunghezza array users: ", users.length);
    
    // Creo un elemento div con i dati dell'users da inserire nel document html
    users.forEach(user => {
      // console.log(user["name"]);
      let content = document.createElement("tr");
      content.innerHTML = `
        <th scope="row" id="tableUsers"><a href="./detail.html?id=${user['id']}&username=${user['username']}">${user["id"]}</a></th>
        <td scope="col" id="name">${user["name"]}</td>
        <td scope="col" id="username">${user["username"]}</td>
        <td scope="col" id="email">${user["email"]}</td>
      `
      listUsers.appendChild(content);
    })

  };

  function searchUser(users) {
    inputSearch.addEventListener("input", () => {
      const searchText = inputSearch.value;
      const selectValue = searchValue.value;
      const filteredUsers = users.filter((user) => {
        const output = user[selectValue].toLowerCase().includes(searchText.toLowerCase());
        return output;
        //console.log(user['name'].includes(searchText))
      });
      viewTabelUsers(filteredUsers);
    })
  };
  
  // Chiamo le funzioniper caricare i dati API dal server
  fetchUsers();
  let users = loadUsersToLocalStorage();
  viewTabelUsers(users);
  searchUser(users);
});