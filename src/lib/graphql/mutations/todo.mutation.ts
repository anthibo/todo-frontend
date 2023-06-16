import { useAppStore } from "@/lib/state/store";
import { MessageResponse } from "@/types/common.type";
import { CreateTodoResponse } from "@/types/todo.type"
import { gql, useMutation } from "@apollo/client"

export const useCreateTodoMutation = () => {
  const { addTodo } = useAppStore()
  const CREATE_TODO_MUTATION = gql`
  mutation CreateTodoMutation($userId: String!, $title: String!) {
    createTodo(createTodoInput: {userId: $userId, title: $title}) {
        id
        createdAt
        updatedAt
        title
        user{
            id
            name
        }
    }
  }
`;
  const [createTodo, { data, loading, error }] = useMutation<CreateTodoResponse>(CREATE_TODO_MUTATION, {
    onCompleted: (data => {
      const createdTodo = data.createTodo;
      addTodo(createdTodo)
    })
  });

  return { createTodo, data, loading, error }
}


export const useDeleteTodoMutation = () => {
  const DELETE_TODO_MUTATION = gql`
  mutation DeleteTodoMutation($todoId: String!) {
     deleteTodo( deleteTodoInput: {todoId: $todoId}){
        message
    }
  }
`;
  const [deleteTodo, { data, loading, error }] = useMutation<MessageResponse>(DELETE_TODO_MUTATION);

  return { deleteTodo, data, loading, error }
}