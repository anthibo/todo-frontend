import { TodoSlice } from "@/types/todo.type"
import { StateCreator } from "zustand"

export const createTodoSlice: StateCreator<TodoSlice> = (set, get) => ({
    todos: [],
    setTodos: (todos) => {
        set({todos})
    },
    addTodo: (todo) => {
        set({todos: [todo, ...get().todos]})
    },
    removeTodo: (removedTodoId) => {
        set({todos: get().todos.filter(todo => todo.id !== removedTodoId)})
    },
    // updateTodoStatus: (updatedTodo, to) => {
    //     set({todos: get().todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)})
    // }

})