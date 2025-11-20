import { CreateUserDTO, UserResponseDTO } from "../dto/UserDTO";

export interface IUserInteractor {
    createUser(input: CreateUserDTO): Promise<UserResponseDTO>
}