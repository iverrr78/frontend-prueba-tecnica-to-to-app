# To-Do App

---

## 🇬🇧 English Version

A modern, responsive task management application built with React and Node.js. This application allows users to create, manage, and organize their daily tasks efficiently.

## Features

- **User Authentication**: Secure user registration and login with JWT tokens
- **Task Management**: Create, view, update, and delete tasks
- **Task Status**: Toggle tasks between completed and uncompleted states
- **Responsive Design**: Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface with gradient backgrounds and smooth animations
- **Protected Routes**: Secure access to user-specific task lists

## Technologies Used

### Frontend
- **React** - UI library for building component-based interfaces
- **React Router** - Navigation and routing
- **Axios** - HTTP client for API requests
- **JWT Decode** - Decoding JSON Web Tokens
- **CSS3** - Modern styling with flexbox, grid, and responsive media queries

### Backend (Required)
- Node.js with Express
- MySQL database
- JWT for authentication

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend-prueba-tecnica-to-to-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Backend Setup

This frontend requires a backend API running on `http://localhost:3001`. The backend should provide the following endpoints:

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /tasks/:userId` - Get all tasks for a user
- `POST /tasks` - Create a new task
- `DELETE /tasks/:taskId` - Delete a task
- `PUT /tasks/:taskId` - Update task status

## Project Structure

```
src/
├── components/
│   ├── AuthForm.js      # Reusable authentication form
│   ├── navbar.js        # Navigation bar component
│   ├── task.js          # Individual task card component
│   └── taskform.js      # Form for creating new tasks
├── views/
│   ├── home.js          # Main dashboard with tasks
│   ├── landingpage.js   # Landing page
│   ├── login.js         # Login page
│   └── register.js      # Registration page
├── App.js               # Main app component with routing
├── App.css              # Global styles
└── index.js             # App entry point
```

## Responsive Design

The application is fully responsive and optimized for various screen sizes:

### Desktop (> 768px)
- Two-column layout for tasks and form
- Sticky task creation form on the right
- Full navigation bar

### Tablet & Mobile (≤ 768px)
- Single-column layout
- Task creation form fixed at the bottom of the screen
- Compact navigation with smaller buttons
- Touch-friendly button sizes
- Optimized spacing and typography

### Small Mobile (≤ 480px)
- Further optimized spacing
- Reduced font sizes for better readability
- Stacked buttons for easier interaction

## Design Decisions

### Technology Stack
The technology choices for this project were made based on familiarity and efficiency:

- **React**: Chosen for the frontend because of familiarity with component-based architecture and its ecosystem.
- **Project Structure**: The folder organization (separating components and views) was designed based on previous experience with React projects, promoting maintainability and scalability.
- **Libraries**: 
  - **Axios** - Familiar HTTP client with clean syntax for API calls
  - **React Router** - Standard routing solution for React applications
  - **JWT Decode** - Lightweight library for handling authentication tokens

This approach allowed for rapid development while maintaining code quality and following best practices.

### Code Language
All code, including comments, variable names, function names, and documentation within the code, is written in **English**. This decision was made because:
- It's how I was taught at university
- English is the industry standard for programming
- It ensures better collaboration and code readability for international teams
- It aligns with best practices in software development

### Development Time
**Approximate development time: 4 hours**

This included planning, implementation of all features, styling, responsive design, and documentation.

## Usage

1. **Landing Page**: Welcome screen with options to sign up or log in
2. **Sign Up**: Create a new account with username, email, and password
3. **Log In**: Access your account with email and password
4. **Home/Dashboard**: View all your tasks and create new ones
5. **Task Management**:
   - Create tasks with title and description
   - Toggle task status (completed/uncompleted)
   - Delete tasks you no longer need
6. **Log Out**: Securely log out of your account

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Author

[iverrr78](https://github.com/iverrr78)

---

## 🇪🇸 Versión en Español

Una aplicación moderna y responsiva de gestión de tareas construida con React y Node.js. Esta aplicación permite a los usuarios crear, gestionar y organizar sus tareas diarias de manera eficiente.

## Características

- **Autenticación de Usuarios**: Registro e inicio de sesión seguros con tokens JWT
- **Gestión de Tareas**: Crear, ver, actualizar y eliminar tareas
- **Estado de Tareas**: Alternar tareas entre estados completado e incompleto
- **Diseño Responsivo**: Interfaz completamente responsiva que funciona perfectamente en escritorio, tablet y dispositivos móviles
- **UI Moderna**: Interfaz de usuario limpia e intuitiva con fondos degradados y animaciones suaves
- **Rutas Protegidas**: Acceso seguro a listas de tareas específicas del usuario

## Tecnologías Utilizadas

### Frontend
- **React** - Biblioteca de UI para construir interfaces basadas en componentes
- **React Router** - Navegación y enrutamiento
- **Axios** - Cliente HTTP para peticiones API
- **JWT Decode** - Decodificación de JSON Web Tokens
- **CSS3** - Estilizado moderno con flexbox, grid y media queries responsivas

### Backend (Requerido)
- Node.js con Express
- Base de datos MySQL
- JWT para autenticación

## Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd frontend-prueba-tecnica-to-to-app
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

## Configuración del Backend

Este frontend requiere una API backend ejecutándose en `http://localhost:3001`. El backend debe proporcionar los siguientes endpoints:

