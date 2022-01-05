import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDTO } from './create-task.dto';

export class UpdateTaskStatusDTO extends PartialType(CreateTaskDTO) {
  completed: boolean;
}
