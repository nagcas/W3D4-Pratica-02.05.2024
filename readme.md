# Database di utenti
### Data 02.05.2024

**ESERCIZI**

* Usa Bootstrap per creare un layout VELOCE, concentrati sulla parte JS.

* Stai creando il frontend di un'applicazione che mostra gli utenti provenienti da un API e li filtra. Questi sono i tuoi compiti:

* Mostra tutti gli utenti in una tabella bootstrap partendo da questo API. Ricorda di usare ASYNC/AWAIT!

<https://jsonplaceholder.typicode.com/users>

* Crea un dropdown con tre opzioni: **"nome"**, **"username"** e **"email"**.
* Il dropdown sarà la prima parte del tuo filtro.

* Crea un input di testo. Quando l'utente scrive qualcosa in questo input, la risposta dell'API dovrebbe venir filtrata e renderizzata usando sia il valore dell'input che l'opzione selezionata nel dropdown.

* Ad esempio, se l'utente ha selezionato "email" sul dropdown, quando scrive nell'input, i risultati dovrebbero venir filtrati in base alla email e al conntenuto dell'input.

* Se invece, avesse selezionato "username", i risultati vanno filtrati in base all'ausername e al contenuto dell'input.

* Per fare questo, ricordati di questa sintassi alternativa per gli oggetti:
  Sintassi tradizionale: _oggetto.proprietà_
  Sintassi alternativa: _oggetto["proprietà"]_
  Questo significa che nelle parentesi quadre potete inserire una variabile o qualsiasi altro valore JS.
  
```
  const propDaControllare = "username"
  oggetto[propDaControllare]

```  
