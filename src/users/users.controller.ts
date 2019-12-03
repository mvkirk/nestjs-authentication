import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}