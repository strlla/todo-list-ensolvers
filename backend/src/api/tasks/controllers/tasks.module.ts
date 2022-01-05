import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Folder } from '../../folders/entities/folder.entity';
import { TasksController } from './tasks.controller';
import { TasksService } from '../providers/tasks.service';
import { Task } from '../entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}