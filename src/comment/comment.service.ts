import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './comments.entity';
// import { Comment } from './comment.entity';
@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comments)
    private commentesRepository: Repository<Comments>, // @InjectRepository(Comment) // private commenteRepository: Repository<Comment>,
  ) {}
  async addComment(addObject) {
    const item = { type: addObject.type, answer: addObject.answer };
    // console.log(item);

    const name = addObject.name;
    // const item = { name: 'a', arr: [{ type: 1, answer: 'tewa' }] };
    // const comment = {
    //   type: 0,
    //   answer: 'aa',
    // };
    // const user = await this.commenteRepository.save(comment);
    // console.log(user);

    // item.arr = [comment];
    // const te = await this.commentesRepository.save(item);
    // console.log(te);

    // const user = await this.commentesRepository.find();
    const user = await this.commentesRepository.find({ name });
    // await this.commentesRepository.remove(user);
    console.log(user);

    if (!user[0]) {
      return await this.commentesRepository.save({ name, arr: [item] });
    } else {
      const id = user[0].id;
      const changeValue = { name: user[0].name, arr: user[0].arr };
      changeValue.arr.push(item);
      // console.log(changeValue);
      return await this.commentesRepository.update(id, changeValue);
    }
  }

  async findAnswer(name: string) {
    const answers = this.commentesRepository.find({ name });
    return answers;
  }
}
