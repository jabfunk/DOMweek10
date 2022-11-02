let id = 0;

document.getElementById('add').addEventListener('click' , ()=> {
    let table = document.getElementById('list');
    let row = table.insertRow(4);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-mountain-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-elevation').value;
    row.insertCell(2).innerHTML = document.getElementById('new-date').value;
});
