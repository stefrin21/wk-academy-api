# API a3doc Cloud · información adicional

Sacado de la documentación oficial (a3developers.wolterskluwer.es/doc/a3doccloud/infoadicional), 28/10/2026.
## Error Codes

Los datos de retorno siempre incluirán el resultado de la operación y un mensaje explicativo del mismo:

{
 "errorCode": 0,
 "errorMessage": ""
}

Los códigos de error que devuelve este servicio son los siguientes:

| Code | Description | 
| 0 | Operación correcta. | 
| 1 | No se ha podido acceder a la base de datos, o ésta ha dado un error. | 
| 2 | El código de cliente (tenant) indicado no existe. Ver también error código 4. | 
| 3 | Error en los parámetros indicados en la llamada. | 
| 4 | Credenciales incorrectas: El usuario o la contraseña indicados son incorrectos. También puede ser debido a que el código de cliente (tenant) indicado no exista o, en general, a un fallo del servicio de login de A3DOC. | 
| 5 | Su usuario está bloqueado en A3DOC. | 
| 6 | El token de seguridad no es válido. Debe volver a hacer el login. | 
| 7 | Se produjo un error general en el servicio WCF de A3DOC. | 
| 8 | El usuario debe cambiar su contraseña. | 
| 9 | No se pudo reiniciar la contraseña del usuario. Probablemente el código del tenant y/o el usuario son incorrectos. | 
| 10 | No se pudo cambiar la contraseña. Probablemente el código del tenant, el usuario o la contraseña antigua son incorrectas. | 
| 11 | El documento solicitado no existe. | 
| 12 | El tenant no tiene suficientes licencias contratadas para ejecutar la aplicación. En general, hay tantos usuarios concurrentes ejecutando la aplicación como licencias contratadas tiene, por lo que no puede continuar ejecutando esta aplicación hasta que alguno de esos usuarios salga de su aplicación y libere una licencia. | 
| 13 | El documento ya existe. Ya existe un documento con el mismo identificador único. | 
| 14 | La categoría indicada no existe. | 
| 15 | El cliente indicado no existe. | 
| 16 | El usuario tiene rol de consulta. No puede publicar documentos. | 
| 17 | La longitud de la petición HTTP es demasiado larga. Generalmente este error se dará en la función Upload, provocado por que el documento a transmitir tiene un tamaño demasiado grande para que lo acepte el servidor. | 
| 18 | El atributo indicado no existe. | 
| 19 | El DetailsMainField indicado es incorrecto. | 
| 20 | La aplicación indicada no existe. | 
| 21 | No ha podido obtener la relación de Atributos. | 
| 22 | No ha podido obtener la relación de Aplicaciones. | 
| 23 | Faltan atributos obligatorios por informar. | 
| 24 | No está informado el cliente al que asignar el documento. | 
| 25 | Los atributos del documento contienen carácteres No permitidos. : '/', '\', '*', '?', '<', '>', '^', '"', ':', ' | 
| 26 | No se permite publicar ficheros superiores a 100mb. | 
| 27 | El nombre del atributo está vacío. | 
| 28 | El valor del atributo no ha cambiado. | 
| 29 | El valor del atributo lista no existe. | 
| 30 | Error al grabar los atributos del documento. | 
| 31 | Solo se permite actualizar atributos. | 
| 32 | Se ha producido un error actualizando los atributos. | 
| 33 | El valor del atributo no tiene descripción. | 
| 34 | El valor del atributo no existe. | 
| 35 | El valor de la descripción del atributo no existe. | 
| 36 | El atributo descripción no existe. | 
| 37 | Error en los parámetros indicados en la llamada, el ID de atributo esta duplicado. | 
| 38 | Error el ID del atributo está vacío. | 
| 39 | Error el ID del atributo value está vacío. | 
| 40 | Error el Name del atributo value está vacío. | 
| 41 | Error el existe algún ítem duplicado en la lista de valores. | 
| 42 | Error el atributo no es tipo lista. | 
| 43 | Error el parámetro DetailsMainfield no es correcto. | 
| 44 | Error la lista de valores de atributos es igual a la existente. | 
| 45 | Hay un ID invalido en el filtro. | 
| 46 | El valor del atributo está vacío. | 
| 47 | El nombre del atributo está vacío. | 
| 48 | El valor del main attribute es inválido. | 
| 49 | La lista de valores de los atributos es inválida. | 
| 50 | El Id del valor del atributo no es válido. | 
| 51 | El formato o el rango de las fechas es incorrecto. | 
| 52 | El usuario no tiene permisos suficientes para realizar ésta acción. | 
| 53 | La categoría padre de la que se está insertando no existe. | 
| 54 | La categoría indicada ya existe. | 
| 56 | No se ha podido descargar el documento firmado de la API de DocHub. | 
| 57 | No se ha podido actualizar el documento firmado en el repositorio Azure. | 
| 58 | No se ha podido actualizar el estado de la firma del documento | 
| 59 | No se ha podido descargar el documento de evidencias de la API de DocHub. | 
| 60 | No se ha podido actualizar el documento de evidencias en el repositorio Azure. | 
| 61 | No se ha podido recuperar el documento de la BBDD. | 
| 62 | No tiene autorización para borrar documentos. | 
| 63 | No tiene autorización para borrar documentos firmados. | 
| 64 | No se puede eliminar un documento pendiente de firma. | 
| 65 | No tiene autorización para borrar documentos rechazados. |

