import { Injectable } from '@nestjs/common';
import { UsersService } from '../../user/service/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from '../response/loginResponse';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<LoginResponse> {
    const payload = { username: user.username, sub: user.userId };
    return new LoginResponse(this.jwtService.sign(payload));
  };
}
