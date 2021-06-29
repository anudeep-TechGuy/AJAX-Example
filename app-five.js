console.log("Inside the App-Five");

//Create a request
var req =new XMLHttpRequest();
req.open('GET', 'name-three.txt', true);
req.send('');


//Create an event-Handler

req.onreadystatechange=function(){
    console.log(req.readyState);//If you get four it is a success message
     
    if(req.readyState===4){
        console.log(req.responseText);
        //Create an element.
        var h3=document.createElement("h3");
        var textInsideh3=document.createTextNode(req.responseText);
        h3.appendChild(textInsideh3);
        document.getElementById("mani").appendChild(h3);
    }
};