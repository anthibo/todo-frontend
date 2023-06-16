import TodoList from '@/components/organisms/TodoList';
import { listTodosQuery } from '@/lib/graphql/queries/todo.query';
import { Suspense } from 'react';

export default async function Home() {
  const todos = await listTodosQuery()
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold my-4">Todo List</h1>
        <Suspense fallback={<>...loading</>}>
          {todos && (
            <TodoList todos={todos} />
          )}
        </Suspense>

      </div>
    </div>

  )
}