## 

## User Types

Valores posibles los distintos tipos de perfiles de usuario.

| Id | Description | 
| 0 | Usuario del despacho | 
| 1 | Usuario de cliente del despacho | 

## User Roles

Valores posibles los distintos tipos de roles de usuario.

| Id | Description | 
| 0 | Administrador | 
| 1 | Usuario de consulta (no permite hacer modificaciones) | 
| 2 | Usuario gestor | 
| 3 | Usuario gestor avanzado | 
| 4 | Usuario gestor restringido | 
| 5 | Usuario de cliente | 
| 6 | Usuario de consulta del cliente (no permite hacer modificaciones) | 

## Field Types

Tipología de campos definida en la base de datos de A3DOC para los atributos

| Id | Description | 
| 1 | Integer | 
| 2 | String | 
| 3 | Comment (observaciones) | 
| 4 | Date | 
| 5 | Lista de Valores (DocumentAttributeValues) | 
| 6 | Boolean | 
| 7 | DateRange (actualmente no se usa) | 
| 8 | No definido | 
| 9 | Lista de Valores con multiselección (DocumentAttributeValues) | 

## Order

Valores posibles para establecer el campo por el que se ordenarán los resultados.

| Id | Description | 
| date | Fecha del documento. Éste es el valor por defecto o si se indica uno incorrecto. | 
| title | Título. | 
| type | Tipo (extensión) del documento. | 
| client | Nombre del cliente propietario del documento. | 
| dateModified | Fecha de última modificación del documento. | 

## Sort

Valores posibles para establecer la dirección de la ordenación.

| Id | Description | 
| asc | Ascendente. Éste es el modo por defecto si se indicó un campo en order. Éste es el valor usado si se indica uno incorrecto. | 
| desc | Descendente. Éste es modo por defecto si no se indicó ningún campo en order. | 

## EndUser Visibility

Valores posibles sobre el campo Visibilidad para los Usuarios de perfil Cliente.

| Id | Description | 
| 0 | No visible. Los usuarios de cliente no podrán ver el documento. | 
| 1 | Visible. Los usuarios de cliente podrán ver el documento, pero no podrán modificarlo. | 
| 2 | Editable. Los usuarios de cliente podrán ver y modificar el documento. | 
AtenciónSe tendrán en cuenta las siguientes reglas que servirán de aplicación para establecer el valor por defecto en caso de no indicarse o de indicarse uno incorrecto:

