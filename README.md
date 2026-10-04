# profiling

Учебная веб-платформа по анализу невербального поведения (совместный проект Pr1nkos и SpacyLion): курсы «Анализ лица» (эмоции, FACS, виды лжи, техники выявления) и «Анализ психотипа» (язык тела, кейсы), тесты по упражнениям, авторизация и закрытые разделы по ролям.

**Стек:** Next.js 13 (Pages Router), React 18, TypeScript, Tailwind CSS + SCSS, NextAuth (credentials), Prisma, PostgreSQL.

## Запуск

```bash
cp .env.example .env          # заполните NEXTAUTH_SECRET и DATABASE_URL
npm install
npx prisma migrate deploy     # создать таблицы в PostgreSQL
npm run dev                   # http://localhost:3000
```

Сборка: `npm run build && npm start`. Шрифт Inter загружается с Google Fonts во время сборки, нужен доступ в интернет.

## Структура

- `pages/` — страницы и API (`api/auth` — NextAuth, `education/` — курсы, `tests.tsx` — тесты)
- `components/`, `sections/` — UI
- `prisma/` — схема и миграции
- `middleware.ts` — защита раздела `/education` по токену и роли

## Известные ограничения

- Проект учебный и незавершённый.
- Пароли в `authorize` сравниваются как обычные строки, без хеширования. Перед реальным использованием нужно перейти на bcrypt (он уже подключён в `pages/api/login.ts`).

## Лицензия

[ISC](LICENSE)
