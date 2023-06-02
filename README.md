27.05.2023

1. Защита не только /education, но и /education/\*\*
2. Исправлен стиль тестов (tests)
3. 19.05.2023
4. Перевел все файлы на typescript
5. На Nodejs не был установлен autoprefixer - fixed
   Проблемы:
6. Поменять цвета футера - Геша
7. Стиль страницы логина - Геша
8. В курсе внизу писать страницу, на которой находишься
9. Убрать иконку меню
10. Продумать и сделать страницу кейсов + видео
    Создание проекта в vsc:

11. Создание виртуального пространства в папке с проектом (virtualenv env)
12. Активация пространства .\env\Scripts\activate
13. Запуск сервака фронта npm run dev
14. После изменений в schema.prisma - npx prisma migrate dev --name init (выгрузка таблицы в базу данных)
15. Запуска prisma - npx prisma studio
16. Анимации появления текста
17. Заполнена структура страницы эмоции
18. Заполнена структура страницы образования

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
