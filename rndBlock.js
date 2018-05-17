function random(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function myMove() {
    var block = document.getElementById('myBlock');
    var bool = false;
    go();

    block.onmouseover = function () {
        bool = true;
    };

    block.onmouseout = function () {
        bool = false;
        go();
    };

    function go() {
        if (bool) {
            return;
        }
        block.style.top = random(0, window.innerHeight - 50) + 'px';
        block.style.left = random(0, window.innerWidth - 50) + 'px';
        setTimeout(go, 2500);
    }
}

myMove();
