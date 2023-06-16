'use client'

import { Todo, TodoStatus } from "@/types/todo.type";
import StatusUpdater from "../atoms/StatusUpdater";
import UsersSelect from "../atoms/UsersSelect";
import { useDeleteTodoMutation } from "@/lib/graphql/mutations/todo.mutation";
import { useAppStore } from "@/lib/state/store";

type TodoRowProps = {
  todo: Todo;
}

export default function TodoRow({ todo }: TodoRowProps) {
  const { removeTodo } = useAppStore()
  const { id: todoId, status, title, user } = todo
  const { deleteTodo } = useDeleteTodoMutation()
  const handleRemoveTodo = async () => {
    const { errors } = await deleteTodo({ variables: { todoId } })
    if (!errors) {
      removeTodo(todoId);
    }
  }
  return (
    <div className={`flex items-center justify-between border-b border-gray-500 py-2 ${todo.status === TodoStatus.DONE ? 'line-through text-gray-500' : ''
      }`}>
      <span>{title}</span>
      <h1>By: {user.name}</h1>
      <StatusUpdater currentStatus={status} todoId={todoId} />
      <button
        className="ml-2 text-red-600 hover:text-red-900"
        onClick={handleRemoveTodo}
      >
        Remove
      </button>
    </div>
  )
}