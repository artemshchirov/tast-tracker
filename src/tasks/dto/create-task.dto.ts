import { OmitType } from '@nestjs/swagger';
import { Task } from '../entities/task.entity';

export class CreateTaskDto extends OmitType(Task, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {}
