import { User } from "./user.type";

export enum TodoStatus {
    DONE = 'done',
    PENDING = 'pending',
}

export type Todo = {
    id: string
    title: string;
    status: TodoStatus;
    user: User;
}

export type TodoSlice = {
    todos: Todo[]
    setTodos: (todos: Todo[]) => void
    addTodo: (todo: Todo) => void
    removeTodo: (todoId: string) => void
}

export type CreateTodoDto = {
    userId: string
    title: string;
}

export type CreateTodoResponse = {
    createTodo: Todo
}

export type UpdateTodoStatus = {
    todoId: string
    todoStatus: TodoStatus;
}

export type TodoQueryResponse = {
    todos: Todo[]
}