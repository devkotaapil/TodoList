# Todo List App

A simple React + Vite todo list application styled with Tailwind CSS.

## Features

- Add new todos (using `AddTodo` component)
- Toggle completion status
- Delete todos
- Responsive UI

## Components

### AddTodo

The `AddTodo` component provides an input field and button to add new todos.  
It uses React state and calls the `onAddTodo` prop when a new todo is submitted.

**Example usage:**
```jsx
import AddTodo from './components/AddTodo';

function App() {
  const handleAddTodo = (todoText) => {
    // Add todo logic here
  };

  return (
    <AddTodo onAddTodo={handleAddTodo} />
  );
}
```

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd todo-list
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
todo-list/
  src/
    components/
      AddTodo.jsx
      TodoList.jsx
    App.jsx
    main.jsx
    index.css
  public/
  index.html
  package.json
  vite.config.js
  tailwind.config.js
  postcss.config.cjs
```

## Technologies Used

- React
- Vite
- Tailwind CSS

## License

MIT