let cityName = document.getElementById("cityName");
let weather = document.getElementById("weather");


let res1 = ``;
let res2 = ``;

let cityname = prompt("enter the city name ");
let myHttp = new XMLHttpRequest();
const url = `http://api.weatherapi.com/v1/current.json?key=b5e0bc5e4e1345fd993190805220801&q=${cityname}&aqi=no`;
myHttp.onreadystatechange = function() {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
        let data = JSON.parse(myHttp.responseText);
console.log(data);
        res1 += `
        <div class="y">
           <h2 class="u" > city name: ${data.location.name}</h2> 
         
           <img alt="image" src="https:${data.current.condition.icon}"/> 
        
        </div>
           <hr>
        
    
`;
console.log(data.current.condition.icon);

        res2 += `<h3> Temp c : ${data.current.temp_c}</h3> 
                    <h3> Temp f : ${data.current.temp_f} </h3> 
                    <h3> Cloud : ${data.current.cloud} </h3> 
                    <h3> Description : ${data.current.condition.text} </h3>    
                    <h3>${data.location.localtime}</h3>                 
            `;
    }

    cityName.innerHTML = res1;
    weather.innerHTML = res2;

}
myHttp.open("GET", url);
myHttp.send();