- Si la aplicación no es Portal Doc, tomará el valor 0 (No visible).

- Si la aplicación es Portal Doc:

- Si el usuario tiene el rol de usuario de cliente, tomará el valor 2 (Editable).

- Si el usuario tiene el rol de usuario del despacho, podrá indicarse cualquiera de los 3 valores, y en caso de no indicarse se tomará por defecto el valor No visible.

En esta página

## 

### Document Attributes

La estructura DocumentAttributes consta de una lista de elementos DocumentMetadata la cual compone los atributos asociados al documento.

Cada uno de los ítems de dicha colección se compondrán de los siguientes campos:

| Parameter | Type | Observations | 
| Name | string | Nombre del Atributo | 
| Value | string | Valor del Atributo | 
| ID | string | Identificador del Atributo, debe corresponderse con un Id existente en la Tabla de DocumentAttributes de A3DOC | 
| Description | string | Solo necesario para los campos tipo lista, se informa la descripción visible del elemento que se corresponde con el Value. | 
Se deberá tener en cuenta que solamente los atributos definidos como tipo Lista o Lista con multi-selección (FieldType: 5 o 9) serán los que dispongan del campo Description, en caso contrario se deben blanquear el campo.

Respecto a los valores a informar en los campos de un ítem DocumentMetadata, dependerá en cada caso del atributo en concreto.

A continuación se incluye un ejemplo en formato XML de una estructura válida:

<Attribute Name="Cliente" Value="12345678R" ID="1" Description="MI CLIENTE"/>
<Attribute Name="Título" Value="Documento de pruebas" ID="3"/>
<Attribute Name="Fecha Documento" Value="2018-02-28" ID="4"/>
<Attribute Name="Observaciones" Value="Observaciones varias" ID="7"/>
<Attribute Name="Expediente" Value="" ID="5"/>
<Attribute Name="Empresa" Value="00666" ID="892" Description="MI EMPRESA"/>
<Attribute Name="Centro" Value="00001" ID="991" Description="MI CENTRO"/>
<Attribute Name="Trabajador" Value="55556688F" ID="992" Description="TRABAJADOR TEST"/>
<Attribute Name="Visibilidad" Value="1" ID="10" Description="Visible"/>

NotaLos tres primeros campos son campos Mandatory. Tienen que estar informados siempre en cualquier publicación de documento.

### Particularidades de los Atributos

Respecto a los atributos que no llevan Description, su valor lo deberá establecer la aplicación que publique el documento e irá en función de lo que el documento en concreto necesite. Por ejemplo habrá documentos que tengan fecha inicio y fecha fin, pero no todos ellos, con lo que solamente existirán dichos atributos en la lista cuando sean necesarios.

El atributo Visibilidad (ID: 10) solo deberá ser informado si estamos trabajando con un A3DOC Colaborativo (PortalDoc) por defecto su valor deberá ser el siguiente:

<Attribute Name="Visibilidad" Value="0" ID="10" Description="No Visible"/> 

En función de las reglas de Negocio que se establezcan, se podrá asignar también los siguientes valores:

<Attribute Name="Visibilidad" Value="1" ID="10" Description="Visible"/> 
<Attribute Name="Visibilidad" Value="2" ID="10" Description="Editable"/>

Respecto a los Atributos de tipo Lista/Lista con Multi-selección. Su composición vendrá marcada por los siguientes campos:

### Value

Sobre Value se informará el identificador del atributo relativo a la lista de DocumentAttributeValues, su correlación vendrá marcada por el campo DetailsMainField del atributo en cuestión.

A continuación intentaremos definir el comportamiento con un ejemplo por tal de facilitar su comprensión. Es recomendable consultar cómo funciona la estructura de DocumentAttributeValues definida más adelante.

