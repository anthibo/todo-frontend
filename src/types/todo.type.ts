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

export type CreateTodo = {
    userId: string
    title: string;
}

export type UpdateTodoStatus = {
    todoId: string
    todoStatus: TodoStatus;
}

export type TodoQueryResponse = {
    todos: Todo[]
}