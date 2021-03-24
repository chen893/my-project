import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Comments } from './comments.entity';
import { Comment } from './comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Comments, Comment])],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