Ejemplo: Tenemos un elemento DocumentAttributeValue definido en la base de datos de DOC como Cliente, a continuación adjuntamos su detalle en formato xml.

<Item Name="Identificador" Value="12345678R"/>
<Item Name="Nombre" Value="MI CLIENTE"/>
<Item Name="Correo" Value="mi.cliente@miempresa.com"/>

En los valores mostrados, vemos que hay un Item en el que el Name="Identificador" (esto se corresponde con el campo DetailsMainField definido en el Atributo e indica que es el campo que se usa como valor clave)

Si pretendemos asociar dicho cliente al documento, cuando vayamos a incluirlo dentro de la estructura de DocumentMetadata, lo haremos del siguiente modo:

<Attribute Name="Cliente" Value="12345678R" ID="1" Description="MI CLIENTE"/>

### Description

Respecto a la descripción a incluir en el campo, tomando el ejemplo anterior, vemos que se corresponde con el Item Name="Nombre" el cual a su vez va vinculado con el campo DetailsVisibleField del atributo.

### Resumen

A modo de sumario definiríamos los DocumentAttributeValue como el contenido de la tabla del Atributo y los DocumentMetadata son el establecimiento de un valor ya existente en la tabla asociándolo al documento.

Por ello es muy importante tener en cuenta, que cuando se pretenda publicar un documento, será necesario que la estructura DocumentAttributeValues contenga TODOS los elementos indispensables para que al asociar los DocumentAtribute al documento, todos ellos existan en la tabla del atributo.

## Lista de atributos

En esta lista encontrareis la equivalencia entre los Id de atributo y su nombre.

También podréis ver a que aplicación pertenece el atributo, en que versiones se despliega y si es visible o no.

