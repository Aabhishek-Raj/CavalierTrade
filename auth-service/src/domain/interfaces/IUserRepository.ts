import { CreateUserDTO } from "../dto/UserDTO";
import { User } from "../entities/User";

export interface IUserRepository {
    create(data: CreateUserDTO): Promise<User>
}