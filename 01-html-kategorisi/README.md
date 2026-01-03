# HTML Temelleri

![HTML](https://www.cnet.com/a/img/resize/6f59de6f421aca65461420ada94716b37c756c87/hub/2011/01/18/8d118cb0-fdc0-11e2-8c7c-d4ae52e62bcc/HTML5-wow.png?auto=webp&fit=crop&height=675&width=1200)

**HTML( HyperText Markup Language)** web sayfalarını oluşturmak için kullanılan standart **metin işaretleme dilidir.** Dilin son sürümü HTML5'tir. HTML, bir programlama dili olarak tanımlanamaz. Çünkü HTML kodlarıyla kendi başına çalışan bir program yazılamaz.Fakat bu dili yorumlayabilen programlar aracılığıyla çalışabilen programlar yazılabilir. Programlama dili denilememesinin nedeni tam olarak budur. Temel gereği, yazı, görüntü, video gibi değişik verileri ve bunları içeren sayfaları birbirine basitçe bağlamak, buna ek olarak, söz konusu sayfaların [web tarayıcısı](https://tr.wikipedia.org/wiki/Web_taray%C4%B1c%C4%B1s%C4%B1) yazılımları tarafından düzgün olarak görüntülenmesi için gerekli kuralları belirlemektir.

## Ders İçeriğinde Öğreneceklerimiz

* Açıklama satırları oluşturmak
* Başlıklar ve paragraflarla çalışmak
* Listelerle çalışmak
* Emmet yapısını kullanmak
* Görsellerle çalışmak
* Linklerle çalışmak
* Blok emenetler , div , span ve diğer inline elementler ile çalışmak
* HTML etiketlerine ekstra özellikler tanımlamak
* HTML iskeletinin genel yapısını anlamak
* Semantic etiketlerinin kullanımı

## Bir HTML öğesinin anatomisi

![HTML Anatomy](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started/grumpy-cat-small.png)

Öğemizin anatomisi şöyledir;
- **Açılış Etiketi(Opening tag):** Bu, açma ve kapama açılı ayraçlarla sarılmış öğenin adından (bu örnekte paragraf için p) oluşur. Bu açılış etiketi, öğenin nerede başladığını veya etkili olmaya başladığını belirtir
- **İçerik(Content):** Bu öğenin içeriğidir. Bu örnekte " My cat is very grumpy" içerik kısmıdır.
- **Kapanış Etiketi(Closing tag):** Bu, öğe adından önce eğik çizgi içermesi dışında açılış etiketiyle aynıdır. Bu, öğenin nerede bittiğini gösterir. Kapanış etiketi eklememek, tuhaf sonuçlar doğurabilecek yaygın bir başlangıç ​​hatasıdır.

Bu üç içerik bir araya gelerek **HTML öğesini (element)** oluştururlar.

## En Çok Kullanılan HTML Etiketleri
| ETİKET  |     AÇIKLAMA    |    
| --|--------------|
| `<html>` | Tüm Html etiketlerini kapsar.  | 
| `<head>` | Sayfa ile ilgili bazı bilgilerin (meta bilgileri, sayfa başlığı vb..) tanımlandığı etikettir.   | 
| `<title>` | Sayfa başlığının verildiği etikettir.     | 
| `<body>` |Sayfa içeriklerinin yazıldığı etikettir. Tarayıcılar sadece buradaki içeriği bize gösterirler. | 
| `<script>` | Javascript kodlarının yazıldığı etikettir.   |
| `<style>` | Css kodlarının yazıldığı etikettir.     |
| `<meta>` | Meta etiketleri (tagları) ile arama motorlarının web sitemiz ile ilgili bilgi edinmesini sağlayabiliriz. Diğer bir deyişle Html sayfalarımızda tamamlayıcı bilgileri tanımlayabiliriz.  |
| `<link>` | Dışarıdan bir dosyayı sayfamıza eklemek (referans vermek) için kullanılır.  |
| `<h1> – <h6>` | Başlık eklemek için kullanılır. Başlık etiketleri h1’den başlayıp h6’ya kadar devam eder.  |
| `<p>` | Html sayfalarındaki yazılarımızı paragraflara ayırmak için kullanılır.  |
| `<a>` | Link eklemek için kullanılır. Örneğin bir yazıya link verme, bir resme link verme, bir dosyayı link yapma, bir video linki oluşturma, indirme linki oluşturma, sayfalar arası veya sayfa içi bağlantı oluşturma vb.. bir çok durumda a etiketini kullanma ihtiyacı ortaya çıkıyor.   | 
| `<br>` | Alt satıra geçmek için kullanılır. Yani br etiketinden sonra gelen kodun bir alt satırdan devam etmesini sağlar.     | 
| `<hr>` | Html sayfalarımızda içerikleri birbirinden ayırmak için yatay çizgi oluşturmamızı sağlar.  | 
| `<div>` | Html kodlarını kapsayıcı bir etiket içerisine almak için kullanılır.Html div etiketinin özel bir anlamı yoktur. Div etiketini kullandığımızda sayfamızın tarayıcıdaki görüntüsünde herhangi bir değişiklik olmaz. Div etiketini kullanırken asıl amacımız diğer Html kod parçalarını belirli gruplara ayırarak kod düzenini sağlamaktır. Aynı zamanda bu şekilde yapılan bir kodlama, Css kullanımında da bize fayda sağlayacaktır. Çünkü div içerisine aldığımız tüm Html etiketlerine toplu bir şekilde Css kodu uygulayabilir ve yönetimi kolaylaştırabiliriz.    | 
| `<span>` | Html kodlarını kapsayıcı bir etiket içerisine almak için kullanılır.Span etiketi kullandığımızda da tıpkı div etiketi gibi sayfanın tarayıcıdaki görüntüsünde herhangi bir değişiklik olmaz. Span etiketini genelde inline (satır içi) öğelere Css kodu uygulamak için kullanıyoruz.     |
| `<!–…–>` |Html sayfalarımıza yorum satırı eklemek için kullanılır.     |
| `<ul>` | Sırasız liste oluşturmak için kullanılır.  |
| `<ol>` | Sıralı liste oluşturmak için kullanılır.   | 
| `<li>` | Liste elemanlarını eklemek için kullanılır. Her bir liste elemanı ( `<li>` ),  bulunduğu satırı tamamen (100%) kaplar. Yani li etiketi bir block etikettir.     | 
| `<dl>` | Açıklamalı liste oluşturmak için kullanılır.  | 
| `<dt>` |Açıklamalı liste elemanlarına başlık vermek için kullanılır.  | 
| `<dd>` | Açıklamalı liste elemanlarını oluşturmak için kullanılır.     |
| `<table>` |Tablo oluşturmak için kullanılır.    |
| `<caption>` | Tabloya başlık eklemek için kullanılır.  |
| `<th>` |Tabloda başlık alanları eklemek için kullanılır.   | 
| `<tr>` | Tabloda yeni bir satır eklemek için kullanılır.     | 
| `<td>` |Tabloda yeni bir hücre eklemek için kullanılır. | 
| `<form>` | Form oluşturmak için kullanılır.    | 
| `<img>` | Sayfalarımıza resim eklemek için img etiketini kullanıyoruz.    |
| `<b>` | Yazıları koyulaştırmak (kalınlaştırmak) için kullanılır.`<b>` ve `<strong>` etiketleri aynı işlevi gerçekleştiriyor. Aralarındaki fark ise şudur:Daha önemli içerikleri arama motorlarına belirtmek için strong etiketi kullanılır. Yani görünüm olarak bir farkları olmasada anlamsal olarak farklıdırlar.     |
| `<strong>` | Yazıları koyulaştırmak (kalınlaştırmak) için kullanılır.   |
| `<i>` |Yazıları italik yapmak için kullanılır.   |
| `<em>` |Yazıları italik yapmak için kullanılır.`<i>` ve `<em>` etiketleri aynı işlevi gerçekleştiriyor. Aralarındaki fark ise şudur:Daha önemli içerikleri arama motorlarına belirtmek için em etiketi kullanılır. Yani görünüm olarak bir farkları olmasada anlamsal olarak farklıdırlar.     |

## Kaynaklar:
-  https://developer.mozilla.org/en-US/docs/Web/HTML
- https://www.mehsatek.com/html-kodlari/
- https://tr.wikipedia.org/wiki/HTML









