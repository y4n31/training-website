import { injectable } from 'inversify';
import { Coyote, ICoyote } from '../models/coyote';

// Клас-репозиторій для роботи з койотами
// Анотація injectable дозволяє впровадити цей репозиторій через IoC контейнер
@injectable()
export class CoyoteRepository {
    // Метод для отримання всіх койотів з бази даних
    public async findAll(): Promise<ICoyote[]> {
        return Coyote.find();
    }

    // Метод для пошуку койота за унікальним ідентифікатором
    public async findById(id: string): Promise<ICoyote | null> {
        return Coyote.findById(id);
    }

    // Метод для створення нового койота в базі даних
    public async create(coyoteData: ICoyote): Promise<ICoyote> {
        const coyote = new Coyote(coyoteData);
        return coyote.save();
    }

    // Метод для видалення койота за ідентифікатором
    public async delete(id: string): Promise<boolean> {
        const result = await Coyote.findByIdAndDelete(id);
        return result !== null;
    }

    // Метод для повного оновлення даних про койота (заміна всіх полів)
    public async update(id: string, coyoteData: ICoyote): Promise<ICoyote | null> {
        return Coyote.findByIdAndUpdate(id, coyoteData, { new: true });
    }

    // Метод для часткового оновлення даних про койота (оновлення лише вказаних полів)
    public async patch(id: string, coyoteData: Partial<ICoyote>): Promise<ICoyote | null> {
        return Coyote.findByIdAndUpdate(id, { $set: coyoteData }, { new: true });
    }
}
