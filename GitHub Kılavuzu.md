## GitHub Kılavuzu

GitHub kullanmak için üç önemli sebep:
* Projeniz bir bütün olarak bulutta, her yerden erişilebilir
* Otomatik sürüm kontrolü ve koordineli takım çalışması 
* Programcılar için özgeçmişin önemli bir parçası

Git'in akış ve dallanma mantığını anlamak için iyi bir başlangıç [burada](https://guides.github.com/introduction/flow/)

### GitKraken

Bu program ile Git kullanmak çok kolaylaştı

Öncelikle [GitHub hesabı açmak](https://github.com/join)  gerekiyor


### Commit, Branch, Pull Request, Merge

Yerel bilgisayarda denemeleri yapıp çalışır duruma getirince `Commit` işlemini yapıyoruz. Dokümanlardaki "Kaydet" gibi bir işlem, tek farkı, bütün ayrıntılar kaydedildiği için eski bir duruma dönmek mümkün. `Commit` işlemlerinin çok sayıda olmasında korkmayın: Her Commit, programın bir tek özelliği üstünde çalışsa iyi olur.

Yeni bir özellik denemek ya da takım çalışması yapmak için [dallanma](https://guides.github.com/introduction/flow) gerekiyor. Her dalı ayrı bir proje olarak düşünebiliriz. Desktop programında dal değiştirince, klasördeki dosyalar da uygun bir şekilde değişiyor, sadece o dala ait dosyalar görünüyor. Programın ana dalına `master` adı verilmiş. 

Bir dal üstünde yeteri kadar çalışıp doğru işlediği görülünce, o dalın sahibi `Pull Request` yapıyor, projenin sahibi ya `Merge` ile yeni özellikleri programa ekliyor, ya da dalı silerek reddediyor. 

### Markdown (MD) formatı

Karmaşık HTML sayfalarını basitleştiren [MD formatını](https://guides.github.com/features/mastering-markdown/#examples) on dakikada öğrenmek ister misiniz? GitHub'da bu formatı kullanmak şart değil ama bunun gibi sayfaları düz metin gibi kolayca yazabilirsiniz.

![örnekler sayfası](images/examples.PNG)

Markdown denemeleriniz için [bir çevirmen](http://dillinger.io/) yararlı olacak


### Git Command Line (CLI)

GitKraken öncesinde, bu adımları *Command line* içinde yerel klasör altında `git` komutu ile yapmak gerekiyordu

GitKraken'deki her işleme karşı gelen `git` komutu ile kıyaslayınca sürecin ne kadar basitleştiğini görebilirsiniz:
* File menüsünde Init Repo: `git init`
* `Stage all changes` düğmesine basın: `git add *` 
* `Commit` düğmesine basın: `git commit -m "yeni bir isim"`
* Remote ekleyin: `git remote add origin https://github.com/maeyler/BLM305.git`
* `Push` düğmesine basın: `git push origin master`

Git için [kapsamlı bir kitap](https://git-scm.com/book/en/v2) var ama GitKraken yazılımı normal bir kullanıcının çoğu ihtiyacını karşılıyor. <br>
"Merge conflict" ya da "merge revert" durumlarında biraz Git bilmek gerekecektir.


### Referanslar

* https://forvo.com/word/github/
* https://www.wikiwand.com/en/Git
* https://github.com
* https://guides.github.com
* https://guides.github.com/introduction/flow
* https://dillinger.io
* https://try.github.io


### Teşekkürler

* Gürsu Gülcü 
* [Hakan DILEK](https://github.com/hakandilek)
* Ayla Gülcü
* [Güngör Yılmaz](https://github.com/gungor)
 
Eski öğrencilerim bu konuda bana öğretmen oldular :smile:
