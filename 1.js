

let img = 1;
Show();

setInterval(function() {change("next");}, 3000);

function Show() {
    document.getElementById("field").style.backgroundImage = `url("img/${img}.jpg")`;
}



function change(btn) {
    switch (btn) {
        case "prev":
            img = img < 2 ? 7 : img - 1;
            Show();
            break;
        case "next":
            img = img > 6 ? 1 : img + 1;
            Show();
            break;
    }
}


 