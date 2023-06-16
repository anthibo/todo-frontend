'use client'

import { ListUsersQueryResponse } from '@/types/user.type'
import { gql } from '@apollo/client'
import { useSuspenseQuery,  } from '@apollo/experimental-nextjs-app-support/ssr'
import { Select } from 'flowbite-react'
import React, { Ref,  useRef } from 'react'

type UsersSelectProps = {
    userIdSelectRef: Ref<HTMLSelectElement>
}
export default function UsersSelect({userIdSelectRef: userIdRef}: UsersSelectProps) {
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
            defaultValue={users[0].id}
            ref={userIdRef}
        >
            {users && users.map(({ name, id }, i) => (
                <option key={i} className='uppercase' value={id}>
                    {name}
                </option>
            ))}
        </Select>
    )
}
