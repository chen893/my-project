import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';
interface comment {
  type: number;
  answer: string;
}
@Entity()
export class Comments {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  // @OneToMany((type) => Comment, (comment) => comment.comments)
  arr: comment[];
}
