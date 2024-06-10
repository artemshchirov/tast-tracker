import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class Task {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'Task title' })
  @IsString()
  description: string;

  @ApiProperty({ enum: Status, required: false })
  status: Status;

  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;
}
