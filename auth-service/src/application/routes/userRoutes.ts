import express from 'express'
import { UserController } from '../controllers/UserController'

export default function userRoutes(controller: UserController) {
    const router = express.Router()

    router.post('/users', controller.onCreateUser.bind(controller))
    return router

}       