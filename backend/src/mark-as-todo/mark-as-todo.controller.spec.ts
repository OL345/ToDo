import { Test, TestingModule } from '@nestjs/testing';
import { MarkAsTodoController } from './mark-as-todo.controller';

describe('MarkAsTodoController', () => {
  let controller: MarkAsTodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarkAsTodoController],
    }).compile();

    controller = module.get<MarkAsTodoController>(MarkAsTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
