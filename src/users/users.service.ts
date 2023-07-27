import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    @InjectRepository(User)
    private readonly userRepository: Repository<User>;

    public async create(userdto: CreateUserDto): Promise<User> {
        const user = new User();
        user.name = userdto.name;
        user.email = userdto.email;
        user.password = userdto.password;
        return await this.userRepository.save(user);
    }

    public async findOne(email: string): Promise<User> {

        //const user = await this.userRepository.findOne({ where: { email } });
        return await this.userRepository.findOne({ where: { email: email } });
        
    }

    public async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOne({ where: { id: id } });
    }
    public async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}
