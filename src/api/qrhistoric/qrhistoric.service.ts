import { Injectable } from '@nestjs/common';
import { CreateQrhistoricDto } from './dto/create-qrhistoric.dto';
import { UpdateQrhistoricDto } from './dto/update-qrhistoric.dto';
import { Repository } from 'typeorm';
import { Qrhistoric } from './entities/qrhistoric.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QrhistoricService {
  @InjectRepository(Qrhistoric)
  private readonly qrhistoric: Repository<Qrhistoric>;


  public async create(createQrhistoricDto: CreateQrhistoricDto): Promise<Qrhistoric> {
    const qrhistoric: Qrhistoric = new Qrhistoric();
    qrhistoric.client = createQrhistoricDto.client;
    qrhistoric.folio = createQrhistoricDto.folio;
    qrhistoric.comments = createQrhistoricDto.comments;
    qrhistoric.document = createQrhistoricDto.document;
    qrhistoric.qr = createQrhistoricDto.qr;
    qrhistoric.user = createQrhistoricDto.user;
    qrhistoric.category = createQrhistoricDto.category;

    return await this.qrhistoric.save(qrhistoric);
  }

  public async findAll() : Promise<Qrhistoric[]>{
    return await this.qrhistoric.find({relations: ["client", "document","category","user"], order: {id: "DESC"}});
  }

  public async findOne(id: number) {
    return await this.qrhistoric.findOne({where: {id: id}});
  }

}
