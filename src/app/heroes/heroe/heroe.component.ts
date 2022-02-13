import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export default class HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number =  45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
        
    }
    
    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        console.log('hola elvis');
        this.edad = 30;
    }

}

