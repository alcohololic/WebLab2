function parseLine() {
    var arr = [];
    var div = document.getElementById("list");
    var ul = document.createElement("ul");
    var myLine = document.getElementById("parseLine").value;

    if (myLine.length % 2) {
        myLine += '_'
    }

    for (var i = 0; i < myLine.length / 2; i++) {
        arr[i] = myLine[i * 2] + myLine[i * 2 + 1];
    }

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    div.appendChild(ul);

    for (var n = 0; n < arr.length; n++) {
        var li = document.createElement('li');
        li.innerHTML = arr[n];
        ul.appendChild(li);

    }


}
