function touched() {
    document.getElementById("savebtn").style.background = "linear-gradient(to bottom, #59b363 5%, #449940 100%)"
    console.log("Hi");
}


var sympa = 0;

var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

function note(pnote) {
    var note = pnote;
    if (note === "1+" ||note === "1-"||note === "2+"||note === "2-"||note === "3+"||note === "3-"||note === "4+"||note === "4-"||note === "5+"||note === "5-") {
        return true;
    } else {return false}
}

function nopu(pnote){
    var note = pnote;
    var punkte = 0;

    if (note === "1+") {
        punkte = 15;
       } else if (note === "1") {
        punkte = 14;
       } else if (note === "1-") {
        punkte = 13;
       } else if (note === "2+") {
        punkte = 12;
       } else if (note === "2") {
        punkte = 11;
       } else if (note === "2-") {
        punkte = 10;
       } else if (note === "3+") {
        punkte = 9;
       } else if (note === "3") {
        punkte = 8;
       } else if (note === "3-") {
        punkte = 7;
       } else if (note === "4+") {
        punkte = 6;
       } else if (note === "4") {
        punkte = 5;
       } else if (note === "4-") {
        punkte = 4;
       } else if (note === "5+") {
        sspunkte1 = 3;
       } else if (note === "5") {
        punkte = 2;
       } else if (note === "5-") {
        punkte = 1;
       } else if (note === "6") {
        punkte = 0;
       } else if (note === "") {
        punkte = 16;
       } else {
        punkte = 17;
       }
    return punkte;

}



