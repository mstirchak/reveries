import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { CreateUserRequest } from '../request/createUserRequest';
import { CreateUserResponse } from '../response/createUserResponse';
import { UsersService } from '../service/user.service';

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Post('/create')
    async createUser(@Body() createUserRequest: CreateUserRequest): Promise<CreateUserResponse>{
        const createUserResponse: CreateUserResponse = await this.userService.createUser(createUserRequest);
        return createUserResponse;
    }
}
