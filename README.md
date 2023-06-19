# desafio_7_6_soft_jobs

Servidor NODE Express. Incorpora:

## Autenticación y Autorización de usuarios usando JWT

**Permite registro de usuarios:** POST /usuarios

**Autenticación:** POST /login

Se devuelve token generado con **JWT**.
El **payload** corresponde al campo email.

**Obtención de datos** GET /usuarios

Se extrae token de la propiedad **Authorization** de **Headers**.

Se verifica validez del token usando la misma **SECRET KEY**.

Decodificación del token para obtener email al buscar en su payload.

Obtención del registro del usuario.
