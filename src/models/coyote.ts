import { Schema, model } from 'mongoose';

// Інтерфейс для об'єкта "Койот"
interface ICoyote {
    name: string; // Ім'я койота
    age: number; // Вік койота у роках
    height: number; // Висота койота в сантиметрах
    weight: number; // Вага койота в кілограмах
    gender: 'male' | 'female'; // Стать койота: 'male' - самець, 'female' - самка
    description?: string; // Опис койота (необов'язкове поле)
    dateAdded: Date; // Дата додавання запису до бази даних
}

// Схема MongoDB для моделі "Койот"
const coyoteSchema = new Schema<ICoyote>({
    name: {
        type: String,
        required: true, // Поле є обов'язковим
    },
    age: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    height: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    weight: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    gender: {
        type: String,
        required: true, // Поле є обов'язковим
        enum: ['male', 'female'], // Допустимі значення: 'male' або 'female'
    },
    description: String, // Необов'язкове текстове поле
    dateAdded: {
        type: Date,
        default: Date.now, // Значення за замовчуванням - поточна дата і час
    },
});

// Створення моделі Mongoose на основі схеми
export const Coyote = model<ICoyote>('Coyote', coyoteSchema);
export type { ICoyote }; // Експортуємо інтерфейс для використання в інших файлах
