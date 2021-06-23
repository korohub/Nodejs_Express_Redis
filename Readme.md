## API Nodejs Express Redis



Démo d'une api utilisant un serveur Redis avec un stockage temporaire des données.

utilisation de l'api Space X pour les données: https://api.spacexdata.com/v3/rockets

## Pour commencer

```sh
Git clone https://github.com/korohub/Nodejs_Express_Redis.git

```


### Pré-requis

- Nodejs
- Express
- Redis
- Axios

### Installation

Npm install

## Démarrage

```sh
node app.js
```

ou ( si nodemon installé)

```sh
npm start
```
## Test 

Sans Redis 
http://localhost:3000/rockets

Avec un serveur Redis
http://localhost:3000/rockets-redis


## Versions

**Dernière version stable :** 0.1
**Dernière version :** 0.1


## Auteurs

* _**Moi**_

## Todo

- Ajout dockerfile pour build une image
- Ajout Docker-compose pour insitialiser Redis + container API 