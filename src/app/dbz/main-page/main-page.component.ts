import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  // personajes: Personaje[] = [];

  nuevo: Personaje =  {
    nombre: 'Maestro Roshi',
    poder: 1000,
  }

  // agregar() {
  //   if ( this.nuevo.nombre.trim().length === 0 ) { return;} // para que solamente se retire sin hacer algo}
  //   console.log(this.nuevo);
  //   this.personajes.push(this.nuevo)
  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0,
  //   }
  //   return true;
  // }

  // agregarNuevoPersonaje( argumento: Personaje ) {
  //   this.personajes.push(argumento);
  // }

  constructor( ) {  }

}
