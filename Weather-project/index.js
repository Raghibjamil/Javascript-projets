let weatherIcon=document.querySelector('.weather-image')
async function weather(city){
    const urlkey="ea81d75e4bdd0e590966ad00a0c5c0f8";
    const url_Link="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const response=await fetch(url_Link+city+`&appid=${urlkey}`);

    if(response.status == 404){
        document.querySelector('.sub-conatiner').style.display='none';
        document.querySelector('.invalid-conatiner').style.display='block';
    }
    else{
        var data=await response.json();
    console.log(data);

    document.querySelector('.degree').innerHTML=data.main.temp+'°C';
    document.querySelector('.city-name').innerHTML=data.name;
    document.querySelector('.humidity-percentage').innerHTML=data.main.humidity+'%';
    document.querySelector('.humidity-percentage2').innerHTML=data.wind.speed+'km/hr';

    if(data.weather[0].main=='Clouds'){
        weatherIcon.src='./images/clouds.png'
    }
    else if(data.weather[0].main=='Clear'){
        weatherIcon.src='./images/clear.png'
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src='./images/drizzle.png'
    }

   
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src='./images/rain.png'
    }
    
    else if(data.weather[0].main=='Mist'){
        weatherIcon.src='./images/mist.png'
    }
    else if (data.weather[0].main=='Haze'){
        weatherIcon.src='./images/haze.png'
    }

    document.querySelector('.sub-conatiner').style.display="block"; 
    document.querySelector('.invalid-conatiner').style.display='none';
    
    }
   
   
}
// weather('kolkata')
var button=document.querySelector('.btn');
var text_value=document.querySelector('.input')



text_value.addEventListener("keyup",(e)=>{
    e.preventDefault();
    if(e.keyCode === 13){
        button.click();
    }
})
button.addEventListener('click',(event)=>{
    weather(text_value.value);
})