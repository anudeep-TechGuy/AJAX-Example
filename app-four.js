console.log('Inside app-four');
//create Request
var req = new XMLHttpRequest();
req.open('GET', 'name-two.txt', true);
req.send('');


//creating handler

req.onreadystatechange = function () {
    console.log(req.readyState);//If its 4 then its correct
    if (req.readyState === 4) {
        var h2 = document.createElement("h2");
        var textInsideh2 = document.createTextNode(req.responseText);
        h2.appendChild(textInsideh2);
        console.log(req.responseText);
        document.getElementById("chumky").appendChild(h2);

    }
}