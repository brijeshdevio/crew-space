import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/common';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  async handleGetProfile(@Req() req: { user: { sub: string } }): Promise<any> {
    const userId = req.user.sub;
    const response = this.userService.getProfile(userId);
    return response;
  }
}
