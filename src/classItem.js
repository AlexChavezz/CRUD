export class Item {
    constructor( title, description ) {
        this.id = new Date().getTime(),
        this.title = title, 
        this.description = description
    }
}