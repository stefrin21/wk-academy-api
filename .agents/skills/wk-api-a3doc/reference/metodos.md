# API a3doc Cloud · los métodos

Sacado de la documentación oficial (a3developers.wolterskluwer.es/doc/a3doccloud), 28/10/2026.

**Todos los métodos son `POST`**, también los que solo leen. El token va **dentro del cuerpo** (`token`), no en una cabecera. `*` = obligatorio.

## Métodos de lectura (los que se usan en el curso)

### `POST /login`

Esta función permite que un usuario se registre en la aplicación para utilizarla (log in). Salvo excepciones, éste será un paso obligatorio previo al uso de cualquier otra función de la WebAPI.

**Cuerpo de la petición:**

- `tenant` (string): Código del cliente de A3DOC (tenant).
- `user` (string): Código del usuario (nombre del usuario).
- `password` (string): Contraseña del usuario.
- `deviceId` (string): Código identificador único del dispositivo (deberá indicar el Nombre de Máquina + el Usuario de Sesión de Windows).
- `deviceType` (integer): Tipo de dispositivo (deberá ser 0)
- `devicePlatform` (integer): Versión de esta WebAPI (deberá ser 98)

**Respuesta 200:**

- `token` (string): Token de seguridad generado, que deberá utilizarse en las siguientes llamadas a funciones
- `status` (object)
  - `errorCode` (string): Código de status/error
  - `errorMessage` (string): Mensaje de retorno

### `POST /logout`

Esta función permite desconectar al usuario del servicio de A3DOC.

**Cuerpo de la petición:**

- `token` (string): Token de seguridad obtenido con la función Login.

**Respuesta 200:**

- `errorCode` (string): Código de status/error
- `errorMessage` (string): Mensaje de retorno

### `POST /userinfo`

Esta función permite obtener información sobre el usuario que se ha logado.

**Cuerpo de la petición:**

- `token` (string): Token de seguridad obtenido con la función Login.

**Respuesta 200:**

- `completeUserName` (string): Nombre completo del usuario.
- `mailAddress` (string): Dirección de correo del usuario.
- `userRol` (string): Rol del usuario.
- `userType` (string): Tipo de usuario.
- `isPortalDoc` (boolean): Indica si la aplicación es Portal Doc.
- `status` (object)
  - `errorCode` (string): Código de status/error
  - `errorMessage` (string): Mensaje de retorno

### `POST /appinfo`

Esta función permite obtener información general de la aplicación, sirviendo para comprobar si el servicio está funcionando correctamente.

**Respuesta 200:**

- `info` (object): Tabla con la información de la aplicación, organizada en pares clave-valor
  - `AppName` (string): Nombre de la aplicación A3DOC
  - `AppVersion` (string): Versión de la aplicación A3DOC.
  - `ApiVersion` (string): Versión de esta WebAPI.
  - `A3DOCFileXferType` (string): Tipo de transferencia de los ficheros utilizado entre la WebAPI y A3DOC, que podrá ser “SOAP” o “MTOM”. El tipo de transferencia de los ficheros condiciona aspectos tales como el modo compresión de los datos, lo que puede repercutir en el rendimiento de las aplicaciones.
  - `ServerTime` (string): Fecha y hora UTC actuales del servidor.
- `status` (object)
  - `errorCode` (string): Código de status/error
  - `errorMessage` (string): Mensaje de retorno

### `POST /containerstree`

Esta función permite obtener el árbol de categorías a las que tiene derecho el usuario.

**Cuerpo de la petición:**

- `token` (string): Token de seguridad obtenido con la función Login.
- `customerId` (string): Código identificador del cliente por el que se quiere filtrar (Opcional).

**Respuesta 200:**

- `tree` (object): Árbol de categorías conteniendo elementos con la siguiente estructura
  - `id` (string): Código identificador de la categoría.
  - `name` (string): Nombre de la categoría.
  - `parentId` (string): Código de la categoría padre.
  - `numDocuments` (integer): Nº de documentos que pertenecen a la categoría o a cualquiera de sus subcategorías.
  - `children` (string): Lista de categorías hija, con la misma estructura que ésta, o ‘null’ en el caso de no tener ninguna.
- `status` (object)
  - `errorCode` (string): Código de status/error
  - `errorMessage` (string): Mensaje de retorno

