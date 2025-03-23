let miasto = document.getElementById("miasto");
let temperatura = document.getElementById("temperatura");
let cisnienie = document.getElementById("cisnienie");
let godz_pomiaru = document.getElementById("godz_pomiaru");
let wilgotnosc = document.getElementById("wilgotnosc");
let suma_opadow = document.getElementById("suma_opadow");

let select = document.getElementById("select");
let wybor ="";
PobierzDane();

select.addEventListener("change", () => {
        wybor = select.value;
        PobierzDaneMiasta(wybor);


    })

function PobierzDaneMiasta(wybor){

    const url = "https://danepubliczne.imgw.pl/api/data/synop/id/"+wybor;
    fetch(url)
    .then( response => response.json())
    .then(data => {
        WyswietlDane(data);

        })
    
}
function WyswietlDane(obiekt){
    miasto.textContent = "Miasto: "+obiekt.stacja;
    temperatura.textContent = "Temperatura: "+obiekt.temperatura+" °C";
    cisnienie.textContent = "Ciśnienie: "+obiekt.cisnienie+" hPa";
    godz_pomiaru.textContent = "Godzina Pomiaru: "+obiekt.godzina_pomiaru;
    wilgotnosc.textContent = "Wilgotność: "+obiekt.wilgotnosc_wzgledna+" %";
    suma_opadow.textContent = "Suma opadów: "+obiekt.suma_opadu+" mm";
}

 function PobierzDane(){
    const url = "https://danepubliczne.imgw.pl/api/data/synop";
    fetch(url)
    .then( response => response.json())
    .then(data => {
    
    data.forEach(stacja =>{
        let option = document.createElement("option");
        option.value=stacja.id_stacji;
        option.textContent = stacja.stacja;
        select.appendChild(option);
    }
    );

        })
 }