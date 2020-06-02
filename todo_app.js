// TODO APP

let data = [{
        text: "Market alışverişi yapılacak.",
        id: 1,
    },
    {
        text: "Çarşıdan maske almayı unutma.",
        id: 2,
    },
    {
        text: "Ders notlarını gir.",
        id: 3,
    },
];


function olustur(text, id = 4) {
    let ie1 = document.createElement("div");
    let iec1 = document.createAttribute("class");
    iec1.value = "item";
    ie1.setAttributeNode(iec1);
    let iec1_1 = document.createAttribute("id");
    iec1_1.value = id;
    ie1.setAttributeNode(iec1_1);

    let ie2 = document.createElement("div");
    let iet2 = document.createTextNode(text);
    let iec2 = document.createAttribute("class");
    iec2.value = "item-text";
    ie2.setAttributeNode(iec2);
    ie2.appendChild(iet2);
    ie1.appendChild(ie2);

    let ie3 = document.createElement("div");
    let iec3 = document.createAttribute("class");
    iec3.value = "item-button-group";
    ie3.setAttributeNode(iec3);
    ie1.appendChild(ie3);

    let ie4 = document.createElement("button");
    let iec4 = document.createAttribute("class");
    iec4.value = "check";
    ie4.setAttributeNode(iec4);
    let iec4_1 = document.createAttribute("onclick");
    iec4_1.value = "checkeded(" + id + ")";
    ie4.setAttributeNode(iec4_1);
    ie3.appendChild(ie4);

    let ie5 = document.createElement("img");
    let iec5 = document.createAttribute("src");
    iec5.value = "img/checkmark.svg";
    ie5.setAttributeNode(iec5);
    ie4.appendChild(ie5);

    let ie7 = document.createElement("button");
    let iec7 = document.createAttribute("class");
    iec7.value = "remove";
    ie7.setAttributeNode(iec7);
    let iec7_1 = document.createAttribute("onclick");
    iec7_1.value = "sil(" + id + ")";
    ie7.setAttributeNode(iec7_1);
    ie3.appendChild(ie7);

    let ie8 = document.createElement("img");
    let iec8 = document.createAttribute("src");
    iec8.value = "img/cross.svg";
    ie8.setAttributeNode(iec8);
    ie7.appendChild(ie8);

    return ie1;
}


function load() {
    data.forEach((value, index, array) => {
        let ana_element = document.getElementById("items");
        ana_element.appendChild(olustur(value.text, value.id));
    });
}


function add() {
    let input = document.getElementById("input");
    let new_number = Math.round(Math.random() * 100000);
    let arama_sonucu = data.map((value) => {
        return value.id;
    });
    let varmi = arama_sonucu.indexOf(new_number);
    let new_obj;
    if(varmi == -1){
        new_obj = {
            text: input.value,
            id:new_number,
        }
    }else{
        new_obj = {
            text: input.value,
            id:Math.round(Math.random() * 100000),
        }
    }
    data.push(new_obj);
    
    let ana_element = document.getElementById("items");
    ana_element.appendChild(olustur(input.value, new_number));
    input.value = "";
    
}


function checkeded(id) {
    let element = document.getElementById(id);
    console.log(element);
    let attr = document.createAttribute("class");
    attr.value = "item ciz";
    element.setAttributeNode(attr);
}

function sil(id) {
    let ana_element = document.getElementById("items");
    let element = document.getElementById(id);
    ana_element.removeChild(element);
}