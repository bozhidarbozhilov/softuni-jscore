function attachEvents() {
    const conditions = {
        sunny: '☀',
        partlySunny: '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'

    };
    const locationElement = document.getElementById('location');
    const submitBtn = document.getElementById('submit');

    const baseUrl = 'https://judgetests.firebaseio.com/';
    const locationsUrl = `${baseUrl}locations.json`;
    let location;

    const forecastDiv = document.getElementById('forecast');

    const forecastSuccessHTML = forecastDiv.innerHTML;

    let forecastClassDiv = document.querySelector('.forecasts');
    let forecastInfoClassDiv = document.querySelector('.forecast-info');


    function createHTMLElement(elementName, className, text) {
        const HTMLElement = document.createElement(elementName);

        if (className) {
            if (typeof className === 'string') {
                HTMLElement.classList.add(className);
            } else {
                for (const _class of className) {
                    HTMLElement.classList.add(_class);
                }
            }
        }
        if (text) {
            HTMLElement.textContent = text;
        }
        return HTMLElement;
    }

    function responseHandler(response) {
        if (response.status >= 400) {
            forecastDiv.textContent = 'Error';
            throw new Error();
        }
        return response.json();
    }

    function getConditionSymbol(symbol) {
        if (symbol === 'Partly sunny') {
            return conditions.partlySunny;
        }
        return conditions[symbol.toLowerCase()];
    }

    function getLocationCode() {
        let searchLocation = locationElement.value;
        console.log(searchLocation);
        return fetch(locationsUrl)
            .then(responseHandler)
            .then((data) => {
                return data.filter(location => location.name === searchLocation)[0];
            })
            .catch(err => forecastDiv.textContent = 'Error');
    }

    function loadDay(data) {
        const todayDiv = document.getElementById('current');
        if (forecastClassDiv !== null) {
            forecastClassDiv.textContent = '';
        } else {
            forecastClassDiv = createHTMLElement('div', 'forecasts');
        }

        const conditionsSpan = createHTMLElement('span', 'condition');

        const symbolSpan = createHTMLElement('span', 'symbol', getConditionSymbol(data.forecast.condition));
        forecastClassDiv.appendChild(symbolSpan);

        const locationData = createHTMLElement('span', 'forecast-data', data.name);
        conditionsSpan.appendChild(locationData);

        const tempData = createHTMLElement('span', 'forecast-data', `${data.forecast.low}/${data.forecast.high}`);
        conditionsSpan.appendChild(tempData);

        const conditionData = createHTMLElement('span', 'forecast-data', data.forecast.condition);
        conditionsSpan.appendChild(conditionData);

        forecastClassDiv.appendChild(conditionsSpan);

        todayDiv.appendChild(forecastClassDiv);

    }

    function loadIncoming(data) {
        const threeDayForecast = document.getElementById('upcoming');
        if (forecastInfoClassDiv) {
            forecastInfoClassDiv.textContent = '';
        } else {
            forecastInfoClassDiv = createHTMLElement('div', 'forecast-info');
        }

        data.forecast.forEach(day => {
            const upcomingSpan = createHTMLElement('span', 'upcoming');

            const symbolSpan = createHTMLElement('span', 'symbol', getConditionSymbol(day.condition));
            upcomingSpan.appendChild(symbolSpan);

            const tempSpan = createHTMLElement('span', 'forecast-data', `${day.low}/${day.high}`);
            upcomingSpan.appendChild(tempSpan);

            const conditionSpan = createHTMLElement('span', 'forecast-data', day.condition);
            upcomingSpan.appendChild(conditionSpan);

            forecastInfoClassDiv.appendChild(upcomingSpan);
        });

        threeDayForecast.appendChild(forecastInfoClassDiv);
    }

    async function getWeather() {
        location = await getLocationCode();
        if (location !== undefined) {
            forecastDiv.innerHTML = forecastSuccessHTML;
            forecastDiv.style.display = 'block';
            
            let todayForecastUrl = `${baseUrl}forecast/today/${location.code}.json`;
            let upcomingForecastUrl = `${baseUrl}forecast/upcoming/${location.code}.json`;
            fetch(todayForecastUrl)
                .then(responseHandler)
                .then(loadDay)
                .catch(err => forecastDiv.textContent = 'Error');


            fetch(upcomingForecastUrl)
                .then(responseHandler)
                .then(loadIncoming)
                .catch(err => forecastDiv.textContent = 'Error');
        }else{
            forecastDiv.textContent = '';
            forecastDiv.textContent = 'Error';
            forecastDiv.style.display = 'block';
            return;
        }

        locationElement.value = '';
    }

    submitBtn.addEventListener('click', getWeather);

}

attachEvents();