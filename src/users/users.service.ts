import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entity/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(userDto: any) {
    return this.userModel.create(userDto);
  }

  findByUsername(username: string) {
    return this.userModel.findOne({ username });
  }

  assignRole({ username, role }: { username: string; role: string }) {
    return this.userModel.findOneAndUpdate({ username }, { role }, { new: true });
  }
}