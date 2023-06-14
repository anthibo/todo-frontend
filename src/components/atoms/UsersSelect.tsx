'use client'

import { ListUsersQueryResponse } from '@/types/user.type'
import { gql } from '@apollo/client'
import { useSuspenseQuery,  } from '@apollo/experimental-nextjs-app-support/ssr'
import { Select } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

export default function UsersSelect() {
    const listUsersQuery = gql`query{
        users{
        id
        name
    }
  }`
    const { data: { users }, error } = useSuspenseQuery<ListUsersQueryResponse>(listUsersQuery);

    return (
        <Select
            id="userSelect"
            required
        >
            {users && users.map(({ name, id }, i) => (
                <option key={i} className='uppercase' value={id}>
                    {name}
                </option>
            ))}
        </Select>
    )
}
