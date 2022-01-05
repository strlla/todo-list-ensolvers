import { 
    PrimaryColumn,
    OneToMany, 
    Column, 
    Entity, 
} from 'typeorm';

import { Task } from '../../tasks/entities/task.entity';

@Entity()
export class Folder {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @OneToMany((type) => Task, (task) => task.folderId, { cascade: true })
  tasks: Task[];
}