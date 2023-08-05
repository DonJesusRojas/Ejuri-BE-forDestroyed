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

  async create(createDocumentDto: CreateDocumentDto): Promise<Document> {
    const exist = await this.findOne(createDocumentDto.id);
    if (exist) {
      return ;
    }
    return await this.repository.save({
      id: createDocumentDto.id,
      type: createDocumentDto.type,
      duplicate: createDocumentDto.duplicate,
      category: createDocumentDto.category
    });

    /* return this.repository.save(document); */
  }

  findAll() : Promise<Document[]>{
    /* return this.repository.find(); */
    /* return this.repository.createQueryBuilder("document").leftJoinAndSelect("document.category", "category").orderBy('id','ASC').getMany(); */
    return this.repository.find({ relations: ["category"], order: {id: "ASC"} })
  }

  findOne(id: string) : Promise<Document>{
    /* return this.repository.createQueryBuilder("document").leftJoinAndSelect("document.category", "category").where("document.id = :id", {id: id}).getOne(); */
    return this.repository.findOne({ where:{id:id},relations: ["category"] });
    /* return this.repository.findOneBy({ id: id}); */
  }

  public async update(id: string, updateDocumentDto: UpdateDocumentDto) {
    const exist = await this.findOne(id);
    if (!exist) {
      return;
    }

    const updatedDocument = Object.assign(exist, updateDocumentDto);
    return await this.repository.save(updatedDocument);
    /* return await this.repository.update(id, document); */
    /* return await `Thi s action updates a #${updateDocumentDto.type} document`; */
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
     
  }

  public async findAllByType(type: string): Promise<Document[]>{
    /* return await this.repository.find({ relations: ["category"], where: {  : type }, order: {id: "ASC"} }) */
    return await this.repository.createQueryBuilder("document")
                                .leftJoinAndSelect("document.category", "category")
                                .where("document.category = :type", {type: type}).orderBy('document.id','ASC')
                                .getMany();
  } 
}
