'use client'

import React from 'react'
import { Label, Select } from 'flowbite-react';
import { TodoStatus } from '@/types/todo.type';

type StatusUpdaterProps = {
    todoId: string;
    currentStatus: TodoStatus;
}

const TODO_STATUS_VALUES = [TodoStatus.PENDING, TodoStatus.DONE]

export default function StatusUpdater({ todoId, currentStatus }: StatusUpdaterProps) {
    return (
        <Select
            id="todoStatus"
            required
            defaultValue={currentStatus}
        >
            {TODO_STATUS_VALUES.map((status, i) => (
                <option key={i} className='uppercase'>
                    {status}
                </option>
            ))}
        </Select>
    )
}
