import { getClient } from '@/lib/client'
import { gql } from '@apollo/client'
import {
  useFragment,
  useQuery,
  useSuspenseQuery,
} from "@apollo/experimental-nextjs-app-support/ssr";
import Image from 'next/image'

export default async function Home() {
  const query = gql`query{
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
  const client = getClient()
  const todos = await client.query({ query })
  console.log(todos)
  return (
    <div>
      {todos && todos.data.todos.map((todo: any) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </div>
  )
}
