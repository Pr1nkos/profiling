19.05.2023
1. Перевел все файлы на typescript
2. На Nodejs не был установлен autoprefixer - fixed
Проблемы:
1. Поменять цвета футера - Геша
2. Стиль страницы логина - Геша
3. В курсе внизу писать страницу, на которой находишься
4. Убрать иконку меню
5. Продумать и сделать страницу кейсов + видео
Создание проекта в vsc:

1. Создание виртуального пространства в папке с проектом (virtualenv env)
2. Активация пространства .\env\Scripts\activate
3. Запуск сервака фронта npm run dev
4. После изменений в schema.prisma - npx prisma migrate dev --name init (выгрузка таблицы в базу данных)
5. Запуска prisma - npx prisma studio
6. Анимации появления текста
7. Заполнена структура страницы эмоции
8. Заполнена структура страницы образования

История:

1. Сделал структуру сайта на next.js
2. Прикрутил призму и настроил для работы с postgres
3. Настроил авторизацию
4. Настроил защиту в зависимости от роли. Настройка ведется в файле middleware.ts 5 строка ( const protectedPaths = ["/education"];)

useful commands

<!--test user  gesha@gesha.com -->
<!--test pass 1122 -->

---

npx prisma migrate dev --name init - update scheme of PostGreSQL schemas
npx prisma studio - add new records to db
