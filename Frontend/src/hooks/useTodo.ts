import {TodoItem} from "../models/todoItems";

export const useTodo = () => {
  const sortTodo = (todos: TodoItem[]) => {
      todos.sort((a, b) => b.isCompleted ? -1 : 1)
  }

  return { sortTodo }
}