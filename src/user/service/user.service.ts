import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError'
import { CreateUserRequest } from '../request/createUserRequest';
import { CreateUserResponse } from '../response/createUserResponse';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
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

  async createUser(createUserRequest: CreateUserRequest): Promise<any> {
    const user: User = new User();
    user.username = createUserRequest.username;
    user.password = createUserRequest.password;
    user.isActive = true;
    try {
      const createUserResponse: CreateUserResponse = new CreateUserResponse(await this.usersRepository.save(user));
      return createUserResponse;
    }
    catch (error) {
      throw new BadRequestException(`Could not create user with username ${user.username}: ${error.message}`);
    }

  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}