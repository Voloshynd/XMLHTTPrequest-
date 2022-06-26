'use strict'; 


const inputPLN = document.querySelector('#pln');
const inputUSD = document.querySelector('#usd');

//XMLHTTPRequest 

inputPLN.addEventListener('input', ()=>{
    const request = new XMLHttpRequest(); 
    request.open('GET', 'js/current.json'); // (method, url, async, login, password) metoda open zbiera ustawienia: ma kilka 1. argumentow method 2. url - droga do serwera 3.async -odapowida za asynchronicznosc 4 i 5 jezeli mamy haslo i login 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8', ); // naglowek potrzebny dla przekazania JSON plikow 
    request.send(); // wyzylamy zapytanie 

   // Wlasciwosci 

    //status
    //statusText 
    //response 
    //readyState
    
    // Zdarzenia 

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){// readyState uzywane dojsc rzadko
            const data = JSON.parse(request.response)// przeksztacamy w obiekt 
            console.log(typeof +inputPLN)
            inputUSD.value  = (+inputPLN.value * +data.current.usd).toFixed(2);  
           
        } else {
            inputUSD.value = 'Cos poszlo nie tak!?!'
        }
     })//sprawdza stan naszego regqustu w dany moment 


     // tez bedzie dzialalo 
     request.addEventListener('load',()=>{
        if(request.status === 200){// readyState uzywane dojsc rzadko, load zadziala tylko jeden raz kiedy request juz jest gotowy 
            // console.log(request.response)
            const data = JSON.parse(request.response)// przeksztacamy w obiekt 
            console.log(typeof +inputPLN)
            inputUSD.value  = (+inputPLN.value * +data.current.usd).toFixed(2);  
           
        } else {
            inputUSD.value = 'Cos poszlo nie tak!?!'
        }
     })//sprawdza stan naszego regqustu w dany moment 


     
})