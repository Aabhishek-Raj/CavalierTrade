import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { CreateUserDTO } from "../../../domain/dto/UserDTO";
import { PrismaClient } from "@prisma/client"

export class UserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async create(data: CreateUserDTO): Promise<User> {
        const dbUser = await this.prisma.user.create({ data: {
            name: data.name,
            email: data.email
        }})

        return new User(dbUser.id, dbUser.name, dbUser.email, dbUser.createdAt);
        // return UserMapper.toDomain(dbUser);
    }
}