import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListCarsUseCase } from './ListCarsUseCase';

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car One',
      description: 'Description Car One',
      daily_rate: 100,
      license_plate: 'ABC-1111',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car One',
      description: 'Description Car One',
      daily_rate: 100,
      license_plate: 'ABC-1111',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const cars = await listCarsUseCase.execute({
      brand: 'Brand',
    });

    expect(cars).toEqual([car]);
  });
});
