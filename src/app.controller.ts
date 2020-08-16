import { Controller } from '@nestjs/common';
import { AuthService } from './auth/service/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }
}