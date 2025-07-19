import { authorize, register } from './operation'

export const server: {
    authorize: typeof authorize
    register: typeof register
} = {
    authorize,
    register,
}