import { Entity, Column, ObjectIdColumn, ManyToOne } from 'typeorm';
import { Comments } from './comments.entity';
@Entity()
export class Comment {
  @ObjectIdColumn()
  id: string;

  @Column()
  type: number;

  @Column()
  answer: string;

  @ManyToOne((type) => Comments, (comments) => comments.arr)
  comments: Comments;
}
