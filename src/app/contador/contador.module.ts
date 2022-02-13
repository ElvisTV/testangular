import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador1/contador.component';


@NgModule({
    declarations: [ // son los componenetes que se tienen
        ContadorComponent,
    ],
    exports: [ // la cosas que queremos que sean visibles fuera del modulo
        ContadorComponent,
    ]
})
export class ContadorModule {
    
}


