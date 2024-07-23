## Descargar Repositorio

Este proyecto se realizo con AngularyNode JS, para poder correrlode manera local puede clonarlo con el comando `git clone https://github.com/araquebarrerag/autorizacion.git`.

## Instalar dependencias

Para instalar las dependencias de Angular corremos el comando `npm install` desde la carpeta raiz del repositorio, despues nos dirigimos a la carpeta `back` y ejecutamos el mismo comando 
`npm install` esto es para instalar las dependencias de NodeJs

## Iniciar el servicio de back con NodeJS

Nos dirigimos el directorio `back` y ejecutamos el comando `node index.js`, este comando corre el archivo index.js el cual es el archivo principal del servicio de back. Cuando ejecutemos
el comando nos mostrara el mensaje `BackEnd corriendo en el puerto:  8080` que nos indica que el servicio se esta ejecutando en la url: `http://localhost:8080` para poder acceder a el
desde Angular

## Iniciar el servicio de front con Angular

Cuando este corriendo el servicio de back podemos volver al directorio raiz del proyecto, aqui ejecutamos el comando `ng build` para ver si corre bien el servicio, y despues
ejecutamos `ng serve` para iniciar el servicio. Cuando ejecutamos estos comandos nos mostrara este mensaje `** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **` el cual nos muestra como podemos acceder al servicio desde el navegador

## Ver el proyecto

Cuando ya este corriendo el servicio de front y back podemos acceder desde el navegador a esta direccion: `http://localhost:4200/` y podremos empezar a navegar en el aplicativo.
