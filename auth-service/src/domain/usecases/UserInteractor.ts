import { CreateUserDTO, UserResponseDTO } from "../dto/UserDTO";
import { IUserInteractor } from "../interfaces/IUserInteractor";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserInteractor implements IUserInteractor {

    private repository: IUserRepository

    constructor(repository: IUserRepository) {
        this.repository = repository
    }
    async createUser(input: CreateUserDTO): Promise<UserResponseDTO> {

        const data = await this.repository.create(input)
        return data
    }

}