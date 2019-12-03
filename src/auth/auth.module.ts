import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { User } from './../users/user.entity';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  providers: [UsersService, AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
