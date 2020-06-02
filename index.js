function refresf(){
    location.reload();
}

// Sayı kombinasyonunu dizisi.
let sayi_dizisi = [];
let sira_kimde = 1;
let donen_kart_sayisi = 0;
let donen_index_dizisi = [];

// body onload içerisinde çağırılan bir fonksiyon.
// 0-8 arası her sayıdan 2'şer tane olmak kaydıyla 18 elemanlı sayı_dizisi oluşturulur.
function sayiuret() {
    // Rastgele sayı üretilir.
    let sayi = Math.round(Math.random() * 8);

    // Sayı_dizisi elemanlarında dolaşır, koşul sonucu true dönen elemanları founded dizisine aktarır.
    let founded = sayi_dizisi.filter((value, index, arr) => {
        return value == sayi;
    });

    // founded dizisi eleman sayısı 2'den küçük ise üretilen sayıyı, sayı_dizisine ekler.
    if (founded.length < 2) {
        sayi_dizisi.push(sayi);
    } else {
        sayiuret();
    }

    // Sayı dizisi eleman sayısı 17 olana kadar sayı üretmeye devam etsin.
    if (sayi_dizisi.length < 18) {
        sayiuret();
    } else {
        return;
    }
}

function kaldir() {

    let user1_value = document.getElementById("user-1").value;
    let user2_value = document.getElementById("user-2").value;

    if (user1_value == "") {
        user1_value = "Edanur";
    }

    if (user2_value == "") {
        user2_value = "Mustafa";
    }


    let e1 = document.getElementById("title");
    let e2 = document.getElementById("input-group");
    let e3 = document.getElementById("btn");
    let icerik = document.getElementById("content");
    icerik.removeChild(e1);
    icerik.removeChild(e2);
    icerik.removeChild(e3);

    let attr = document.createAttribute("class");
    attr.value = "content2";
    icerik.setAttributeNode(attr);

    let menu = document.createElement("div");
    let menu_class = document.createAttribute("class");
    menu_class.value = "menu";
    menu.setAttributeNode(menu_class);

    let title = document.createElement("div");
    let title_class = document.createAttribute("class");
    title_class.value = "menu-title";
    title.setAttributeNode(title_class);
    menu.appendChild(title);
    title.innerHTML = "Puan Durumu";

    let user1 = document.createElement("div");
    let user1_class = document.createAttribute("class");
    user1_class.value = "user-1";
    user1.setAttributeNode(user1_class);
    menu.appendChild(user1);
    let span1 = document.createElement("span");
    span1.innerHTML = user1_value;
    let user_name1 = document.createAttribute("id");
    user_name1.value = "user-name1";
    span1.setAttributeNode(user_name1);
    let span2 = document.createElement("span");
    span2.innerHTML = "&nbsp;:&nbsp;";
    let span3 = document.createElement("span");
    span3.innerHTML = 0;
    let span3_attr = document.createAttribute("id");
    span3_attr.value = "score1";
    span3.setAttributeNode(span3_attr);

    let span = document.createElement("span");
    let kimde_id = document.createAttribute("id");
    kimde_id.value = "kimde";
    span.setAttributeNode(kimde_id);

    user1.appendChild(span);
    user1.appendChild(span1);
    user1.appendChild(span2);
    user1.appendChild(span3);

    let user2 = document.createElement("div");
    let user2_class = document.createAttribute("class");
    user2_class.value = "user-2";
    user2.setAttributeNode(user2_class);
    menu.appendChild(user2);
    let span4 = document.createElement("span");
    span4.innerHTML = user2_value;
    let user_name2 = document.createAttribute("id");
    user_name2.value = "user-name2";
    span4.setAttributeNode(user_name2);
    let span5 = document.createElement("span");
    span5.innerHTML = "&nbsp;:&nbsp;";
    let span6 = document.createElement("span");
    span6.innerHTML = 0;
    let span6_attr = document.createAttribute("id");
    span6_attr.value = "score2";
    span6.setAttributeNode(span6_attr);
    let span7 = document.createElement("span");
    user2.appendChild(span7);
    user2.appendChild(span4);
    user2.appendChild(span5);
    user2.appendChild(span6);

    let refresf = document.createElement("button");
    refresf.innerHTML = "Yeniden Başlat";
    let ref_c = document.createAttribute("class");
    ref_c.value = "btn-refresh";
    refresf.setAttributeNode(ref_c);
    let ref_ca = document.createAttribute("onclick");
    ref_ca.value = "refresf()";
    refresf.setAttributeNode(ref_ca);
    menu.appendChild(refresf);


    let container = document.getElementsByClassName("container").item(0);
    container.insertBefore(menu, icerik);


}


