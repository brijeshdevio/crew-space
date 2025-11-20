import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from 'src/schemas/post.schema';
import { CreatePostDto } from './dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  private isValidId(id: string) {
    if (Types.ObjectId.isValid(id)) {
      return true;
    }
    throw new BadRequestException(`Invalid group ID: ${id}`);
  }

  async createPost(user: string, data: CreatePostDto): Promise<Post> {
    this.isValidId(data.group);

    const newPost = await this.postModel.create({
      ...data,
      user,
    });
    return newPost;
  }

  async findPostsByGroup(user: string, group: string): Promise<Post[]> {
    this.isValidId(group);

    const posts = await this.postModel
      .find({ group, user })
      .lean()
      .select('-__v -group')
      .populate('user', 'name')
      .sort({ createdAt: -1 });
    return posts;
  }
}
