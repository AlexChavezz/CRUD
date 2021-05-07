class Items {
    constructor() {
        this.itemList = document.createElement('li');
        this.parrafoOne = document.createElement('p');
        this.parrafoTwo = document.createElement('p');
        this.imageOne = new Image();
        this.imageTwo = new Image();
        this.numeroLista = [];
    }
    addItems(noteTitle, noteDescription) {
        //Creo los parrafos del la li
        //Parrafo One
        
        this.parrafoOne.className = 'name';
        const textnodeOne = document.createTextNode(noteTitle);
        this.parrafoOne.appendChild(textnodeOne);

        //Parrafo One
        this.parrafoTwo.className = 'des';
        const textNodeTwo = document.createTextNode(noteDescription);
        this.parrafoTwo.appendChild(textNodeTwo);

        //Parrafo One
        const newp3 = document.createElement('p');

        this.imageOne.src = 'pictures/icons8-basura-24.png';
        this.imageOne.id = 'delete';
        this.imageOne.style.cursor = 'pointer';


        this.imageTwo.src = 'pictures/icons8-editar-24.png';

        this.imageTwo.id = 'editButton';
        this.imageTwo.style.cursor = 'pointer';
        newp3.appendChild(this.imageOne);
        newp3.appendChild(this.imageTwo);
        newp3.style.display = 'flex';
        newp3.style.justifyContent = 'space-evenly';

        this.itemList.appendChild(this.parrafoOne);
        this.itemList.appendChild(this.parrafoTwo);
        this.itemList.appendChild(newp3);


        //Obtengo la refrencia de la ul
        const list = document.getElementById('list');

        const itemArray = list.appendChild(this.itemList);

        this.numeroLista.push(itemArray);

    }
    removeItems() {
        this.imageOne.addEventListener('click', (e) => {
            e.preventDefault();
            let ul = document.getElementById('list');
            ul.removeChild(this.itemList);
        });
    }
    editItems() {
        this.imageTwo.addEventListener('click', (e) => {
            e.preventDefault();
            const menuEdit = document.getElementById('editTasks');
            menuEdit.style.display = 'grid';
            menuEdit.style.margin = '0px auto';
        });

        const enviar = document.getElementById('ok');
        enviar.addEventListener('click', () => {
            const newTitle = document.getElementById('newTitleEdit').value;
            const newDescription = document.getElementById('newDescriptionEdit').value;
            this.parrafoOne.innerHTML = newTitle;
            this.parrafoTwo.innerHTML = newDescription;
        });


    }
    alert() {
        const error = document.querySelector('.error');
        error.style.display = 'grid';
        const msnDelete = document.getElementById('btnX');

        msnDelete.addEventListener('click', () => {
            const error = document.querySelector('.error');
            error.style.display = 'none';
        });

    }
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const noteTitle = document.getElementById('newTitle').value;
    const noteDescription = document.getElementById('newDescription').value;

    const item = new Items();

    if (noteTitle === '' || noteDescription === '') {
        item.alert();
    } else {
        item.addItems(noteTitle, noteDescription);
        item.removeItems();
    }
    
    const edit = document.getElementById('ok');
    edit.addEventListener('click', () => {

        const newTitle = document.getElementById('newTitleEdit').value;
        const newDescription = document.getElementById('newDescriptionEdit').value;

        if (newTitle === '' || newDescription === '') {
            item.alert();
        } else {
            item.editItems();
        }
    });
    const cancelEdit = document.getElementById('cancelEdit');
    cancelEdit.addEventListener('click', () => {
        const menuEdit = document.getElementById('editTasks');
        menuEdit.style.display = 'none';
    });

});
/*
const edit = document.getElementById('editButton');
edit.addEventListener(DOMContentLoaded, () => {

    const newTitle = document.getElementById('newTitleEdit').value;
    const newDescription = document.getElementById('newDescriptionEdit').value;
    const item = new Items();

    if(newTitle === '' || newDescription === ''){
        item.alert();
    }else{
        item.editItems(newTitle, newDescription);
    }
    console.log('Funciona :)');
});

*/

