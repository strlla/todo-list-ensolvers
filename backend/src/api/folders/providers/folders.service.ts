import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateFolderDTO } from '../dto/update-folder.dto';
import { CreateFolderDTO } from '../dto/create-folder.dto';
import { Task } from '../../tasks/entities/task.entity';
import { Folder } from '../entities/folder.entity';

@Injectable()
export class FoldersService {
  constructor(
    @InjectRepository(Folder)
    private folderRepository: Repository<Folder>,
    @InjectRepository(Folder)
    private taskRepository: Repository<Task>,
  ) {}
  async create(createFolderDTO: CreateFolderDTO) {
    return await this.folderRepository.insert(createFolderDTO);
  }
  async update(id: string, updateFolderDto: UpdateFolderDTO) {
    return await this.folderRepository.save(updateFolderDto);
  }

  async remove(id: string) {
    return await this.folderRepository.delete(id);
  }
  findAll() {
    return this.folderRepository.find();
  }

  findOne(id: string) {
    return this.folderRepository.findOne(id, { relations: ['tasks'] });
  }
}
