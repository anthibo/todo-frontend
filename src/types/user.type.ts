export type User = {
    id: string
    name: string;
}

export type ListUsersQueryResponse = {
    users: User[]
}