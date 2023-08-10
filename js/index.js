
async function search(a) {
  var Http = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ef9f1935aa954602b92121034230308&q=${a}&days=9`);
  if (Http.ok &&  Http.status != 400) {
      var a = await Http.json();
      displayCurrent(a.location, a.current ),
      displayAnother(a.forecast.forecastday)
  }
}
document.getElementById("search").addEventListener("keyup", a=>{
  search(a.target.value)
}
);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function displayCurrent(a, t) {
  if (t != null) {
      var e = new Date(t.last_updated.replace(" ", "T"));
      var n = `<div class="today forecast ">\n    
      <div class="forecast-header"  id="today">\n    
      <div class="day ">${days[e.getDay()]}</div>\n    
      <div class=" date ">${e.getDate() + monthNames[e.getMonth()]}</div>\n    
      </div> \x3c!-- .forecast-header --\x3e\n    
      <div class="forecast-content " id="current">\n    
      <div class="location ">${a.name}</div>\n    
      <div class="degree d-flex">\n        
      <div class="num">${t.temp_c}<sup>o</sup>C</div>\n      \n        
      <div class="forecast-icon ">\n            
      <img src="https:${t.condition.icon}" alt="" width=90>\n        
      </div>\t\n \n    
      </div>\n    
      <div class="custom">${t.condition.text}</div>\n    
      <span><img src="imgs/icon-umberella.png" alt="">20%</span>\n
      \t\t\t\t\t\t\t\t<span><img src="imgs/icon-wind.png" alt="">18km/h</span>\n
      \t\t\t\t\t\t\t\t<span><img src="imgs/icon-compass.png" alt="">East</span>\n    
      </div>\n</div>`;
      document.getElementById("forecast").innerHTML = n
  }
}
function displayAnother(a) {
  var hasale = "";
  for (var i = 1; i < a.length; i++)
      hasale += `\t<div class="forecast">\n   
              <div class="forecast-header">\n  
                  <div class="day">${days[new Date(a[i].date.replace(" ", "T")).getDay()]}</div>\n
                </div> \x3c!-- .forecast-header --\x3e\n 
                <div class="forecast-content">\n            
                  <div class="forecast-icon">\n <img src="https:${a[i].day.condition.icon}" alt="" width=48>\n            
                  </div>\n            
                  <div class="degree">${a[i].day.maxtemp_c}<sup>o</sup>C</div>\n            
                  <small>${a[i].day.mintemp_c}<sup>o</sup></small>\n            
                  <div class="custom">${a[i].day.condition.text}</div>\n        
                </div>\n        
            </div>`;
  document.getElementById("forecast").innerHTML += hasale
}
search("cairo");
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
  console.log(position)
    },function (error) {
    console.log(error)
    }  
  )
}










