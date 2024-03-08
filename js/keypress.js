document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        console.log("up arrow");
    }
    else if (e.keyCode == '40') {
        console.log("down arrow");
    }
    else if (e.keyCode == '37') {
        console.log('left arrow');
    }
    else if (e.keyCode == '39') {
        console.log('right arrow');
    }
}



