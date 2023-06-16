'use client'

import TodoRow from '@/components/molecules/TodoRow';
import CreateTodo from '../molecules/CreateTodo';
import { Todo } from '@/types/todo.type';
import { useAppStore } from '@/lib/state/store';
import { useEffect } from 'react';
type TodoListProps = {
    todos: Todo[]
}
export default function TodoList({ todos }: TodoListProps) {
    const { setTodos, todos: savedTodos } = useAppStore();
    useEffect(() => {
        setTodos(todos);
    }, [todos])

    return (
        <div>
            <CreateTodo />
            <div className="w-full max-w-md">
                {savedTodos && savedTodos.map((todo, i) => (
                    <TodoRow todo={todo} key={i} />))}
            </div>
        </div>
    )
}
