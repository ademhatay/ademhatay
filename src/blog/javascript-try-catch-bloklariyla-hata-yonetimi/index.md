---
title: JavaScript Try-Catch Bloklarıyla Hata Yönetimi
date: 2024-03-19
category: javascript
tags: ["javascript", "programlama", "hata yönetimi"]
banner: https://miro.medium.com/v2/resize:fit:1200/1*i0-ZubqP-XVjOUpon7SMZA.png
description: Try-catch blokları, bir programın belirli bir bölümünü izleyerek potansiyel hataları ele almak için kullanılır. Bu bloklar, kodun hata üretebilecek kısmını try içerisine yerleştirir ve olası bir hata durumunda catch bloğu devreye girer.
---

## JavaScript Try-Catch Blokları
\
Try-catch blokları, bir programın belirli bir bölümünü izleyerek potansiyel hataları ele almak için kullanılır. Bu bloklar, kodun hata üretebilecek kısmını try içerisine yerleştirir ve olası bir hata durumunda catch bloğu devreye girer.

&nbsp;
```javascript
try {
    // Potansiyel hata üretebilecek kod bloğu
    // Örneğin: bir değişkenin tanımlanmamış olması
    console.log(undefinedVariable);
} catch (error) {
    // Hata durumunda çalışacak kod bloğu
    console.error("Hata Oluştu:", error.message);
}
```

&nbsp;

Yukarıdaki örnekte, undefinedVariable adında bir değişken tanımlanmamıştır. Bu değişkeni console.log() fonksiyonu ile ekrana yazdırmaya çalıştığımızda, hata üretir. Bu hata, catch bloğu içerisindeki console.error() fonksiyonu ile ekrana yazdırılır.

&nbsp;

```javascript
try {
    // Potansiyel hata üretebilecek kod bloğu
    // Örneğin: bir değişkenin tanımlanmamış olması
    console.log(undefinedVariable);
} catch (error) {
    // Hata durumunda çalışacak kod bloğu
    console.error("Hata Oluştu:", error.message);
} finally {
    // Her durumda çalışacak kod bloğu
    console.log("Finally bloğu çalıştı.");
}
```

&nbsp;

Yukarıdaki örnekte, try-catch bloklarına ek olarak finally bloğu da kullanılmıştır. finally bloğu, try-catch bloklarının sonunda çalışır ve her durumda çalışacak kodları içerir.

&nbsp;

## Try-Catch Bloklarının Avantajları

1- Hata Yönetimi: try-catch blokları, bir programın belirli bir bölümünü izleyerek potansiyel hataları ele almak için kullanılır. Bu bloklar, kodun hata üretebilecek kısmını try içerisine yerleştirir ve olası bir hata durumunda catch bloğu devreye girer.

2- Hata Mesajı: catch bloğu, hata durumunda çalışacak kodları içerir. Bu kodlar, hata mesajını ekrana yazdırabilir veya hata mesajını bir değişkene atayabilir.

3- finally Bloğu: finally bloğu, try-catch bloklarının sonunda çalışır ve her durumda çalışacak kodları içerir.

4- Hata Türü: catch bloğu, hata durumunda çalışacak kodları içerir. Bu kodlar, hata türünü ekrana yazdırabilir veya hata türünü bir değişkene atayabilir.