// body onload içerisinde çağırılan bir fonksiyondur.
function doldur() {

    sayi_dizisi.forEach((value, index, arr) => {

        let kart = document.createElement("div");
        let kart_attr1 = document.createAttribute("onclick");
        kart_attr1.value = "don(event," + index + ")";
        let kart_attr2 = document.createAttribute("class");
        kart_attr2.value = "kart";
        kart.setAttributeNode(kart_attr1);
        kart.setAttributeNode(kart_attr2);

        let kart_arka = document.createElement("div");
        let kart_arka_attr = document.createAttribute("class");
        kart_arka_attr.value = "arka";
        kart_arka.setAttributeNode(kart_arka_attr);
        kart.appendChild(kart_arka);

        let kart_arka_child_img = document.createElement("img");
        let kart_arka_child_img_attr = document.createAttribute("src");
        kart_arka_child_img_attr.value = "images/back.png";
        kart_arka_child_img.setAttributeNode(kart_arka_child_img_attr);
        kart_arka.appendChild(kart_arka_child_img);

        let kart_on = document.createElement("div");
        let kart_on_attr = document.createAttribute("class");
        kart_on_attr.value = "on";
        kart_on.setAttributeNode(kart_on_attr);
        kart.appendChild(kart_on);

        let kart_on_child_img = document.createElement("img");
        let kart_on_child_img_attr = document.createAttribute("class");
        kart_on_child_img_attr.value = "item";
        kart_on_child_img.setAttributeNode(kart_on_child_img_attr);
        kart_on.appendChild(kart_on_child_img);

        let on_src = document.createAttribute("src");
        on_src.value = "images/" + value + ".png";
        kart_on_child_img.setAttributeNode(on_src);

        document.getElementById("content").appendChild(kart);
    });
}


function don(event, donen_index) {

    if (donen_kart_sayisi < 2) {

        donen_index_dizisi.push(donen_index);
        let kart = event.currentTarget;
        let attr = document.createAttribute("class");
        attr.value = "kart dondur";
        kart.setAttributeNode(attr);
        kart.removeAttribute("onclick");
        donen_kart_sayisi++;

        if (donen_kart_sayisi >= 2) {

            let kart1 = document.getElementsByClassName("kart").item(donen_index_dizisi[0]);
            let kart2 = document.getElementsByClassName("kart").item(donen_index_dizisi[1]);

            let kart1_degeri = kart1.children.item(1).children.item(0).getAttribute("src");
            let kart2_degeri = kart2.children.item(1).children.item(0).getAttribute("src");

            let deger1 = kart1_degeri.match(/\d/gim);
            let deger2 = kart2_degeri.match(/\d/gim);

            if (deger1[0] == deger2[0]) {

                setTimeout(beklevesil, 1511);

                function beklevesil() {
                    donen_index_dizisi.pop();
                    donen_index_dizisi.pop();
                    donen_kart_sayisi = 0;

                    kart1.removeChild(kart1.children.item(0));
                    kart1.removeChild(kart1.children.item(0));
                    kart2.removeChild(kart2.children.item(0));
                    kart2.removeChild(kart2.children.item(0));

                    if (sira_kimde % 2 != 0) {
                        let user1 = document.getElementById("score1");
                        let score1 = user1.innerHTML;
                        let sayi_score1 = Number(score1);
                        sayi_score1++;
                        user1.innerHTML = sayi_score1;
                    } else {
                        let user2 = document.getElementById("score2");
                        let score2 = user2.innerHTML;
                        let sayi_score2 = Number(score2);
                        sayi_score2++;
                        user2.innerHTML = sayi_score2;
                    }
                }

            } else {
                setTimeout(kartlari_geri_dondur, 1000, donen_index_dizisi);
                setTimeout(beklevesil, 1011);

                function beklevesil() {
                    donen_index_dizisi.pop();
                    donen_index_dizisi.pop();
                    donen_kart_sayisi = 0;
                    sira_kimde++;
                    if (sira_kimde % 2 != 0) {
                        console.log("şimdi sıra tek");

                        let eleman = document.getElementsByClassName("user-1").item(0).children.item(0);
                        let kimde_id = document.createAttribute("id");
                        kimde_id.value = "kimde";
                        eleman.setAttributeNode(kimde_id);

                        let eleman2 = document.getElementsByClassName("user-2").item(0).children.item(0).removeAttribute("id");
                    } else {
                        console.log("şimdi sıra çift");

                        let eleman = document.getElementsByClassName("user-2").item(0).children.item(0);
                        let kimde_id = document.createAttribute("id");
                        kimde_id.value = "kimde";
                        eleman.setAttributeNode(kimde_id);

                        let eleman2 = document.getElementsByClassName("user-1").item(0).children.item(0).removeAttribute("id");

                    }
                }
            }
        }

    }

}


function kartlari_geri_dondur(donen_index_dizisi) {
    donen_index_dizisi.forEach((value, index, arr) => {
        let geri_donecek_kart = document.getElementsByClassName("kart").item(value);
        let attr = document.createAttribute("class");
        attr.value = "kart";
        geri_donecek_kart.setAttributeNode(attr);
        let attr2 = document.createAttribute("onclick");
        attr2.value = "don(event, " + value + ")";
        geri_donecek_kart.setAttributeNode(attr2);
    });
}