import { CreateFolderDTO } from './create-folder.dto';
import { Task } from '../../tasks/entities/task.entity';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFolderDTO extends PartialType(CreateFolderDTO) {
    tasks: Task[]
}