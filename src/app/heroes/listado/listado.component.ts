import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: String[] = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
  heroeBorrado: String = '';

  borrarHeroe(): void {    
    const borrado: String = this.heroes.shift() || '';
    this.heroeBorrado = borrado;   
  }

} 
