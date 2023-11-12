//todo: this is copied directly from the backend for this tests, should organise it to use a shared components or mono-repo.

export interface TodoItem extends BaseTodoItem {
  id: string;
}

export interface BaseTodoItem {
  description: string;
  isCompleted: boolean;
}
