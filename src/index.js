import {  UI  } from './classUI.js';
import { Data } from './classData.js';
import { Item } from './classItem.js';

const ui = new UI();
const data = new Data(); 

document.addEventListener('DOMContentLoaded', ui.showItems() );

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const items  = ui.getValues();
    const [ title, description ] = items;
    const item = new Item( title.value, description.value );
    ui.createItem( item );
    ui.addItems( item );
   
});

document.querySelector('.item-list').addEventListener('click',(e) => {
    if(e.target.classList.contains('remove')){
        ui.removeItem( e.target );
        data.deleteItems( e.target.parentNode.previousElementSibling.previousElementSibling.textContent );
    }
    if( e.target.classList.contains('edit')){
        ui.showEditForm();

        const title = e.target.parentNode.previousElementSibling.previousElementSibling.textContent;
        const description = e.target.parentNode.previousElementSibling.textContent;
        data.updateItems(title, description);
    }
    ui.cancelEditForm();
});
