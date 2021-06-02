window.addEventListener("load",init,false);

function $(id){
    return document.getElementById(id);
}

function init(){
    if($("bringaFoglal")){
        let bringa = $("bringaFoglal").addEventListener("click",bringaKolcsonzes,false);
    }
    if($("rollerFoglal")){
        let roller = $("rollerFoglal").addEventListener("click",rollerKolcsonzes,false);
    }
}

function bringaKolcsonzes(){
    let ido = $("bringaOra").value;
    let nev = $("bringaVezetek")+$("bringaKereszt");
    let osszeg =null;
    ellenorzo($("inputEmail3"),ido,nev);
    if($("merida").selected){
        osszeg = kedvezmeny(ido,850);
        return $("resultBringa").innerHTML ="A fizetendő összeg "+Math.round(osszeg)+"Ft.";
    }
    if($("moutain").selected){
        osszeg = kedvezmeny(ido,750);
        return $("resultBringa").innerHTML ="A fizetendő összeg "+Math.round(osszeg)+"Ft.";
    }
    if($("verseny").selected){
        osszeg = kedvezmeny(ido,800);
        return $("resultBringa").innerHTML ="A fizetendő összeg "+Math.round(osszeg)+"Ft.";
    }
    if($("kemping").selected){
       osszeg = kedvezmeny(ido,600);
       return $("resultBringa").innerHTML ="A fizetendő összeg "+Math.round(osszeg)+"Ft.";
    }
}

function rollerKolcsonzes(){
    let ido = $("rollerIdo").value;
    let nev = $("rollerVezetek")+$("rollerKereszt");
    let osszeg =null;
    ellenorzo($("inputEmail3"),ido,nev);
   
    if($("btx250").selected){
        osszeg = kedvezmeny(ido,1200);
        return $("resultRoller").innerHTML ="A fizetendő összeg "+Math.round(osszeg)+"Ft.";
    }
    
    if($("blueway").selected){
        osszeg = kedvezmeny(ido,3000);
        return $("resultRoller").innerHTML ="A fizetendő összeg "+Math.round(osszeg)+"Ft.";
    }
    if($("nitro").selected){
        osszeg = kedvezmeny(ido,1300);
        return $("resultRoller").innerHTML ="A fizetendő összeg "+Math.round(osszeg)+"Ft.";
    }
    if($("sparco").selected){
       osszeg = kedvezmeny(ido,1050);
       return $("resultRoller").innerHTML ="A fizetendő összeg "+Math.round(osszeg)+"Ft.";
    }
}

function ellenorzo(tel,ido,nev,){
    if(tel.length=0){
        alert("Hibás telefonszám!");
    }
    if(ido<1){
        alert("Hibás idő érték!");
    }
    if(nev.length=0){
        alert("Add meg a neved!");
    }
}
/*
[5-10] --> -10%
[10-[ --> -15%
[24-[ --> -50%   
*/ 
function kedvezmeny(ora,ar){
   let osszeg =ar*ora;
    if( ora >= 24 ){
        return osszeg / 2 ;
   } 
   if( ora >= 10 ){
       return osszeg * 0.85;
   }
   if( ora>=5 && ora<=10 ){
        return osszeg * 0.9;
   }
   if(ora <= 5 ){
       return osszeg;
   }
}
