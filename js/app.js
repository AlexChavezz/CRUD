class Item {
    constructor(title, description,) {
        this.title = title;
        this.description = description;
        this.date = {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        }
    }
}

class UI {
    static showItem() {
        const items = Datos.getItems();
        items.forEach(item => {
            UI.addItem(item);
        });
    }
    static addItem(item) {
        const list = document.getElementById('items-list');
        const row = document.createElement('tr');

        const input = document.createElement('input');
        input.type = 'submit';

        const deleteItemImg = new Image();
        deleteItemImg.src = 'pictures/icons8-basura-24.png';
        deleteItemImg.className = 'deleteItem-fromlist';
        //const editItemImg = new Image();
        //editItemImg.src = 'pictures/icons8-editar-24.png';
        //editItemImg.className = 'editItem-fromlist';

        row.innerHTML = `
        <td>${item.date.day} / ${item.date.month} / ${item.date.year}</td>
        <td>${item.title}</td>
        <td>${item.description}</td>
        <td></td>`;
        list.appendChild(row);
        row.lastChild.appendChild(deleteItemImg);
        //row.lastChild.appendChild(editItemImg);
    }
    static deleteItem(target) {
        if (target.classList.contains('deleteItem-fromlist')) {
            const tr = target.parentElement.parentElement;
            tr.remove();
        } else {
        }
    }
    static alert(mensaje, color) {
        const alert = document.createElement('div');
        alert.className = 'alert';
        alert.innerHTML = mensaje;
        alert.style.background = color;

        const container = document.querySelector('.container');
        const form = document.querySelector('#form');
        container.insertBefore(alert, form);
        if(alert.style.display = 'block'){
            setTimeout(() => alert.remove(), 2000);
            
        }else{
            alert.style.display = 'none';
        }
    }
    static clearInputs() {
        const itemTitle = document.querySelector('#newTitle').value = '';
        const itemDescription = document.querySelector('#newDescription').value = '';
    }/*
    static editItems(Title, Description) {
        const editMenu = document.getElementById('editTasks');
        editMenu.style.display = 'block';

        document.querySelector('#ok').addEventListener('click', () => {
            const newTitle = document.getElementById('newTitleEdit').value;
            const newDescription = document.getElementById('newDescriptionEdit').value;
            if (newTitle === '' || newDescription === '') {
                UI.alert('new title and Des cription required', 'rgb(168, 56, 56)');
            } else {
                Title.innerHTML = newTitle;
                Description.innerHTML = newDescription;
                editMenu.style.display = 'none';
            }
        });
        document.querySelector('#cancelEdit').addEventListener('click', () => {
            const editMenu = document.getElementById('editTasks');
            editMenu.style.display = 'none';
        });
        return 
    }*/
}

class Datos {
    static getItems() {
        let items;
        if (localStorage.getItem('items') === null) {
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
    }
    static addItems(item) {
        const items = Datos.getItems(item);
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
    }
    static removeItems(title) {
        const items = Datos.getItems();
        items.forEach((item, index) => {
            if (item.title === title) {
                items.splice(index, 1);
            }
        });
        localStorage.setItem('items', JSON.stringify(items));
    }
    /*static editItems(title) {
        const items = Datos.getItems();
        items.forEach((item, index) => {
          if(item.title === title){
            items.splice(index, 1, title,'hola');
          }            
        });
        localStorage.setItem('item',JSON.stringify(items));
    }*/
}

document.addEventListener('DOMContentLoaded', UI.showItem());
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const itemTitle = document.querySelector('#newTitle').value;
    const itemDescription = document.querySelector('#newDescription').value;


    if (itemTitle === '' || itemDescription === '') {
        UI.alert('Title and Description required', 'rgb(168, 56, 56)');
    } else {
        const item = new Item(itemTitle, itemDescription);
        Datos.addItems(item);
        UI.addItem(item);
        UI.alert('Item added to list', '#598EF9');
        UI.clearInputs();
    }
});

document.querySelector('#items-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteItem-fromlist')) {
        UI.deleteItem(e.target);
        Datos.removeItems(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.alert('Item removed from list', '#598EF9');
    }
    /*if (e.target.classList.contains('editItem-fromlist')) {
        const newTitle = e.target.parentElement.previousElementSibling.previousElementSibling;
        const newDescription = e.target.parentElement.previousElementSibling;
        UI.editItems(newTitle, newDescription);
    }*/ else {

    }
});


const date = new Date();

console.log(date.getDate());