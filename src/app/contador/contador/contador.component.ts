import { Component } from '@angular/core'

@Component({ //Decorador
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }} </h1>
        <h3>La base es: <strong> {{base}} </strong> </h3>

        <button (click)="acumular(+base)" > + {{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumular(-base)"> - {{base}} </button>
    `
})

export class ContadorComponent { //Export es para utilizar esta clase en otros lugares fuera de este archivo

    public titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    acumular( valor: number ) {
      this.numero += valor; //se hace referencia a la propiedad de la clase AppComponent
    }
    
    /*   restar() {
        this.numero -= 1;
        } */
}