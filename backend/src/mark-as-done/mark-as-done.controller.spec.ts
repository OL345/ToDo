import { Test, TestingModule } from '@nestjs/testing';
import { MarkAsDoneController } from './mark-as-done.controller';

describe('MarkAsDoneController', () => {
  let controller: MarkAsDoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarkAsDoneController],
    }).compile();

    controller = module.get<MarkAsDoneController>(MarkAsDoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
