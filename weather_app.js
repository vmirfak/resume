const APIurl = 'https://api.weatherapi.com';
const APIKey = '40257d61064a4af1bf2151109211605';
const desiredLocation = 'felgueiras';
const forecastDays = '4';
const weatherLanguage = 'en';

var api_url = APIurl + '/v1/forecast.json?key=' + APIKey + '&q=' + desiredLocation + '&days=' + forecastDays + '&aqi=no&alerts=no&lang=' + weatherLanguage


let changeAPILocation = () => {
    var test_result = document.getElementById('city_text_input').value
    api_url = APIurl + '/v1/forecast.json?key=' + APIKey + '&q=' + test_result + '&days=' + forecastDays + '&aqi=no&alerts=no&lang=' + weatherLanguage
    document.getElementById("city_text_input").value = ''
}

async function getISSData() {
    const response = await fetch(api_url);
    const data = await response.json();
    const is_day_or_night = data.current.is_day;
    var weather_data = [{ "code": 1000, "day": "Sunny", "night": "Clear", "icon": 113 }, { "code": 1003, "day": "Partly cloudy", "night": "Partly cloudy", "icon": 116 }, { "code": 1006, "day": "Cloudy", "night": "Cloudy", "icon": 119 }, { "code": 1009, "day": "Overcast", "night": "Overcast", "icon": 122 }, { "code": 1030, "day": "Mist", "night": "Mist", "icon": 143 }, { "code": 1063, "day": "Patchy rain possible", "night": "Patchy rain possible", "icon": 176 }, { "code": 1066, "day": "Patchy snow possible", "night": "Patchy snow possible", "icon": 179 }, { "code": 1069, "day": "Patchy sleet possible", "night": "Patchy sleet possible", "icon": 182 }, { "code": 1072, "day": "Patchy freezing drizzle possible", "night": "Patchy freezing drizzle possible", "icon": 185 }, { "code": 1087, "day": "Thundery outbreaks possible", "night": "Thundery outbreaks possible", "icon": 200 }, { "code": 1114, "day": "Blowing snow", "night": "Blowing snow", "icon": 227 }, { "code": 1117, "day": "Blizzard", "night": "Blizzard", "icon": 230 }, { "code": 1135, "day": "Fog", "night": "Fog", "icon": 248 }, { "code": 1147, "day": "Freezing fog", "night": "Freezing fog", "icon": 260 }, { "code": 1150, "day": "Patchy light drizzle", "night": "Patchy light drizzle", "icon": 263 }, { "code": 1153, "day": "Light drizzle", "night": "Light drizzle", "icon": 266 }, { "code": 1168, "day": "Freezing drizzle", "night": "Freezing drizzle", "icon": 281 }, { "code": 1171, "day": "Heavy freezing drizzle", "night": "Heavy freezing drizzle", "icon": 284 }, { "code": 1180, "day": "Patchy light rain", "night": "Patchy light rain", "icon": 293 }, { "code": 1183, "day": "Light rain", "night": "Light rain", "icon": 296 }, { "code": 1186, "day": "Moderate rain at times", "night": "Moderate rain at times", "icon": 299 }, { "code": 1189, "day": "Moderate rain", "night": "Moderate rain", "icon": 302 }, { "code": 1192, "day": "Heavy rain at times", "night": "Heavy rain at times", "icon": 305 }, { "code": 1195, "day": "Heavy rain", "night": "Heavy rain", "icon": 308 }, { "code": 1198, "day": "Light freezing rain", "night": "Light freezing rain", "icon": 311 }, { "code": 1201, "day": "Moderate or heavy freezing rain", "night": "Moderate or heavy freezing rain", "icon": 314 }, { "code": 1204, "day": "Light sleet", "night": "Light sleet", "icon": 317 }, { "code": 1207, "day": "Moderate or heavy sleet", "night": "Moderate or heavy sleet", "icon": 320 }, { "code": 1210, "day": "Patchy light snow", "night": "Patchy light snow", "icon": 323 }, { "code": 1213, "day": "Light snow", "night": "Light snow", "icon": 326 }, { "code": 1216, "day": "Patchy moderate snow", "night": "Patchy moderate snow", "icon": 329 }, { "code": 1219, "day": "Moderate snow", "night": "Moderate snow", "icon": 332 }, { "code": 1222, "day": "Patchy heavy snow", "night": "Patchy heavy snow", "icon": 335 }, { "code": 1225, "day": "Heavy snow", "night": "Heavy snow", "icon": 338 }, { "code": 1237, "day": "Ice pellets", "night": "Ice pellets", "icon": 350 }, { "code": 1240, "day": "Light rain shower", "night": "Light rain shower", "icon": 353 }, { "code": 1243, "day": "Moderate or heavy rain shower", "night": "Moderate or heavy rain shower", "icon": 356 }, { "code": 1246, "day": "Torrential rain shower", "night": "Torrential rain shower", "icon": 359 }, { "code": 1249, "day": "Light sleet showers", "night": "Light sleet showers", "icon": 362 }, { "code": 1252, "day": "Moderate or heavy sleet showers", "night": "Moderate or heavy sleet showers", "icon": 365 }, { "code": 1255, "day": "Light snow showers", "night": "Light snow showers", "icon": 368 }, { "code": 1258, "day": "Moderate or heavy snow showers", "night": "Moderate or heavy snow showers", "icon": 371 }, { "code": 1261, "day": "Light showers of ice pellets", "night": "Light showers of ice pellets", "icon": 374 }, { "code": 1264, "day": "Moderate or heavy showers of ice pellets", "night": "Moderate or heavy showers of ice pellets", "icon": 377 }, { "code": 1273, "day": "Patchy light rain with thunder", "night": "Patchy light rain with thunder", "icon": 386 }, { "code": 1276, "day": "Moderate or heavy rain with thunder", "night": "Moderate or heavy rain with thunder", "icon": 389 }, { "code": 1279, "day": "Patchy light snow with thunder", "night": "Patchy light snow with thunder", "icon": 392 }, { "code": 1282, "day": "Moderate or heavy snow with thunder", "night": "Moderate or heavy snow with thunder", "icon": 395 }];
    var days_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    document.getElementById('weather_desc').textContent = data.current.condition.text;
    document.getElementById('temperature_c').textContent = data.current.temp_c;
    document.getElementById('dir_vento').textContent = data.current.wind_dir;
    document.getElementById('vel_vento').textContent = data.current.wind_kph;

    document.getElementById('location').textContent = data.location.name;
    document.getElementById('distrito').textContent = data.location.region;
    document.getElementById('country').textContent = data.location.country;

    document.getElementById('forecastday0_weather_desc').textContent = data.forecast.forecastday[0].day.condition.text;
    document.getElementById('forecastday1_weather_desc').textContent = data.forecast.forecastday[1].day.condition.text;
    document.getElementById('forecastday2_weather_desc').textContent = data.forecast.forecastday[2].day.condition.text;

    document.getElementById('forecastday0_date').textContent = data.forecast.forecastday[0].date;
    document.getElementById('forecastday1_date').textContent = data.forecast.forecastday[1].date;
    document.getElementById('forecastday2_date').textContent = data.forecast.forecastday[2].date;

    document.getElementById('forecastday0_tmax').textContent = data.forecast.forecastday[0].day.maxtemp_c;
    document.getElementById('forecastday1_tmax').textContent = data.forecast.forecastday[1].day.maxtemp_c;
    document.getElementById('forecastday2_tmax').textContent = data.forecast.forecastday[2].day.maxtemp_c;

    document.getElementById('forecastday0_tmin').textContent = data.forecast.forecastday[0].day.mintemp_c;
    document.getElementById('forecastday1_tmin').textContent = data.forecast.forecastday[1].day.mintemp_c;
    document.getElementById('forecastday2_tmin').textContent = data.forecast.forecastday[2].day.mintemp_c;

    document.getElementById('forecastday0_rainperc').textContent = data.forecast.forecastday[0].day.daily_chance_of_rain;
    document.getElementById('forecastday0_1_rainperc').textContent = data.forecast.forecastday[0].day.daily_chance_of_rain;
    document.getElementById('forecastday1_rainperc').textContent = data.forecast.forecastday[1].day.daily_chance_of_rain;
    document.getElementById('forecastday2_rainperc').textContent = data.forecast.forecastday[2].day.daily_chance_of_rain;

    document.getElementById('forecastday0_uv').textContent = data.forecast.forecastday[0].day.uv;
    document.getElementById('forecastday1_uv').textContent = data.forecast.forecastday[1].day.uv;
    document.getElementById('forecastday2_uv').textContent = data.forecast.forecastday[2].day.uv;

    var dayweek0 = new Date(data.forecast.forecastday[0].date);
    var dayweek1 = new Date(data.forecast.forecastday[1].date);
    var dayweek2 = new Date(data.forecast.forecastday[2].date);

    var dayofweek0 = dayweek0.getDay();
    var dayofweek1 = dayweek1.getDay();
    var dayofweek2 = dayweek2.getDay();

    document.getElementById('dayofweek0').textContent = days_of_week[dayofweek0];
    document.getElementById('dayofweek1').textContent = days_of_week[dayofweek1];
    document.getElementById('dayofweek2').textContent = days_of_week[dayofweek2];

    let search_icon_code = () => {
        for (let i = 0; i < weather_data.length; i++) {
            if (weather_data[i].code == data.current.condition.code) {
                //console.log(weather_data[i].icon);
                if (is_day_or_night == 1) {
                    document.getElementById('weather_state_forecast0').src = "weather/64x64/day/" + weather_data[i].icon + ".png";
                    document.getElementById('weather_state').src = "weather/64x64/day/" + weather_data[i].icon + ".png";
                } else {
                    document.getElementById('weather_state_forecast0').src = "weather/64x64/night/" + weather_data[i].icon + ".png";
                    document.getElementById('weather_state').src = "weather/64x64/night/" + weather_data[i].icon + ".png";
                }
            }
        }
    }
    let search_icon_code_forecast1 = (weather_data) => {
        for (let i = 0; i < weather_data.length; i++) {
            if (weather_data[i].code == data.forecast.forecastday[1].day.condition.code) {
                document.getElementById('weather_state_forecast1').src = "weather/64x64/day/" + weather_data[1].icon + ".png";
            }
        }
    }
    let search_icon_code_forecast2 = (weather_data) =>{
        for (let i = 0; i < weather_data.length; i++) {
            if (weather_data[i].code == data.forecast.forecastday[2].day.condition.code) {
                document.getElementById('weather_state_forecast2').src = "weather/64x64/day/" + weather_data[2].icon + ".png";
            }
        }
    }
    search_icon_code(weather_data);
    search_icon_code_forecast1(weather_data);
    search_icon_code_forecast2(weather_data);
}
setInterval(getISSData, 1500);