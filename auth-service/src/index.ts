import { UserController } from "./application/controllers/UserController";
import userRoutes from "./application/routes/userRoutes";
import { UserInteractor } from "./domain/usecases/UserInteractor";
import { UserRepository } from "./infrastructure/db/prisma/UserRepository";
import { createServer } from "./server";
import { prisma } from "./infrastructure/db/prisma/client";

const app = createServer()

const repository = new UserRepository(prisma)
const interactor = new UserInteractor(repository)
const controller = new UserController(interactor)

app.use('/api', userRoutes(controller))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`🚀 Product Service is running on port ${PORT}`)
})