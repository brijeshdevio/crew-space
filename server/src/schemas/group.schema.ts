import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type GroupDocument = HydratedDocument<Group>;

@Schema({ timestamps: true })
export class Group {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;

  @Prop({ type: String })
  description: string;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
