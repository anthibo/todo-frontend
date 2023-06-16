'use client'

import React, { Suspense, useEffect, useRef } from 'react'
import UsersSelect from '../atoms/UsersSelect'
import { Input } from '@chakra-ui/react'
import { useCreateTodoMutation } from '@/lib/graphql/mutations/todo.mutation'
import { CreateTodoDto } from '@/types/todo.type'
import { useAppStore } from '@/lib/state/store'

export default function CreateTodo() {
  const userSelectIdRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const { createTodo, data, error, loading } = useCreateTodoMutation()
  const handleCreateTodo = async () => {
    const title = titleRef.current?.value || ''
    let userId: string
    if (!userSelectIdRef.current?.value) {
      return
    }
    userId = userSelectIdRef.current?.value
    await createTodo({ variables: { title, userId }, })
    if (titleRef.current) {
      titleRef.current.value = '';
    }
  }

  return (
    <div className={'flex items-center justify-between border-b border-gray-500 py-2'}>
      <Suspense fallback={<>...loading</>}>
        <UsersSelect userIdSelectRef={userSelectIdRef} />
      </Suspense>
      <Input placeholder='Basic usage' ref={titleRef} />
      <button
        className="ml-2 text-red-600 hover:text-red-900"
        onClick={handleCreateTodo}
      >
        Create
      </button>
    </div>
  )
}
