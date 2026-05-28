# Principali comandi Angular

## 1. Creazione di un nuovo progetto
```sh
ng new NomeProgetto
```

## 2. Creazione di un nuovo componente
```sh
ng g c nomecomponente
```
**NB:** di default il componenti vengono inseriti nella cartella `app`. Inserire quindi anche l'eventuale sottocartella. Per esempio: `ng g c components/Home`

## 3. Creazione di un nuovo servizio
```sh
ng g s nomeservizio
```
**NB:** di default i servizi vengono inseriti nella cartella `app`. Inserire quindi anche l'eventuale sottocartella. Per esempio: `ng g s services/ProductService`

## 4. Eliminazione del file di test
E' possibile evitare la generazione del file di test con l'opzione `--skip-tests=true`
```sh
ng g c nomecomponente --skip-tests=true
ng g s nomeservizio --skip-tests=true
```