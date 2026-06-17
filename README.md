# PCTO ITTS PASCAL 2026 - Materiale di supporto

## Avvio del project work tramite Docker Compose
Per eseguire in locale l'intero project work è necessario avere installato docker e docker compose (https://docs.docker.com/engine/install/).
Dopo aver installato docker eseguire i seguenti comandi:
```sh
git clone https://github.com/dluppoli/PCTO_Pascal_2026
cd PCTO_Pascal_2026/ProjectWork/DeployDockerCompose
docker compose up -d
```

Una volta avviato il progetto le applicazioni sono raggiungibili ai seguenti url:
- Frontend Cliente (Gruppo 1): http://localhost:4000
- Frontend Amministrazione (Gruppo 2): http://localhost:4010
- Frontend Digital Signage (Gruppo 3): http://localhost:4020
- API Digital Signage (Gruppo 3): http://localhost:4080
- API Generale (Docente): http://localhost:8080

Per terminare l'esecuzione delle applicazioni utilizzare il comando `docker compose down`
