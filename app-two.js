console.log('This is inside the app.js');

//create the request
var req=new XMLHttpRequest();
req.open('GET', 'namest.txt',true);//Passing the URL and address
req.send(); //sending it

//Event handlerfor state change

req.onreadystatechange=function(){
    console.log(req.readyState);//4 is a success message
    if(req.readyState===4){
        var name=document.getElementById('sai');
        console.log(name);
        //creating an element
        var el=document.createElement('h3');
        var textInsideel=document.createTextNode(req.responseText);
        console.log(req.responseText);//We get the complete text inside the text
        var dum =" ";
        dum=req.responseText;
        el.appendChild(textInsideel);
        name.appendChild(el);
      
        for( var i=dum.length; i>0; i--){
            console.log(dum[i]);
        }
        
    }

};