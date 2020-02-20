import uuid from "uuid/v4";
const projectFactory = ({
  title = "New Project",
  priority = false,
  todos = []
}) => {
  const state = {
    title,
    priority,
    todos,
    id: uuid()
  };
  const getTodos = () => {
    return Object.assign([], state.todos);
  };
  const addTodo = todo => {
    // call to local storage, push entire projects array?
    state.todos.push(todo);
  };
  const removeTodo = id => {
    state.todos = state.todos.filter(todo => {
      return todo.getTodo().id !== id;
    });
  };
  const getTodo = id => {
    return state.todos.find(todo => {
      return todo.id == id;
    });
  };
  const editTodo = id => {
    let todo = state.todos.find(todo => {
      return todo.getTodo().id === id;
    });
  };

  const togglePriority = () => {
    state.priority = !state.priority;
  };

  const getTitle = () => {
    return state.title;
  };
  const getId = () => {
    return state.id;
  };
  return {
    getTodos,
    addTodo,
    editTodo,
    removeTodo,
    getTodo,
    togglePriority,
    getTitle,
    getId
  };
};

export { projectFactory };