const button = document.getElementById("search_Button");
const input= document.getElementById("city_Name");
const newCityName= document.getElementById("newCityName");
const cityTemp = document.getElementById("cityTemperature");
const time = document.getElementById("cityTime");
// making async function
async function getData(newCityName){
    // note to past the api code of weather go to weatherapi.com and create a account there and then copy the api key after that go to api explorer
    // and past your api key and then  and then click on show responese and then copy the link of call and then create a promise by editing the url of call
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=b50ac40fd63246b7986134351242011&q=${newCityName}&aqi=yes`
    );
    return await promise.json();
}

// making arrow function which includes dom manipulation also
button.addEventListener("click",async()=>{
const value = input.value;
const result = await getData(value);
newCityName.innerText=`${result.location.name},${result.location.country}`;
cityTime.innerText = result.location.localtime;
cityTemp.innerText = result.current.temp_c;
});