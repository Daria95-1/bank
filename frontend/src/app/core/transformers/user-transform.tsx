export type TransformedUser = {
    id: number | string | null
    login: string
    password?: string
    roleId: string
}

export type DbUser = {
    id: number
    login: string
    password: string
    role_id: string
}

export const userTransform = (dbUser: DbUser): TransformedUser => ({
    id: dbUser.id,
    login: dbUser.login,
    password: dbUser.password,
    roleId: dbUser.role_id,
})
