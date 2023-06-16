import { gql } from "@apollo/client"
import { TodoQueryResponse } from "@/types/todo.type"
import { client } from "../client"
import { ListUsersQueryResponse } from "@/types/user.type"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"


export const listUsersQuery = async () => {
    const listUserssQuery = gql`query{
        users{
        id
        name
    }
  }`
    const { data: { users }, error } = await client.query<ListUsersQueryResponse>({ query: listUserssQuery })

    // TODO: Implement global error handling
    if (error) {
        throw new Error(error.message)
    }

    return users
}

 