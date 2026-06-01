# Project Work 2026 - Sistema di prenotazione per coworking

## Obiettivo del progetto

Realizzare un ecosistema di applicazioni web per la gestione di un coworking moderno, permettendo:

* la prenotazione di postazioni di lavoro;
* la gestione amministrativa delle prenotazioni;
* la visualizzazione dello stato degli spazi tramite dispositivi digital signage.

Il sistema dovrà essere composto da tre applicazioni distinte ma integrate.



## Scenario

Un coworking vuole digitalizzare la gestione dei propri spazi, costituiti da:

* Scrivanie in open space (prenotabili a slot di mezza giornata)
* Uffici privati (prenotabili a slot di mezza giornata)
* Sale riunione (prenotabili a slot di un ora)

Gli utenti devono poter prenotare gli spazi tramite una piattaforma web moderna e responsive.

Il personale interno deve poter gestire utenti e prenotazioni tramite un pannello amministrativo.

Infine, piccoli display touch installati vicino agli spazi devono mostrare lo stato delle prenotazioni in tempo reale.

## Applicazioni richieste
Si vogliono realizzare tre differenti applicazioni:
- Una applicazione di prenotazione utilizzata dai clienti del coworking
- Una applicazione di backend utilizzata dal personale del coworking
- Una applicazione "digital signage" da installare su piccoli schermi touch posizionati sulle scrivanie o fuori dagli uffici/sale riunione

## Applicazione Prenotazioni Clienti

### Requisiti funzionali

* Login / Logout
* Visualizzazione mappa coworking
* Visualizzazione disponibilità spazi
* Selezione slot e aggiunta al carrello (con possibilità di rimozione)
* Checkout (l'importo viene scalato dal credito dell'utente)
* Ricarica del credito (con pagamento simulato)
* Visualizzazione prenotazioni effettuate
* Possibilità di cancellare una prenotazione effettuata (se non è trascorsa)
* Prevedere un url che visualizza la disponibilità di uno spazio nella data odierna (verrà utilizzato dall'applicazione di digital signage)

### Requisiti non funzionali

* Responsive
* Ottimizzata per mobile 
* Interfaccia moderna
* Esperienza utente semplice e intuitiva


## Applicazione Backend Amministrativo

### Requisiti funzionali

* Login / Logout
* Gestione utenti (visualizzazione, creazione, modifica, cancellazione, reset password)
* Visualizzazione prenotazioni con possibilità di filtro per giorni
* Inserimento nuove prenotazioni (senza mappa, scalando dal credito del cliente)
* Eliminazione prenotazioni (senza mappa, ricaricando il credito del cliente).
* Modifica prenotazioni, tramite cancellazione e inserimento di nuova prenotazione

### Requisiti non funzionali

* Ottimizzata per desktop
* Tabelle e dashboard esteticamente gradevoli
* Gestione rapida delle informazioni

## Applicazione Digital Signage

### Requisiti funzionali

* Visualizzazione stato libero / occupato
* Visualizzazione prossimi slot prenotati
* QR Code per prenotazione rapida (il qr code deve contenere il link alla pagina di disponibilità del singolo spazio, messa a disposizione dall'app cliente)
* Associazione con backend

### Requisiti non funzionali

* Autenticazione tramite API Key
* Interfaccia fullscreen
* Layout fisso
* Aggiornamento automatico
* Elevata leggibilità

## Ulteriori specifiche (Valide per tutte le applicazioni)
* Realizzare una applicazione Angular con struttura corretta: Model, Services, Components, Template, Observable, Pipes...
* Per la sola applicazione di digital signage, realizzare anche le API di backend (verranno forniti i dati di accesso al database). E' possibile utilizzare qualsiasi linguaggio per la realizzazione delle API
* Pulizia del codice: No duplicazione del codice, no valori fissi
* Collaborazione tramite github

## Presentazione del progetto
* Venerdì 12.06.2026 dalle ore 15:00
* 30 minuti per ogni gruppo (da usare interamente)
* Presentare l'applicazione funzionante
* Spiegare il processo che avete seguito (non solo la scrittura del codice)
* Spiegare come vi siete divisi il lavoro e come avete collaborato
* Tutti i componenti del gruppo devono partecipare all'esposizione
* (opzionale ma consigliato) Slide di presentazione
