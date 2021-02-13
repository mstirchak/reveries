import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginRequest } from '../request/loginRequest';
import { LocalAuthGuard } from '../guard/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() loginRequest: LoginRequest) {
    return this.authService.login(loginRequest);
  }
}