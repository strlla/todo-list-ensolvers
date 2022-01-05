import { Task } from '../../tasks/entities/task.entity';
import { Folder } from '../entities/folder.entity';
import { UpdateFolderDTO, CreateFolderDTO } from '../dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';

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
    const response = await this.folderRepository.delete(id);

    getConnection()
      .createQueryBuilder()
      .delete()
      .from(Task, 'task')
      .where('task.folderId = :id', { id })
      .execute();

    return response;
  }

  findAll() {
    return this.folderRepository.find();
  }

  findOne(id: string) {
    return this.folderRepository.findOne(id);
  }
}
