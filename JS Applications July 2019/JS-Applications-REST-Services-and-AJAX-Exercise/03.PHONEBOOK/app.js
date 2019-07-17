function attachEvents() {
    const loadButton = document.getElementById('btnLoad');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const phoneList = document.getElementById('phonebook');
    const createBtn = document.getElementById('btnCreate');

    const baseUrl = 'https://phonebook-nakov.firebaseio.com/'
    const getPostUrl = baseUrl + 'phonebook.json';

    const createContact = function() {
        const data = {
            person: personInput.value,
            phone: phoneInput.value,
        };

        fetch(getPostUrl,{
            method: 'post',
            body: JSON.stringify(data)
        }).then(()=>loadPhonebook());

        personInput.value = '';
        phoneInput.value = '';
    }

    const deleteContact = function(contactId) {
        const deleteUrl = baseUrl + 'phonebook/'  + contactId +'.json';
        let deleteData = ({id: contactId});
        fetch(deleteUrl,{
            method: 'delete',
        }).then(()=>loadPhonebook());
        
    }

    const loadList = function(entry) {
        let listItem = document.createElement('li');
        let deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', function() {
            deleteContact(entry[0]);
        });
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('button');
        let person = entry[1].person;
        let phone = entry[1].phone;
        listItem.textContent = `${person}: ${phone}`;
        listItem.appendChild(deleteBtn);
        phoneList.appendChild(listItem);
    }

    const loadPhonebook = function() {
        phoneList.innerHTML = '';
        fetch(getPostUrl)
            .then((response) =>response.json())
            .then((data)=>{
                Object.entries(data)
                    .forEach((entry)=>{
                        loadList(entry);
                    });
            })
            .catch(err=>phoneList.innerHTML = "Error");
    } 
    loadButton.addEventListener('click', loadPhonebook);
    createBtn.addEventListener('click', createContact);
}

attachEvents();