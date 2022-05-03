


fetch("http://api.weatherapi.com/v1/current.json?key=022de12ff6a24c39b8b163154220205&q=London&aqi=no").then((response)=> {
    return response.json();
})
.then((data)=> {
    console.log(data);
    
})