- `POST /auth/register` - Registro de usuario
- `POST /auth/login` - Inicio de sesión de usuario
- `GET /tasks/:userId` - Obtener todas las tareas de un usuario
- `POST /tasks` - Crear una nueva tarea
- `DELETE /tasks/:taskId` - Eliminar una tarea
- `PUT /tasks/:taskId` - Actualizar estado de tarea

## Estructura del Proyecto

```
src/
├── components/
│   ├── AuthForm.js      # Formulario de autenticación reutilizable
│   ├── navbar.js        # Componente de barra de navegación
│   ├── task.js          # Componente de tarjeta de tarea individual
│   └── taskform.js      # Formulario para crear nuevas tareas
├── views/
│   ├── home.js          # Panel principal con tareas
│   ├── landingpage.js   # Página de inicio
│   ├── login.js         # Página de inicio de sesión
│   └── register.js      # Página de registro
├── App.js               # Componente principal de la app con enrutamiento
├── App.css              # Estilos globales
└── index.js             # Punto de entrada de la app
```

## Diseño Responsivo

La aplicación es completamente responsiva y optimizada para varios tamaños de pantalla:

### Escritorio (> 768px)
- Diseño de dos columnas para tareas y formulario
- Formulario de creación de tareas fijo a la derecha
- Barra de navegación completa

### Tablet y Móvil (≤ 768px)
- Diseño de una sola columna
- Formulario de creación de tareas fijo en la parte inferior de la pantalla
- Navegación compacta con botones más pequeños
- Tamaños de botones adaptados para táctil
- Espaciado y tipografía optimizados

### Móvil Pequeño (≤ 480px)
- Espaciado aún más optimizado
- Tamaños de fuente reducidos para mejor legibilidad
- Botones apilados para interacción más fácil

## Decisiones de Diseño

### Stack Tecnológico
Las elecciones tecnológicas para este proyecto se realizaron basándose en familiaridad y eficiencia:

- **React**: Elegido para el frontend por la familiaridad con la arquitectura basada en componentes y su ecosistema.
- **Estructura del Proyecto**: La organización de carpetas (separando componentes y vistas) fue diseñada basándose en experiencia previa con proyectos React, promoviendo mantenibilidad y escalabilidad.
- **Librerías**:
  - **Axios** - Cliente HTTP familiar con sintaxis limpia para llamadas API
  - **React Router** - Solución estándar de enrutamiento para aplicaciones React
  - **JWT Decode** - Librería ligera para manejar tokens de autenticación

Este enfoque permitió un desarrollo rápido manteniendo la calidad del código y siguiendo las mejores prácticas.

### Idioma del Código
Todo el código, incluyendo comentarios, nombres de variables, nombres de funciones y documentación dentro del código, está escrito en **inglés**. Esta decisión se tomó porque:
- Es como me enseñaron en la universidad
- El inglés es el estándar de la industria para programación
- Asegura mejor colaboración y legibilidad del código para equipos internacionales
- Se alinea con las mejores prácticas en desarrollo de software

### Tiempo de Desarrollo
**Tiempo aproximado de desarrollo: 4 horas**

Esto incluyó planificación, implementación de todas las funcionalidades, estilizado, diseño responsivo y documentación.

## Uso

1. **Página de Inicio**: Pantalla de bienvenida con opciones para registrarse o iniciar sesión
2. **Registrarse**: Crear una nueva cuenta con nombre de usuario, correo electrónico y contraseña
3. **Iniciar Sesión**: Acceder a tu cuenta con correo electrónico y contraseña
4. **Inicio/Panel**: Ver todas tus tareas y crear nuevas
5. **Gestión de Tareas**:
   - Crear tareas con título y descripción
   - Alternar estado de tarea (completado/incompleto)
   - Eliminar tareas que ya no necesites
6. **Cerrar Sesión**: Salir de tu cuenta de forma segura

## Scripts Disponibles

### `npm start`
Ejecuta la aplicación en modo de desarrollo en [http://localhost:3000](http://localhost:3000)

### `npm test`
Lanza el ejecutor de pruebas en modo interactivo

### `npm run build`
Construye la aplicación para producción en la carpeta `build`

### `npm run eject`
**Nota: esta es una operación irreversible. Una vez que ejecutes `eject`, ¡no podrás volver atrás!**

## Compatibilidad de Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
- Navegadores móviles (iOS Safari, Chrome Mobile)

## Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## Autor

[iverrr78](https://github.com/iverrr78)
