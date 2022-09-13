
<h1 align="center"> Project NLW Esports - React JS | React Native | Node JS </h1>



# Índice
- [About the project](#about-the-project)
- [Step by step to config NodeJs](#nodejs-environment-configuration)
- [Step by step to config ReactJs](#reactjs-environment-configuration)
- [Step by step to config React Native](#react-native-environment-configuration)
- [About the developer](#about-the-developer-🚀)

---

# About the project
This is a project developed at the Rocketseat NLW event (NLW Esports), where the following knowledge was acquired in this event:

BACKEND
- Node JS
- Express
- Vite js

FRONTEND
- React Native
- TypesScript
- Tailwind CSS

MOBILE
- React Native
- Expo
- Among many other knowledge...

![Logo](readme2.png)

---

## NodeJS environment configuration

Create a folder for your project named nlw/server.

- npm init -y
- npm install express -D
- npm install @types/express -D
- criar a pasta src/server.ts e adicionar o seguinte código

- On the server.ts it looks like this:
```js
import express,{Request, Response} from 'express'

const app = express()

app.get('/ads', (request:Request, response:Response)=>{
    return response.json([
        {id:1, name: 'anuncio1'},
        {id:2, name: 'anuncio2'},
        {id:3, name: 'anuncio3'},
    ])
})

app.listen(3333)
```

-on the package.json it looks like this:
```js
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.js",
  "scripts": {
    "build": "tsc",
    "dev":"ts-node-dev src/server.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/express": "^4.17.13",
    "express": "^4.18.1"
  },
  "devDependencies": {
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.8.3"
  }
}


```
- in tsconfig.json change to the following:
"module": "CommonJS",       
"rootDir": "./src",
"outDir": "./build",
"moduleResolution": "node",     

- npm i ts-node-dev -D

- in console: npx tsc --init
- in navegador: http://localhost:3333/ads
- in console: npm run build (este arquivo gera o arquivo server.JS, na pasta build)

-----
### ReactJS environment configuration
Exit the server folder and in the project root give the following command:

```js
npm create vite@latest
```
- Name project: web
- Template: React
- Variant: Typescript

Enter the web folder and open vscode with "code ." (without the quotes, of course)

```js
npm install
```

### React Native environment configuration

```js
npm install --global expo-cli
```

```js
expo init mobile
```
- blank(typescript)

After creating the project, access the mobile folder and open it in VSCODE
Open the emulator before opening the project and:
- expo start

----


## About the developer 🚀 
<img src="https://avatars.githubusercontent.com/u/85834483?v=4" width="100">

I'm a Javascript Developer, know me in:


- www.amadeu.vercel.app

- www.github.com/Amad3eu

- www.linkedin.com/in/

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://amadeu.vercel.app)




---
<p style="text-align: center">Developer with ❤️ by Luiz Amadeu</p>

