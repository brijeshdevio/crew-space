import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async handleSignup(@Body() body: SignUpDto) {
    await this.authService.signUp(body);
    return { message: 'Account successfully created!' };
  }

  @Post('login')
  async handleSignIn(
    @Body() body: SignInDto,
    @Res() res: Response,
  ): Promise<Response> {
    const { accessToken } = await this.authService.signIn(body);
    res.cookie('access_token', accessToken, { httpOnly: true, secure: false });
    return res.json({ accessToken });
  }
}
