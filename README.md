# Elevate Animation

This is a React application built with Vite, featuring animated geometric shapes and stars using Framer Motion and styled with Tailwind CSS. The app demonstrates smooth animations and transitions for an engaging user experience.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```sh
   cd elevate-animation
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

To start the development server with hot reloading:

```sh
npm run dev
```

This will start the Vite dev server, typically at `http://localhost:5173`.

### Building for Production

To build the project for production:

```sh
npm run build
```

The built files will be in the `dist` directory.

### Previewing the Build

To preview the production build locally:

```sh
npm run preview
```

### Linting

To run ESLint for code quality checks:

```sh
npm run lint
```

## Viewing the Deployed Version

You can view the deployed version of this application at [this link](https://elevate-animation-gules.vercel.app).

## Project Structure

- [`src/App.jsx`](src/App.jsx): Main application component with animation logic.
- [`src/components/Star.jsx`](src/components/Star.jsx): Star component with Framer Motion animations.
- [`src/components/GeometricShape.jsx`](src/components/GeometricShape.jsx): Geometric shape component with gradient animations.
- [`src/main.jsx`](src/main.jsx): Entry point for the React app.
- [`src/index.css`](src/index.css): Global styles with Tailwind imports.
- [`vite.config.js`](vite.config.js): Vite configuration.
- [`tailwind.config.js`](tailwind.config.js): Tailwind CSS configuration.

## Technologies Used

- React 19
- Vite
- Framer Motion
- Tailwind CSS
- ESLint

For more information on Vite, visit the [Vite documentation](https://vitejs.dev/). For Framer Motion, check out [Framer Motion docs](https://www.framer.com/motion/).
