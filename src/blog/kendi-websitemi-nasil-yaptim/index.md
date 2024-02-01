---
title: Kendi Websitemi Nasıl Yaptım?
date: 2024-02-02
category: yazilim
tags: ["yazilim", "website", "blog", "porfolio"]
banner: https://i.hizliresim.com/47h0gxr.png
description: Kendi websitemi nasıl yaptım? Sorusuna cevap verdiğim yazı.
featured: true
---

<br />

Bu yazıda kendi websitemi nasıl yaptığımı anlatacağım. Yapım aşamasını, kullandığım teknolojileri, dosya yapımı ve daha fazlasını sizlerle paylaşacağım. Biraz uzun bir yazı olacak ama umarım faydalı olur. Siz de bu sitenin kaynak kodlarına  <a target="_blank" href="https://github.com/ademhatay/ademhatay">buradan</a> ulaşabilirsiniz.

<br />

## Kullanılan Teknolojiler

<br />

- [Eleventy](https://www.11ty.dev/) ``(Static Site Generator)``
- [Tailwind CSS](https://tailwindcss.com/) ``(CSS Framework)``
- [Netlify](https://www.netlify.com/) ``(Hosting)``
- [Git / GitHub](https://github.com/ademhatay/ademhatay) ``(Version Control & Continuous Deployment)``

<br />

## Özellikler

```html
Pagination:  (Blog ve Projeler sayfasında belirli sayıdan fazla içerik varsa sayfalama yapılıyor)

Önceki / Sonraki İçerik: (Blog ve Projeler sayfasında içerikler arası geçiş yapılıyor)

Öne Çıkarma: (Seçili içerik sabitlenebiliyor ve her zaman üstte gösteriliyor. Ayrıca neon efekti ile vurgulanıyor.
Kategori: Blog ve Projeler sayfasında içerikler kategorilere ayrılıyor)

Etiket: (Blog ve Projeler sayfasında içerikler etiketlere ayrılıyor. Kullanıcı isterse extendTag.js ile kendi etiketlerini ve renklerini ayarlabiliyor)

Karanlık Mod: (Kullanıcı isterse karanlık modu açıp kapatabiliyor)

Sürekli Yayınlama: (Yeni içerik eklediğimde ve commit attığımda otomatik olarak netlify üzerinde yayınlanıyor. Böylece tek yapmam gereken içeriğimi ekleyip commitlemek ve pushlamak.)
```

<br />

<br />

## Yapım Aşaması

<br />

Öncelikle [Eleventy](https://www.11ty.dev/) ile bir proje oluşturdum. Eleventy statik site oluşturmak için kullanılan bir araç. Pek çok statik site oluşturucu arasından 11ty'i seçme nedenim ise diğerlerine göre oldukça hızlı şekilde site oluşturması ve kullanım kolaylığı. Çeşitli  *Template Language*'lerini desteklemesi de bir diğer artısı. Ben de [Nunjucks](https://mozilla.github.io/nunjucks/) kullanarak siteyi oluşturdum.

<br />

Nunjucks hakkında hiçbir bilgim olmamasına rağmen kendi dökümantasyonu üzerinden istediğim gibi kullanabildim.

<br />

Eleventy ile ``.njk`` uzantılı dosyaları ``.html``'e çevirerek statik bir site oluşturdum. Bu aşamada [Tailwind CSS](https://tailwindcss.com/) kullanarak siteyi tasarladım.

<br />

## Dosya Yapısı

<br />

Eleventy ile oluşturduğum dosya yapısı şu şekilde:<br /><small>
  *Resimleri büyütmek için üstüne tıklayın</small>


<br />


<a target="_blank" href="https://i.hizliresim.com/7d9nzwe.png"><img width="250" src="https://i.hizliresim.com/7d9nzwe.png" alt="Dosya Yapısı" /></a>

<br /><br />
  
- ``_data``: Sitemin verilerini tuttuğum klasör. bu dosyaları değiştirerek siteyi başka bir kullanıcı **tamamıyla** kendisine uyarlayabilir. <br /><a target="_blank" href="https://i.hizliresim.com/2khgyq7.png"><img width="300" src="https://i.hizliresim.com/2khgyq7.png" alt="Dosya Yapısı" /></a>

<br /><br />

- ``_includes``: Sitemin içerisinde birden fazla yerde kullandığım kodları tek bir component haline getirerek tekrar tekrar kullanmamı sağlıyor. <br /><a target="_blank" href="https://i.hizliresim.com/onpzuqb.png"><img width="300" src="https://i.hizliresim.com/onpzuqb.png" alt="Dosya Yapısı" /></a>

<br /><br />

- ``_layouts``: Sayfalar arasında düzen ve istiktarı sağlamak ve kod tekrarlarından kaçınmamı sağlıyor. <br /><a target="_blank" href="https://i.hizliresim.com/s0yz4jw.png"><img width="300" src="https://i.hizliresim.com/s0yz4jw.png" alt="Dosya Yapısı" /></a>

<br /><br />

- ``assets``: assets klasörü websitemdeki statik dosyaların (resim, stil javascript dosylarıvb.) tuttuğum klasör. Eleventy ile build alırken burası da source klasörüne aktarılıyor. Bu yüzden ``sitemap.xml`` dosyam da sunucuya gitmiş oluyor. <br /><a target="_blank" href="https://i.hizliresim.com/bhlxjn5.png"><img width="300" src="https://i.hizliresim.com/bhlxjn5.png" alt="Dosya Yapısı" /></a>

<br /><br />

- ``blog``: Blog yazılarımı paylaştığım klasör. Klasör adım aynı zamanda url adresim de olduğu için bu şekilde yazmaya özen gösteriyorum. Her klasör içerisinde ``index.md`` adında bir markdown dosyası bulunuyor ve içeriklerimi buraya yazıyorum. Sayfa başlığım, açıklamam, etiketler ve kategori gibi pek çok datayı ise içerik dosyamın hemen başına şekildeki gibi yerleştiriyorum. Bu kullanım [Eleventy](https://www.11ty.dev/) 'den geliyor. `blog.json` ise tüm postlarım config dosyası. şimdilik post adında bir grupta toplamamı sağlıyor. <br /><a target="_blank" href="https://i.hizliresim.com/f9y453c.png"><img width="300" src="https://i.hizliresim.com/f9y453c.png" alt="Dosya Yapısı" /></a><a target="_blank" href="https://i.hizliresim.com/asbqne2.png"><img  src="https://i.hizliresim.com/asbqne2.png" alt="Dosya Yapısı" /></a>

<br /><br />

- ``projects``: Yukarıdaki blog ile aynı yapıyı kullanıyor. <br /><a target="_blank" href="https://i.hizliresim.com/tn6rg0f.png"><img width="300" src="https://i.hizliresim.com/tn6rg0f.png" alt="Dosya Yapısı" /></a><a target="_blank" href="https://i.hizliresim.com/asbqne2.png"><img  src="https://i.hizliresim.com/asbqne2.png" alt="Dosya Yapısı" /></a>

<br /><br />

- ``anasayfalar``: Görüntüdeki her bir sayfa da anasayfalarımı temsil ediyor.  <a target="_blank" href="https://i.hizliresim.com/l931tmk.png"><img  src="https://i.hizliresim.com/l931tmk.png" alt="Dosya Yapısı" /></a>
