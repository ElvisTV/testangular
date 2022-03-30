import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  // styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent /*implements OnInit*/ {

  ngOnInit(): void {
  }
  get personaje() {
    return this.dbzService.personajes;
  }

  @Input('data') personajes: Personaje[] = [] ;

  constructor(private dbzService: DbzService) { }

}
