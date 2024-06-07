let accounds = JSON.parse(localStorage.getItem('accoundsd')) || {

}

let counter = JSON.parse(localStorage.getItem('counter')) || 1;

let remainder;
let newElement;
let nameElement;
let p;
let accoundButton;
let addAccound;

function createAccound() {
    let nameAccound = document.getElementById('nameElement').value;
    let balanceAccound = remainder.value;
    let account = 'account' + counter;
    accounds[account] = {
        accoundName: nameAccound,
        balance: balanceAccound
    }
    counter++;
    console.log(accounds);
    addAccound.removeChild(newElement);
    addAccound.removeChild(nameElement);
    addAccound.removeChild(p);
    addAccound.removeChild(remainder);
    addAccound.removeChild(accoundButton);
}

function addNewAccound() {
    newElement = document.createElement('p');
    newElement.id = 'newAccound';
    newElement.textContent = 'Новый счет';
    nameElement = document.createElement('input');
    nameElement.type = 'text';
    nameElement.placeholder = 'Название счета';
    nameElement.id = 'nameElement';
    p = document.createElement('p');
    remainder = document.createElement('input');
    remainder.type = 'text';
    remainder.placeholder = 'Сумма на счете';
    accoundButton = document.createElement('button');
    accoundButton.textContent = 'Создать счет';
    accoundButton.onclick = createAccound;
    addAccound = document.getElementById('addAccound');
    if (addAccound.style.display == 'none') {
        addAccound.style.display = 'block';
    }
    addAccound.appendChild(newElement);
    addAccound.appendChild(nameElement);
    addAccound.appendChild(p);
    addAccound.appendChild(remainder);
    addAccound.appendChild(p);
    addAccound.appendChild(accoundButton);
}