### `POST /getcustomerslistextended`

Esta función permite obtener la lista de clientes a los que tiene acceso un usuario de forma paginada. Incluye un parámetro de búsqueda opcional.

**Cuerpo de la petición:**

- `token` (string): Token de seguridad obtenido con la función Login.
- `PageIndex` (integer): Número de la página que se va a mostrar. La primera página es la 0.
- `PageSize` (integer): Número de documentos que se mostraran por página. Valores permitidos, entre 1 y 100. Recomendamos usar los mismo que el SmartClient de A3DOC que son 25, 50, o 100.
- `Order` (integer): Campo por el que ordenar la lista de clientes. Valores admitidos. 0 = Identificador (nif), 1 = Nombre
- `Sort` (integer): Dirección de la ordenación de la lista de clientes. Valores admitidos. 0 = Ascending, 1 = Descending.
- `Filter` (string): Campo de texto que permite filtrar por Nif o por Nombre del cliente.

**Respuesta 200:**

- `count` (integer): Número de documentos de la página actual.
- `customers` (object): Tabla con los clientes devueltos según paginación, cada uno de los cuáles tendrá los siguientes campos
  - `code` (integer): Código numérico del cliente, de uso interno para la aplicación
  - `id` (string): Código identificador del cliente.
  - `name` (string): Nombre del cliente.
- `status` (object)
  - `errorCode` (string): Código de status/error
  - `errorMessage` (string): Mensaje de retorno

### `POST /getdocuments`

Esta función permite obtener una lista de los documentos a los que tiene acceso un usuario, permitiendo establecer una serie de filtros.

**Cuerpo de la petición:**

- `token` (string): Token de seguridad obtenido con la función Login.
- `idContainer` (integer): Código identificador de la categoría de la que se quieren obtener los documentos.
- `pageIndex` (integer): Paginación. Número de la página a cargar. La primera página es la 0.
- `pageSize` (integer): Paginación. Número de documentos por página. Como valor máximo puede ser 100.
- `order` (string): Campo de ordenación (opcional).
- `sort` (string): Modo de ordenación (opcional).
- `find` (string): Contenido a buscar en el contenido de los documentos (opcional).
- `customerId` (string): Identificador del cliente propietario de los documentos (opcional).
- `title` (string): Contenido a buscar en el título de los documentos (opcional).

**Respuesta 200:**

- `count` (integer): Número de documentos.
- `documents` (object): Tabla con los documentos, cada uno de los cuáles tendrá los siguientes campos
  - `code` (integer): Código numérico del documento, de uso interno para la aplicación.
  - `id` (string): Código identificador del documento.
  - `title` (string): Título del documento.
  - `type` (string): Tipo (extensión) del documento.
  - `size` (integer): Tamaño del documento, en KiloBytes.
  - `date` (string): Fecha del documento.
  - `dateModified` (string): Fecha y hora de última modificación del documento.
  - `customerId` (string): Código del cliente propietario del documento.
  - `customerName` (string): Nombre del cliente propietario del documento.
  - `isAppDoc` (string): ndicador de si el documento es de aplicación (true) o del usuario (false)
- `status` (object)
  - `errorCode` (string): Código de status/error
  - `errorMessage` (string): Mensaje de retorno

### `POST /getdocumentsextended`

Ésta función permite obtener una lista de documentos a los que tiene acceso el usuario, estableciendo una serie de filtros y condiciones.

**Cuerpo de la petición:**

- `token` (string): Token de seguridad obtenido con la función Login.
- `containersIdstoSearch` (string): Lista que contiene el identificador de las categorías de las que obtener los documentos.
- `searchChildContainers` (boolean): Indica si se deben obtener documentos de dentro de las categorías hijas especificadas en containersIdstoSearch.
- `containersIdsToIgnore` (string): Lista en el que se definen las categorías que deben ignorarse en la obtención de los documentos. (Opcional)
- `pageIndex` (integer): Número de la página que se va a mostrar. La primera página es la 0.
- `pageSize` (integer): Número de documentos que se mostraran por página. El valor máximo está establecido en 100.
- `filter` (object): Lista con los filtros a aplicar que permite obtener los documentos deseados, para ello se deben enviar los filtros requeridos uno tras otro.
  - `AttributeId` (integer): Identificador del atributo.
  - `matchWholeWord` (boolean): Indica si se desea que la búsqueda se efectúe buscando por contexto o con el valor exacto del texto del filtro.
  - `FilterValue` (string): Parámetro que contiene el valor del filtro.
  - `FilterEndValue` (string): Parámetro opcional que contiene el valor final del filtro, se usa al especificar un filtro que contiene un rango de fechas.
