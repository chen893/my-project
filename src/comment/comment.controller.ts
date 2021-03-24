import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { AddObject } from './AddObject.dto';
import { ApiOperation } from '@nestjs/swagger';
@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}
  @Post()
  @ApiOperation({ summary: '添加留言' })
  async add(@Body() addObject: AddObject) {
    // console.log(addObject);
    const data = await this.commentService.addComment(addObject);
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
  @ApiOperation({ summary: '根据用户名搜索回复' })
  @Post('/answer')
  async findAnswer(@Query('name') name: string) {
    const data = await this.commentService.findAnswer(name);
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
  @Get('csldemo')
  @ApiOperation({ summary: '返回所有留言' })
  async findAll() {
    const data = await this.commentService.findAll();
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
  @Delete()
  @ApiOperation({ summary: '删除所有留言' })
  async deleteAll() {
    const data = await this.commentService.deleteAll();
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
}
