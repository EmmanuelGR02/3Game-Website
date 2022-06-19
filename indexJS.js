
function userName() {
    while (true) {
        var name = prompt("Enter your name");
        if (name == "") {
            continue;
        } else {
            return name.toUpperCase();
        }
    }
}

function RPS() {
    var un = userName();
    alert("I will now show a pic of " + un + " for 3 seconds ;)");
    
    if (un == "KEVIN") {
        var img = document.createElement("img");
        var div = document.getElementById("funnyPic");
        img.src = "kevin.png";
        div.appendChild(img);
    } else if (un == "RIQUE") {
        var img = document.createElement("img");
        var div = document.getElementById("funnyPic");
        img.src = "riqueButt.jpeg";
        div.appendChild(img);
    } else {
        randPic();
    }
    realoadPage();
}

function tictactoe() {
    var un = userName();
    alert("I will now show a pic of " + un + " for 3 seconds ;)");
    
    if (un == "KEVIN") {
        var img = document.createElement("img");
        var div = document.getElementById("funnyPic");
        img.src = "kevin.png";
        div.appendChild(img);
    } else if (un == "RIQUE") {
        var img = document.createElement("img");
        var div = document.getElementById("funnyPic");
        img.src = "riqueButt.jpeg";
        div.appendChild(img);
    } else {
        randPic();
    }
    realoadPage();
}

function c4() {
    var un = userName();
    alert("I will now show a pic of " + un + " for 3 seconds ;)");

    if (un == "KEVIN") {
        var img = document.createElement("img");
        var div = document.getElementById("funnyPic");
        img.src = "kevin.png";
        div.appendChild(img);
    } else if (un == "RIQUE") {
        var img = document.createElement("img");
        var div = document.getElementById("funnyPic");
        img.src = "riqueButt.jpeg";
        div.appendChild(img);
    } else {
        randPic();
    }
    realoadPage();
}

function randNum() {
    var randNum = Math.floor(Math.random() * 8) + 1;
    return randNum;
}

function realoadPage() {
    return setTimeout(() => window.location.reload(), 2000);
}

function randPic() {
    var num = randNum();

    var img = document.createElement("img");
    var div = document.getElementById("funnyPic");

    if (num == 1) {
        img.src = "monkeyPic.jpg";
        return  div.appendChild(img);
    } else if (num == 2) {
        img.src = "chad.jpg";
        return div.appendChild(img);
    } else if (num == 3) {
        img.src = "beetlejuice.jpg";
        return  div.appendChild(img);
    } else if (num == 4) {
        img.src = "funnyBDude.jpg";
        return div.appendChild(img);
    } else if (num == 5) {
        img.src = "uglyFish.jpg";
        return div.appendChild(img);
    } else if (num == 6) {
        img.src = "uglyMessi.jpg";
        return div.appendChild(img);
    } else if (num == 7) {
        img.src = "uglyRat.jpg";
        return div.appendChild(img);
    } else if (num == 8) {
        img.src = "uglyRonaldo.jpg";
         return div.appendChild(img);
    }

}

function dissapear() {
    document.getElementById("hideaway").style.display="none";
    
}