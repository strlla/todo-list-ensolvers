import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryColumn()
  id: string
  @Column()
  text: string;
  @Column({ default: 0 })
  completed: boolean;
  @Column()
  folderId: string;
}