| AttributeId | Nombre | Aplicación | Versión de A3Doc | Visible | 
| 1 | Cliente | COMMON | BASE | true | 
| 3 | Título | COMMON | BASE | true | 
| 4 | Fecha documento | COMMON | BASE | true | 
| 5 | Expediente | COMMON | BASE | true | 
| 6 | Publicado en Portal Asesor | COMMON | BASE | false | 
| 7 | Observaciones | COMMON | BASE | true | 
| 8 | Plantillas | COMMON | BASE | false | 
| 9 | Clientes relacionados | COMMON | BASE | true | 
| 10 | Visibilidad para usuarios Cliente | COMMON | PORTAL DOC | true | 
| 600 | Empresa | A3ASESOR RRHH | BASE | true | 
| 601 | Centro | A3ASESOR RRHH | BASE | true | 
| 602 | Trabajador | A3ASESOR RRHH | BASE | true | 
| 603 | Código Trabajador | A3ASESOR RRHH | BASE | false | 
| 604 | Fecha Inicio | A3ASESOR RRHH | BASE | true | 
| 605 | Fecha Final | A3ASESOR RRHH | BASE | true | 
| 620 | Empresa | A3ERP NÓMINA CLOUD | BASE | true | 
| 621 | Centro | A3ERP NÓMINA CLOUD | BASE | true | 
| 622 | Trabajador | A3ERP NÓMINA CLOUD | BASE | true | 
| 623 | Código Trabajador | A3ERP NÓMINA CLOUD | BASE | false | 
| 624 | Fecha Inicio | A3ERP NÓMINA CLOUD | BASE | true | 
| 625 | Fecha Final | A3ERP NÓMINA CLOUD | BASE | true | 
| 640 | Empresa | A3ASESOR NÓMINA CLOUD | BASE | true | 
| 641 | Centro | A3ASESOR NÓMINA CLOUD | BASE | true | 
| 642 | Trabajador | A3ASESOR NÓMINA CLOUD | BASE | true | 
| 643 | Código Trabajador | A3ASESOR NÓMINA CLOUD | BASE | false | 
| 644 | Fecha Inicio | A3ASESOR NÓMINA CLOUD | BASE | true | 
| 645 | Fecha Final | A3ASESOR NÓMINA CLOUD | BASE | true | 
| 700 | Modelo | A3ECO | PORTAL DOC + PDA | false | 
| 701 | Período | A3ECO | PORTAL DOC + PDA | false | 
| 702 | Fecha presentación | A3ECO | PORTAL DOC + PDA | false | 
| 703 | Presentador | A3ECO | PORTAL DOC + PDA | false | 
| 704 | CSV | A3ECO | PORTAL DOC + PDA | false | 
| 705 | Justificante | A3ECO | PORTAL DOC + PDA | false | 
| 710 | Modelo | A3CON | PORTAL DOC + PDA | false | 
| 711 | Período | A3CON | PORTAL DOC + PDA | false | 
| 712 | Fecha presentación | A3CON | PORTAL DOC + PDA | false | 
| 713 | Presentador | A3CON | PORTAL DOC + PDA | false | 
| 714 | CSV | A3CON | PORTAL DOC + PDA | false | 
| 715 | Justificante | A3CON | PORTAL DOC + PDA | false | 
| 720 | Modelo | A3NOM | PORTAL DOC + PDA | false | 
| 721 | Período | A3NOM | PORTAL DOC + PDA | false | 
| 722 | Fecha presentación | A3NOM | PORTAL DOC + PDA | false | 
| 723 | Presentador | A3NOM | PORTAL DOC + PDA | false | 
| 724 | CSV | A3NOM | PORTAL DOC + PDA | false | 
| 725 | Justificante | A3NOM | PORTAL DOC + PDA | false | 
| 730 | Modelo | A3SOC | PORTAL DOC + PDA | false | 
| 731 | Período | A3SOC | PORTAL DOC + PDA | false | 
| 732 | Fecha presentación | A3SOC | PORTAL DOC + PDA | false | 
| 733 | Presentador | A3SOC | PORTAL DOC + PDA | false | 
| 734 | CSV | A3SOC | PORTAL DOC + PDA | false | 
| 735 | Justificante | A3SOC | PORTAL DOC + PDA | false | 
| 800 | Empresa | A3EQUIPO | BASE | true | 
| 801 | Centro | A3EQUIPO | BASE | true | 
| 802 | Trabajador | A3EQUIPO | BASE | true | 
| 803 | Código Trabajador | A3EQUIPO | BASE | false | 
| 804 | Fecha Inicio | A3EQUIPO | BASE | true | 
| 805 | Fecha Final | A3EQUIPO | BASE | true | 
| 850 | Emisor | PORTAL NEOS | BASE | true | 
| 851 | Expediente | PORTAL NEOS | BASE | true | 
| 852 | Id Notificación | PORTAL NEOS | BASE | true | 
| 853 | Fecha de solicitud | PORTAL NEOS | BASE | true | 
| 890 | Empresa | A3ECO | BASE | true | 
| 891 | Empresa | A3CON | BASE | true | 
| 892 | Empresa | A3NOM | BASE | true | 
| 893 | Empresa | A3GES | BASE | true | 
| 894 | Empresa | A3SOC | BASE | true | 
| 900 | Entidad | A3ERP,B360 | B360 | true | 
| 901 | Código | A3ERP,B360 | B360 | true | 
| 902 | Empresa | A3ERP,B360 | B360 | true | 
| 903 | Informe | A3ERP,B360 | B360 | true | 
| 904 | Organización | A3ERP,B360 | B360 | true | 
| 905 | Descripción | A3ERP,B360 | B360 | true | 
| 906 | Fecha inicio | A3ERP,B360 | B360 | true | 
| 907 | Fecha fin | A3ERP,B360 | B360 | true | 
| 908 | Entidad | A3ERP,B360 | B360 | true | 
| 910 | Expediente B360 | B360 | B360 | true | 
| 920 | Publicado en HRGO | HRGO | PORTAL DOC + HRGO | true | 
| 921 | Publicado al Trabajador | HRGO | PORTAL DOC + HRGO | false | 
| 922 | Fecha de Publicación | HRGO | PORTAL DOC + HRGO | false | 
| 923 | Tipo de Contrato | HRGO | PORTAL DOC + HRGO | false | 
| 991 | Centro | A3NOM | BASE | true | 
| 992 | Trabajador | A3NOM | BASE | true | 
| 993 | Fecha Inicio | A3ECO,A3CON,A3NOM | BASE | true | 
| 994 | Fecha Final | A3ECO,A3CON,A3NOM | BASE | true | 
| 995 | Ejercicio | A3ECO,A3CON,A3GES,A3REN,A3SOC | BASE | true | 
| 996 | Actividad | A3ECO,A3CON | BASE | true | 
| 997 | Código Cliente | A3GES | BASE | true | 
| 998 | Trámite | A3GES | BASE | true | 
| 999 | Código Trabajador | A3NOM | BASE | true |

