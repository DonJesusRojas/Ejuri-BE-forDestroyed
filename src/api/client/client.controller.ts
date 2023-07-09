import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';
import { CreateClientDto } from './client.dto';

@Controller('client')
export class ClientController {
    @Inject(ClientService)
    private readonly service: ClientService;

    @Get(':id')
    public getClient(@Param('id', ParseIntPipe)id: number): Promise<Client>{
        return this.service.getClient(id);
    }
    
    @Post()
    public createClient(@Body() body: CreateClientDto): Promise<Client>{
        return this.service.createClient(body);
    }
        
    @Get()
    public getClients(): Promise<Client[]>{
        return this.service.getClients();
    }

    @Delete(':id')
    public deleteClient(@Param('id', ParseIntPipe)id: number): Promise<Client>{
        return this.service.deleteClient(id);
    }
}
