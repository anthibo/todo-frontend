import { gql } from "@apollo/client"
import { TodoQueryResponse } from "@/types/todo.type"
import { client } from "../client"


export const listTodosQuery = async () => {
    const LIST_TODOS_QUERY = gql`query{
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
    const { data: { todos }, error } = await client.query<TodoQueryResponse>({ query: LIST_TODOS_QUERY })

    // TODO: Implement global error handling
    if (error) {
        throw new Error(error.message)
    }
    return todos
}