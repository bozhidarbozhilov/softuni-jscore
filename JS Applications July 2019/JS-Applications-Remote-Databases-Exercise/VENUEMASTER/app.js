const appId = 'kid_BJ_Ke8hZg';
const username = 'guest';
const password = 'pass';
const baseUrl = `https://baas.kinvey.com/`;

let encryptedCredentials = btoa(`${username}:${password}`);

const elements = {
    venueDate: document.getElementById('venueDate'),
    getDataBtn: document.getElementById('getVenues'),
    venueElement: document.querySelector('.venue'),

}

function createHTMLElement(elementName, className, text, attributes) {
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
    if (attributes && typeof attributes === 'object') {
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                const element = attributes[key];
                HTMLElement.setAttribute(key, element);

            }
        }
    }
    return HTMLElement;
}

function responseHander(response) {
    if (response.status >= 400) {
        throw new Error(response.statusText);
    }
    return response.json();
}

function toggleDiv(ev){
    let element = ev.target.parentNode.nextElementSibling
    element.style.display === 'none' ? 
                element.style.display = 'block' : 
                element.style.display = 'none';
}

function purchaseVenue(ev, data) {
    let confirmHTML = `<span class="head">Confirm purchase</span>`
    `<div class="purchase-info">`+
        `<span>{name}</span>`+
        `<span>{qty} x {price}</span>`+
        `<span>Total: {qty * price} lv</span>`+
        `<input type="button" value="Confirm">`+
    `</div>`;
    console.log(ev.target);
}

function loadVenue(data) {
    let mainVenueElement = createHTMLElement('div', 'venue', null, { id: data._id });
    let venueNameElement = createHTMLElement('span', 'venue-name', data.name);
    let moreInfoBtn = createHTMLElement('input', 'info', null, {
        type: 'button',
        value: 'More info'
    });
    moreInfoBtn.addEventListener('click', toggleDiv);
    venueNameElement.appendChild(moreInfoBtn);
    mainVenueElement.appendChild(venueNameElement);

    let venueStyleElement = createHTMLElement('div', "venue-details", null, { style: 'display:none; ' });
    let venueTable = document.createElement('table');
    let headTableRow = document.createElement('tr');
    headTableRow.innerHTML = '<th>Ticket Price</th><th>Quantity</th><th></th>';
    venueTable.appendChild(headTableRow);

    let priceTableRow = document.createElement('tr');
    priceTableRow.innerHTML = `<tr><td class="venue-price">${data.price} lv</td>` +
        `<td><select class="quantity">` +
        `<option value="1">1</option>` +
        `<option value="2">2</option>` +
        `<option value="3">3</option>` +
        `<option value="4">4</option>` +
        `<option value="5">5</option>` +
        `</select></td>` +
        `<td><input class="purchase" type="button" value="Purchase"></td>` +
        `</tr> `;
    
    venueTable.appendChild(priceTableRow);
    venueStyleElement.appendChild(venueTable);
    
    let headSpan = createHTMLElement('span', 'head', 'Venue description:');
    venueStyleElement.appendChild(headSpan);

    let venueDescriptionParagraph = createHTMLElement('p', 'description', data.description);
    venueStyleElement.appendChild(venueDescriptionParagraph);

    let startHourParagraph = createHTMLElement('p', 'description', `Starting time: ${data.startingHour}`);
    venueStyleElement.appendChild(startHourParagraph);

    mainVenueElement.appendChild(venueStyleElement);

    document.body.appendChild(mainVenueElement);
    document.querySelector('td .purchase').addEventListener('click', purchaseVenue);
}

const getVenues = async () => {
    let date = elements.venueDate.value;
    let getVenuesUrl = `${baseUrl}rpc/kid_BJ_Ke8hZg/custom/calendar?query=${date}`
    const postHeaders = {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${encryptedCredentials}`
        }
    }
    const getHeaders = {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${encryptedCredentials}`
        }
    }

    let idResponse = await fetch(getVenuesUrl, postHeaders);
    let idArray = await responseHander(idResponse);
    idArray.forEach(async (id) => {
        let venueResponse = await fetch(`${baseUrl}appdata/kid_BJ_Ke8hZg/venues/${id}`, getHeaders);
        let venue = await responseHander(venueResponse);
        loadVenue(venue);
    })
}
elements.getDataBtn.addEventListener('click', getVenues);