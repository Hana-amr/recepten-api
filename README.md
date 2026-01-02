# Recepten API

Dit project is een database-driven API gebouwd met **Node.js**, **Express** en **MongoDB**.
De API laat toe om recepten en ingrediënten te beheren via CRUD-operaties.

## Gebruikte technologieën

- Node.js (v20+)
- Express
- MongoDB Atlas
- Mongoose
- Git & GitHub

## Installatiehandleiding 

1. Repository clonen
- git clone https://github.com/Hana-amr/recepten-api.git
- cd recepten-api

2. Dependencies installeren 
- npm install

3. Environment variables instellen
- Maak een .env bestand aan in de root van het project met volgende inhoud:
PORT=3000
MONGODB_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING

4. Server starten
- npm run dev
  De server draait standaard op: http://localhost:3000

## API Endpoints 
### Root
- GET /
Toont een HTML-pagina met een overzicht van alle beschikbare endpoint

### Ingrediënten
- GET /api/ingredients
- GET /api/ingredients?limit=5&offset=0
- GET /api/ingredients?search=tom
- GET /api/ingredients/:id
- POST /api/ingredients
- PUT /api/ingredients/:id
- DELETE /api/ingredients/:id

### Recepten
- GET /api/recipes
- GET /api/recipes/:id
- POST /api/recipes
- PUT /api/recipes/:id
- DELETE /api/recipes/:id

Recepten kunnen meerdere ingrediënten bevatten via MongoDB ObjectId-relaties.

## Extra features

- Relatie tussen recepten en ingrediënten (populate)
- Zoeken op ingredientnaam 
- Limit & offset voor paginatie 
- Automatische timestamps (createdAt, updatedAt)
- Frontend toegevoegd 


## Bronnen 

- Express documentation: https://expressjs.com/
- MongoDB Atlas documentation: https://www.mongodb.com/docs/?msockid=3dde8227eadc695809da9759eb896835
- Mongoose documentation: https://mongoosejs.com/docs/