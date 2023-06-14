import TodoRow from '@/components/molecules/TodoRow';
import { listTodosQuery } from '@/lib/queries/todo.query';
import CreateTodo from '../molecules/CreateTodo';

export default async function TodoList() {
    const todos = await listTodosQuery()
    return (
        <div className="flex flex-col items-center">
                <CreateTodo />
            <h1 className="text-3xl font-bold my-4">Todo List</h1>
            <div className="w-full max-w-md">
                {todos && todos.map((todo, i) => (
                    <TodoRow todo={todo} key={i} />))}
            </div>
        </div>
    )
}
