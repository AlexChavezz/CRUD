import { UI } from './classUI.js';
export class Data {
    getItems() {
        let items;
        if (localStorage.getItem('items') === null) {
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
    }
    updateItems( title, description ) {
        const [ newTitle, newDescription ] = new UI().newValues();
        document.querySelector('.ok').addEventListener('click', () => {
            const data = new Data();
            const items = data.getItems();
            console.log(items)
            items.map( item => {
                if(item.title === title || item.description === description){
                    item.title = newTitle.value;
                    item.description = newDescription.value;    
                }else{
                    return item;
                }
            });
            
            localStorage.setItem('items', JSON.stringify( items ));
            const ui = new UI();
            ui.hiddeEditForm();
        });
        
    }
    deleteItems( title ){
        const data = new Data();
        const items = data.getItems();
        items.map( (item, i) => {
            if(item.title === title){
                items.splice(i, 1);
            }
        });
        localStorage.setItem('items', JSON.stringify(items));
    }

}