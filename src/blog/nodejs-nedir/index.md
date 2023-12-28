---
title: Node.js Nedir?
excerpt: Node.js, JavaScript dilini kullanan bir çalışma zamanıdır.
date: 2020-01-01
---

Node.js, JavaScript dilini kullanan bir çalışma zamanıdır. Özellikleri şunlardır:

- Açık kaynak kodlu: Node.js, açık kaynak kodlu bir projedir ve kullanıcılar tarafından ücretsiz olarak kullanılabilir. Ayrıca, Node.js kodlarının kaynak kodları da mevcuttur ve bu sayede kullanıcılar kodları inceleyebilir ve geliştirme yapabilirler.

- Tarayıcı dışında çalıştırılabilir: Node.js, tarayıcı dışında çalıştırılabilir ve bu sayede sunucu tarafında web uygulamaları, veritabanı işlemleri ve dosya işlemleri gibi birçok işlem yapılabilir.

- Asenkron çalışma prensibi: Node.js, asenkron bir çalışma prensibi kullanır ve bu sayede işlemler arasında bekleme olmaksızın hızlı bir şekilde geçiş yapılabilir.

- Çok sayıda kütüphane: Node.js'in çok sayıda kütüphane ve modülü mevcuttur ve bu sayede çeşitli işlemler yapılabilir. Örneğin, veritabanı işlemleri için MySQL veya MongoDB gibi veritabanı yönetim sistemleri ile çalışabilir, HTTP istekleri yapabilir ve dosya işlemleri gerçekleştirebiliriz.

- Platform bağımsız: Node.js, çeşitli platformlar için kullanılabilir ve bu sayede Windows, Linux ve Mac gibi farklı işletim sistemlerinde çalıştırılabilir.

- JavaScript dilini kullanır: Node.js, JavaScript dilini kullanır ve bu sayede web tarayıcılarında çalıştırılan kodlar ile benzer şekilde çalıştırılabilir. Bu sayede, web tarayıcılarında çalıştırılan JavaScript kodlarının çoğu Node.js ile de çalıştırılabilir.

## Node.js Kurulumu

Node.js'i kurmak için aşağıdaki adımları izleyebilirsiniz:

1. İlk olarak, Node.js'in resmi sitesinden indirme sayfasına gidin. İndirme sayfasına [buradan](https://nodejs.org/en/download/) ulaşabilirsiniz.

2. İndirme sayfasında, işletim sisteminize uygun olan Node.js sürümünü seçin ve indirin.

3. İndirdiğiniz dosyayı açın ve kurulumu tamamlayın.

4. Kurulum tamamlandıktan sonra, komut satırını açın ve aşağıdaki komutu çalıştırın:

```bash
node -v
```

5. Eğer Node.js kurulumu başarılı bir şekilde gerçekleşmişse, Node.js'in sürüm numarası ekranda gözükecektir.

## Node.js Kullanımı

Node.js ile birlikte birçok kütüphane ve modül de gelmektedir. Bu kütüphaneler ve modüller sayesinde Node.js ile çeşitli işlemler yapılabilir. Örneğin, Node.js ile HTTP istekleri yapılabilir, veritabanı işlemleri gerçekleştirilebilir ve dosya işlemleri yapılabilir.

 ### 1- HTTP İstekleri Yapma

1. İlk olarak, Node.js ile HTTP istekleri yapmak için `http` modülünü kullanacağız. Bu modülü kullanabilmek için, aşağıdaki komutu çalıştırın:

```bash
npm install http
```

2. `http` modülünü kullanabilmek için, aşağıdaki kodu yazın:

```javascript
const http = require('http');
```

3. `http` modülünü kullanarak, aşağıdaki kodu yazarak, HTTP isteği yapabilirsiniz:

```javascript
http.get('http://www.google.com', (response) => {
  console.log(response.statusCode);
});
```

4. Kodu çalıştırdıktan sonra, Google'ın HTTP kodunu ekranda göreceksiniz.

### 2- Sunucu tarafında bir web sunucusu oluşturma:
```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Merhaba Dünya\n');
});

server.listen(port, hostname, () => {
  console.log(`Sunucu ${hostname}:${port} adresinde çalışıyor`);
});
```

### 3- Dosya okuma ve yazma işlemleri:

```javascript
const fs = require('fs');

fs.readFile('dosya.txt', 'utf8', (hata, veri) => {
  if (hata) throw hata;
  console.log(veri);
});

fs.writeFile('dosya.txt', 'Merhaba Dünya', (hata) => {
  if (hata) throw hata;
  console.log('Dosya kaydedildi');
});
```

### 4- Veritabanı işlemleri:

```javascript
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "kullanıcı_adı",
  password: "şifre",
  database: "veritabanı_adı"
});

con.connect((hata) => {
  if (hata) throw hata;
  console.log("Veritabanına bağlandı");
});

con.query("SELECT * FROM kullanıcılar", (hata, sonuç, alanlar) => {
  if (hata) throw hata;
  console.log(sonuç);
});

con.end((hata) => {
  if (hata) throw hata;
  console.log("Veritabanından ayrıldı");
});
```

Bu örnekler sadece birkaç örnektir ve Node.js ile yapılabileceklerin sadece bir kısmını göstermektedir. Node.js ile birçok farklı işlem yapılabilir ve bu işlemleri gerçekleştirmede JavaScript dilini kullanarak çok esnek bir şekilde hareket edilebilir.

Daha fazla bilgi için: [Node.js](https://nodejs.org/en/)
