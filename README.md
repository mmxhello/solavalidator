# SolaValidator

SolaValidator - валидатор блокчейна Solana. Быстрый и простый в использовании.

На сайте есть 3 раздела: 
- Главный
- Услуги
- О нас 

Также есть форма контактов и обратной связи

Сайт написан на TypeScript с использованием Vue+Vite SSR и i18n для перевода текста.

# Тестовый запуск:

## 1. Установи зависимости:

```bash
npm i
```

## 2. Запусти проект:

```bash
npm run dev
```

## 3. Открой сайт:

http://localhost:5177

# Деплой:

## 1. Установи зависимости:

```bash
npm i
```

## 2. Скомпилируй проект:

```bash
npm run build
```

## 3. Запусти сервер:

```bash
node server.js
```

## 4. Открой сайт:

http://localhost:5177

# Пример конфига Nginx для деплоя:

```nginx
server {
        root /home/user/sites/solavalidator/dist;

        index index.html index.htm;

        server_name solaidator.example.com;
        location / {
                proxy_pass http://localhost:5177/;
        }
}
```