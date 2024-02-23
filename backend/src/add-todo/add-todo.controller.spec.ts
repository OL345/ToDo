import { Test, TestingModule } from '@nestjs/testing';
import { AddTodoController } from './add-todo.controller';

describe('AddTodoController', () => {
  let controller: AddTodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddTodoController],
    }).compile();

    controller = module.get<AddTodoController>(AddTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
