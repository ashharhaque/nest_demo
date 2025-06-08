// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from './../users/entity/user.schema'
import { UsersModule } from './../users/users.module';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_jwt_secret',
      signOptions: { expiresIn: '1d' },
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports: [MongooseModule], 
})
export class AuthModule {}
