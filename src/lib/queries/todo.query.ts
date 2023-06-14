import { gql } from "@apollo/client"
import { TodoQueryResponse } from "@/types/todo.type"
import { client } from "../client"


export const listTodosQuery = async () => {
    const listTodosQuery = gql`query{
        todos{
        id
        createdAt
        updatedAt
        title
        user{
            id
            name
        }
    }
  }`
    const { data: { todos }, error } = await client.query<TodoQueryResponse>({ query: listTodosQuery })

    // TODO: Implement global error handling
    if (error) {
        throw new Error(error.message)
    }

    return todos
}