---
title: Express JS Nedir?
description: Express.js, Node.js üzerinde çalışan bir web framework'dür.
---

<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"  width="250"/>

# Express JS Nedir?

`npm i express`

Express.js, Node.js üzerinde çalışan bir web framework'dür. Bu framework, web uygulamaları geliştirirken kullanılabilecek birçok özellik sunar ve bu sayede web uygulamalarının geliştirilmesini kolaylaştırır. Örneğin, Express.js ile web uygulamaları için rotalama (routing), veri yönlendirme (middleware) ve güncelleme (update) gibi işlemler kolayca gerçekleştirilebilir. Ayrıca, Express.js ile birlikte kullanılabilecek çeşitli modüller ve kütüphaneler mevcuttur ve bu sayede çeşitli işlemler yapılabilir.

## Express JS ile Ne Yapılabilir?

1- Express.js ile aşağıdaki gibi işlemler yapılabilir:
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Merhaba Dünya');
});

app.listen(3000, () => {
  console.log('Sunucu çalışıyor: http://localhost:3000');
});
```

2- Rotalama (routing): Express.js ile web uygulamaları için rotalama yapılabilir ve farklı URL'ler için farklı işlemler gerçekleştirilebilir. Örneğin, aşağıdaki kod parçacığı ile '/' ve '/kullanıcılar' URL'leri için farklı işlemler gerçekleştirilebilir:
```js
app.get('/', (req, res) => {
  res.send('Ana sayfa');
});

app.get('/kullanıcılar', (req, res) => {
  res.send('Kullanıcı listesi');
});

```
3- Veri yönlendirme (middleware): Express.js ile web uygulamaları için veri yönlendirme yapılabilir ve HTTP istekleri üzerinde işlemler gerçekleştirilebilir. Örneğin, aşağıdaki kod parçacığı ile tüm HTTP istekleri için istek bilgilerinin yazdırılması sağlanabilir:
```js
app.use((req, res, next) => {
  console.log(`İstek yapıldı: ${req.url}`);
  next();
});
```
4- Güncelleme (update): Express.js ile web uygulamaları için veri güncelleme işlemleri yapılabilir. Örneğin, aşağıdaki kod parçacığı ile '/kullanıcılar' URL'sine POST isteği yapılarak veri güncelleme işlemi gerçekleştirilebilir:
```php
app.post('/kullanıcılar', (req, res) => {
  // Veri güncelleme işlemleri
  res.send('Veri güncellendi');
});
```

## Express JS Özellikleri Nelerdir?
Express.js, aşağıdaki özellikleri sunar:

1- Rotalama (routing): Express.js ile web uygulamaları için rotalama yapılabilir ve farklı URL'ler için farklı işlemler gerçekleştirilebilir.

2- Veri yönlendirme (middleware): Express.js ile web uygulamaları için veri yönlendirme yapılabilir ve HTTP istekleri üzerinde işlemler gerçekleştirilebilir.

3- Güncelleme (update): Express.js ile web uygulamaları için veri güncelleme işlemleri yapılabilir.

4- Önbellekleme (caching): Express.js ile web uygulamaları için önbellekleme yapılabilir ve isteklerin hızını arttırmak için kullanılabilir.

5- İş parçacığı (worker thread) desteği: Express.js ile Node.js iş parçacığı (worker thread) desteği kullanılarak, işlemlerin daha hızlı bir şekilde gerçekleştirilebilir.

6- Otomatik kod yenileme (hot reloading): Express.js ile değişiklikler yaptığınız kodlar otomatik olarak yenilenebilir ve bu sayede geliştirme sürecinin hızını arttırabilirsiniz.

Daha fazla bilgi için: [Express JS](https://expressjs.com/)
