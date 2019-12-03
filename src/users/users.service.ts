
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(id: number): Promise<User[]> {
        return await this.usersRepository.find({
          // Properties to return. We don't want the password property.
            select: ["id", "firstname", "lastname", "email"],
            where: [{ "id": id }]
        });
    }

    async getUserByEmail(email: string): Promise<User | undefined> {
      return this.usersRepository.findOne({ email: email })
    }

    async createUser(user: User) {
      await this.usersRepository.insert(user)
      return this.getUser(user.id);
  }

    async updateUser(user: User) {
        return await this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}