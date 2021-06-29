
//Creating the Request
var req = new XMLHttpRequest();
req.open('GET', 'namer.txt', true);
req.send();
console.log('Inside prac');

//Request Handler
req.onreadystatechange = function () {
    if (req.readyState === 4) {
        //var header = document.getElementById('bro');
        //console.log(header);
        var header =document.createElement("h2");
        var textInsideHeader=document.createTextNode(req.responseText);
        console.log(textInsideHeader);
        header.appendChild(textInsideHeader);
        document.getElementById('bro').appendChild(header);
        
    }

};