- `Order` (string): Ordenación de los resultados. (Opcional)
- `Sort` (string): Orientación de la ordenación. (Opcional)

**Respuesta 200:**

- `countPageDocuments` (integer): Número de documentos de la página actual.
- `countAllDocuments` (integer): Número de documentos en total.
- `documents` (object): Lista que contiene los documentos retornados utilizando la siguiente estructura
  - `Id` (string): Código identificador del documento.
  - `Title` (string): Título del documento.
  - `Type` (string): Tipo del documento (extensión).
  - `Date` (string): Fecha del documento.
  - `DateModified` (string): Fecha y hora de la última modificación.
  - `CustomerId` (string): Código del cliente propietario del documento.
  - `CustomerName` (string): Nombre del cliente propietario del documento.
  - `Size` (integer): Tamaño del documento (KiloBytes).
  - `IsAppDoc` (string): Indica si la procedencia del documento es una aplicación (true) o del usuario (false).
  - `ContainersIds` (string): Lista con los identificadores de las categorías donde existe el documento
  - `Attributes` (string): Resto de metadatos del documento no concretados antes.
- `status` (object)
  - `errorCode` (string): Código de status/error
  - `errorMessage` (string): Mensaje de retorno

### `POST /datemodified`

Esta función permite obtener la última fecha y hora de modificación de un documento.

**Cuerpo de la petición:**

- `token` (string): Token de seguridad obtenido con la función Login.
- `documentId` (string): Código identificador único del documento.

**Respuesta 200:**

- `date` (integer): Fecha y hora de la última modificación.
- `status` (object)
  - `errorCode` (string): Código de status/error
  - `errorMessage` (string): Mensaje de retorno

### `POST /deleteddocuments`

Esta función permite obtener la lista de los documentos eliminados entre dos fechas.

**Cuerpo de la petición:**

- `token` (string): Token de seguridad obtenido con la función Login.
- `fromDate` (string): Fecha y hora iniciales del período a buscar (opcional), en formato “AAAA-MM-DD hh:mm:ss.ccc”. Si no se indica, se tomará como inicio del período 2015/01/01 00:00:00.000.
- `toDate` (string): Fecha y hora finales del período a buscar (opcional) ), en formato “AAAA-MM-DD hh:mm:ss.ccc”. Si no se indica, se tomará como final del período el momento actual.

**Respuesta 200:**

- `count` (integer): Número de documentos incluidos en la lista.
- `codes` (string): Lista de los códigos numéricos de los documentos eliminados entre esas dos fechas.
- `status` (object)
  - `errorCode` (string): Código de status/error
  - `errorMessage` (string): Mensaje de retorno

### `POST /download`

Esta función permite obtener el contenido de un documento almacenado en A3DOC.

**Cuerpo de la petición:**

- `token` (string): Token de seguridad obtenido con la función Login.
- `documentId` (string): Código identificador único del documento.

**Respuesta 200:**

- `length` (integer): Longitud del contenido descargado (en bytes).
- `content` (string): Contenido del documento, en formato Base64.
- `status` (object)
  - `errorCode` (string): Código de status/error
  - `errorMessage` (string): Mensaje de retorno

## Métodos que escriben (NO se usan en el curso)

- `POST /uploadextended` — Ésta función permite publicar documentos a través de la WebAPI fuera del ámbito de la Mobility. Se trata de una extensión del método Upload el cual no solamente
- `POST /updatedocumentattributes` — Ésta función permite modificar mediante la WebAPI los metadatos de los documentos ya publicados, también permite desvincular un documento de un atributo (borrar
- `POST /updateappcompanyname` — Esta función permite actualiza el nombre del tenant. Documentación Adicional Accede a través del siguiente link a la página de enlaces con información adicional
- `POST /deletedocument` — La función DeleteDocument permite eliminar el documento referenciado, este método se debe utilizar con precaución puesto que no existe una funcionalidad que per