En esta página

## 

### Document Attribute Values

La estructura DocumentAttributeValues consta de una lista de elementos AttributeValueRedux. Esta estructura sirve solamente para los atributos de tipo “Lista/Lista con Multi-selección”, pero es de vital importancia ya que está estrechamente vinculada con el apartado anterior de los DocumentMetadata.

Cada uno de los ítems de dicha colección se compondrán de los siguientes campos:

public string ID;
public string DetailsMainField;
public List<AttributeValueReduxItem> Items;

Al mismo tiempo vemos que el campo Items es una lista de elementos AttributeValueReduxItem, cada uno de ellos va definido con la siguiente sub-estructura:

public String Name;
public String Value;

Estas dos estructuras simulan un XML como el siguiente:

<Values>
 <Value ID="1" Name="Identificador">
 <Item Name="Identificador" Value="12345678R"/>
 <Item Name="Nombre" Value="MI CLIENTE"/>
 <Item Name="Correo" Value="mi.cliente@miempresa.com"/>
 </Value>

 <Value>…</Value>
 <Value>…</Value>
</Values> 

| Parameter | Type | Observations | 
| ID | string | Identificador del Atributo al que representa ésta estructura. | 
| DetailsMainField | string | Identifica el ítem hijo del que obtendremos el Value para relacionarlo con los DocumentMetadata. Este campo viene definido por la propia tabla de Atributos del tenant. Aquí solo se utiliza para la vinculación. | 
| Items | List<attributevaluereduxitem> | Lista de AttributeValueReduxItem que contiene el Elemento en cuestión. El número de ítems de cada DocumentAttributeValue será distinto en función del campo al que representen. | 
| Items/Name | | Nombre del campo a representar | 
| Items/Value | | Valor del campo a representar | 
Todo documento deberá llevar sobre la estructura de DocumentAttributeValue, los elementos necesarios para que se pueda asociar, eso significa que si el documento va por ejemplo a nivel de cliente, tendremos que incluir en dicha estructura la información para darlo de alta en caso que no exista.

Cada tipo de DocumentAttribute de tipo Lista, tendrá su propia definición de campos a nivel de DocumentAttributeValue definidos en cada caso por la aplicación propietaria del atributo.

A continuación mostraremos algunos ejemplos de uso con los atributos más habituales.

### Valor de Atributo de tipo Cliente (id=1)

Ejemplo de DocumentMetadata:

<Attribute Name="Cliente" Value="12345678R" ID="1" Description="MI CLIENTE"/>

Ejemplo de DocumentAttributeValue:

<Value ID="1" Name="Identificador">
 <Item Name="Identificador" Value="12345678R"/>
 <Item Name="Nombre" Value="MI CLIENTE"/>
 <Item Name="Correo" Value="mi.cliente@miempresa.com"/>
</Value>

