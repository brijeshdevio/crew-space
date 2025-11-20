import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { AuthGuard } from 'src/common';
import { CreateGroupDto } from './dto';

@UseGuards(AuthGuard)
@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async handleCreateGroup(
    @Req() req: { user: { sub: string } },
    @Body() body: CreateGroupDto,
  ) {
    const userId = req.user.sub;
    console.log('Creating group with data:', body);
    await this.groupService.createGroup(userId, body);
    return { message: 'Group created successfully' };
  }

  @Get()
  async handleFindGroupsByUser(@Req() req: { user: { sub: string } }) {
    const userId = req.user.sub;
    const groups = await this.groupService.findGroupsByUser(userId);
    return groups;
  }

  @Get(':id')
  async handleFindGroupById(
    @Req() req: { user: { sub: string } },
    @Param('id') groupId: string,
  ) {
    const userId = req.user.sub;
    const group = await this.groupService.findGroupById(userId, groupId);
    return group;
  }
}
