# React Todo App with Docker

## Overview

This project is a Todo application built with React.js, utilizing Docker for containerization. 
Users can manage their todos efficiently, including adding new todos, marking them as complete, deleting todos, filtering todos based on their completion status, toggling between light and dark mode, and dragging and dropping to reorder items on the list.

### The challenge (In Development)

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- Drag and drop to reorder items on the list

### images

![](./design/desktop-design-dark.jpg)
![](./design/mobile-design-dark.jpg)

## Built with

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- Sass - CSS preprocessor
- Flexbox - CSS layout model
- [Docker](https://www.docker.com/) - Containerization platform

## Getting Started

### Prerequisites

Before running this project, you need to have Docker installed on your machine. You can download and install Docker from [here](https://www.docker.com/get-started).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/react-todo-app.git
   ```

2. Navigate to the project directory:

   ```sh
   cd react-todo-app
   ```

3. Build the Docker image:

   ```sh
   docker build -t react-todo-app .
   ```

4. Run the Docker container:

   ```sh
   docker run -it -p 3000:3000 react-todo-app
   ```

5. Open your browser and go to http://localhost:3000 to view the application.

### Author

## Acknowledgments
- GitHub - [mccartheney](https://github.com/mccartheney)
- LinkedIn - [McCartheney Mendes](https://www.linkedin.com/in/mccartheney-mendes-892709292/)
