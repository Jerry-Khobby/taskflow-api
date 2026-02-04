import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;

  const mockTasksService = {
    create: jest.fn(),
    findAll: jest.fn(),
    updateStatus: jest.fn(),
    delete:jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  //update task
  it('should update task status', () => {
    const updatedTask = {
      title: 'Test Task',
      status: 'done',
      createdAt: new Date(),
    };

    

    mockTasksService.updateStatus.mockReturnValue(updatedTask);

    const result = controller.updateStatus('1', { status: 'done' });

    expect(mockTasksService.updateStatus).toHaveBeenCalledWith(1, 'done');
    expect(result).toEqual(updatedTask);
  });

//delete tasks
  it('should delete a task', () => {
  mockTasksService.delete.mockReturnValue(undefined);

  const result = controller.remove('1');

  expect(mockTasksService.delete).toHaveBeenCalledWith(1);
  expect(result).toEqual({ message: 'Task deleted' });
});

});
