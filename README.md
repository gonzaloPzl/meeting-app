# Next js wiki

### Introducción
El frontend de la aplicación va a estar hecho con el framework Next de React js lo que nos va a permitir tener un setup y despliegue mucho mas ágil, confiable y solido, esto lo logra ofreciendonos herramientas que funcionan under the hood, como lo pueden ser el server side rendering o el code spliting automatico. En esta guía vamos a tocar puntos claves del framework a tener en cuenta sin ahondar demasiado en puntos específicos.

------------
### Setup enviorment
Para poder desplegar un proyecto con Next js tenemos que tener instalados react y react dom. Una vez instalados podemos instalar Next js con el siguiente comando de npm

```python
npm next
# En el caso de usar yarn
yarn add next 
```

### Rutas en Next js
Next js funciona con un enrutado basado en el **file system** es decir que las rutas que tenga nuestra aplicación se van a guiar por las carpetas creadas dentro de nuestra carpeta **pages.** Esto nos facilita de una forma muy visual el entendimiento de las rutas dentro de nuestra aplicación.

Entonces en el caso de que queramos crear una ruta hacia el login lo que tenemos que hacer es poner el anchor hacia **/login**

```javascript
<a href="/login"> ir al login </a>
```

Y las carpetas dentro de pages deberían quedar así:

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a14925bf-d102-416b-a5b8-37491ba7f144/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210928T171647Z&X-Amz-Expires=86400&X-Amz-Signature=16ee2ff9ccb6d008a4c409c49c4b97bca6cff93f23c751721a6c648ab36a8c38&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

#### Rutas dinámicas en Next Js
Ahora ya sabemos como crear rutas estáticas en el sentido de que el contenido de la misma no se modifica por ninguna variable de la url. En el caso de que queramos consultar la página de un recurso especifico por un id lo que tenemos que hacer es crear una carpeta que lo almacene y dentro un archivo js con el nombre de la variable del query entre corchetes. Por ejemplo [id].js
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2e7a1b29-f042-4472-b80d-86e00bec7cec/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210928T172223Z&X-Amz-Expires=86400&X-Amz-Signature=ee42b4d212fed03cbdfa5a89c23662cc5a8b928601b673063e06980976e2f0fa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

Por lo que nuestra URL quedaría conformada de la siguiente forma: http://localhost:3000/users/[user_id]

#### Capturar el query:
Para capturar ese dato del query tenemos que recurrir al router de Next.js. El mismo es el que nos proporciona un objecto con la información de la ruta en la que nos encontramos actualmente. Si tenemos una url conformada de la siguiente forma: http://localhost:3000/users/31 el router nos arrojara los siguientes datos.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/89880bfa-3834-4bf1-a232-874bbcfe1c85/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210928T172400Z&X-Amz-Expires=86400&X-Amz-Signature=77ea9eb70d41dffd184f75124f0ada6fbf0b5642367b7c052f243972313ea833&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

Como podemos ver no solo encontraremos dentro del router información de la ruta sino que también hay funciones que podemos utilizar como el push, el back o el replace.
La propiedad query es la que nos entrega el user_id con el valor del dato. Para poder llegar hasta ella entonces vamos a utilizar el siguiente código.

```javascript
import { useRouter } from 'next/router'

export default function User() {
  const router = useRouter()
  return(
    <>
      <p>El usuario es el {router.query.user_id}</p>
    </>
  )
}
```

Importamos el el hook useRouter y le asignamos su ejecución a la variable router. Luego podemos entrar dentro de la propiedad query y user_id para obtener su valor.

### Navegación SPA
Otra característica que nos permite crear Next js es una single page application, para esto tenemos que importar el modulo de Link de next/link y usarlo por fuera del anchor, esto se hace para que el navegador detecte su funcionamiento como una etiqueta **a**.
```javascript
import Link from "next/link";
<Link href="login"> <a> ir al login </a> </Link>
```
