import { Data } from './classData.js';

export class UI {
    getValues() {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');

        return [title, description];
    }
    addItems( item ){
        const data = new Data();
        const items = data.getItems();
        items.push( item ); 
        localStorage.setItem('items', JSON.stringify( items ));
    }
    createItem( item ){
        const table = document.querySelector('.item-list')
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${item.title}</td>
        <td>${item.description}</td>
        <td>
        <button class="btn remove">Remove</button>
        <button class="btn edit">Edit</button>
        </td>
        `;
        table.appendChild( row );
    }
    showItems(){
        const data = new Data();
        const items = data.getItems();
        const ui = new UI();
        items.map( item => {
            ui.createItem( item );
        });
    }
    removeItem(target){
        if(target.classList.contains('remove')){
            const tr = target.parentNode.parentNode;
            tr.remove();
        }
    }
    newValues(){
        const title = document.querySelector('#newTitle');
        const description = document.querySelector('#newDescription');

        return [ title, description ];
    }
    showEditForm(){
        const form  = document.querySelector('.edit-task');
        form.style.display = 'block';
    }
    hiddeEditForm(){
        const form  = document.querySelector('.edit-task');
        form.style.display = 'none';
    }
    cancelEditForm(){
        document.querySelector('.cancelEdit').addEventListener('click',() =>{
            const ui = new UI();
            ui.hiddeEditForm();
        });
    }
    alert(mensaje, color) {
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
    clearInputs() {
        const itemTitle = document.querySelector('#newTitle').value = '';
        const itemDescription = document.querySelector('#newDescription').value = '';
    }
}