| Parameter | Type | Observations | 
| Identificador | string | Identificador único del Cliente (NIF) | 
| Nombre | string | Nombre del Cliente | 
| Correo | string | Mail del Cliente | 
AtenciónEl Mail del cliente puede pasarse en blanco, pero tiene que crearse el valor.

### Valor de Atributo de tipo Empresa de A3NOM (id=892)

El Atributo empresa está relacionado con el cliente con lo que incluye dentro de sus valores dos ítems que lo relacionan con el atributo cliente del que depende.

Por este motivo, si se pretende publicar un documento a nivel de Empresa, en los DocumentAttributeValues tendremos que crear tanto los elementos Cliente cómo la propia Empresa.

Ejemplo de DocumentMetadata:

<Attribute Name="Empresa" Value="00666" ID="892" Description="MI EMPRESA"/>

Ejemplo de DocumentAttributeValue:

<Value ID="892" Name="Código">
 <Item Name="Código" Value="00666"/>
 <Item Name="Nombre" Value="MI EMPRESA"/>
 <Item Name="NIF" Value="12345678R"/>
 <Item Name="Cliente" Value="MI CLIENTE"/>
 <Item Name="FK" Value="12345678R"/>
</Value>

| Parameter | Type | Observations | 
| Código | string | Código de la Empresa | 
| Nombre | string | Nombre de la Empresa | 
| Nif | string | NIF de la Empresa | 
| Cliente | string | Nombre del Cliente | 
| FK | string | Vínculo con el Cliente {IdentificadorCliente} | 

### Valor de Atributo de tipo Centro (id=991)

El atributo Centro está relacionado directamente con la Empresa y colateralmente con el Cliente ya que Empresa depende directamente de Cliente.

Por este motivo, si se pretende publicar un documento a nivel de Centro, en los DocumentAttributeValues tendremos que crear tanto los elementos Cliente, Empresa y el propio Centro.

Ejemplo de DocumentMetadata:

<Attribute Name="Centro" Value="00001" ID="991" Description="MI CENTRO"/>

Ejemplo de DocumentAttributeValue:

<Value ID="991" Name="Código">
 <Item Name="Código" Value="00001"/>
 <Item Name="Nombre" Value="MI CENTRO"/>
 <Item Name="Empresa" Value="MI EMPRESA"/>
 <Item Name="Cliente" Value="MI CLIENTE"/>
 <Item Name="FK" Value="12345678R-00666"/>
</Value>

| Parameter | Type | Observations | 
| Código | string | Código del Centro de Trabajo | 
| Nombre | string | Nombre del Centro de Trabajo | 
| Empresa | string | Nombre de la Empresa | 
| Cliente | string | Nombre del Cliente | 
| FK | string | Vínculo con el Cliente y Empresa {IdentificadorCliente}-{CódigoEmpresa} | 

### Valor de Atributo de tipo Trabajador (id=992)

El atributo Trabajador está relacionado directamente con la Empresa y colateralmente con el Cliente ya que Empresa depende directamente de Cliente.

Puede parecer algo extraño que el trabajador no cuelgue de Centro, pero en A3DOC se definió así en su día.

De todas formas, es recomendable que cuando nos publiquen un documento a nivel de Trabajador, en los DocumentAttributeValues tendremos que crear tanto los elementos Cliente, Empresa, Centro y el propio Trabajador.

Ejemplo de DocumentMetadata:

<Attribute Name="Trabajador" Value="55556688F" ID="992" Description="TRABAJADOR TEST"/>

Ejemplo de DocumentAttributeValue:

<Value ID="992" Name="NIF">
 <Item Name="NIF" Value="55556688F"/>
 <Item Name="Nombre" Value="TRABAJADOR TEST"/>
 <Item Name="Centro" Value="MI CENTRO"/>
 <Item Name="Empresa" Value="MI EMPRESA"/>
 <Item Name="FK" Value="12345678R-00666"/> 
</Value>

