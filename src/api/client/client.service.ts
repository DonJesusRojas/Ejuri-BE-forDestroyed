import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { Repository } from 'typeorm';
import { CreateClientDto, UpdateClientDto } from './client.dto';

@Injectable()
export class ClientService {
    @InjectRepository(Client)
    private readonly repository: Repository<Client>;

    public getClients(): Promise<Client[]>{
        return this.repository.find();
    }

    public getClient(id: number): Promise<Client>{
        return this.repository.findOneBy({ id: id});
    }

    public createClient(body: CreateClientDto): Promise<Client>{
        const client: Client = new Client();
        client.name = body.name;
        return this.repository.save(client);
    }

    public async updateClient(id: number, body: CreateClientDto): Promise<Client>{
        const client: Client = await this.getClient(id);
        client.name = body.name;
        return this.repository.save(client);
    }

    public async deleteClient(id: number): Promise<Client>{
        const client: Client = await this.getClient(id);
        client.isDeleted = true;
        return this.repository.save(client);
    }

    
}
