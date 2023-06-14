'use client'

import { Todo, TodoStatus } from "@/types/todo.type";
import StatusUpdater from "../atoms/StatusUpdater";
import UsersSelect from "../atoms/UsersSelect";

type TodoRowProps = {
  todo: Todo;
}

export default function TodoRow({ todo }: TodoRowProps) {
  const { id, status, title, user } = todo
  return (
    <div className={`flex items-center justify-between border-b border-gray-500 py-2 ${todo.status === TodoStatus.DONE ? 'line-through text-gray-500' : ''
      }`}>
      {/* <Avatar rounded placeholderInitials="as" /> */}
      <span>{title}</span>
      <h1>By: {user.name}</h1>
      <StatusUpdater currentStatus={status} todoId={id} />
      <button
        className="ml-2 text-red-600 hover:text-red-900"
      //   onClick={() => handleRemoveTodo(todo.id)}
      >
        Remove
      </button>
    </div>
  )
}