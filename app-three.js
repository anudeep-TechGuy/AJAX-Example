console.log("Iniside App-Three");

//Creating a request
var req = new XMLHttpRequest();
req.open('GET', 'name-one.txt', true);
req.send(null);

//Handler

req.onreadystatechange = function () {
    console.log(req.readyState);//It will print 4 then its good.
    if (req.readyState === 4) {
        //console.log(req.responseText);
        var p=document.createElement("h1");
        var textInsidep=document.createTextNode(req.responseText);
        p.appendChild(textInsidep);
        document.getElementById("chutky").appendChild(p);
    }
}