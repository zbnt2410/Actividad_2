# 🗣️ SpeechDown

**Aplicación Web con IA Generativa para el Apoyo Terapéutico del Habla en Niños con Síndrome de Down**

SpeechDown es una solución educativa e inclusiva que permite a terapeutas y padres generar actividades personalizadas usando inteligencia artificial. A través de interfaces intuitivas y retroalimentación auditiva, esta plataforma ayuda a reforzar el desarrollo del lenguaje en niños con Síndrome de Down, empleando tecnologías como GPT-4 de OpenAI y Google Text-to-Speech.

---

## 🎯 Objetivo del Proyecto

Desarrollar una aplicación web de apoyo terapéutico para el lenguaje, que combine IA generativa con tecnologías web modernas, para facilitar la creación de ejercicios lingüísticos accesibles para niños con discapacidad cognitiva.

---

## 🧠 Funcionalidades principales

- Generación de cuentos, juegos y ejercicios con IA (OpenAI).
- Conversión de texto a voz (Google Text-to-Speech).
- Interfaz personalizada para terapeutas y padres.
- Gestión de niños, usuarios y actividades.
- Acceso responsivo desde cualquier dispositivo.

---

## 🧰 Tecnologías utilizadas

| Tecnología          | Uso principal                           |
|---------------------|------------------------------------------|
| React.js            | Frontend web                             |
| TailwindCSS         | Estilos y diseño responsivo              |
| Node.js + Express   | API REST backend                         |
| Sequelize ORM       | Conexión con PostgreSQL                  |
| PostgreSQL          | Base de datos                            |
| OpenAI GPT-4 API    | Generación de actividades y contenido    |
| Google TTS API      | Retroalimentación auditiva               |
| JWT + Bcrypt        | Seguridad y autenticación                |
| Docker (opcional)   | Contenerización del proyecto             |

---

---

## Instalación y despliegue

### Requisitos previos

- Node.js >= 18
- PostgreSQL
- Claves API de:
  - OpenAI (https://platform.openai.com)
  - Google Cloud Text-to-Speech (https://cloud.google.com/text-to-speech)
 
  
## Configurar Backend
cd backend
cp .env.example .env
# Llena las variables de entorno (DB, API_KEY_OPENAI, API_KEY_TTS)
npm install
npx sequelize db:migrate
npm run dev

## Configurar Frontend
cd ../frontend
npm install
npm start



Frontend en: http://localhost:3000
Backend en: http://localhost:5000


## Prompts usados con OpenAI

{
  "prompt": "Escribe un cuento corto para un niño con Síndrome de Down de 6 años. Usa frases simples, personajes amigables y vocabulario fácil. Incluye las palabras: perro, casa, sol y mamá."
}

{
  "prompt": "Crea un juego de rimas con la palabra 'pato'. Da tres opciones y explica cuál es la correcta de forma divertida."
}

{
  "prompt": "Genera 3 ejercicios para mejorar la pronunciación de la letra R en niños con Síndrome de Down. Deben tener instrucciones sencillas."
}

{
  "prompt": "Escribe una frase motivadora para un niño que acaba de terminar un ejercicio de lenguaje, usando lenguaje emocionalmente positivo y frases cortas."
}



## Instrucciones para producción
Crear base de datos PostgreSQL en servidor.
Configurar variables de entorno con claves y conexiones reales.
Usar pm2 o docker-compose para mantener backend corriendo.
Usar nginx o apache para exponer el frontend (compilado con npm run build).
(Opcional) Configurar HTTPS con Let's Encrypt.

