# nodejs-angular7-product
COMPLETE WEBAPP INCLUDING FRONTEND (nodeJS) AND BACKEND (angular7 and SQLite)  
NodeJs API REST connected with sqlite. Using express, consign, sequelize and babel.  
Angular 7 backend using bootstrap 4.  

## Modules used:
babel for code transcription DEPRECATED  
consign for app initialization (index.js),   
sequelize for db connection and requests to DB (db.js, routes,models,libs/config.js)  
express for server building  

## Commands
### FRONTEND:  
"babel-node": "babel-node src/index.js",  
"dev": "nodemon --exec npm run babel-node src/index.js",  
"build": "./node_modules/.bin/babel  src --out-dir dist",  
"start": "node dist/index.js"  

Dev environment running CLI command:  
npm run dev  

Running locally on ```http://localhost:3000```  

### BACKEND:
ng serve   
Running locally on ```http://localhost:4200```  


## POSTMAN: 
### Get Users
GET --> http://localhost:3000/users

### Get User by ID
GET --> http://localhost:3000/users/id

### Crear User
 POST --> http://localhost:3000/users  
body-->raw :  

```
{
"name":"Pablo",
"password":"pwd",
"email":"p.moraga.navas@gmail.com"
}
```
### Delete User
DELETE --> http://localhost:3000/users/id  

### Update user
PUT-->http://localhost:3000/users/id  
body-->raw :  
```
{
"name":"Pablo Moraga",
"password":"pwd123",
"email":"pmoraga@gmail.com"
}
```
