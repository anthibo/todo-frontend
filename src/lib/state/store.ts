import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TodoSlice } from "@/types/todo.type";
import { createTodoSlice } from './slices/todo.slice';




type StoreState = TodoSlice

export const useAppStore = create<StoreState>()(
    persist((...a) => ({
        ...createTodoSlice(...a),
    }), {
        name: 'todo-persist',
        getStorage: () => localStorage
    }))