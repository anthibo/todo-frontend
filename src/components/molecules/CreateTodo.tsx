'use client'

import React, { Suspense } from 'react'
import UsersSelect from '../atoms/UsersSelect'
import { Input } from '@chakra-ui/react'

export default function CreateTodo() {
  return (
    <div className={'flex items-center justify-between border-b border-gray-500 py-2'}>
      <Suspense fallback={<>...loading</>}>
        <UsersSelect />
      </Suspense>
      <Input placeholder='Basic usage' />
      <button
        className="ml-2 text-red-600 hover:text-red-900"
        // onClick={() => handleCreateTodo(todo.id)}
      >
        Create
      </button>
    </div>
  )
}
