import { User as PrismaUser } from "@prisma/client";
import { User } from "../../../domain/entities/User";

export class UserMapper {
  static toDomain(prismaUser: PrismaUser): User {
    return new User(
      prismaUser.id,
      prismaUser.name,
      prismaUser.email,
      prismaUser.createdAt
    );
  }

  static toPrisma(user: User): PrismaUser {
    // only useful if you ever need to send `User` back to the DB
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}
