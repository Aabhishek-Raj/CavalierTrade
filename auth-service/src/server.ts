import express, { Express } from 'express'
import dotenv from 'dotenv'

dotenv.config()

export const createServer = (): Express => {
    const app = express()

    //  Build-in middleware
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // Custom middleware can go here
    // eg: logging, cors, auth, etc

    return app
}