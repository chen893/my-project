import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from './comment/comments.entity';
import { Comment } from './comment/comment.entity';
@Module({
  imports: [
    CommentModule,
    TypeOrmModule.forRoot({
      type: 'mongodb', //我用的是mongodb ，可选其他TypeORM 支持的数据库，安装好依赖
      host: 'localhost',
      port: 27017, //数据库端口号,mongodb默认27017
      //username: 'root',   因为mongodb 的连接不用 账号密码， 所以我这边注释了，如果你的数据库要密码的话，要写上去。
      //password: 'root',
      database: 'nest',
      // entities: [Comments, Comment], //这个是导入的实体 在后面我们创建实体后，要添加进这个数组里面。
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
