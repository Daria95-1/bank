import type { TransformedUser } from './user-transform'

export type Session = {
    id: number
    hash: string
    user: TransformedUser
}

export type DbSession = {
    id: number
    hash: string
    user: TransformedUser
}

export const sessionTransform = (dbSession: DbSession): Session => ({
    id: dbSession.id,
    hash: dbSession.hash,
    user: dbSession.user,
})
