import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async handleSignup(@Body() body: SignUpDto) {
    await this.authService.signUp(body);
    return { message: 'Account successfully created!' };
  }

  @Post('login')
  async handleSignIn(@Body() body: SignInDto) {
    const { accessToken } = await this.authService.signIn(body);
    return { accessToken };
  }
}
