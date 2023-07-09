import { Injectable } from '@nestjs/common';
import { CreateQrhistoricDto } from './dto/create-qrhistoric.dto';
import { UpdateQrhistoricDto } from './dto/update-qrhistoric.dto';

@Injectable()
export class QrhistoricService {
  create(createQrhistoricDto: CreateQrhistoricDto) {
    return 'This action adds a new qrhistoric';
  }

  findAll() {
    return `This action returns all qrhistoric`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qrhistoric`;
  }

  update(id: number, updateQrhistoricDto: UpdateQrhistoricDto) {
    return `This action updates a #${id} qrhistoric`;
  }

  remove(id: number) {
    return `This action removes a #${id} qrhistoric`;
  }
}
