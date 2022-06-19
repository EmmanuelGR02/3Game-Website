
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
    let message = (userName() + " is a trash ass name");
    var img = document.createElement("img");

    var div = document.getElementById("monkey");
    img.src = "monkeyPic.jpg";
    div.appendChild(img);

    alert(message);
    alert("I will now show a pic of u for 3 seconds ;)");
    setTimeout(() => window.location.reload(), 2000);
}

function tictactoe() {
    let message = (userName() + " is a dumb name");
    var img = document.createElement("img");

    var div = document.getElementById("beetlejuice");
    img.src = "beetlejuice.jpg";
    div.appendChild(img);

    alert(message);
    alert("I will now show a pic of u for 3 seconds ;)");
    setTimeout(() => window.location.reload(), 2000);
}

function c4() {
    let message = (userName() + " is an alpha name");
    var img = document.createElement("img");

    var div = document.getElementById("chad");
    img.src = "chad.jpg";
    div.appendChild(img);

    alert(message);
    alert("I will now show a pic of u for 3 seconds ;)");
    setTimeout(() => window.location.reload(), 2000);
}

function randPic() {
    var randNum = Math.floor(Math.random() * 11);

    if (randNum = 0) {

    } else if(randNum == 1) {

    } else if(randNum == 2) {

    } else if(randNum == 3) {

    } else if(randNum == 4) {

    } else if(randNum == 5) {

    } else if(randNum == 6) {

    } else if(randNum == 7) {

    } else if(randNum == 8) {

    } else if(randNum == 9) {

    } else if(randNum == 10) {

    }
    
}