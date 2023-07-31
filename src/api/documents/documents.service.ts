import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Document } from './entities/document.entity';
@Injectable()
export class DocumentsService {
  @InjectRepository(Document)
  private readonly repository: Repository<Document>;

  create(createDocumentDto: CreateDocumentDto): Promise<Document> {
    const document: Document = new Document();
    document.id = createDocumentDto.id;
    document.category = createDocumentDto.category;
    document.type = createDocumentDto.type;
    document.duplicate = createDocumentDto.duplicate;

    return this.repository.save(document);
  }

  findAll() : Promise<Document[]>{
    /* return this.repository.find(); */
    return this.repository.createQueryBuilder("document").leftJoinAndSelect("document.category", "category").getMany();
  }

  findOne(id: string) : Promise<Document>{
    return this.repository.findOneBy({ id: id});
  }

  public async update(id: string, updateDocumentDto: UpdateDocumentDto) {

    return await `Thi s action updates a #${id} document`;
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
     
  }

  public async findAllByType(type: string): Promise<Document[]>{
    return await this.repository.createQueryBuilder("document")
                                .leftJoinAndSelect("document.category", "category")
                                .where("document.category = :type", {type: type})
                                .getMany();
  } 
}