function calculate() {

    document.getElementById("schriftlich1").style.border = "";
    document.getElementById("schriftlich2").style.border = "";
    document.getElementById("muendlich1").style.border = "";
    document.getElementById("muendlich2").style.border = "";
    count5 = 0;

 
    var s1 = document.getElementById(
     "schriftlich1").value;
    var s2 = document.getElementById(
     "schriftlich2").value;
    var m1 = document.getElementById(
     "muendlich1").value;
    var m2 = document.getElementById(
     "muendlich2").value;    
    var s1c = parseInt(s1);
    var s2c = parseInt(s2);
    var m1c = parseInt(m1);
    var m2c = parseInt(m2);

    var a = 0;
    var b = 0;
    var ges = 0;
    var ss1 = 0;
    var ss2 = 0;
    var mm1 = 0;
    var mm2 = 0;
    var fail = 0;

    if ((note(s1) || note(s2)|| note(m1)|| note(m2)) && count3 === 0 && (s1c < 7) && (s2c < 7) && (m1c < 7) && (m2c < 7)) {
        ss1 = nopu(s1);
        ss2 = nopu(s2);
        mm1 = nopu(m1);
        mm2 = nopu(m2);
        count4 = 0;
        console.log("erste variante");
        document.getElementById("guess").innerHTML = "Erkannt: Noten";
    } else if ((s1c>6 ||s2c>6 ||m1c>6 ||m2c>6 ) && count3 === 0 && !note(s1) && !note(s2)&& !note(m1)&& !note(m2) ) {
        ss1 = parseInt(s1);
        if (!(s1<100000000)) {
            ss1 = 17;
        }
        if (isNaN(ss1)){
            ss1 = 16;
        } else if (ss1 > 15) {
            ss1 = 17;
        } else if (ss1 < 0) {
            ss1 = 17;
        }
        ss2 = parseInt(s2);
        if (!(s2<100000000)) {
            ss2 = 17;
        }
        if (isNaN(ss2)){
            ss2 = 16;
        } else if (ss2 > 15) {
            ss2 = 17;
        } else if (ss2 < 0) {
            ss2 = 17;
        }
        mm1 = parseInt(m1);
        if (!(m1<100000000)) {
            mm1 = 17;
        }
        if (isNaN(mm1)){
            mm1 = 16;
        } else if (mm1 > 15) {
            mm1 = 17;
        } else if (mm1 < 0) {
            mm1 = 17;
        }
        mm2 = parseInt(m2);
        if (!(m2<100000000)) {
            mm2 = 17;
        }
        if (isNaN(mm2)){
            mm2 = 16;
        } else if (mm2 > 15) {
            mm2 = 17;
        } else if (mm2 < 0) {
            mm2 = 17;
        }
        count4 = 1;
        console.log("zweite variante");
        document.getElementById("guess").innerHTML = "Erkannt: Notenpunkte";
    } else if (count3 === 1 && document.getElementById("manuell").value === "noten") {
        ss1 = nopu(s1);
        ss2 = nopu(s2);
        mm1 = nopu(m1);
        mm2 = nopu(m2);
        count4 = 0;
        console.log("dritte variante");
    } else if (count3 === 1 && document.getElementById("manuell").value === "punkte") {
        if (note(s1)) {
            s1 = 17;
        }
        ss1 = parseInt(s1);
        if (!(s1<100000000)) {
            ss1 = 17;
        }
        if (isNaN(ss1)){
            ss1 = 16;
        } else if (ss1 > 15) {
            ss1 = 17;
        }  else if (ss1 < 0) {
            ss1 = 17;
        }
        if (note(s2)) {
            s2 = 17;
        }
        ss2 = parseInt(s2);
        if (!(s2<100000000)) {
            ss2 = 17;
        }
        if (isNaN(ss2)){
            ss2 = 16;
        } else if (ss2 > 15) {
            ss2 = 17;
        } else if (ss2 < 0) {
            ss2 = 17;
        }
        if (note(m1)) {
            m1 = 17;
        }
        mm1 = parseInt(m1);
        if (!(m1<100000000)) {
            mm1 = 17;
        }
        if (isNaN(mm1)){
            mm1 = 16;
        } else if (mm1 > 15) {
            mm1 = 17;
        } else if (mm1 < 0) {
            mm1 = 17;
        }
        if (note(m2)) {
            m2 = 17;
        }
        mm2 = parseInt(m2);
        if (!(m2<100000000)) {
            mm2 = 17;
        }
        if (isNaN(mm2)){
            mm2 = 16;
        } else if (mm2 > 15) {
            mm2 = 17;
        } else if (mm2 < 0) {
            mm2 = 17;
        }
        count4 = 1;
        console.log("vierte variante");
    } else {
        ss1 = nopu(s1);
        ss2 = nopu(s2);
        mm1 = nopu(m1);
        mm2 = nopu(m2);
        count4 = 0;
        console.log("fünfte variante");
        document.getElementById("guess").innerHTML = "Erkannt: Noten";
    }
    console.log(ss1);
    if (ss1 === 17) {
        document.getElementById("schriftlich1").style.border = "solid 2px red";
    }
    if (ss2 === 17) {
        document.getElementById("schriftlich2").style.border = "solid 2px red";
    }
    if (mm1 === 17) {
        document.getElementById("muendlich1").style.border = "solid 2px red";
    }
    if (mm2 === 17) {
        document.getElementById("muendlich2").style.border = "solid 2px red";
    }
    
    var array = [];
    for (i=0;i<4;i++) {
        if (i===0 && ss1!==16 && ss1!==17) {
            array.push(ss1);
        } else if (i===1 && ss2!==16 && ss2!==17) {
            array.push(ss2);
        } else if (i===2 && mm1!==16 && mm1!==17) {
            array.push(mm1);
        } else if (i===3 && mm2!==16 && mm2!==17) {
            array.push(mm2);
        }
    }
    
    console.log(array);

    for (i=0;i<array.length;i++) {
        a = a + array[i];
    }
    ges = a / array.length;
    

    if (count2 === 1) {
        document.getElementById("halbjahr").style.border = "";
            var halbj = document.getElementById("halbjahr").value;
        console.log(halbj);

        if (halbj !== "" && count4 === 0) {
            var halbjahr = nopu(halbj);
            if (halbjahr < 16) {
                ges = (ges + halbjahr) / 2;
            } else if (halbjahr === 17){
                document.getElementById("halbjahr").style.border = "solid 2px red";
                count5 = 1;
            }
            
        } else if (halbj !== "" && count4 === 1) {
            if (halbj > 15 || halbj < 0 || !(halbj<100000)) {
                document.getElementById("halbjahr").style.border = "solid 2px red";
                count5 = 1;
            } else {
                var halbjahr2 = parseInt(halbj);
                ges = (ges + halbjahr2) / 2;
            }
            
        }
        
    }

    
    
    
    console.log(ges);
    console.log(sympa);
    sympa = sympa * 1;
    ges = ges + sympa;
    console.log(ges);
    ges2 = Math.round(ges);
    
    if (ges2 === 15) {
     ges3 = "1+";
    } else if (ges2 === 14) {
     ges3 = "1";
    } else if (ges2 === 13) {
     ges3 = "1-";
    } else if (ges2 === 12) {
     ges3 = "2+";
    } else if (ges2 === 11) {
     ges3 = "2";
    } else if (ges2 === 10) {
     ges3 = "2-";
    } else if (ges2 === 9) {
     ges3 = "3+";
    } else if (ges2 === 8) {
     ges3 = "3";
    } else if (ges2 === 7) {
     ges3 = "3-";
    } else if (ges2 === 6) {
     ges3 = "4+";
    } else if (ges2 === 5) {
     ges3 = "4";
    } else if (ges2 === 4) {
     ges3 = "4-";
    } else if (ges2 === 3) {
     ges3 = "5+";
    } else if (ges2 === 2) {
     ges3 = "5";
    } else if (ges2 === 1) {
     ges3 = "5-";
    } else if (ges2 === 0) {
     ges3 = "6";
    } else {
     ges3 = "Fehler";
    }

    var sec = " ";
    if (ges2 === 15) {
        sec = "1";
       } else if (ges2 === 14) {
        sec = "1-";
       } else if (ges2 === 13) {
        sec = "2+";
       } else if (ges2 === 12) {
        sec = "2";
       } else if (ges2 === 11) {
        sec = "2-";
       } else if (ges2 === 10) {
        sec = "3+";
       } else if (ges2 === 9) {
        sec = "3";
       } else if (ges2 === 8) {
        sec = "3-";
       } else if (ges2 === 7) {
        sec = "4+";
       } else if (ges2 === 6) {
        sec = "4";
       } else if (ges2 === 5) {
        sec = "4-";
       } else if (ges2 === 4) {
        sec = "5+";
       } else if (ges2 === 3) {
        sec = "5";
       } else if (ges2 === 2) {
        sec = "5-";
       } else if (ges2 === 1) {
        sec = "6";
       } else if (ges2 === 0) {
        sec = "6";
       } else {
        sec = "Fehler";
       }

    var secp = ges2 -1;

    if(ges2-ges>0.4){
        document.getElementById("out").innerHTML = ges3 + " / " + sec;
        document.getElementById("punkte").innerHTML = ges2 + " / " + secp;
    } else {
        document.getElementById("out").innerHTML = ges3;
        document.getElementById("punkte").innerHTML = ges2;
    }
    if (ss1===17 || ss2===17|| mm1 ===17 || mm2 === 17 || count5 === 1){
        document.getElementById("out").innerHTML = "Fehler";
        document.getElementById("punkte").innerHTML = "Fehler";
    }
    
    
    console.log(ges);
    console.log(ges2);
    
    
    
   }
   var count = 0;
   


   function set() {
    if (count === 0) {
        document.getElementById("settings").innerHTML = "<p><strong>Einstellungen</strong></p><br><span class='halbjahr'>Erstes Halbjahr:</span><input type='checkbox' id='checkbox'><br><i class='warn'>Warnung: So werden Noten nicht berechnet!</i><br><br><span>Erkennung:</span><select name='Notenpunkte?' id='select'><option value='auto'>Intelligent</option><option value='manuell'>Manuell</option></select><br><br>Sympathie: <input type='range' id='symp' name='symp' min='-1' max='1' step='0.5'><br><br><button id='savebtn' onclick='save()'>Speichern</button>";
        count++;
        document.querySelector("#settings").style.position ="static";
        document.querySelector("#symp").value = sympa;
        document.getElementById("checkbox").addEventListener("click", touched);
        document.getElementById("select").addEventListener("click", touched);
        document.getElementById("symp").addEventListener("click", touched);




        
    } else {
        document.getElementById("settings").innerHTML = "";
        count--;
        document.querySelector("#settings").style.position ="absolute";
    }
    if (count2 === 1 && count === 1) {  
        document.getElementById("checkbox").checked = true;
    }
    if (count3 === 1 && count === 1) {
        document.getElementById("select").value = "manuell";
    }
   }

   function save() {
    var bool = document.getElementById("checkbox").checked;
    document.getElementById("savebtn").style.background = "linear-gradient(to bottom, #8ab590 5%, #79a777 100%)";
    if (bool === true) {
        document.getElementById("halbdiv").innerHTML = "Erstes Halbjahr:<input id='halbjahr' type='text' placeholder='Halbjahr'></input>";
        count2 = 1;
    } else {
        document.getElementById("halbdiv").innerHTML = " ";
        count2 = 0;
    }
    if (document.getElementById("select").value === "auto") {
        count3 = 0;
        document.getElementById("manudiv").innerHTML = " ";
        document.getElementById("guess").innerHTML = "Erkannt: ";
    } else if (document.getElementById("select").value === "manuell") {
        count3 = 1;
        document.getElementById("manudiv").innerHTML = "<br><span>System: </span><select name='Manuell' id='manuell'><option value='noten'>Noten</option><option value='punkte'>Notenpunkte</option></select>";
        document.getElementById("guess").innerHTML = "";
    }
    sympa = document.querySelector("#symp").value;
    document.querySelector("#out").innerHTML= " ";
    document.querySelector("#punkte").innerHTML= " ";
   }

countfarbe = 0;

const color = document.querySelector("color");
//color.addEventListener("click", farbe);

function farbe() {

    if (countfarbe === 0) {
        document.querySelector("link").href = "version.css";
        //document.querySelectorAll("a")[0].href = "versionblack.html";
        //document.querySelectorAll("a")[1].href = "impressumblack.html";
        countfarbe++;
    } else {
        document.querySelector("link").href = "style.css";
        //document.querySelectorAll("a")[0].href = "version.html";
        //document.querySelectorAll("a")[1].href = "impressum.html";
        countfarbe--;
    }
}


   

   