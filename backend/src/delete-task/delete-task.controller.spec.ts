import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTodoController } from './delete-task.controller';

describe('DeleteTodoController', () => {
  let controller: DeleteTodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteTodoController],
    }).compile();

    controller = module.get<DeleteTodoController>(DeleteTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
