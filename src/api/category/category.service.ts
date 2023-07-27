import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  @InjectRepository(Category)
  private readonly repository: Repository<Category>;

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category: Category = new Category();
    category.name = createCategoryDto.name;

    return this.repository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({id: id});
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
