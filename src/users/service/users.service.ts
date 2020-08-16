import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/users.entity';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError'


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findUser(userName: String): Promise<User> {
    try {
      const user: User = await this.usersRepository.findOneOrFail({
        where: {
          username: userName
        }
      });
      return user;

    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new NotFoundException('username ' + userName + ' not found.');
      }
      else {
        throw new Error(error);
      }
    }
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}