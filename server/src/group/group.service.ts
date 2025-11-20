import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Group } from 'src/schemas/group.schema';
import { CreateGroupDto } from './dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(Group.name) private readonly groupModel: Model<Group>,
  ) {}

  private isValidId(id: string) {
    if (Types.ObjectId.isValid(id)) {
      return true;
    }
    throw new BadRequestException(`Invalid group ID: ${id}`);
  }

  async createGroup(user: string, data: CreateGroupDto): Promise<Group> {
    const newGroup = await this.groupModel.create({
      user,
      ...data,
    });
    return newGroup;
  }

  async findGroupsByUser(user: string): Promise<Group[]> {
    return this.groupModel.find({ user }).lean().select('-__v -user');
  }

  async findGroupById(user: string, id: string): Promise<Group> {
    this.isValidId(id);

    const group = await this.groupModel
      .findOne({ user, _id: id })
      .lean()
      .select('-__v -user');
    if (group) {
      return group;
    }
    throw new ForbiddenException('You do not have access to this group');
  }
}
