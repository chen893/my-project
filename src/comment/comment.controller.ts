import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { AddObject } from './AddObject.dto';
@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}
  @Post()
  async add(@Body() addObject: AddObject) {
    // console.log(addObject);
    const data = await this.commentService.addComment(addObject);
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
  @Post('/answer')
  async findAnswer(@Query('name') name: string) {
    const data = await this.commentService.findAnswer(name);
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
}
