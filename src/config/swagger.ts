// Експорт специфікації Swagger/OpenAPI для документації про API
export const swaggerSpec = {
    // Версія специфікації OpenAPI
    openapi: '3.0.0',
    // Загальна інформація про API
    info: {
        title: 'API Сайту про Койотів',
        version: '1.0.0',
        description: 'Документація API для Сайту про Койотів',
    },
    // Налаштування серверів для тестування API
    servers: [
        {
            url:
                process.env.CODESPACE_NAME !== undefined
                    ? `https://${process.env.CODESPACE_NAME}-5000.app.github.dev`
                    : 'http://localhost:5000',
            description: 'Development server',
        },
    ],
    // Визначення кінцевих точок (endpoints) REST API та операцій з ними
    paths: {
        '/api/coyotes': {
            // GET запит для отримання всіх койотів
            get: {
                summary: 'Отримати всіх койотів',
                responses: {
                    '200': {
                        description: 'Список всіх койотів',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Coyote' },
                                },
                            },
                        },
                    },
                },
            },

            // POST запит для створення нового койота
            post: {
                summary: 'Створити нового койота',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Coyote' },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: "Створений об'єкт койота",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Coyote' },
                            },
                        },
                    },
                },
            },
        },

        // Операції для конкретного койота за ID
        '/api/coyotes/{id}': {
            // GET запит для отримання койота за ID
            get: {
                summary: 'Отримати койота за ID',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID койота',
                    },
                ],
                responses: {
                    '200': {
                        description: "Об'єкт койота",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Coyote' },
                            },
                        },
                    },
                    '404': { description: 'Койота не знайдено' },
                },
            },

            // PUT запит для повного оновлення койота за ID
            put: {
                summary: 'Повністю оновити койота',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID койота',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Coyote' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт койота",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Coyote' },
                            },
                        },
                    },
                    '404': { description: 'Койота не знайдено' },
                },
            },
            // PATCH запит для часткового оновлення койота за ID
            patch: {
                summary: 'Частково оновити койота',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID койота',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Coyote' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт койота",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Coyote' },
                            },
                        },
                    },
                    '404': { description: 'Койота не знайдено' },
                },
            },
            // DELETE запит для видалення даних про койота за ID
            delete: {
                summary: 'Видалити дані про койота',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID Койота',
                    },
                ],
                responses: {
                    '200': { description: 'Повідомлення про успішне видалення' },
                    '404': { description: 'Койота не знайдено' },
                },
            },
        },
    },

    // Визначення компонентів для повторного використання
    components: {
        // Схеми даних
        schemas: {
            // Схема об'єкта Койот
            Coyote: {
                type: 'object',
                required: ['name', 'age', 'height', 'weight', 'gender'],
                properties: {
                    name: {
                        type: 'string',
                        description: "Ім'я койота",
                    },
                    age: {
                        type: 'number',
                        description: 'Вік койота у роках',
                    },
                    height: {
                        type: 'number',
                        description: 'Висота койота в сантиметрах',
                    },
                    weight: {
                        type: 'number',
                        description: 'Вага койота в кілограмах',
                    },
                    gender: {
                        type: 'string',
                        enum: ['male', 'female'],
                        description: 'Стать койота',
                    },
                    description: {
                        type: 'string',
                        description: "Опис койота (необов'язкове поле)",
                    },
                },
            },
        },
    },
};
