---
title: Next.js Uygulamasının Docker ile Standalone Export Edilmesi
date: 2024-07-27
category: nextjs
tags: ["nextjs", "docker", "standalone", "export"]
banner: "https://i.hizliresim.com/qu90umb.png"
description: Bu yazıda, Next.js uygulamasının Docker kullanılarak standalone export edilmesi ve containerize edilmesi adım adım anlatılmaktadır.
--- 

# Next.js Uygulamasının Docker ile Standalone Export Edilmesi

Next.js, React tabanlı web uygulamaları geliştirmek için popüler bir framework'tür. Next.js uygulamalarını Docker ile containerize etmek, daha iyi güvenlik, taşınabilirlik ve ölçeklenebilirlik sağlar.


Bu yazıda, Next.js uygulamasının Docker ile standalone export edilmesi ve containerize edilmesi adım adım anlatılacaktır.

<br />

## 1. Next.js Uygulaması Oluşturma

İlk adım olarak, yeni bir Next.js uygulaması oluşturalım: 



```bash
npx create-next-app nextjs-docker-export
cd nextjs-docker-export
```
<br />

## 2\. Gerekli Dosyaların Eklenmesi

Uygulamaya birkaç örnek CSS, JavaScript dosyası ve resim ekleyelim:

- `styles/global.css` dosyasını oluşturun ve genel stilleri ekleyin.
- `public` klasörüne birkaç örnek resim ekleyin.
- `pages/index.js` dosyasını düzenleyerek örnek içerik ve resimler ekleyin.

<br />

## 3\. Dockerfile Oluşturma

Projenin kök dizininde `Dockerfile` adında bir dosya oluşturun ve aşağıdaki içeriği ekleyin:


```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

RUN mkdir -p .next/standalone/.next && \
    mv .next/static .next/standalone/.next/static && \
    mv public .next/standalone/public && \
    mv .env.development .next/standalone/

WORKDIR /app/.next/standalone

EXPOSE 3000

CMD ["node", "server.js"]
```


Bu Dockerfile, Next.js uygulamasını Docker imajına derleyecek ve çalıştıracaktır.



<br />


## 4\. .dockerignore Dosyası Oluşturma

Projenin kök dizininde `.dockerignore` adında bir dosya oluşturun ve aşağıdaki içeriği ekleyin:
```
node_modules
.next
```

Bu dosya, gereksiz dosyaların Docker imajına kopyalanmasını önleyecektir.

<br />


## 5\. Docker Compose Dosyası Oluşturma

Projenin kök dizininde `docker-compose.yml` adında bir dosya oluşturun ve aşağıdaki içeriği ekleyin:



```yaml
version: '3'
services:
  frontend:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
      - /app/.next
    environment:
      - NODE_ENV=production
```


Bu Docker Compose dosyası, uygulamayı Docker containerında çalıştıracaktır.



<br />


## 6\. Uygulamayı Çalıştırma

Aşağıdaki komutu kullanarak uygulamayı Docker containerında çalıştırın:

<br />

`docker-compose up --build`

<br />

Uygulama, `http://localhost:3000` adresinde çalışacaktır.



## Sonuç

Bu yazıda, Next.js uygulamasının Docker ile standalone export edilmesi ve containerize edilmesi adım adım anlatıldı. Docker, Next.js uygulamalarının daha güvenli, taşınabilir ve ölçeklenebilir bir şekilde dağıtılmasını sağlar. Umarım bu yazı, Next.js uygulamalarınızı Docker ile dağıtmanıza yardımcı olmuştur.

<br />

Faydalı olması dileğiyle!