console.log("This is inside appJs");

var req= new XMLHttpRequest();
req.open('GET', 'name.txt', true);
req.send(null);

req.onreadystatechange =function(){
    console.log(req.readyState);
    //var id=document.getElementById("response-id");
    //create an element

    if(req.readyState === 4)
    {
    var el =document.createElement("h1");
    var txt=document.createTextNode(req.responseText);
    console.log(txt);
    
    console.log (el.appendChild(txt));

    document.getElementById('response-id').appendChild(el);
     
    }

};

//console.log(req.responseXML);