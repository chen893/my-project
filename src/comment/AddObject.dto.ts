import { ApiProperty } from '@nestjs/swagger';

export class AddObject {
  @ApiProperty()
  name: string;
  @ApiProperty()
  type: number;
  @ApiProperty()
  answer: string;
}
