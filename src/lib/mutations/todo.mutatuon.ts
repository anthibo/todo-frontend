import { CreateTodo } from "@/types/todo.type"
import { gql } from "@apollo/client"
import { client } from "../client"
import { MessageResponse } from "@/types/common.type"

export const createTodo = async ({ title, userId }: CreateTodo) => {
    const createTodoMutation = gql`mutation{
        createTodo(createTodoInput: {
            title: "${title}"
            userId: "${userId}"
        }){
            message
        }
    }`

    const {data, errors} = await client.mutate<MessageResponse>({ mutation: createTodoMutation })
    if(errors){
        console.log(errors)
        throw new Error(errors[0].message)
    }
}

export const useUpdateTodoStatusMutation = (todoId: string, ) => {

}

export const useCreateTodoMutation = ({ title, userId }: CreateTodo) => {
    const createTodoMutation = gql`mutation{
        createTodo(createTodoInput: {
            title: "${title}"
            userId: "${userId}"
        }){
            message
        }
    }`
    

}