import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { AuthGuard } from 'src/common';
import { CreatePostDto } from './dto';

@UseGuards(AuthGuard)
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async handleCreatePost(
    @Req() req: { user: { sub: string } },
    @Body() body: CreatePostDto,
  ) {
    const userId = req.user.sub;
    await this.postService.createPost(userId, body);
    return { message: 'Post created successfully' };
  }

  @Get(':id')
  async handleFindPostsByGroup(
    @Req() req: { user: { sub: string } },
    @Param('id') groupId: string,
  ) {
    const userId = req.user.sub;
    const posts = await this.postService.findPostsByGroup(userId, groupId);
    return posts;
  }
}
