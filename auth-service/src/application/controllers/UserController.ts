import { NextFunction, Request, Response } from "express"
import { IUserInteractor } from "../../domain/interfaces/IUserInteractor"

export class UserController {
    private interactor: IUserInteractor

    constructor(interactor: IUserInteractor) {
        this.interactor = interactor
    }

    async onCreateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body

            const data = await this.interactor.createUser(body)
            res.status(201).json(data)
            return
               
        } catch (err) {
            next(err)
        }
    }
}