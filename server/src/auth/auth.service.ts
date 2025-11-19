import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import argon2 from 'argon2';
import { User } from 'src/schemas/user.schema';
import { SignInDto, SignUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    return await argon2.hash(password);
  }

  private async verifyPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await argon2.verify(hashedPassword, password);
  }

  private async generateJwtToken(userId: string): Promise<string> {
    const payload = { sub: userId };
    return await this.jwtService.signAsync(payload);
  }

  async signUp(data: SignUpDto): Promise<void> {
    try {
      data.password = await this.hashPassword(data.password);
      await this.userModel.create(data);
    } catch (error: unknown) {
      const CONFLICT_ERROR_CODE = 11000;
      const err = error as { code: number };
      if (err.code === CONFLICT_ERROR_CODE) {
        throw new ConflictException('User with this email already exists');
      }
      throw error;
    }
  }

  async signIn(data: SignInDto): Promise<{ accessToken: string }> {
    const user = await this.userModel.findOne({ email: data.email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.verifyPassword(
      data.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.generateJwtToken(user._id.toString());
    return { accessToken };
  }
}