| Parameter | Type | Observations | 
| NIF | string | NIF del Trabajador | 
| Nombre | string | Nombre del Trabajador | 
| Centro | string | Nombre del Centro | 
| Empresa | string | Nombre de la Empresa | 
| FK | string | Vínculo con el Cliente y Empresa {IdentificadorCliente}-{CódigoEmpresa} |

En esta página

## 

### Atributo Cliente

Tipo de Atributo: Id = 1

Aplicaciones relacionadas: Todas ya que se trata de un atributo común.

Ejemplo de Atributo Cliente:

"DocumentAttributeValues": [
{
 "ID": "1",
 "DetailsMainField": "Identificador",
 "Items": [
 {
 "Name": "Identificador",
 "Value": "12345678R"
 },
 {
 "Name": "Nombre",
 "Value": "MI CLIENTE"
 },
 {
 "Name": "Correo",
 "Value": "mi.cliente@miempresa.com"
 }
 ]
}

En esta página

## 

### Atributo Trabajadores

Tipo de Atributo: Id in (602,622,642,802,992)

Aplicaciones relacionadas: El atributo Trabajador, según código pertenece a distintas aplicaciones tal y cómo muestra la siguiente tabla, sin embargo el formato del JSON de sus detalles son compartidos por todas ellas.

| AttributeId | Nombre | Aplicación | 
| 602 | Empresa | A3ASESOR RRHH | 
| 622 | Empresa | A3ERP NÓMINA CLOUD | 
| 642 | Empresa | A3ASESOR NÓMINA CLOUD | 
| 802 | Empresa | A3EQUIPO | 
| 992 | Empresa | A3NOM | 
Ejemplo de Atributo Empresas (General):

"DocumentAttributeValues": [
{
 "ID": "992",
 "DetailsMainField": "NIF",
 "Items": [
 {
 "Name": "NIF",
 "Value": "66666666J"
 },
 {
 "Name": "Nombre",
 "Value": "TRABAJADOR DE PRUEBAS"
 },
 {
 "Name": "Centro",
 "Value": "MI CENTRO"
 },
 {
 "Name": "Empresa",
 "Value": "MI EMPRESA"
 },
 {
 "Name": "FK",
 "Value": "12345678X-00001"
 }
 ]
}

Formato de la ForeignKeyValue: La FK del XML se compone en base a {NIF de la Empresa}-{Código de Empresa}.

En esta página

## 

### Atributo Empresas (General)

Tipo de Atributo: Id in (600,620,640,800,890,891,892,894)

Aplicaciones relacionadas: El atributo Empresa, según código pertenece a distintas aplicaciones tal y cómo muestra la siguiente tabla, sin embargo el formato del JSON de sus detalles son compartidos por todas ellas.

| AttributeId | Nombre | Aplicación | 
| 600 | Empresa | A3ASESOR RRHH | 
| 620 | Empresa | A3ERP NÓMINA CLOUD | 
| 640 | Empresa | A3ASESOR NÓMINA CLOUD | 
| 800 | Empresa | A3EQUIPO | 
| 890 | Empresa | A3ECO | 
| 891 | Empresa | A3CON | 
| 892 | Empresa | A3NOM | 
| 894 | Empresa | A3SOC | 
Ejemplo de Atributo Empresas (General):

"DocumentAttributeValues": [
{
 "ID": "890",
 "DetailsMainField": "Código",
 "Items": [
 {
 "Name": "Código",
 "Value": "00001"
 },
 {
 "Name": "Nombre",
 "Value": "MI EMPRESA"
 },
 {
 "Name": "NIF",
 "Value": "12345678X"
 },
 {
 "Name": "Cliente",
 "Value": "MI CLIENTE"
 },
 {
 "Name": "FK",
 "Value": "12345678X"
 }
 ]
}

Formato de la ForeignKeyValue: La FK del json solamente informa el {NIF del Cliente}

