# frontend

## React Curriculum vitae

Crear tu curriculum vitae en React, analiza la estructura propuesta e inspirate para mostrar tu información.

![react-cv](https://res.cloudinary.com/dvbadp1mn/image/upload/v1677915206/Profile/cv_xsde4n.png)

### Retos
1. [Crear los componentes del proyecto](https://github.com/platzimaster/frontend/issues/1)

    Se crearon todos los componentes en React de acuerdo a los parametros especificados por las instrucciones del reto. Se resolvieron los errores que se encontraron en el BoilerPlate entregado.

2. [Añadir estilos](https://github.com/platzimaster/frontend/issues/2)

    Se usó stylus como preprocesador de Css, A cada componente se le creo un Archivo .styl .
    Nunca habia usado Stylus, pero es muy parecido al css puro.

3. [Crear función getData.js](https://github.com/platzimaster/frontend/issues/3)
    
    Se creo la funcion getData para realizar una peticion get a la API. se utilizo el comando fetch en conjunto con Async Await, dado q es una funcion asincrona, para la solicitud de datos.

    ```
    async function getData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
            } catch (error) {
                console.error(error);
                return null;
                }
    };

    export default getData;`
    ```


4. [Integrar API](https://github.com/platzimaster/frontend/issues/4)
    
    A Medida q se fueron creando los componentes, y ya con la funcion getData terminada, se hicieron pruebas de recepcion de datos desde el Json Server incorporado al proyecto, los resultados fueron satisfactorios.
    En el componente principal App.jsx se creo la hace la llamada a la Api dentro de un UseEffect con el vector de dependencias vacio para q solo haga 1 llamado cuando se carga el componente, una vez se tienen los datos del cv, se envian como props a todos los demas componentes, su parte correspondiente.


5. [Personalizar API](https://github.com/platzimaster/frontend/issues/5)

    Se creo un servidor independiente con express, el cual tiene la informacion de mi cv, y responde a solicitudes get. Este servidor fue desplegado en la plataforma vercel bajo la siguiente direccion:
    https://server-platzi-k9pm15wff-cesargaleano.vercel.app/data

    A continuacion se muestra el codigo del servidor basico:

    ```
    
    const express = require('express');
    const server = express();
    const CORS = require('cors');

    const cv = require('./data');

    const PORT = process.env.PORT || 9000;

    server.use(CORS({
        origin: '*',
        credentials: true,
    }));


    server.use(express.json());
    console.log(cv);
    server.get('/data', (req,res)=>{
        res.send(cv);
        });

    server.listen(PORT, ()=>console.log('Server Running on Port ', PORT));


    ```

    A continuacion se muestra la foto de la respuesta del servidor cuando se le realiza una peticion get:
    
     
     ![servidor-vercel](https://res.cloudinary.com/dvbadp1mn/image/upload/v1677916926/Profile/servidor_figqfo.png)

6. [Documentar](https://github.com/platzimaster/frontend/issues/6)

    Se realizo la documentacion respectiva de como se realizo el proyecto.

### Instalación
```
npm install
```

### Ejecución
```
npm run start
```

### Server
```
npm run server
```

### Compilar
```
npm run build
```

### Pruebas Unitarias
```
npm run test
```

### ESlint
```
npm run lint
```

### Enviar solución de reto
Debes de crear un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia tu repositorio.

### Contribuir
Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [frontend](https://github.com/platzimaster/frontend/)

### Licencia
frontend se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
